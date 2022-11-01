/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
import * as mc from "@minecraft/server";

import { icons } from "./icons"
import { tags, names, getPlayerAIISettings} from "./names"

import { vanillaHunger, generateHungerBar } from "./vanilla_values/hunger";
import { vanillaProtection } from "./vanilla_values/protection";
import { vanillaFoodEffects, badEffects} from "./vanilla_values/food_effects";
import { vanillaItemsDurability } from "./vanilla_values/durability";
import { vanillaBlockBrightness } from "./vanilla_values/brightness";
import { vanillaDrops } from "./vanilla_values/drops";
import { vanillaItemsDamage, vanillaEnchantmentsDamage, vanillaEffectsDamage, generateEffectsDamageText} from "./vanilla_values/damage";

import "./ui";

const functionHandlers = [
    {func: genDropsInfo, name: names.drop, mode: names.dropMode},
    {func: genHungerInfo, name: names.hunger, mode: names.hungerMode},
    {func: genFoodEffectsInfo, name: names.foodEffects, mode: names.foodEffectsMode},
    {func: genProtectionInfo, name: names.protection, mode: names.protectionMode},
    {func: genDamageInfo, name: names.damage, mode: names.damageMode},
    {func: genBrightnessInfo, name: names.brightness, mode: names.brightnessMode},
    {func: genDurabilityInfo, name: names.durability, mode: names.durabilityMode},
    {func: genIDInfo, name: names.id, mode: names.idMode}
];

let playersInfo = {};

const filter = {excludeTags: [tags.disableAII]};


mc.world.events.tick.subscribe(async (event) => {
    if(event.currentTick % 2) return;
    for(let player of mc.world.getPlayers(filter)){
        if(!(player.name in playersInfo)) {
            playersInfo[player.name] = player.selectedSlot;
            continue;
        }
        if(player.selectedSlot == playersInfo[player.name]) continue;

        playersInfo[player.name] = player.selectedSlot;
        const players_inventory = player.getComponent("inventory").container;
        const item = players_inventory.getItem(player.selectedSlot);
        if(!item) continue;
        const info = generateInfo(item, player);
        player.onScreenDisplay.setActionBar(info);
    }
});


function genDropsInfo(item, mode = 0){
    if(!(item.typeId in vanillaDrops)) return 0;
    let info = ""
    switch(mode) {
        case 1: // only mobs
            return [vanillaDrops[item.typeId].map((group) => {
                if(group.nosimple || ("data" in group && item.data != group.data)) return "";
                return group.mobs.map(el => icons.mobs[el]).join("");
            }).join("")];

        default: // full mode
            for(let group of vanillaDrops[item.typeId]) {
                if("data" in group && item.data != group.data) continue;
                let group_text = group.mobs.map(el => icons.mobs[el]).join(""); // mob icons
        
                if(group.condition) {
                    if(group.condition.type == "killed_by") {
                        let condition_text = group.condition.targets.map(el => icons.mobs[el]).join("");
                        group_text = `${condition_text}${icons.other.sword}${group_text}${icons.other.next}`;
                    }
                    
                    // if player need to sleep
                    else if(group.condition.type == "player_sleep") {
                        group_text += `${icons.other.next}${icons.mobs.player}${icons.other.sleep}${icons.other.next}`
                    }
        
                    // if entity need to be killed by fire
                    else if(group.condition.type == "killed_by_fire") {
                        group_text = `${icons.other.sword}${icons.other.fire}${group_text}${icons.other.next}`;
                    }
        
                    // if need some time to be dropped
                    else if(group.condition.type == "time") {
                        group_text += `${icons.other.next}${icons.other.time}${group.condition.value}${icons.other.next}`
                    }
        
                    // if need to use some item on entity
                    else if(group.condition.type == "item_use") {
                        group_text += `${icons.other.next}${group.condition.text}${icons.other.next}`
                    }
        
                    // if entity need to ne killed by lightning
                    else if(group.condition.type == "killed_by_lightning") {
                        group_text += `${icons.other.next}${icons.other.lightning}${icons.other.next}`
                    }
        
                    // if entity needs to grow up
                    else if(group.condition.type == "grow_up") {
                        group_text += `${icons.other.next}${icons.other.up}${icons.other.next}`
                    }
        
                    // other
                    else if(group.condition.type == "other") {
                        group_text += `${group.condition.text}${icons.other.next}`
                    }
                }
                // adding amount and chances info
                const amount_text = group.max ? `${group.min}-${group.max}` : `${group.min}`;
                let chance_text = group.chance !== undefined  ? `, ${group.chance}%` : "";
                chance_text += group.enchant_chance_increase ? ` +${group.enchant_chance_increase}%/${icons.other.enchanted_book}` : "";
                const enchant_increase_text = group.enchant_increase ? ` +${group.enchant_increase}/${icons.other.enchanted_book}` : "";
                group_text += `${amount_text}${enchant_increase_text}${chance_text}`;
        
                // closing group and adding to lore
                info += `(${group_text}) `;
            }
    }
    return [info.trim()]
}

