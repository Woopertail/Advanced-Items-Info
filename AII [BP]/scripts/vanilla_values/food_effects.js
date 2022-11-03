/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
export const badEffects = [
    "slowness",
    "mining_fatigue",
    "instant_damage",
    "nausea",
    "blindness",
    "hunger",
    "weakness",
    "poison",
    "wither",
    "unluck",
    "fatal_poison",
    "darkness",
    "levitation"
];

export const vanillaFoodEffects = {
    "minecraft:enchanted_golden_apple": {
        "regeneration": {
            level: "IV",
            time: 30
        },
        "absorption": {
            level: "IV",
            time: 120
        },
        "resistance": {
            level: "I",
            time: 300
        },
        "fire_resistance": {
            level: "I",
            time: 300
        }
    },

    "minecraft:golden_apple": {
        "regeneration": {
            level: "II",
            time: 5
        },
        "absorption": {
            level: "I",
            time: 120
        }
    },

    "minecraft:chicken": {
        "hunger": {
            level: "I",
            time: 30,
            chance: 30
        }
    },

    "minecraft:poisonous_potato": {
        "poison": {
            level: "I",
            time: 5,
            chance: 60
        }
    },

    "minecraft:pufferfish": {
        "poison": {
            level: "II",
            time: 60
        },
        "hunger": {
            level: "III",
            time: 15
        },
        "nausea": {
            level: "I",
            time: 15
        }
    },

    "minecraft:rotten_flesh": {
        "hunger": {
            level: "I",
            time: 30,
            chance: 80
        }
    },

    "minecraft:spider_eye": {
        "poison": {
            level: "I",
            time: 5
        }
    },

    "aii:test_item": {
        "poison": {
            level: "I",
            time: 10
        },
        "hunger": {
            level: "IV",
            time: 300,
            chance: 80
        },
        "nausea": {
            level: "X",
            time: 40,
            chance: 10
        }
    }

};
