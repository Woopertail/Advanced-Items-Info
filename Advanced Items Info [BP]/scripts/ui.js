/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
import * as ui from "@minecraft/server-ui";
import * as mc from "@minecraft/server";
import { tags, names, getPlayerAIISettings, setSettings } from "./names"
import * as texts from "./texts"

const settings = [
    {   // Drops info
        name: "settingsui.drop.toggle",
        paramName: names.drop,
        faq: generateFAQUI("settingsui.drop.toggle", texts.dropFAQ),
        type: "toggle"
    },
    {
        name: "settingsui.drop.mode",
        values: ["settingsui.drop.mode.value0", "settingsui.drop.mode.value1"],
        paramName: names.dropMode,
        type: "dropdown"
    },
    {   // Hunger info
        name: "settingsui.hunger.toggle",
        paramName: names.hunger,
        faq: generateFAQUI("settingsui.hunger.toggle", texts.hungerFAQ),
        type: "toggle"
    },
    { 
        name: "settingsui.hunger.mode",
        values: ["settingsui.hunger.mode.value0", "settingsui.hunger.mode.value1", "settingsui.hunger.mode.value2"],
        paramName: names.hungerMode,
        type: "dropdown"
    },
    {   // food effects info
        name: "settingsui.foodeffects.toggle",
        paramName: names.foodEffects,
        faq: generateFAQUI("settingsui.foodeffects.toggle", texts.foodEffectsFAQ),
        type: "toggle"
    },
    {
        name: "settingsui.foodeffects.mode",
        values: ["settingsui.foodeffects.mode.value0", "settingsui.foodeffects.mode.value1"],
        paramName: names.foodEffectsMode,
        type: "dropdown"
    },
    {   // protection info
        name: "settingsui.protection.toggle",
        paramName: names.protection,
        faq: generateFAQUI("settingsui.protection.toggle", texts.protectionFAQ),
        type: "toggle"
    },
    {
        name: "settingsui.protection.mode",
        values: ["settingsui.protection.mode.value0", "settingsui.protection.mode.value1", "settingsui.protection.mode.value2"],
        paramName: names.protectionMode,
        type: "dropdown"
    },
    {
        name: "settingsui.damage.toggle",
        paramName: names.damage,
        faq: generateFAQUI("settingsui.damage.toggle", texts.damageFAQ),
        type: "toggle"
    },
    {
        name: "settingsui.damage.mode",
        values: ["settingsui.damage.mode.value0", "settingsui.damage.mode.value1", "settingsui.damage.mode.value2", "settingsui.damage.mode.value3", "settingsui.damage.mode.value4"],
        paramName: names.damageMode,
        type: "dropdown"
    },
    {   // brightness info
        name: "settingsui.brightness.toggle",
        paramName: names.brightness,
        faq: generateFAQUI("settingsui.brightness.toggle", texts.brightnessFAQ),
        type: "toggle"
    },
    {
        name: "settingsui.brightness.mode",
        values: ["settingsui.brightness.mode.value0", "settingsui.brightness.mode.value1", "settingsui.brightness.mode.value2"],
        paramName: names.brightnessMode,
        type: "dropdown"
    },
    {   // durability info
        name: "settingsui.durability.toggle",
        paramName: names.durability,
        faq: generateFAQUI("settingsui.durability.toggle", texts.durabilityFAQ),
        type: "toggle"
    },
    {
        name: "settingsui.durability.mode",
        values: ["settingsui.durability.mode.value0", "settingsui.durability.mode.value1", "settingsui.durability.mode.value2"],
        paramName: names.durabilityMode,
        type: "dropdown"
    },
    {   // id info
        name: "settingsui.id.toggle",
        paramName: names.id,
        faq: generateFAQUI("settingsui.id.toggle", texts.IDFAQ),
        type: "toggle"
    },
    {
        name: "settingsui.id.mode",
        values: ["settingsui.id.mode.value0", "settingsui.id.mode.value1"],
        paramName: names.idMode,
        type: "dropdown"
    }
]

const faq_sections = settings.filter(el => el.faq);

const welcomeUI = generateWelcomeUI();
const mainUI = generateMainUI();
const helpUI = generateHelpUI();
const creditsUi = generateCreditsUI();


function generateWelcomeUI(){
    const welcomeUI = new ui.ActionFormData()
    .title("Advanced Items Info")
    .body(`%welcomeui.line1

%welcomeui.line2
%welcomeui.discord

%welcomeui.line3
%welcomeui.line4
%welcomeui.line5
%welcomeui.line6

%welcomeui.line7

%welcomeui.line8`)
    .button(`mainui.button.settings`)
    .button(`commonui.close`);
    
    return welcomeUI;
}

