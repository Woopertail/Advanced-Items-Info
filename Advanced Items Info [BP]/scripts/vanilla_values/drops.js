/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
import { icons } from "../icons"

export const vanillaDrops = {
    "minecraft:string": [
        {mobs: ["spider", "cave_spider"], min: 0, max: 2, enchant_increase: 1},
        {mobs: ["strider"], min: 2, max: 5, enchant_increase: 1},
        {mobs: ["cat"], min: 0, max: 2},
        {mobs: ["piglin"], min: 3, max: 9, chance: 4.36, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],

    "minecraft:feather": [
        {mobs: ["chicken"], min: 0, max: 2, enchant_increase: 1},
        {mobs: ["parrot"], min: 1, max: 2, enchant_increase: 1},
        {mobs: ["cat"], min: 1, chance: 11.2, nosimple: true, condition: {
            type: "player_sleep" }
        }
    ],

    "minecraft:chicken": [
        {mobs: ["chicken"], min: 1, enchant_increase: 1},
        {mobs: ["cat"], min: 1, chance: 11.2, nosimple: true, condition: {
            type: "player_sleep"}
        }
    ],
    "minecraft:cooked_chicken": [
        {mobs: ["chicken"], min: 1, enchant_increase: 1, condition: {
            type: "killed_by_fire"}
        }
    ],

    "minecraft:egg": [
        {mobs: ["chicken"], min: 1, condition: {
            type: "time",
            value: "5-10m"}
        }
    ],

    "minecraft:cod": [
        {mobs: ["cod"], min: 1},
        {mobs: ["dolphin"], min: 0, max: 1, enchant_increase: 1},
        {mobs: ["polar_bear"], min: 0, max: 2, chance: 75, enchant_increase: 1},
        {mobs: ["guardian"], min: 1, chance: 40},
        {mobs: ["elder_guardian"], min: 1, chance: 50}
    ],

    "minecraft:bone": [
        {mobs: ["skeleton", "stray", "wither_skeleton", "skeleton_horse"], min: 0, max: 2, enchant_increase: 1},
        {mobs: ["salmon", "cod", "pufferfish", "tropical_fish"], min: 1, max: 2, chance: 25, enchant_chance_increase: 1, enchant_increase: 2}
    ],

    "minecraft:leather": [
        {mobs: ["cow", "mushroom_cow", "horse", "donkey", "mule", "lama"], min: 0, max: 2, enchant_increase: 1},
        {mobs: ["hoglin"], min: 0, max: 1, enchant_increase: 1},
        {mobs: ["piglin"], min: 2, max: 4, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],

    "minecraft:beef": [
        {mobs: ["cow", "mushroom_cow"], min: 1, max: 3, enchant_increase: 1}
    ],
    "minecraft:cooked_beef": [
        {mobs: ["cow", "mushroom_cow"], min: 1, max: 3, enchant_increase: 1, condition: {
            type: "killed_by_fire" }
        }
    ],
    "minecraft:milk_bucket": [
        {mobs: ["cow", "mushroom_cow", "goat"], min: 1, condition: {
            type: "item_use",
            text: icons.other.bucket}
        }
    ],

    "minecraft:mushroom_stew": [
        {mobs: ["mushroom_cow"], min: 1, condition: {
            type: "item_use",
            text: icons.other.bowl}
        }
    ],
    "minecraft:red_mushroom": [
        {mobs: ["mushroom_cow"], min: 5, condition: {
            type: "item_use",
            text: icons.other.shears}
        }
    ],
    "minecraft:brown_mushroom": [
        {mobs: ["mushroom_cow"], min: 5, condition: {
            type: "item_use",
            text: icons.other.shears}
        }
    ],

    "minecraft:porkchop": [
        {mobs: ["pig"], min: 1, max: 3, enchant_increase: 1},
        {mobs: ["hoglin"], min: 2, max: 4, enchant_increase: 1}
    ],
    "minecraft:cooked_porkchop": [
        {mobs: ["pig"], min: 1, max: 3, enchant_increase: 1, condition:{
            type: "killed_by_fire"}
        },
        {mobs: ["hoglin"], min: 2, max: 4, enchant_increase: 1, condition:{
            type: "killed_by_fire"}
        },
    ],

    "minecraft:pufferfish": [
        {mobs: ["pufferfish"], min: 1},
        {mobs: ["guardian", "elder_guardian"], min: 1, chance: 0.325, enchant_chance_increase: 0.025}
    ],

    "minecraft:rabbit": [
        {mobs: ["rabbit"], min: 1, enchant_increase: 1}
    ],
    "minecraft:cooked_rabbit": [
        {mobs: ["rabbit"], min: 1, enchant_increase: 1, condition: {
            type: "killed_by_fire"}
        }
    ],
    "minecraft:rabbit_hide": [
        {mobs: ["rabbit"], min: 0, max: 1, enchant_increase: 1},
        {mobs: ["cat"], min: 1, chance: 11.2, nosimple: true, condition: {
            type: "player_sleep"}
        }
    ],
    "minecraft:rabbit_foot": [
        {mobs: ["rabbit"], min: 1, chance: 10, enchant_chance_increase: 3, condition: {
            type: "killed_by",
            targets: ["player"]}
        }
    ],

    "minecraft:wool": [
        {mobs: ["sheep"], min: 1},
        {mobs: ["sheep"], min: 1, max: 3, condition: {
            type: "item_use",
            text: icons.other.shears}
        }
    ],
    "minecraft:mutton": [
        {mobs: ["sheep"], min: 1, max: 2, enchant_increase: 1}
    ],
    "minecraft:cooked_mutton": [
        {mobs: ["sheep"], min: 1, max: 2, enchant_increase: 1, condition: {
            type: "killed_by_fire"}
        }
    ],

    "minecraft:snowball": [
        {mobs: ["snowman"], min: 0, max: 15}
    ],
    "minecraft:carved_pumpkin": [
        {mobs: ["snowman"], min: 1, condition: {
            type: "item_use",
            text: icons.other.shears}
        }
    ],

    "minecraft:ink_sac": [
        {mobs: ["squid"], min: 1, max: 3, enchant_increase: 1}
    ],
    "minecraft:glow_ink_sac": [
        {mobs: ["glowing_squid"], min: 1, max: 3, enchant_increase: 1}
    ],

    "minecraft:tropical_fish": [
        {mobs: ["tropical_fish"], min: 1},
        {mobs: ["guardian", "elder_guardian"], min: 1, chance: 0.05, enchant_chance_increase: 0.02}
    ],

    "minecraft:seagrass": [
        {mobs: ["turtle"], min: 0, max: 2, enchant_increase: 1}
    ],
    "minecraft:bowl": [
        {mobs: ["turtle"], min: 1, condition: {
            type: "killed_by_lightning"}
        }
    ],

    "minecraft:scute": [
        {mobs: ["turtle"], min: 1, condition: {
            type: "grow_up"}
        }
    ],

    "minecraft:rotten_flesh": [
        {mobs: ["zombie", "zombie_villager", "husk", "drowned"], min: 0, max: 2, enchant_increase: 1},
        {mobs: ["zoglin"], min: 1, max: 3, enchant_increase: 1},
        {mobs: ["zombie_pigman"], min: 0, max: 1, enchant_increase: 1},
        {mobs: ["cat"], min: 1, chance: 11.2, nosimple: true, condition: {
            type: "player_sleep"}
        }
    ],

    "minecraft:spider_eye": [
        {mobs: ["spider", "cave_spider"], min: 1, chance: 33.3, enchant_increase: 1, condition: {
            type: "killed_by",
            targets: ["player"]}
        },
        {mobs: ["witch"], min: 0, max: 6, enchant_increase: 3}
    ],

    "minecraft:ender_pearl": [
        {mobs: ["enderman"], min: 1, chance: 50, enchant_increase: 1},
        {mobs: ["piglin"], min: 2, max: 4, chance: 2.18, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    
    "minecraft:goat_horn": [
        {mobs: ["goat"], min: 1, condition: {
            type: "other",
            text: "(if they ran into solid blocks)"}
        }
    ],

    "minecraft:iron_ingot": [
        {mobs: ["iron_golem"], min: 3, max: 5},
        {mobs: ["zombie", "zombie_villager", "husk"], min: 1, chance: 0.83, enchant_chance_increase: 0.33}
    ],

    "minecraft:red_flower": [
        {mobs: ["iron_golem"], min: 0, max: 2}
    ],

    "minecraft:bamboo": [
        {mobs: ["panda"], min: 0, max: 2, enchant_increase: 1}
    ],
    "minecraft:slime_ball": [
        {mobs: ["slime"], min: 0, max: 2, enchant_increase: 1},
        {mobs: ["panda"], min: 1, chance: 0.14, nosimple: true, condition:{
            type: "other",
            text: `${icons.other.next}${icons.other.sick_panda}`}
        }
    ],

    "minecraft:salmon": [
        {mobs: ["salmon"], min: 1},
        {mobs: ["polar_bear"], min: 0, max: 2, chance: 25, enchant_increase: 1},
        {mobs: ["guardian", "elder_guardian"], min: 1, chance: 0.62, enchant_chance_increase: 0.025}
    ],

    "minecraft:gold_nugget": [
        {mobs: ["zombie_pigman"], min: 0, max: 1, enchant_increase: 1}
    ],
    "minecraft:gold_ingot": [
        {mobs: ["zombie_pigman"], min: 1, chance: 2.5, enchant_chance_increase: 1, condition: {
            type: "killed_by",
            targets: ["player"]}
        }
    ],

    "minecraft:blaze_rod": [
        {mobs: ["blaze"], min: 1, chance: 50, enchant_increase: 1, condition: {
            type: "killed_by",
            targets: ["player"]}
        }
    ],

    "minecraft:carrot": [
        {mobs: ["zombie", "zombie_villager", "husk"], min: 1, chance: 0.83, enchant_chance_increase: 0.33}
    ],
    "minecraft:potato": [
        {mobs: ["zombie", "zombie_villager", "husk"], min: 1, chance: 0.83, enchant_chance_increase: 0.33}
    ],
    "minecraft:baked_potato": [
        {mobs: ["zombie", "zombie_villager", "husk"], min: 1, chance: 0.83, enchant_chance_increase: 0.33, condition: {
            type: "killed_by_fire"}
        }
    ],

    "minecraft:gunpowder": [
        {mobs: ["creeper", "ghast"], min: 0, max: 2, enchant_increase: 1},
        {mobs: ["witch"], min: 0, max: 6, enchant_increase: 3}
    ],

    "minecraft:copper_ingot": [
        {mobs: ["drowned"], min: 1, chance: 11, enchant_chance_increase: 2, condition: {
            type: "killed_by",
            targets: ["player"]}
        }
    ],

    "minecraft:prismarine_shard": [
        {mobs: ["guardian", "elder_guardian"], min: 0, max: 2, enchant_increase: 1}
    ],
    "minecraft:prismarine_crystals": [
        {mobs: ["guardian"], min: 1, chance: 40, enchant_increase: 1},
        {mobs: ["elder_guardian"], min: 1, chance: 33, enchant_increase: 1}
    ],

    "minecraft:sponge": [
        {mobs: ["elder_guardian"], min: 1}
    ],

    "minecraft:totem_of_undying": [
        {mobs: ["evoker"], min: 1}
    ],
    "minecraft:emerald": [
        {mobs: ["vindicator", "evoker"], min: 0, max: 1, enchant_increase: 1}
    ],

    "minecraft:ghast_tear": [
        {mobs: ["ghast"], min: 0, max: 1, enchant_increase: 1}
    ],

    "minecraft:magma_cream": [
        {mobs: ["magma_cube"], min: 0, max: 1, enchant_increase: 1}
    ],

    "minecraft:phantom_membrane": [
        {mobs: ["phantom"], min: 0, max: 1, enchant_increase: 1, condition: {
            type: "killed_by",
            targets: ["player"]}
        },
        {mobs: ["cat"], min: 1, chance: 11.2, nosimple: true, condition: {
            type: "player_sleep"}
        }
    ],

    "minecraft:arrow": [
        {mobs: ["skeleton", "stray", "pillager"], min: 0, max: 2, enchant_increase: 1},
        {mobs: ["piglin"], min: 6, max: 12, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],

    "minecraft:saddle": [
        {mobs: ["ravager"], min: 1}
    ],

    "minecraft:shulker_shell": [
        {mobs: ["shulker"], min: 0, max: 1, enchant_increase: 1}
    ],

    "minecraft:sculk_catalyst": [
        {mobs: ["warden"], min: 1}
    ],

    "minecraft:glass_bottle": [
        {mobs: ["witch"], min: 0, max: 6, enchant_increase: 3}
    ],
    "minecraft:glowstone_dust": [
        {mobs: ["witch"], min: 0, max: 6, enchant_increase: 3}
    ],
    "minecraft:redstone": [
        {mobs: ["witch"], min: 0, max: 2, enchant_increase: 1}
    ],
    "minecraft:stick": [
        {mobs: ["witch"], min: 0, max: 6, enchant_increase: 3}
    ],
    "minecraft:sugar": [
        {mobs: ["witch"], min: 0, max: 2, enchant_increase: 1}
    ],

    "minecraft:nether_star": [
        {mobs: ["wither"], min: 1}
    ],

    "minecraft:coal": [
        {mobs: ["wither_skeleton"], min: 1, chance: 33, enchant_increase: 1}
    ],

    // equipment
    "minecraft:golden_sword": [
        {mobs: ["piglin", "zombie_pigman"], min: 1, chance: 8.5, enchant_chance_increase: 1, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.chest}`}
        }
    ],
    "minecraft:iron_sword": [
        {mobs: ["zombie", "zombie_villager", "husk"], min: 1, chance: 8.5, enchant_chance_increase: 1, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.chest}`}
        },
        {mobs: ["vex"], min: 1, chance: 0, enchant_chance_increase: 1, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.chest}`}
        }
    ],
    "minecraft:stone_sword": [
        {mobs: ["wither_skeleton"], min: 1, chance: 8.5, enchant_chance_increase: 1, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.chest}`}
        }
    ],

    "minecraft:crossbow": [
        {mobs: ["piglin", "pillager"], min: 1, chance: 8.5, enchant_chance_increase: 1, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.chest}`}
        }
    ],

    "minecraft:bow": [
        {mobs: ["skeleton", "stray"], min: 1, chance: 8.5, enchant_chance_increase: 1, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.chest}`}
        },
    ],

    "minecraft:trident": [
        {mobs: ["drowned"], min: 1, chance: 8.5, enchant_chance_increase: 1, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.chest}`}
        },
    ],
    "minecraft:nautilus_shell": [
        {mobs: ["drowned"], min: 1, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.chest}`}
        },
    ],


    // froglights
    "minecraft:ochre_froglight": [
        {mobs: ["magma_cube"], min: 1, condition: {
            type: "killed_by",
            targets: ["temperate_frog"]}
        }
    ],
    "minecraft:verdant_froglight": [
        {mobs: ["magma_cube"], min: 1, condition: {
            type: "killed_by",
            targets: ["cold_frog"]}
        }
    ],
    "minecraft:pearlescent_froglight": [
        {mobs: ["magma_cube"], min: 1, condition: {
            type: "killed_by",
            targets: ["warm_frog"]}
        }
    ],

    // music disks
    "minecraft:music_disc_14": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_13": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_cat": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_blocks": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_chirp": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_far": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_mall": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_mellohi": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_stal": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_strad": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_ward": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_11": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],
    "minecraft:music_disc_wait": [
        { mobs: ["creeper"], min: 1, condition: {
            type: "killed_by", targets: ["skeleton"] }
        }
    ],

    "minecraft:dragon_egg": [
        {mobs: ["ender_dragon"], min: 1}
    ],

    "minecraft:skull": [
        { mobs: ["skeleton"], min: 1, data: 0, condition: {
            type: "killed_by",
            targets: ["charged_creeper"]}
        },
        { mobs: ["wither_skeleton"], min: 1, data: 1, condition: {
            type: "killed_by",
            targets: ["charged_creeper"]}
        },
        { mobs: ["zombie"], min: 1, data: 2, condition: {
            type: "killed_by",
            targets: ["charged_creeper"]}
        },
        { mobs: ["creeper"], min: 1, data: 4, condition: {
            type: "killed_by",
            targets: ["charged_creeper"]}
        },
    ],

    "minecraft:potion": [
        { mobs: ["witch"], min: 1, data: 21, chance: 8.5},
        { mobs: ["witch"], min: 1, data: 12, chance: 8.5},
        {mobs: ["piglin"], min: 1, chance: 1.74, data: 12, condition: {
            type: "item_use",
            text: icons.other.gold
        }},
        { mobs: ["witch"], min: 1, data: 14, chance: 8.5},
        { mobs: ["witch"], min: 1, data: 19, chance: 8.5},
        { mobs: ["piglin"], min: 1, chance: 2.18, data: 0, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],

    "minecraft:splash_potion": [
        {mobs: ["piglin"], min: 1, chance: 1.74, data: 12, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],

    "minecraft:blackstone": [
        { mobs: ["piglin"], min: 8, max: 16, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    "minecraft:gravel": [
        { mobs: ["piglin"], min: 8, max: 16, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    "minecraft:netherbrick": [
        { mobs: ["piglin"], min: 2, max: 8, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    "minecraft:soul_sand": [
        { mobs: ["piglin"], min: 2, max: 8, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    "minecraft:fire_charge": [
        { mobs: ["piglin"], min: 1, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    "minecraft:crying_obsidian": [
        { mobs: ["piglin"], min: 2, max: 3, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    "minecraft:obsidian": [
        { mobs: ["piglin"], min: 1, chance: 8.71, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    "minecraft:quartz": [
        { mobs: ["piglin"], min: 5, max: 12, chance: 4.36, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    "minecraft:iron_nugget": [
        { mobs: ["piglin"], min: 10, max: 36, chance: 2.18, condition: {
            type: "item_use",
            text: icons.other.gold
        }}
    ],
    
    "minecraft:lead": [
        { mobs: ["trader"], min: 1, max: 2, condition: {
            type: "other",
            text: `${icons.other.next}${icons.other.lead}${icons.mobs.traders_lama}${icons.mobs.traders_lama}`
        }}
    ],

    "aii:test_item": [
        { mobs: ["pig", "hoglin", "enderman"], min: 1, max: 10, chance: 80},
        { mobs: ["sheep"], min: 5, condition: {
            type: "killed_by", 
            targets: ["player", "enderman"]
        }},
        { mobs: ["guardian"], min: 0, max: 100, chance: 0.0012, condition: {
            type: "killed_by_lightning"
        }}
    ]
}