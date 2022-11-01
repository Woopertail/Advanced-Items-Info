/*
Advanced Items Info © 2022 by Woopertail is licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/
class Ico{
    constructor(){
        this.nutrition = this.convert(0xE300);
        this.hNutrition = this.convert(0xE310);

        this.hunger_icons = {
            hunger22: this.convert(0xE390),
            hunger215: this.convert(0xE391),
            hunger21: this.convert(0xE392),
            hunger205: this.convert(0xE393),
            hunger20: this.convert(0xE300), 

            hunger12: this.convert(0xE394),
            hunger115: this.convert(0xE395),
            hunger11: this.convert(0xE396),
            hunger105: this.convert(0xE397),
            hunger10: this.convert(0xE310),

            hunger02: this.convert(0xE398),
            hunger015: this.convert(0xE399),
            hunger01: this.convert(0xE39A),
            hunger005: this.convert(0xE39B)
        }
        
        this.test = this.convert(0xE3A0);

        this.armor = this.convert(0xE301);
        this.hArmor = this.convert(0xE311);

        this.hp = this.convert(0xE302);
        this.hHp = this.convert(0xE312);
        this.ehp = this.convert(0xE39C);
        this.hEhp = this.convert(0xE39D);
        this.php = this.convert(0xE39E);
        this.hPhp = this.convert(0xE39F);
        this.dhp = this.convert(0xE3AC);
        this.hDhp = this.convert(0xE3AD);

        this.IDIcon = this.convert(0xE3E8),
        this.fullDropIcon = this.convert(0xE3E9),
        this.dropIcon = this.convert(0xE3EA),
        this.brightnessIcon = this.convert(0xE3EB),
        this.nutritionIcon = this.convert(0xE3EC),
        this.armorIcon = this.convert(0xE3ED),
        this.foodEffectsIcon = this.convert(0xE3EE),
        this.durabilityIcon = this.convert(0xE3EF),


        this.effects = {
            "speed": this.convert(0xE303),
            "slowness": this.convert(0xE304),
            "haste": this.convert(0xE305),
            "mining_fatigue": this.convert(0xE306),
            "strength": this.convert(0xE307),
            "instant_health": this.convert(0xE308),
            "instant_damage": this.convert(0xE309),
            "jump_boost": this.convert(0xE30A),
            "nausea": this.convert(0xE30B),
            "regeneration": this.convert(0xE30C),
            "resistance": this.convert(0xE30D),
            "fire_resistance": this.convert(0xE30E),
            "water_breathing": this.convert(0xE30F),

            "invisibility": this.convert(0xE313),
            "blindness": this.convert(0xE314),
            "night_vision": this.convert(0xE315),
            "hunger": this.convert(0xE316),
            "weakness": this.convert(0xE317),
            "poison": this.convert(0xE318),
            "wither": this.convert(0xE319),
            "health_boost": this.convert(0xE31A),
            "absorption": this.convert(0xE31B),
            "saturation": this.convert(0xE31C),
            "glowing": this.convert(0xE31D),
            "levitation": this.convert(0xE31E),
            "luck": this.convert(0xE31F),

            "unluck": this.convert(0xE323),
            "fatal_poison": this.convert(0xE318),
            "slow_falling": this.convert(0xE328),
            "conduit_power": this.convert(0xE329),
            "dolphins_grace": this.convert(0xE328),
            "bad_omen": this.convert(0xE329),
            "village_hero": this.convert(0xE328),
            "darkness": this.convert(0xE329),
            
        };

        this.brightness = [
            this.convert(0xE330), this.convert(0xE331), this.convert(0xE332), this.convert(0xE333),
            this.convert(0xE334), this.convert(0xE335), this.convert(0xE336), this.convert(0xE337),
            this.convert(0xE338), this.convert(0xE339), this.convert(0xE33A), this.convert(0xE33B),
            this.convert(0xE33C), this.convert(0xE33D), this.convert(0xE33E), this.convert(0xE33F),
        ];

        this.mobs = {
            "pig": this.convert(0xE340),
            "sheep": this.convert(0xE341),
            "cow": this.convert(0xE342),
            "mushroom_cow": this.convert(0xE343),
            "chicken": this.convert(0xE344),
            "parrot": this.convert(0xE345),
            "rabbit": this.convert(0xE346),
            "panda": this.convert(0xE347),
            "fox": this.convert(0xE348),
            "goat": this.convert(0xE349),
            "snowman": this.convert(0xE34A),
            "squid": this.convert(0xE34B),
            "glowing_squid": this.convert(0xE34C),
            "cold_frog": this.convert(0xE34D),
            "warm_frog": this.convert(0xE34E),
            "temperate_frog": this.convert(0xE34F),

            "zombie": this.convert(0xE350),
            "zombie_villager": this.convert(0xE351),
            "drowned": this.convert(0xE352),
            "husk": this.convert(0xE353),
            "skeleton": this.convert(0xE354),
            "stray": this.convert(0xE355),
            "wither_skeleton": this.convert(0xE356),
            "wither": this.convert(0xE357),
            "spider": this.convert(0xE358),
            "cave_spider": this.convert(0xE359),
            "creeper": this.convert(0xE35A),
            "slime": this.convert(0xE35B),
            "magma_cube": this.convert(0xE35C),
            "phantom": this.convert(0xE35D),
            "witch": this.convert(0xE35E),
            "polar_bear": this.convert(0xE35F),

            "zombie_pigman": this.convert(0xE360),
            "piglin": this.convert(0xE361),
            "hoglin": this.convert(0xE362),
            "zoglin": this.convert(0xE363),
            "strider": this.convert(0xE364),
            "blaze": this.convert(0xE365),
            "ghast": this.convert(0xE366),
            "enderman": this.convert(0xE367),
            "shulker": this.convert(0xE368),
            "charged_creeper": this.convert(0xE36A),

            "horse": this.convert(0xE370),
            "donkey": this.convert(0xE371),
            "mule": this.convert(0xE372),
            "skeleton_horse": this.convert(0xE373),
            "lama": this.convert(0xE374),
            "ocelot": this.convert(0xE375),
            "cat": this.convert(0xE376),
            "turtle": this.convert(0xE377),
            "cod": this.convert(0xE378),
            "salmon": this.convert(0xE379),
            "tropical_fish": this.convert(0xE37A),
            "pufferfish": this.convert(0xE37B),
            "dolphin": this.convert(0xE37C),
            "guardian": this.convert(0xE37D),
            "elder_guardian": this.convert(0xE37E),

            "pillager": this.convert(0xE380),
            "vindicator": this.convert(0xE381),
            "evoker": this.convert(0xE382),
            "vex": this.convert(0xE383),
            "ravager": this.convert(0xE384),
            "warden": this.convert(0xE385),
            "iron_golem": this.convert(0xE386),
            "ender_dragon": this.convert(0xE387),
            "trader": this.convert(0xE388),
            "traders_lama": this.convert(0xE389),

            "player": this.convert(0xE3FC),
        };

        this.other = {
            "gold": this.convert(0xE3E0),
            "lead": this.convert(0xE3E1),

            "sick_panda": this.convert(0xE3F0),
            "chest": this.convert(0xE3F1),
            "up": this.convert(0xE3F2),
            "lightning": this.convert(0xE3F3),
            "bucket": this.convert(0xE3F4),
            "time": this.convert(0xE3F5),
            "fire": this.convert(0xE3F6),
            "sleep": this.convert(0xE3F7),
            "deli": this.convert(0xE3F8),
            "next": this.convert(0xE3F9),
            "enchanted_book": this.convert(0xE3FA),
            "sword": this.convert(0xE3FB),
            "trading": this.convert(0xE3FD),
            "bowl": this.convert(0xE3FE),
            "shears": this.convert(0xE3FF)
        }
    }

    convert(value){
        return String.fromCodePoint(value);
    }
}

export const icons = new Ico();