function generateMainUI() {
    const mainUI = new ui.ActionFormData()
    .title("Advanced Items Info")
    .body("commonui.warning")
    .button("mainui.button.help", "textures/ui/help")
    .button("mainui.button.settings", "textures/ui/settings")
    .button("mainui.button.credits", "textures/ui/credits");

    return mainUI;
}

function generateHelpUI() {
    const helpUI = new ui.ActionFormData().title("AII F.A.Q.");
    for(let section of faq_sections) helpUI.button(section.name);
    helpUI.button("commonui.back");
    return helpUI;
}

function generateFAQUI(title, text) {
    return new ui.ActionFormData().title(title).body(text).button("commonui.back");
}

function generateSettingsUI(playerSettings, aiiDisabled = false) {
    let settingsUI = new ui.ModalFormData()
    .title("settingsui.title");
    for(let param of settings) {
        if(param.type == "toggle"){
            settingsUI.toggle(param.name, !(!playerSettings[param.paramName] || aiiDisabled));
        }
        else if(param.type == "dropdown") {
            let value = playerSettings[param.paramName]
            if(!(value <= param.values.length-1)) value = 0;
            settingsUI.dropdown(param.name, param.values, value);
        }
    }
    return settingsUI
}

function generateCreditsUI() {
    let creditsUi = new ui.ActionFormData()
    .title("%mainui.button.credits")
    .body(`§l§6Advanced Items Info§r
§3by Woopertail§r

 §9discord.gg/hYtZMEfZSE§r

 §5github.com/woopertail§r

 §b@woopertail§r

 §amcpedl.com/user/woopertail§r

 §1woopertail.ru§r
`)
    .button("%commonui.back")
    
    return creditsUi;
}

async function forceOpenUI(player, ui){
    while(1){
        const response = await ui.show(player);
        if(response.cancelationReason !== "userBusy") {
            return response;
        }
    }
}

async function processMainUI(player){
    try {
        let response = await forceOpenUI(player, mainUI);
        switch(response.selection){
            case 0:
                processHelpUI(player);
                return;
            case 1:
                await processSettingsUI(player);
                processMainUI(player);
                return;
            case 2:
                processCreditsUI(player);
                return;
        }
    } catch(e) {
        console.warn(e)
    }
}

async function processHelpUI(player) {
    const response = await forceOpenUI(player, helpUI);
    if(response.canceled) return 1;
    if(!faq_sections[response.selection]) {
        processMainUI(player);
        return 1;
    }
    processFAQUI(player, faq_sections[response.selection].faq);
}

async function processFAQUI(player, ui) {
    const response = await forceOpenUI(player, ui);
    if(response.canceled) return 1;
    processHelpUI(player);
    return 1;
}

async function processCreditsUI(player){
    player.playSound("aii.tada");
    let response = await forceOpenUI(player, creditsUi);
    switch(response.selection){
        case 0:
            processMainUI(player);
            return;
    }
}

async function processSettingsUI(player){
    const response = await forceOpenUI(player, generateSettingsUI(getPlayerAIISettings(player), player.hasTag(tags.disableAII)));
    if(response.canceled) return 1;
    if(!response.formValues.includes(true)) {
        player.addTag(tags.disableAII);
        return 1;
    } else {
        player.removeTag(tags.disableAII);
        let counter = 0;
        let newSettings = {}
        for(let param of settings) {
            newSettings[param.paramName] = response.formValues[counter]
            counter += 1;
        }
        setSettings(player, newSettings);
        return 1;
    }
}

async function processWelcomeUI(player){
    let response = await forceOpenUI(player, welcomeUI);
    if(response.canceled) {
        player.addTag(tags.welcome);
        return;
    }
    switch(response.selection){
        case 0:
            player.addTag(tags.welcome);
            processMainUI(player);
            return;
        case 1:
            player.addTag(tags.welcome);
            return;
    }
}

mc.world.events.beforeChat.subscribe((event) => {
    if(!["--aii", "--aii-welcome", "--aii-remove-settings", "--aii-test"].includes(event.message)) return;
    event.cancel = true;
    switch(event.message){
        case "--aii":
            processMainUI(event.sender);
            return;
        
        case "--aii-welcome":
            processWelcomeUI(event.sender);
            return;
        
        case "--aii-remove-settings":
            const tags =  event.sender.getTags().filter(el => el.startsWith("--aii-settings-"));
            for(let tag of tags) event.sender.removeTag(tag);
            return;
        case "--aii-test":
            for(let counter = 1; counter <= 31; counter ++) {
                mc.world.say(`%faq.drop.line${counter}`);
            }
    }
});

mc.world.events.playerJoin.subscribe((event) => {
    if(event.player.hasTag(tags.welcome)) return;
    processWelcomeUI(event.player);
});