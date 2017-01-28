/*  -WHAT IS THIS?-
    The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://bit.ly/MPMBCharTools
    You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.
     
    -KEEP IN MIND-
    Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
    It is recommended to enter the code in a fresh sheet before adding any other information.
*/
 
/*  -INFORMATION-
    Subject:    Class
    Effect:     This script contains information about the Artificer class introduced in Januray 2017 on the Wizards site.
                URL: http://dnd.wizards.com/articles/unearthed-arcana/artificer
                PDF: http://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf
                Source key: [UA:A] = [Unearthed Arcana: Artificer]
    Code by:    Jason Rawlins
    Date:       2017-01-23 (sheet v12.8)
     
*/

var artificerSpells = [
    //level 1
    "alarm", "cure wounds", "disguise self", "expeditious retreat", "false life", "jump", "longstrider", "sanctuary", "shield of faith",
    //level 2
    "aid", "alter self", "arcane lock", "blur", "continual flame", "darkvision", "enhance ability", "enlarge/reduce", "invisibility", "lesser restoration", "levitate", "magic weapon", "protection from poison", "rope trick", "see invisibility", "spider climb",
    //level 3
    "blink", "fly", "gaseous form", "glyph of warding", "haste", "protection from energy", "revivify", "water breathing", "water walk",
    //level 4
    "arcane eye", "death ward", "fabricate", "freedom of movement", "Leomund's secret chest", "Mordenkainen's faithful hound", "Mordenkainen's private sanctum", "Otiluke's resilient sphere", "stone shape", "stoneskin"
];

for (var i = 0; i < artificerSpells.length; i++) {
    if (SpellsList[artificerSpells[i]]) {
        SpellsList[artificerSpells[i]].classes.push("artificer");
    }
}

