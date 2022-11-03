/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
export const tags = {
    disableAII: "--aii-disable",
    welcome: "--aii-welcome"
}

export const names = {
    hunger: "hunger",
    hungerMode: "hungerMode",
    protection: "protection",
    protectionMode: "protectionMode",
    foodEffects: "foodEffects",
    foodEffectsMode: "foodEffectsMode",
    brightness: "brightness",
    brightnessMode: "brightnessMode",
    drop: "drop",
    dropMode: "dropMode",
    durability: "durability",
    durabilityMode: "durabilityMode",
    id: "id",
    idMode: "idMode",
    damage: "damage",
    damageMode: "damageMode"
}

let  defaultSettings = {
    [names.hunger]: 1,
    [names.hungerMode]: 0,
    [names.protection]: 1,
    [names.protectionMode]: 0,
    [names.foodEffects]: 1,
    [names.foodEffectsMode]: 0,
    [names.brightness]: 1,
    [names.brightnessMode]: 0,
    [names.drop]: 1,
    [names.dropMode]: 0,
    [names.durability]: 1,
    [names.durabilityMode]: 0,
    [names.id]: 1,
    [names.idMode]: 0,
    [names.damage]: 1,
    [names.damageMode]: 0
}

export function getPlayerAIISettings(player) {
    const settings_tags = player.getTags().filter(el => el.startsWith("--aii-settings-"))
    if(!settings_tags.length || settings_tags.length > 1) {
        setDefaultSettings(player, settings_tags);
        return defaultSettings;
    }
    try {
        const settings = JSON.parse(settings_tags[0].split("--aii-settings-")[1]);
        return settings
    } catch {
        setDefaultSettings(player, settings_tags);
        return defaultSettings;
    }

}

export function setDefaultSettings(player, tags = undefined) {
    if(!tags) tags =  player.getTags().filter(el => el.startsWith("--aii-settings-"));
    for(let tag of tags) player.removeTag(tag);
    player.addTag(`--aii-settings-${JSON.stringify(defaultSettings)}`);
}

export function setSettings(player, settings, tags = undefined) {
    if(!tags) tags =  player.getTags().filter(el => el.startsWith("--aii-settings-"));
    for(let tag of tags) player.removeTag(tag);
    player.addTag(`--aii-settings-${JSON.stringify(settings)}`);
}