function genHungerInfo(item, mode = 0){
    let nutrition;
    let saturation;

    if(item.typeId in vanillaHunger) {
        nutrition = vanillaHunger[item.typeId][0];
        saturation = vanillaHunger[item.typeId][1];
    }
    else {
        if(!item.hasComponent("minecraft:food")) return 0;
        const component = item.getComponent("minecraft:food");
        nutrition = component.nutrition ? component.nutrition : 0;
        const satMod = component.saturationModifier;
        saturation = satMod ? (nutrition * satMod).toFixed(2) : 0;
    }
    switch(mode){
        case 1: // only value
            return [`${icons.hunger_icons.hunger22} ${nutrition}/${saturation}`];
        case 2: // only bar
            return [generateHungerBar(nutrition, saturation)];
        default: // bar and number
            return [generateHungerBar(nutrition, saturation) + ` ${nutrition}/${saturation}`];
    }
}

function genFoodEffectsInfo(item, mode = 0){
    if(!(item.typeId in vanillaFoodEffects)) return 0;
    const data = vanillaFoodEffects[item.typeId];
    const effects = Object.keys(data);
    switch(mode){
        case 1: // only effects 
            return [effects.map(el => icons.effects[el]).join("")];
        default: // effects and values
            return [effects.map(el => {
                const chance_text = data[el].chance == undefined ? "" : `, ${data[el].chance}%`;
                const color = badEffects.includes(el) ? "§c" : "§a"
                return `${color}(${icons.effects[el]}${data[el].level}, ${data[el].time}s${chance_text})§r `;
            }).join("").trim()];
    }
}

function genProtectionInfo(item, mode = 0){
    if(!(item.typeId in vanillaProtection)) return 0;
    const protection = vanillaProtection[item.typeId];
    switch(mode){
        case 1: // only value
            return [`${icons.armor} ${protection}`];
        case 2: // only bar
            return [`${icons.armor.repeat(Math.floor(protection / 2))}${icons.hArmor.repeat(Math.ceil(protection % 2))}`];
        default: // bar and numbers
            return [`${icons.armor.repeat(Math.floor(protection / 2))}${icons.hArmor.repeat(Math.ceil(protection % 2))} ${protection}`];
    }
}

