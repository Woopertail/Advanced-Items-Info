/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
export const tags = {
    welcome: "--aii-welcome",

    disableAII: "--aii-disable",
    disableHunger: "--aii-disable-hunger-info",
    disableProtection: "--aii-disable-protection-info",
    disableFoodEffects: "--aii-disable-foodeffects-info",
    disableBrightness: "--aii-disable-brightness-info",
    disableDrops: "--aii-disable-drops-info",
    disableDurability: "--aii-disable-durability-info",
    disableID: "--aii-disable-id-info",
    disableDamage: "--aii-disable-damage-info",

    nutritionMode: "--aii-nutrition-mode-",
    dropsMode: "--aii-drops-mode-",
    protectionMode: "--aii-protection-mode-",
    foodEffectsMode: "--aii-food-effects-mode-",
    hungerMode: "--aii-hunger-mode-",
    idMode: "--aii-id-mode-",
    brightnessMode: "--aii-brightness-mode-",
    durabilityMode: "--aii-durability-mode-",
    damageMode: "--aii-damage-mode-"
}

export function getCurrentMode(tags, infoTypeTag) {
    tags = tags.filter(el => el.startsWith(infoTypeTag));
    if(!tags.length) return "0";
    return tags[0].split(infoTypeTag)[1];
}

export function changeCurrentMode(player, infoTypeTag, newMode) {
    const tags = player.getTags().filter(el => el.startsWith(infoTypeTag));
    for(let tag of tags) player.removeTag(tag);
    player.addTag(`${infoTypeTag}${newMode}`);
}