ClassList["artificer"] = {
    regExpSearch: /artificer/i,
    name: "Artificer",
    source: ["UA:A", 1],
    primaryAbility: "\n \u2022 Artificer: Intelligence;",
    abilitySave: 4,
    prereqs: "\n \u2022 Artificer: Intelligence 13;",
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
    die: 8,
    saves: ["Con", "Int"],
    skills: ["\n\n" + toUni("Artificer") + ": Choose three from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, Sleight of Hand"],
    tools: ["Thieves' tools and two others of my choice"],
    armor: [
        [true, true, false, false]
    ],
    weapons: [
        [true, false]
    ],
    equipment: "Artificer starting equipment:\n \u2022 A handaxe and a light hammer -or- any two simple weapons\n \u2022 A light crossbow and 20 bolts\n \u2022 Scale mail -or- studded leather armor\n \u2022 Thieves' tools and a dungeoneer's pack",
    subclasses: ["Specialist", ["alchemist"]],
    attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spellcastingFactor: 4,
    spellcastingKnown: {
        spells: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
    },
    spellcastingList: {
        class: "artificer",
        level: [1, 4]
    },
    features: {
        "magic item analysis": {
            name: "Magic Item Analysis",
            source: ["UA:A", 2],
            minlevel: 1,
            description: " I know the artificer spells Detect Magic and Identify and can cast them as rituals. I do not need to provide the material component when I cast Identify",
            spellcastingBonus: [{
                name: "Magic Item Analysis",
                spells: ["detect magic"],
                selection: ["detect magic"]
            }, {
                name: "Magic Item Analysis",
                spells: ["identify"],
                selection: ["identify"]
            }]
        },
        "tool expertise": {
            name: "Tool Expertise",
            source: ["UA:A", 3],
            minlevel: 2,
            description: "\n   My proficiency bonus is doubled for any tool proficiencies I gain as an Artificer."
        },
        "wonderous invention": {
            name: "Wonderous Invention",
            source: ["UA:A", 3],
            minlevel: 2,
            description: "\n   I can craft magic items after long hours of study, tinkering, and experimentation. (See http://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf for the list)",
            additional: ["", "1 magic item", "1 magic item", "1 magic item", "2 magic items", "2 magic items", "2 magic items", "2 magic items", "2 magic items", "3 magic items", "3 magic items", "3 magic items", "3 magic items", "3 magic items", "4 magic items", "4 magic items", "4 magic items", "4 magic items", "4 magic items", "5 magic items"]
        },
        "spellcasting": {
            name: "Spellcasting",
            source: ["UA:A", 3],
            minlevel: 3,
            description: "\n   I can cast artificer spells, using Intelligence as my spellcasting ability\n   I can use an arcane focus as a spellcasting focus\n   "
        },
        "infuse magic": {
            name: "Infuse Magic",
            source: ["UA:A", 4],
            minlevel: 4,
            description: "\n   I can channel my spells into objects. Increasing the casting time of an artificer spell to 1 min allows me to store its effects in a non-magical object. Any creature with an Intelligence greater than 6 can cast it later using my spell casting ability. Area of effects are centered on the item. It must be used within 8 hours. I can have a number of infusions equal to my Intelligence modifier."
        },
        "superior attunement": {
            name: "Superior Attunement",
            source: ["UA:A", 4],
            minlevel: 5, 
            description: "\n   I can attune to additional magical items.",
            additional: ["", "", "", "", "Four magical items", "Four magical items", "Four magical items", "Four magical items", "Four magical items", "Four magical items", "Four magical items", "Four magical items", "Four magical items", "Four magical items", "Five magical items", "Five magical items", "Five magical items", "Five magical items", "Five magical items", "Five magical items"]
        },
        "mechanical servant": {
            name: "Mechanical Servant",
            source: ["UA:A", 4],
            minlevel: 6,
            description: "\n   Through research and mastery of my craft, I have producted a mechanical servant. It obeys my commands and protects me in combat. The servant is not magical. Select a Large beast with a CR of 2 or less. The servant uses that beast's game statistics but can look however I like as long as its form is appropriate for its statistics.\n   It has the following modifications:\n    \u2022 It is a construct instead of a beast.\n    \u2022 It can't be charmed.\n    \u2022 It is immune to poison and the poisoned condition.\n    \u2022 It gains darkvision with a range of 60 feet if it doesn't have it already.\n    \u2022 It understands the languages I can speak when I create it, but it can't speak.\n    \u2022 If I am the target of a melee attack and the servant is within 5 feet of the attacker, I can use my reaction to command the servant to respond, using its reaction to make a melee attack against the attacker.\n   In combat, it rolls its own initiative and acts on its own. If the servant is killed, it can be returned to life via normal means. I can repair my slain servant during a long rest if I have access to its body. It returns to life with 1 HP after the rest. If it is beyond recovery, I can create a new one with one week of work and 1,000 GP."
        },
        "soul of artifice": {
            name: "Soul of Artifice",
            source: ["UA:A", 1],
            minlevel: 20,
            description: "\n   I can attune to up to six magic items at once. In addition, I gain a +1 bonus to all saving throws per magic item I am attuned to."
        },
        "subclassfeature1": {
            name: "Specialist",
            source: ["UA:A", 2],
            minlevel: 1,
            description: "\n   Choose your artificer specialization."
        }
    }
};