function genDamageInfo(item, mode = 0, player = undefined) {
    if(!(item.typeId in vanillaItemsDamage)) return 0;
    let info = "";
    let dmg = vanillaItemsDamage[item.typeId];

    let enchants = item.getComponent("minecraft:enchantments");
    enchants = enchants ? enchants.enchantments : [];
    let ench_dmg = 0;
    let ench_dmg_text = "";

    let effect_dmgs = [];
    let effect_dmg = 0;
    let effect_text = "";

    for(let enchantment of enchants) { // calculating enchantments damage
        if(!(enchantment.type.id in vanillaEnchantmentsDamage)) continue;
        ench_dmg = vanillaEnchantmentsDamage[enchantment.type.id] * enchantment.level;
        break;
    } 
    for(let effect of Object.keys(vanillaEffectsDamage)){  // calculating effects damage 
        const data = player.getEffect(mc.MinecraftEffectTypes[effect]);
        if(!data) continue;
        
        let curr_raw = vanillaEffectsDamage[effect](dmg+effect_dmg, data.amplifier+1);
        if(curr_raw + dmg + effect_dmg < 0) {
            curr_raw = -(dmg+effect_dmg);
        }
        effect_dmgs.push(curr_raw.toFixed(2));
        effect_dmg += Math.floor(curr_raw);
    }
    // total damages
    const totalDamage = (dmg + ench_dmg+effect_dmg).toFixed(2);
    const totalCriticalDamage = ((dmg + ench_dmg+effect_dmg) * 1.5).toFixed(2);
    
    switch(mode) {
        case 1: // only total value
            return [`${icons.hp} ${totalDamage}/§6${totalCriticalDamage}§r`];

        case 2: // full values
            ench_dmg_text = ench_dmg ? ` ${icons.ehp}${ench_dmg}`: "";
            effect_text = generateEffectsDamageText(effect_dmgs, false, true);
            return [`${icons.hp}${dmg}${ench_dmg_text}${effect_text} ${icons.other.next} ${totalDamage}/§6${totalCriticalDamage}§r`];

        case 3: // only bars
            info = `${icons.hp.repeat(Math.floor(dmg / 2))}${icons.hHp.repeat(Math.ceil(dmg % 2))}`; // base dmg
            ench_dmg_text = ench_dmg ? ` ${icons.ehp.repeat(Math.floor(ench_dmg / 2))}${icons.hEhp.repeat(Math.ceil(ench_dmg % 2))}` : "";
            effect_text = generateEffectsDamageText(effect_dmgs, true, false);
            return [`${info}${ench_dmg_text}${effect_text}`];

        case 4: // bars and total value
            info = `${icons.hp.repeat(Math.floor(dmg / 2))}${icons.hHp.repeat(Math.ceil(dmg % 2))}`; // base dmg
            ench_dmg_text = ench_dmg ? ` ${icons.ehp.repeat(Math.floor(ench_dmg / 2))}${icons.hEhp.repeat(Math.ceil(ench_dmg % 2))}` : "";
            effect_text = generateEffectsDamageText(effect_dmgs, true, false);
            return [`${info}${ench_dmg_text}${effect_text} ${icons.other.next} ${totalDamage}/§6${totalCriticalDamage}§r`];

        default:
            info = `${icons.hp.repeat(Math.floor(dmg / 2))}${icons.hHp.repeat(Math.ceil(dmg % 2))}${dmg}`; // base dmg
            ench_dmg_text = ench_dmg ? ` ${icons.ehp.repeat(Math.floor(ench_dmg / 2))}${icons.hEhp.repeat(Math.ceil(ench_dmg % 2))}${ench_dmg}` : "";
            effect_text = generateEffectsDamageText(effect_dmgs, true, true);
            return [`${info}${ench_dmg_text}${effect_text} ${icons.other.next} ${totalDamage}/§6${totalCriticalDamage}§r`];
    }
}

function genBrightnessInfo(item, mode = 0){
    if(!(item.typeId in vanillaBlockBrightness)) return 0;
    let data = vanillaBlockBrightness[item.typeId]
    let info = []
    for(let line of data){
        let current_line = line.text ? line.text : "";
        const icon_index = line.value > 15 ? 14 : line.value-1;
        switch(mode) {
            case 1: // only values
                current_line = `${icons.brightness[icon_index]} ${current_line}${line.value}`;
                break;
            case 2: // only bar
                for(let i = 0; i < line.value && i < 15; i++){
                    current_line += icons.brightness[i];
                }
                break;
            default: //bar and values
                for(let i = 0; i < line.value && i < 15; i++){
                    current_line += icons.brightness[i];
                }
                current_line += ` ${line.value}`;
        }
        info.push(current_line);
    }
    return info;
}

function genDurabilityInfo(item, mode =0){
    let durability;
    let currentDur = 0;
    let notVanilla = false;
    let info =  `${icons.durabilityIcon} `;

    if (!(item.typeId in vanillaItemsDurability)) {
        const component = item.getComponent("minecraft:durability");
        if(!component) return 0;
        notVanilla = true;
        durability = component.maxDurability;
        currentDur = durability - component.damage;
    } else {
        durability = vanillaItemsDurability[item.typeId];
    }

    switch(mode){
        case 1: // durability
            return [info += notVanilla ? `${currentDur}/${durability}` : `${durability}`];
        case 2: // uses
            return [info += notVanilla ? `${currentDur+1}/${durability+1}` : `${durability+1}`];
        default: //all
            return [info += notVanilla ? `${currentDur}/${durability} (${currentDur+1}/${durability+1})` : `${durability} (${durability+1})`];
    }
}

function genIDInfo(item, mode = 0){
    let id = "";
    switch(mode){
        case 1: // only id
            id = item.typeId.split(":")[1];
            break;
        default:
            id = item.typeId;
    }
    if(item.data != 0) return [`${id} (${item.data})`];
    return [id];
}

function generateInfo(item, player){
    try {
        let info = "";
        const player_settings = getPlayerAIISettings(player);
        for(let handler of functionHandlers) {
            if (!player_settings[handler.name]) continue;
            let result = handler.func(item, player_settings[handler.mode], player);
            if(!result) continue;
            let line = result.map(element => element ? `§7${element}\n` : "").join("");
            if(line) info += line;
        }
        return info.trim();
    } catch(e) {
        console.warn(e);
        console.warn(e.stack);
    }
}