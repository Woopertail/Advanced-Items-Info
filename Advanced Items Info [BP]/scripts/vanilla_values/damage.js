/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
import { icons } from "../icons"


export const vanillaItemsDamage = {
    "minecraft:wooden_sword": 5,
    "minecraft:stone_sword": 6,
    "minecraft:iron_sword": 7,
    "minecraft:golden_sword": 5,
    "minecraft:diamond_sword": 8,
    "minecraft:netherite_sword": 9,
    
    "minecraft:wooden_axe": 4,
    "minecraft:stone_axe": 5,
    "minecraft:iron_axe": 6,
    "minecraft:golden_axe": 4,
    "minecraft:diamond_axe": 7,
    "minecraft:netherite_axe": 8,
    
    "minecraft:trident": 9,

    "aii:test_item": 9
}

export const vanillaEnchantmentsDamage = {
    "sharpness": 1.25,
    "smite": 2.5,
    "bane_of_arthropods": 2.5,
    "impaling": 2.5
}

export const vanillaEffectsDamage = {
    "strength": calculateStrength,
    "weakness": calculateWeakness
}


function calculateStrength(baseDamage, level) {
    const value = baseDamage * Math.pow(1.3, level) + ((Math.pow(1.3, level) - 1) / 0.3);
    return value - baseDamage;
}

function calculateWeakness(baseDamage, level) {
    const value = baseDamage * Math.pow(0.8, level) + ((Math.pow(0.8, level) - 1) / 0.4);
    return value - baseDamage;
}

export function generateEffectsDamageText(damages, bars = true, values = true) {
    if(!damages.length) return "";
    let text = "";
    for(let value of damages){;
        const curr_icons = value >= 0 ? [icons.php, icons.hPhp] : [icons.dhp, icons.hDhp];
        let curr_text = curr_icons[0];
        if(bars) {
            curr_text = curr_icons[0].repeat(Math.abs(Math.floor(value) / 2));
            if(value % 2) curr_text += curr_icons[1];
        }       
        if(values) {
            curr_text += value >= 0 ? `${value}` : `§c${value}§r`
        }
        text += `${curr_text} `
    }
    return ` ${text.trim()}`;
}

export function generateDamageText(dmg, icon, bars = true, values = true) {
    if(!dmg) return ""
    let text = icon[0];
    if(bars){
        text = icon[0].repeat(Math.floor(dmg / 2));
        if(dmg % 2) text+= icon[0];
    }
    if(values){
        text += `${dmg}`;
    }
    return text;
}