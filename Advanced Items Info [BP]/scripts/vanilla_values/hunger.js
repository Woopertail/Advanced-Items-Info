/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
import { icons } from "../icons";

export const vanillaHunger = {
    "minecraft:apple": [4, 2.4],
    "minecraft:baked_potato": [5, 6],
    "minecraft:beetroot": [1, 1.2],
    "minecraft:beetroot_soup": [6, 7.2],
    "minecraft:bread": [5, 6],
    "minecraft:carrot": [3, 3.6],
    "minecraft:chorus_fruit": [4, 2.4],
    "minecraft:cooked_chicken": [6, 7.2],
    "minecraft:cooked_cod": [5, 6],
    "minecraft:cooked_mutton": [6, 9.6],
    "minecraft:cooked_porkchop": [8, 12.8],
    "minecraft:cooked_rabbit": [5, 6],
    "minecraft:cooked_salmon": [6, 9.6],
    "minecraft:cookie": [2, 0.4],
    "minecraft:dried_kelp": [1, 0.2],
    "minecraft:enchanted_golden_apple": [4, 9.6],
    "minecraft:golden_apple": [4, 9.6],
    "minecraft:glow_berries": [2, 0.4],
    "minecraft:golden_carrot": [6, 14.4],
    "minecraft:honey_bottle": [6, 1.2],
    "minecraft:melon_slice": [2, 1.2],
    "minecraft:mushroom_stew": [6, 7.2],
    "minecraft:poisonous_potato": [2, 1.2],
    "minecraft:potato": [1, 0.6],
    "minecraft:pufferfish": [1, 0.2],
    "minecraft:pumpkin_pie": [8, 4.8],
    "minecraft:rabbit_stew": [10, 12],
    "minecraft:beef": [3, 1.8],
    "minecraft:chicken": [2, 1.2],
    "minecraft:cod": [2, 0.4],
    "minecraft:mutton": [2, 1.2],
    "minecraft:porkchop": [3, 1.8],
    "minecraft:salmon": [2, 0.4],
    "minecraft:rabbit": [3, 1.8],
    "minecraft:rotten_flesh": [4, 0.8],
    "minecraft:spider_eye": [2, 3.2],
    "minecraft:cooked_beef": [8, 12.8],
    "minecraft:suspicious_stew": [8, 7.2],
    "minecraft:sweet_berries": [2, 1.2],
    "minecraft:tropical_fish": [1, 0.2]
};

function roundToHalf(num){
    if(num%1 < 0.75 && num%1 > 0) {
        return Math.floor(num) + 0.5;
    }
    return Math.round(num)
}

export function generateHungerBar(nutrition, saturation){
    saturation = roundToHalf(saturation);
    let values = [];
    for(let counter = 0; counter < 20; counter ++){
        if(!nutrition && !saturation) break;
        values.push([nutrition - 2 >= 0 ? 2 : nutrition, 
                    saturation - 2 >= 0 ? 2 : saturation]);
        nutrition -= values[counter][0];
        saturation -= values[counter][1];
    }
    return values.map(group => {
        return icons.hunger_icons[`hunger${group.map(el => String(el).replace(".", "")).join("")}`];
    }).join("");
}