ClassSubList["alchemist"] = {
    regExpSearch: /alchemist/i,
    subname: "Alchemist",
    fullname: "Alchemist",
    source: ["UA:A", 5],
    features: {
        "alchemists satchel": {
            name: "Alchemist's Satchel",
            source: ["UA:A", 5],
            minLevel: 1,
            description: "I have crafted a magical Alchemist's Satchel. I always pull out exactly the right materials for my formulas. If I lose the satchel, I can create a new one of the course of three days work and spending 100g."
        },
        "alchemical formula": {
            name: "Alchemical Formula",
            source: ["UA:A", 5],
            minLevel: 1,
            description: "\n   I have learned several Alchemical Formulas. My Alchemist's Satchel must be within reach to use them. The DC of my formulas (if required) is 8 + my proficiency bonus + my Intelligence modifier.",
            additional: ["3 formulas", "3 formulas", "4 formulas", "4 formulas", "4 formulas", "4 formulas", "4 formulas", "4 formulas", "5 formulas", "5 formulas", "5 formulas", "5 formulas", "5 formulas", "6 formulas", "6 formulas", "6 formulas", "7 formulas", "7 formulas", "7 formulas", "7 formulas", ],
            extraname: "Formula",
            extrachoices: ["Alchemical Fire", "Alchemical Acid", "Healing Draught", "Smoke Stick", "Swift Step Draught", "Tanglefoot Bag", "Thunderstone"], 
            "alchemical fire": {
                name: "Alchemical Fire",
                source: ["UA:A", 5],
                description: "\n   As an action, I can reach into my Alchemist’s Satchel, pull out a vial of volatile liquid, and hurl the vial at a creature, object, or surface within 30 feet of me (the vial and its contents disappear if I don’t hurl the vial by the end of the current turn). On impact, the vial detonates in a 5-foot radius. Any creature in that area must succeed on a Dexterity saving throw or take 1d6 fire damage. This formula’s damage increases by 1d6 when I reach certain levels in this class: 4th level (2d6), 7th level (3d6), 10th level (4d6), 13th level (5d6), 16th level (6d6), and 19th level (7d6)."
            },
            "alchemical acid": {
                name: "Alchemical Acid",
                source: ["UA:A", 5],
                description: "\n   As an action, I can reach into my Alchemist’s Satchel, pull out a vial of acid, and hurl the vial at a creature or object within 30 feet of me (the vial and its contents disappear if I don’t hurl the vial by he end of the current turn). The vial shatters on impact. A creature must succeed on a Dexterity saving throw or take 1d6 acid damage. An object automatically takes that damage, and the damage is maximized. This formula’s damage increases by 1d6 when I reach certain levels in this class: 3rd level (2d6), 5th level (3d6), 7th level (4d6), 9th level (5d6), 11th level (6d6), 13th level (7d6), 15th level (8d6), 17th level (9d6), and 19th level (10d6)."
            },
            "healing draught": {
                name: "Healing Draught",
                source: ["UA:A", 5],
                description: "\n   As an action, I can reach into my Alchemist’s Satchel and pull out a vial of healing liquid. A creature can drink it as an action to regain 1d8 hit points. The vial then disappears. Once a creature regains hit points from this alchemical formula, the creature can’t do so again until it finishes a long rest. If not used, the vial and its contents disappear after 1 hour. While the vial exists, I can’t use this formula. This formula’s healing increases by 1d8 when I reach certain levels in this class: 3rd level (2d8), 5th level (3d8), 7th level (4d8), 9th level (5d8), 11th level (6d8), 13th level (7d8), 15th level (8d8), 17th level (9d8), and 19th level (10d8)."
            },
             "smoke stick": {
                name: "Smoke Stick",
                source: ["UA:A", 5],
                description: "\n   As an action, I can reach into my Alchemist’s Satchel and pull out a stick that produces a thick plume of smoke. I can hold on to the stick or throw it to a point up to 30 feet away as part of the action used to produce it. The area in a 10-foot radius around the stick is filled with thick smoke that blocks vision, including darkvision. The stick and smoke persist for 1 minute and then disappear. After using this formula, I can’t do so again for 1 minute."
            },
             "swift step draught": {
                name: "Swift Step Draught",
                source: ["UA:A", 5],
                description: "\n   As a bonus action, I can reach into my Alchemist’s Satchel and pull out a vial filled with a bubbling, brown liquid. As an action, a creature can drink it. Doing so increases the creature’s speed by 20 feet for 1 minute, and the vial disappears. If not used, the vial and its contents disappear after 1 minute. After using this formula, I can’t do so again for 1 minute."
            },
            "tanglefoot bag": {
                name: "Tanglefoot Bag",
                source: ["UA:A", 6],
                description: "\n   As an action, I can reach into my Alchemist’s Satchel and pull out a bag filled with writhing, sticky black tar and hurl it at a point on the ground within 30 feet of me (the bag and its contents disappear if I don’t hurl the bag by the end of the current turn). The bag bursts on impact and covers the ground in a 5-foot radius with sticky goo. That area becomes difficult terrain for 1 minute, and any creature that starts its turn on the ground in that area has its speed halved for that turn. After using this formula, I can’t do so again for 1 minute."
            },
            "thunderstone": {
                name: "Thunderstone",
                source: ["UA:A", 6],
                description: "\n   As an action, I can reach into my Alchemist’s Satchel and pull out a crystalline shard and hurl it at a creature, object, or surface within 30 feet of me (the shard disappears if I don’t hurl it by the end of the current turn). The shard shatters on impact with a blast of concussive energy. Each creature within 10 feet of the point of impact must succeed on a Constitution saving throw or be knocked prone and pushed 10 feet away from that point."
            }
        }
    }
};