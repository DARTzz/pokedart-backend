// a function capable of getting all the 151 pokemons :)
let fs = require("fs");

const oldData = [
    {
        name: "Charmeleon",
        shortname: "charmeleon",
        hp: 226,
        info: {
            id: 5,
            type: "fire",
            weakness: "water",
            description:
                "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
        },
        images: {
            photo: "images/charmeleon.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Dragon Rage", dp: 40, type: "dragon" },
            { name: "Flame Burst", dp: 70, type: "fire" },
            { name: "Slash", dp: 70, type: "normal" },
            { name: "Smokescreen", type: "normal" },
        ],
    },
    {
        name: "Charmander",
        shortname: "charmander",
        hp: 188,
        info: {
            id: 4,
            type: "fire",
            weakness: "water",
            description:
                "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
        },
        images: {
            photo: "images/charmander.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Dragon Rage", dp: 40, type: "dragon" },
            { name: "Ember", dp: 40, type: "fire" },
            { name: "Growl", type: "normal" },
            { name: "Scratch", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Caterpie",
        shortname: "caterpie",
        hp: 200,
        info: {
            id: 10,
            type: "grass",
            weakness: "fire",
            description:
                "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
        },
        images: {
            photo: "images/caterpie.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Bug Bite", dp: 60, type: "bug" },
            { name: "Tackle", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Squirtle",
        shortname: "squirtle",
        hp: 198,
        info: {
            id: 7,
            type: "water",
            weakness: "grass",
            description:
                "Whitaker's favorite Pokemon! After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
        },
        images: {
            photo: "images/squirtle.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/grass.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Tackle", dp: 60, type: "normal" },
            { name: "Water Gun", dp: 40, type: "water" },
            { name: "Withdraw", type: "water" },
        ],
    },
    {
        name: "Fearow",
        shortname: "fearow",
        hp: 240,
        info: {
            id: 22,
            type: "flying",
            weakness: "electric",
            description:
                "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
        },
        images: {
            photo: "images/fearow.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Assurance", dp: 60, type: "dark" },
            { name: "Drill Peck", dp: 80, type: "flying" },
            { name: "Drill Run", dp: 80, type: "ground" },
            { name: "Leer", type: "normal" },
        ],
    },
    {
        name: "Golbat",
        shortname: "golbat",
        hp: 260,
        info: {
            id: 42,
            type: "poison",
            weakness: "psychic",
            description:
                "It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood.",
        },
        images: {
            photo: "images/golbat.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Screech", type: "normal" },
            { name: "Swift", dp: 60, type: "normal" },
            { name: "Wing Attack", dp: 60, type: "flying" },
        ],
    },
    {
        name: "Clefairy",
        shortname: "clefairy",
        hp: 250,
        info: {
            id: 35,
            type: "fairy",
            weakness: "poison",
            description:
                "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.",
        },
        images: {
            photo: "images/clefairy.jpg",
            typeIcon: "icons/fairy.jpg",
            weaknessIcon: "icons/poison.jpg",
        },
        moves: [
            { name: "Disarming Voice", dp: 40, type: "fairy" },
            { name: "Growl", type: "normal" },
            { name: "Pound", dp: 40, type: "normal" },
            { name: "Wakeup Slap", dp: 70, type: "fighting" },
        ],
    },
    {
        name: "Oddish",
        shortname: "oddish",
        hp: 160,
        info: {
            id: 43,
            type: "grass",
            weakness: "fire",
            description:
                "It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly.",
        },
        images: {
            photo: "images/oddish.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [{ name: "Acid", dp: 40, type: "poison" }],
    },
    {
        name: "Pidgeot",
        shortname: "pidgeot",
        hp: 160,
        info: {
            id: 18,
            type: "flying",
            weakness: "electric",
            description:
                "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.",
        },
        images: {
            photo: "images/pidgeot.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Quick Attack", dp: 40, type: "normal" },
            { name: "Sand Attack", type: "ground" },
        ],
    },
    {
        name: "Weedle",
        shortname: "weedle",
        hp: 160,
        info: {
            id: 13,
            type: "grass",
            weakness: "fire",
            description:
                "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
        },
        images: {
            photo: "images/weedle.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Bug Bite", dp: 60, type: "bug" },
            { name: "Poison String", dp: 15, type: "poison" },
        ],
    },
    {
        name: "Bulbasaur",
        shortname: "bulbasaur",
        hp: 200,
        info: {
            id: 1,
            type: "grass",
            weakness: "fire",
            description:
                "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.",
        },
        images: {
            photo: "images/bulbasaur.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Amnesia", type: "psychic" },
            { name: "Magical Leaf", dp: 60, type: "grass" },
            { name: "Vine Whip", dp: 45, type: "grass" },
        ],
    },
    {
        name: "Gengar",
        shortname: "gengar",
        hp: 230,
        info: {
            id: 94,
            type: "ghost",
            weakness: "dark",
            description:
                "Chadi's favorite Pokemon! It is said to emerge from darkness to steal the lives of those who become lost in mountains.",
        },
        images: {
            photo: "images/gengar.jpg",
            typeIcon: "icons/ghost.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Dark Pulse", dp: 80, type: "dark" },
            { name: "Double Team", type: "normal" },
            { name: "Shadow Ball", dp: 80, type: "ghost" },
            { name: "Venoshock", dp: 65, type: "poison" },
        ],
    },
    {
        name: "Raticate",
        shortname: "raticate",
        hp: 160,
        info: {
            id: 20,
            type: "normal",
            weakness: "fighting",
            description:
                "Its whiskers help it to maintain balance. Its fangs never stop growing, so it gnaws to pare them down.",
        },
        images: {
            photo: "images/raticate.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [
            { name: "Assurance", dp: 60, type: "dark" },
            { name: "Quick Attack", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Alakazam",
        shortname: "alakazam",
        hp: 220,
        info: {
            id: 65,
            type: "psychic",
            weakness: "dark",
            description:
                "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000.",
        },
        images: {
            photo: "images/alakazam.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Focus Blast", dp: 120, type: "fighting" },
            { name: "Kinesis", type: "psychic" },
            { name: "Psychic", dp: 90, type: "psychic" },
            { name: "Shadow Ball", dp: 80, type: "ghost" },
        ],
    },
    {
        name: "Kakuna",
        shortname: "kakuna",
        hp: 200,
        info: {
            id: 14,
            type: "grass",
            weakness: "fire",
            description:
                "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
        },
        images: {
            photo: "images/kakuna.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Harden", type: "normal" },
            { name: "Tackle", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Wigglytuff",
        shortname: "wigglytuff",
        hp: 160,
        info: {
            id: 40,
            type: "fairy",
            weakness: "poison",
            description:
                "Its body is full of elasticity. By inhaling deeply, it can continue to inflate itself without limit.",
        },
        images: {
            photo: "images/wigglytuff.jpg",
            typeIcon: "icons/fairy.jpg",
            weaknessIcon: "icons/poison.jpg",
        },
        moves: [
            { name: "Brick Break", dp: 75, type: "fighting" },
            { name: "Covet", dp: 60, type: "normal" },
            { name: "Defense Curl", type: "normal" },
            { name: "Feint Attack", dp: 60, type: "dark" },
        ],
    },
    {
        name: "Starmie",
        shortname: "starmie",
        hp: 160,
        info: {
            id: 121,
            type: "water",
            weakness: "electric",
            description:
                "The center section is named the core. People think it is communicating when it glows in 7 colors.",
        },
        images: {
            photo: "images/starmie.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Bubble Beam", dp: 65, type: "water" },
            { name: "Harden", type: "normal" },
            { name: "Swift", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Parasect",
        shortname: "parasect",
        hp: 160,
        info: {
            id: 47,
            type: "bug",
            weakness: "fire",
            description:
                "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
        },
        images: {
            photo: "images/parasect.jpg",
            typeIcon: "icons/bug.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [{ name: "Slash", dp: 70, type: "normal" }],
    },
    {
        name: "Golduck",
        shortname: "golduck",
        hp: 270,
        info: {
            id: 55,
            type: "water",
            weakness: "electric",
            description:
                "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
        },
        images: {
            photo: "images/golduck.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Amnesia", type: "psychic" },
            { name: "Scratch", dp: 40, type: "normal" },
            { name: "Water Pulse", dp: 60, type: "water" },
            { name: "Zen Headbutt", dp: 90, type: "psychic" },
        ],
    },
    {
        name: "Meowth",
        shortname: "meowth",
        hp: 160,
        info: {
            id: 52,
            type: "normal",
            weakness: "fighting",
            description:
                "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
        },
        images: {
            photo: "images/meowth.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Growl", type: "normal" },
            { name: "Scratch", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Weepinbell",
        shortname: "weepinbell",
        hp: 160,
        info: {
            id: 70,
            type: "grass",
            weakness: "fire",
            description:
                "When hungry, it swallows anything that moves. Its hapless prey is melted inside by strong acids.",
        },
        images: {
            photo: "images/weepinbell.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Acid", dp: 40, type: "poison" },
            { name: "Growth", type: "grass" },
            { name: "Slam", dp: 80, type: "normal" },
            { name: "Vine Whip", dp: 45, type: "grass" },
        ],
    },
    {
        name: "Cubone",
        shortname: "cubone",
        hp: 210,
        info: {
            id: 104,
            type: "ground",
            weakness: "water",
            description:
                "Jack's favorite Pokemon! Cubone's both cute and completely hardcore.",
        },
        images: {
            photo: "images/cubone.jpg",
            typeIcon: "icons/ground.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Bone Club", dp: 65, type: "ground" },
            { name: "Growl", type: "normal" },
            { name: "Headbutt", dp: 70, type: "normal" },
            { name: "Stomping Tantrum", dp: 75, type: "ground" },
        ],
    },
    {
        name: "Scyther",
        shortname: "scyther",
        hp: 160,
        info: {
            id: 123,
            type: "bug",
            weakness: "fire",
            description:
                "Its blindingly fast speed adds to the sharpness of its twin forearm scythes which can slice through thick logs in one wicked stroke.",
        },
        images: {
            photo: "images/scyther.jpg",
            typeIcon: "icons/bug.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Slash", dp: 70, type: "normal" },
            { name: "Swords Dance", type: "normal" },
            { name: "Wing Attack", dp: 60, type: "flying" },
        ],
    },
    {
        name: "Marowak",
        shortname: "marowak",
        hp: 160,
        info: {
            id: 105,
            type: "ground",
            weakness: "water",
            description:
                "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
        },
        images: {
            photo: "images/marowak.jpg",
            typeIcon: "icons/ground.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Bone Club", dp: 65, type: "ground" },
            { name: "Growl", type: "normal" },
            { name: "Headbutt", dp: 70, type: "normal" },
        ],
    },
    {
        name: "Pikachu",
        shortname: "pikachu",
        hp: 160,
        info: {
            id: 25,
            type: "electric",
            weakness: "ground",
            description:
                "Melissa's favorite Pokemon! When several Pikachu gather, their electricity could build and cause lightning storms.",
        },
        images: {
            photo: "images/pikachu.jpg",
            typeIcon: "icons/electric.jpg",
            weaknessIcon: "icons/ground.jpg",
        },
        moves: [
            { name: "Growl", type: "normal" },
            { name: "Quick Attack", dp: 40, type: "normal" },
            { name: "Thunderbolt", dp: 90, type: "electric" },
        ],
    },
    {
        name: "Omastar",
        shortname: "omastar",
        hp: 160,
        info: {
            id: 139,
            type: "water",
            weakness: "electric",
            description:
                "Apparently, it cracked Shellder's shell with its sharp fangs and sucked out the insides.",
        },
        images: {
            photo: "images/omastar.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Hydro Pump", dp: 110, type: "water" },
        ],
    },
    {
        name: "Flareon",
        shortname: "flareon",
        hp: 240,
        info: {
            id: 136,
            type: "fire",
            weakness: "water",
            description:
                "It fluffs out its fur collar to cool down its body temperature, which can reach 1,650 degrees Fahrenheit.",
        },
        images: {
            photo: "images/flareon.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Ember", dp: 40, type: "fire" },
            { name: "Quick Attack", dp: 40, type: "normal" },
            { name: "Sand Attack", type: "ground" },
        ],
    },
    {
        name: "Magmar",
        shortname: "magmar",
        hp: 160,
        info: {
            id: 126,
            type: "fire",
            weakness: "water",
            description:
                "The fiery surface of its body gives off a wavering, rippling glare that is similar to the sun.",
        },
        images: {
            photo: "images/magmar.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Ember", dp: 40, type: "fire" },
            { name: "Fire Punch", dp: 75, type: "fire" },
            { name: "Leer", type: "normal" },
        ],
    },
    {
        name: "Goldeen",
        shortname: "goldeen",
        hp: 200,
        info: {
            id: 118,
            type: "water",
            weakness: "electric",
            description:
                "A strong swimmer, it is capable of swimming nonstop up fast streams at a steady speed of five knots.",
        },
        images: {
            photo: "images/goldeen.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Double Team", type: "normal" },
            { name: "Horn Attack", dp: 65, type: "normal" },
            { name: "Peck", dp: 35, type: "flying" },
            { name: "Water Pulse", dp: 60, type: "water" },
        ],
    },
    {
        name: "Grimer",
        shortname: "grimer",
        hp: 270,
        info: {
            id: 88,
            type: "poison",
            weakness: "psychic",
            description:
                "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
        },
        images: {
            photo: "images/grimer.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Harden", type: "normal" },
            { name: "Mud Bomb", dp: 65, type: "ground" },
            { name: "Pound", dp: 40, type: "normal" },
            { name: "Sludge", dp: 65, type: "poison" },
        ],
    },
    {
        name: "Jolteon",
        shortname: "jolteon",
        hp: 240,
        info: {
            id: 135,
            type: "electric",
            weakness: "ground",
            description:
                "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
        },
        images: {
            photo: "images/jolteon.jpg",
            typeIcon: "icons/electric.jpg",
            weaknessIcon: "icons/ground.jpg",
        },
        moves: [
            { name: "Double Kick", dp: 60, type: "fighting" },
            { name: "Quick Attack", dp: 40, type: "normal" },
            { name: "Sand Attack", type: "ground" },
            { name: "Thunder Shock", dp: 40, type: "electric" },
        ],
    },
    {
        name: "Mewtwo",
        shortname: "mewtwo",
        hp: 160,
        info: {
            id: 150,
            type: "psychic",
            weakness: "dark",
            description:
                "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
        },
        images: {
            photo: "images/mewtwo.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Amnesia", type: "psychic" },
            { name: "Psychic", dp: 90, type: "psychic" },
            { name: "Swift", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Poliwrath",
        shortname: "poliwrath",
        hp: 160,
        info: {
            id: 62,
            type: "water",
            weakness: "electric",
            description:
                "Although an energetic, skilled swimmer that uses all of its muscles, it lives on dry land.",
        },
        images: {
            photo: "images/poliwrath.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [{ name: "Bubble Beam", dp: 65, type: "water" }],
    },
    {
        name: "Lapras",
        shortname: "lapras",
        hp: 370,
        info: {
            id: 131,
            type: "water",
            weakness: "electric",
            description:
                "Nicole's favorite Pokemon! Its high intelligence enables it to understand human speech. It likes to ferry people on its back.",
        },
        images: {
            photo: "images/lapras.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Growl", type: "normal" },
            { name: "Hydro Pump", dp: 110, type: "water" },
            { name: "Thunder", dp: 110, type: "electric" },
            { name: "Ice Beam", dp: 90, type: "ice" },
        ],
    },
    {
        name: "Zapdos",
        shortname: "zapdos",
        hp: 160,
        info: {
            id: 145,
            type: "electric",
            weakness: "rock",
            description:
                "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts.",
        },
        images: {
            photo: "images/zapdos.jpg",
            typeIcon: "icons/electric.jpg",
            weaknessIcon: "icons/rock.jpg",
        },
        moves: [
            { name: "Ancient Power", dp: 120, type: "rock" },
            { name: "Charge", type: "electric" },
            { name: "Drill Peck", dp: 80, type: "flying" },
            { name: "Thunder", dp: 110, type: "electric" },
        ],
    },
    {
        name: "Moltres",
        shortname: "moltres",
        hp: 160,
        info: {
            id: 146,
            type: "fire",
            weakness: "rock",
            description:
                "This legendary Pokemon scatters embers with every flap of its wings. It is a thrilling sight to behold.",
        },
        images: {
            photo: "images/moltres.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/rock.jpg",
        },
        moves: [
            { name: "Flamethrower", dp: 90, type: "fire" },
            { name: "Sky Attack", dp: 140, type: "flying" },
        ],
    },
    {
        name: "Omanyte",
        shortname: "omanyte",
        hp: 160,
        info: {
            id: 138,
            type: "water",
            weakness: "electric",
            description:
                "Revived from an ancient fossil, this Pokemon uses air stored in its shell to sink and rise in water.",
        },
        images: {
            photo: "images/omanyte.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Leer", type: "normal" },
        ],
    },
    {
        name: "Jynx",
        shortname: "jynx",
        hp: 240,
        info: {
            id: 124,
            type: "psychic",
            weakness: "dark",
            description:
                "It has several different cry patterns, each of which seems to have its own meaning.",
        },
        images: {
            photo: "images/jynx.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Blizzard", dp: 110, type: "ice" },
            { name: "Fake Tears", type: "dark" },
            { name: "Pound", dp: 40, type: "normal" },
            { name: "Powder Snow", dp: 40, type: "ice" },
        ],
    },
    {
        name: "Porygon",
        shortname: "porygon",
        hp: 160,
        info: {
            id: 137,
            type: "normal",
            weakness: "fighting",
            description:
                "A manmade Pokemon that came about as a result of research. It is programmed with only basic motions.",
        },
        images: {
            photo: "images/porygon.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [
            { name: "Psybeam", dp: 65, type: "psychic" },
            { name: "Sharpen", type: "normal" },
            { name: "Tri Attack", dp: 80, type: "normal" },
        ],
    },
    {
        name: "Weezing",
        shortname: "weezing",
        hp: 160,
        info: {
            id: 110,
            type: "poison",
            weakness: "psychic",
            description:
                "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing.",
        },
        images: {
            photo: "images/weezing.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Assurance", dp: 60, type: "dark" },
            { name: "Sludge", dp: 65, type: "poison" },
            { name: "Smokescreen", type: "normal" },
            { name: "Tackle", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Diglett",
        shortname: "diglett",
        hp: 130,
        info: {
            id: 50,
            type: "ground",
            weakness: "water",
            description:
                "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
        },
        images: {
            photo: "images/diglett.jpg",
            typeIcon: "icons/ground.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Astonish", dp: 30, type: "ghost" },
            { name: "Growl", type: "normal" },
            { name: "Mud Bomb", dp: 65, type: "ground" },
            { name: "Scratch", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Ivysaur",
        shortname: "ivysaur",
        hp: 230,
        info: {
            id: 2,
            type: "grass",
            weakness: "fire",
            description:
                "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        },
        images: {
            photo: "images/ivysaur.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Growl", type: "normal" },
            { name: "Magical Leaf", dp: 60, type: "grass" },
            { name: "Razor Leaf", dp: 55, type: "grass" },
            { name: "Venoshock", dp: 65, type: "poison" },
        ],
    },
    {
        name: "Shellder",
        shortname: "shellder",
        hp: 160,
        info: {
            id: 90,
            type: "water",
            weakness: "electric",
            description:
                "It swims backward by opening and closing its two shells. Its large tongue is always kept hanging out.",
        },
        images: {
            photo: "images/shellder.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Leer", type: "normal" },
            { name: "Water Gun", dp: 40, type: "water" },
        ],
    },
    {
        name: "Rhydon",
        shortname: "rhydon",
        hp: 160,
        info: {
            id: 112,
            type: "rock",
            weakness: "water",
            description:
                "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.",
        },
        images: {
            photo: "images/rhydon.jpg",
            typeIcon: "icons/rock.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Earthquake", dp: 100, type: "ground" },
            { name: "Horn Attack", dp: 70, type: "normal" },
        ],
    },
    {
        name: "Magnemite",
        shortname: "magnemite",
        hp: 160,
        info: {
            id: 81,
            type: "steel",
            weakness: "fire",
            description:
                "The electricity emitted by the units on each side of its body cause it to become a strong magnet.",
        },
        images: {
            photo: "images/magnemite.jpg",
            typeIcon: "icons/steel.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Screech", type: "normal" },
            { name: "Thunder Shock", dp: 40, type: "electric" },
        ],
    },
    {
        name: "Snorlax",
        shortname: "snorlax",
        hp: 160,
        info: {
            id: 143,
            type: "normal",
            weakness: "fighting",
            description:
                "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
        },
        images: {
            photo: "images/snorlax.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [{ name: "Amnesia", type: "psychic" }],
    },
    {
        name: "Krabby",
        shortname: "krabby",
        hp: 170,
        info: {
            id: 98,
            type: "water",
            weakness: "electric",
            description:
                "Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast.",
        },
        images: {
            photo: "images/krabby.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Bubble", dp: 40, type: "water" },
            { name: "Harden", type: "normal" },
            { name: "Metal Claw", dp: 50, type: "steel" },
            { name: "Vice Grip", dp: 55, type: "normal" },
        ],
    },
    {
        name: "Venusaur",
        shortname: "venusaur",
        hp: 160,
        info: {
            id: 3,
            type: "grass",
            weakness: "fire",
            description:
                "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        },
        images: {
            photo: "images/venusaur.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [{ name: "Razor Leaf", dp: 55, type: "grass" }],
    },
    {
        name: "Charizard",
        shortname: "charizard",
        hp: 266,
        info: {
            id: 6,
            type: "fire",
            weakness: "water",
            description:
                "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
        },
        images: {
            photo: "images/charizard.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Air Slash", dp: 75, type: "flying" },
            { name: "Flare Blitz", dp: 120, type: "fire" },
            { name: "Slash", dp: 70, type: "normal" },
            { name: "Smokescreen", type: "normal" },
        ],
    },
    {
        name: "Muk",
        shortname: "muk",
        hp: 160,
        info: {
            id: 89,
            type: "poison",
            weakness: "psychic",
            description:
                "As it moves, a very strong poison leaks from it, making the ground there barren for three years.",
        },
        images: {
            photo: "images/muk.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Harden", type: "normal" },
            { name: "Mud Bomb", dp: 65, type: "ground" },
            { name: "Sludge", dp: 65, type: "poison" },
        ],
    },
    {
        name: "Hitmonchan",
        shortname: "hitmonchan",
        hp: 210,
        info: {
            id: 107,
            type: "fighting",
            weakness: "flying",
            description:
                "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
        },
        images: {
            photo: "images/hitmonchan.jpg",
            typeIcon: "icons/fighting.jpg",
            weaknessIcon: "icons/flying.jpg",
        },
        moves: [
            { name: "Fire Punch", dp: 75, type: "fire" },
            { name: "Ice Punch", dp: 75, type: "ice" },
            { name: "Mach Punch", dp: 40, type: "fighting" },
            { name: "Work Up", type: "normal" },
        ],
    },
    {
        name: "Tentacruel",
        shortname: "tentacruel",
        hp: 270,
        info: {
            id: 73,
            type: "water",
            weakness: "electric",
            description:
                "The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
        },
        images: {
            photo: "images/tentacruel.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Acid Spray", dp: 40, type: "poison" },
            { name: "Barrier", type: "psychic" },
            { name: "Hydro Pump", dp: 110, type: "water" },
            { name: "Screech", type: "normal" },
        ],
    },
    {
        name: "Gloom",
        shortname: "gloom",
        hp: 230,
        info: {
            id: 44,
            type: "grass",
            weakness: "fire",
            description:
                "Smells incredibly foul! However, around 1 out of 1,000 people enjoy sniffing its nose-bending stink.",
        },
        images: {
            photo: "images/gloom.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Acid", dp: 40, type: "poison" },
            { name: "Growth", type: "grass" },
            { name: "Hidden Power", dp: 60, type: "normal" },
            { name: "Razor Leaf", dp: 55, type: "grass" },
        ],
    },
    {
        name: "Cloyster",
        shortname: "cloyster",
        hp: 210,
        info: {
            id: 91,
            type: "water",
            weakness: "electric",
            description:
                "Even a missile can't break the spikes it uses to stab opponents. They're even harder than its shell.",
        },
        images: {
            photo: "images/cloyster.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Aurora Beam", dp: 65, type: "ice" },
            { name: "Hydro Pump", dp: 110, type: "water" },
            { name: "Poison Jab", dp: 80, type: "poison" },
            { name: "Withdraw", type: "water" },
        ],
    },
    {
        name: "Wartortle",
        shortname: "wartortle",
        hp: 160,
        info: {
            id: 8,
            type: "water",
            weakness: "grass",
            description:
                "It cleverly controls its furry ears and tail to maintain its balance while swimming.",
        },
        images: {
            photo: "images/wartortle.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/grass.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Iron Defense", type: "steel" },
            { name: "Tackle", dp: 60, type: "normal" },
            { name: "Water Pulse", dp: 60, type: "water" },
        ],
    },
    {
        name: "Venomoth",
        shortname: "venomoth",
        hp: 160,
        info: {
            id: 49,
            type: "bug",
            weakness: "fire",
            description:
                "The dust-like scales covering its wings are color-coded to indicate the kinds of poison it has.",
        },
        images: {
            photo: "images/venomoth.jpg",
            typeIcon: "icons/bug.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [{ name: "Psychic", dp: 90, type: "psychic" }],
    },
    {
        name: "Pidgey",
        shortname: "pidgey",
        hp: 160,
        info: {
            id: 16,
            type: "flying",
            weakness: "electric",
            description:
                "Jeffrey's favorite Pokemon! Because it dislikes fighting, it protects itself by kicking up sand.",
        },
        images: {
            photo: "images/pidgey.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Peck", dp: 35, type: "flying" },
            { name: "Quick Attack", dp: 40, type: "normal" },
            { name: "Sand Attack", type: "ground" },
        ],
    },
    {
        name: "Jigglypuff",
        shortname: "jigglypuff",
        hp: 340,
        info: {
            id: 39,
            type: "fairy",
            weakness: "poison",
            description:
                "Garrett's favorite pokemon! When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
        },
        images: {
            photo: "images/jigglypuff.jpg",
            typeIcon: "icons/fairy.jpg",
            weaknessIcon: "icons/poison.jpg",
        },
        moves: [
            { name: "Defense Curl", type: "normal" },
            { name: "Pound", dp: 40, type: "normal" },
            { name: "Rollout", dp: 30, type: "rock" },
            { name: "Wakeup Slap", dp: 70, type: "fighting" },
        ],
    },
    {
        name: "Growlithe",
        shortname: "growlithe",
        hp: 220,
        info: {
            id: 58,
            type: "fire",
            weakness: "water",
            description:
                "Conner's favorite Pokemon ('It's adorable'). It has a brave and trustworthy nature and fearlessly stands up to bigger and stronger foes.",
        },
        images: {
            photo: "images/growlithe.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Fire Fang", dp: 65, type: "fire" },
            { name: "Iron Tail", dp: 100, type: "steel" },
            { name: "Leer", type: "normal" },
        ],
    },
    {
        name: "Lickitung",
        shortname: "lickitung",
        hp: 160,
        info: {
            id: 108,
            type: "normal",
            weakness: "fighting",
            description:
                "Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis.",
        },
        images: {
            photo: "images/lickitung.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [
            { name: "Slam", dp: 80, type: "normal" },
            { name: "Stomp", dp: 65, type: "normal" },
        ],
    },
    {
        name: "Farfetch'd",
        shortname: "farfetchd",
        hp: 214,
        info: {
            id: 83,
            type: "flying",
            weakness: "electric",
            description:
                "The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
        },
        images: {
            photo: "images/farfetchd.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Air Cutter", dp: 60, type: "flying" },
            { name: "Fury Cutter", dp: 40, type: "bug" },
            { name: "Slash", dp: 70, type: "normal" },
            { name: "Swords Dance", type: "normal" },
        ],
    },
    {
        name: "Psyduck",
        shortname: "psyduck",
        hp: 210,
        info: {
            id: 54,
            type: "water",
            weakness: "electric",
            description:
                "Always tormented by headaches. It uses psychic powers, but it is not known if it intends to do so.",
        },
        images: {
            photo: "images/psyduck.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Amnesia", type: "psychic" },
            { name: "Scratch", dp: 40, type: "normal" },
            { name: "Water Gun", dp: 40, type: "normal" },
            { name: "Zen Headbutt", dp: 80, type: "psychic" },
        ],
    },
    {
        name: "Poliwhirl",
        shortname: "poliwhirl",
        hp: 160,
        info: {
            id: 61,
            type: "water",
            weakness: "electric",
            description:
                "Its two legs are well developed. Even though it can live on the ground, it prefers living in water.",
        },
        images: {
            photo: "images/poliwhirl.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Bubble Beam", dp: 65, type: "water" },
            { name: "Mud Bomb", dp: 65, type: "ground" },
            { name: "Tackle", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Nidorina",
        shortname: "nidorina",
        hp: 160,
        info: {
            id: 30,
            type: "poison",
            weakness: "psychic",
            description:
                "When resting deep in its burrow, its thorns always retract. This is proof that it is relaxed.",
        },
        images: {
            photo: "images/nidorina.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Cut", dp: 50, type: "normal" },
            { name: "Double Kick", dp: 60, type: "fighting" },
            { name: "Leer", type: "normal" },
        ],
    },
    {
        name: "Sandshrew",
        shortname: "sandshrew",
        hp: 160,
        info: {
            id: 27,
            type: "ground",
            weakness: "water",
            description:
                "Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew.",
        },
        images: {
            photo: "images/sandshrew.jpg",
            typeIcon: "icons/ground.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Dig", dp: 80, type: "ground", warmup: 1 },
            { name: "Sand Attack", type: "ground" },
            { name: "Scratch", dp: 40, type: "normal" },
            { name: "Swift", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Spearow",
        shortname: "spearow",
        hp: 160,
        info: {
            id: 21,
            type: "flying",
            weakness: "electric",
            description:
                "Inept at flying high. However, it can fly around very fast to protect its territory.",
        },
        images: {
            photo: "images/spearow.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Growl", type: "normal" },
            { name: "Peck", dp: 35, type: "flying" },
            { name: "Tackle", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Slowbro",
        shortname: "slowbro",
        hp: 160,
        info: {
            id: 80,
            type: "psychic",
            weakness: "dark",
            description:
                "An attached Shellder won't let go because of the tasty flavor that oozes out of its tail.",
        },
        images: {
            photo: "images/slowbro.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Amnesia", type: "psychic" },
            { name: "Headbutt", dp: 70, type: "normal" },
            { name: "Psychic", dp: 90, type: "psychic" },
        ],
    },
    {
        name: "Seaking",
        shortname: "seaking",
        hp: 160,
        info: {
            id: 119,
            type: "water",
            weakness: "electric",
            description:
                "The horn on its head is sharp like a drill. It bores a hole in a boulder to make its nest.",
        },
        images: {
            photo: "images/seaking.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Horn Attack", dp: 70, type: "normal" },
            { name: "Waterfall", dp: 80, type: "water" },
        ],
    },
    {
        name: "Nidoran(F)",
        shortname: "nidoran-f",
        hp: 160,
        info: {
            id: 29,
            type: "poison",
            weakness: "psychic",
            description:
                "Although small, its venomous barbs render this Pokemon dangerous. The female has smaller horns.",
        },
        images: {
            photo: "images/nidoran-f.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Double Kick", dp: 60, type: "fighting" },
            { name: "Growl", type: "normal" },
            { name: "Peck", dp: 35, type: "flying" },
        ],
    },
    {
        name: "Vulpix",
        shortname: "vulpix",
        hp: 160,
        info: {
            id: 37,
            type: "fire",
            weakness: "water",
            description:
                "At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
        },
        images: {
            photo: "images/vulpix.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Double Team", type: "normal" },
            { name: "Ember", dp: 40, type: "fire" },
            { name: "Feint Attack", dp: 60, type: "dark" },
            { name: "Quick Attack", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Seadra",
        shortname: "seadra",
        hp: 160,
        info: {
            id: 117,
            type: "water",
            weakness: "electric",
            description:
                "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
        },
        images: {
            photo: "images/seadra.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Bubble Beam", dp: 65, type: "water" },
            { name: "Smokescreen", type: "normal" },
        ],
    },
    {
        name: "Sandslash",
        shortname: "sandslash",
        hp: 160,
        info: {
            id: 28,
            type: "ground",
            weakness: "water",
            description:
                "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
        },
        images: {
            photo: "images/sandslash.jpg",
            typeIcon: "icons/ground.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Earthquake", dp: 100, type: "ground" },
            { name: "Slash", dp: 70, type: "normal" },
            { name: "Swords Dance", type: "normal" },
        ],
    },
    {
        name: "Clefable",
        shortname: "clefable",
        hp: 300,
        info: {
            id: 36,
            type: "fairy",
            weakness: "poison",
            description:
                "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
        },
        images: {
            photo: "images/clefable.jpg",
            typeIcon: "icons/fairy.jpg",
            weaknessIcon: "icons/poison.jpg",
        },
        moves: [
            { name: "Covet", dp: 60, type: "normal" },
            { name: "Disarming Voice", dp: 40, type: "fairy" },
            { name: "Minimize", type: "normal" },
            { name: "Pound", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Exeggcute",
        shortname: "exeggcute",
        hp: 230,
        info: {
            id: 102,
            type: "grass",
            weakness: "fire",
            description:
                "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
        },
        images: {
            photo: "images/exeggcute.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Bullet Seed", dp: 25, type: "grass" },
            { name: "Double Team", type: "normal" },
            { name: "Hidden Power", dp: 60, type: "normal" },
            { name: "Uproar", dp: 90, type: "normal" },
        ],
    },
    {
        name: "Dragonair",
        shortname: "dragonair",
        hp: 232,
        info: {
            id: 148,
            type: "dragon",
            weakness: "fairy",
            description:
                "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
        },
        images: {
            photo: "images/dragonair.jpg",
            typeIcon: "icons/dragon.jpg",
            weaknessIcon: "icons/fairy.jpg",
        },
        moves: [
            { name: "Aqua Tail", dp: 90, type: "water" },
            { name: "Dragon Dance", type: "dragon" },
            { name: "Dragon Rage", dp: 40, type: "dragon" },
            { name: "Slam", dp: 80, type: "normal" },
        ],
    },
    {
        name: "Ninetales",
        shortname: "ninetales",
        hp: 160,
        info: {
            id: 38,
            type: "fire",
            weakness: "water",
            description:
                "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
        },
        images: {
            photo: "images/ninetales.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Flamethrower", dp: 90, type: "fire" },
            { name: "Quick Attack", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Dratini",
        shortname: "dratini",
        hp: 192,
        info: {
            id: 147,
            type: "dragon",
            weakness: "fairy",
            description:
                "Long considered a mythical Pokemon until recently when a small colony was found living underwater.",
        },
        images: {
            photo: "images/dratini.jpg",
            typeIcon: "icons/dragon.jpg",
            weaknessIcon: "icons/fairy.jpg",
        },
        moves: [
            { name: "Dragon Dance", type: "dragon" },
            { name: "Dragon Rage", dp: 40, type: "dragon" },
            { name: "Slam", dp: 80, type: "normal" },
            { name: "Water Gun", dp: 40, type: "water" },
        ],
    },
    {
        name: "Magikarp",
        shortname: "magikarp",
        hp: 80,
        info: {
            id: 129,
            type: "water",
            weakness: "electric",
            description:
                "A pathetic excuse for a Pokemon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
        },
        images: {
            photo: "images/magikarp.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [{ name: "Splash", dp: 1, type: "water" }],
    },
    {
        name: "Kabuto",
        shortname: "kabuto",
        hp: 170,
        info: {
            id: 140,
            type: "rock",
            weakness: "grass",
            description:
                "It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.",
        },
        images: {
            photo: "images/kabuto.jpg",
            typeIcon: "icons/rock.jpg",
            weaknessIcon: "icons/grass.jpg",
        },
        moves: [
            { name: "Aqua Jet", dp: 40, type: "water" },
            { name: "Harden", type: "normal" },
            { name: "Mud Shot", dp: 55, type: "ground" },
            { name: "Scratch", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Gyarados",
        shortname: "gyarados",
        hp: 300,
        info: {
            id: 130,
            type: "water",
            weakness: "electric",
            description:
                "It appears whenever there is world conflict, burning down any place it travels through.",
        },
        images: {
            photo: "images/gyarados.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Crunch", dp: 80, type: "dark" },
            { name: "Dragon Dance", type: "dragon" },
            { name: "Dragon Tail", dp: 60, type: "dragon" },
            { name: "Hydro Pump", dp: 110, type: "water" },
        ],
    },
    {
        name: "Dragonite",
        shortname: "dragonite",
        hp: 292,
        info: {
            id: 149,
            type: "dragon",
            weakness: "fairy",
            description:
                "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
        },
        images: {
            photo: "images/dragonite.jpg",
            typeIcon: "icons/dragon.jpg",
            weaknessIcon: "icons/fairy.jpg",
        },
        moves: [
            { name: "Dragon Dance", type: "dragon" },
            { name: "Hurricane", dp: 110, type: "flying" },
            { name: "Outrage", dp: 120, type: "dragon" },
            { name: "Thunder Punch", dp: 75, type: "electric" },
        ],
    },
    {
        name: "Tauros",
        shortname: "tauros",
        hp: 160,
        info: {
            id: 128,
            type: "normal",
            weakness: "fighting",
            description:
                "They fight each other by locking horns. The herd's protector takes pride in its battle-scarred horns.",
        },
        images: {
            photo: "images/tauros.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [{ name: "Horn Attack", dp: 70, type: "normal" }],
    },
    {
        name: "Arcanine",
        shortname: "arcanine",
        hp: 290,
        info: {
            id: 59,
            type: "fire",
            weakness: "water",
            description:
                "This legendary Chinese Pokemon is considered magnificent. Many people are enchanted by its grand mane.",
        },
        images: {
            photo: "images/arcanine.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Double Team", type: "normal" },
            { name: "Extreme Speed", dp: 80, type: "normal" },
            { name: "Fire Fang", dp: 65, type: "fire" },
        ],
    },
    {
        name: "Nidoran(M)",
        shortname: "nidoran-m",
        hp: 160,
        info: {
            id: 32,
            type: "poison",
            weakness: "psychic",
            description:
                "It stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.",
        },
        images: {
            photo: "images/nidoran-m.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Double Kick", dp: 60, type: "fighting" },
            { name: "Growl", type: "normal" },
            { name: "Peck", dp: 35, type: "flying" },
        ],
    },
    {
        name: "Primeape",
        shortname: "primeape",
        hp: 240,
        info: {
            id: 57,
            type: "fighting",
            weakness: "flying",
            description:
                "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
        },
        images: {
            photo: "images/primeape.jpg",
            typeIcon: "icons/fighting.jpg",
            weaknessIcon: "icons/flying.jpg",
        },
        moves: [
            { name: "Assurance", dp: 60, type: "dark" },
            { name: "Karate chop", dp: 50, type: "fighting" },
            { name: "Leer", type: "normal" },
            { name: "Scratch", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Magneton",
        shortname: "magneton",
        hp: 160,
        info: {
            id: 82,
            type: "steel",
            weakness: "fire",
            description:
                "Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet.",
        },
        images: {
            photo: "images/magneton.jpg",
            typeIcon: "icons/steel.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Screech", type: "normal" },
            { name: "Tri Attack", dp: 80, type: "normal" },
        ],
    },
    {
        name: "Electabuzz",
        shortname: "electabuzz",
        hp: 240,
        info: {
            id: 125,
            type: "electric",
            weakness: "ground",
            description:
                "Electricity runs across the surface of its body. In darkness, its entire body glows a whitish-blue.",
        },
        images: {
            photo: "images/electabuzz.jpg",
            typeIcon: "icons/electric.jpg",
            weaknessIcon: "icons/ground.jpg",
        },
        moves: [
            { name: "Karate Chop", dp: 50, type: "fighting" },
            { name: "Leer", type: "normal" },
            { name: "Swift", dp: 60, type: "normal" },
            { name: "Thunder Punch", dp: 75, type: "electric" },
        ],
    },
    {
        name: "Kangaskhan",
        shortname: "kangaskhan",
        hp: 320,
        info: {
            id: 115,
            type: "normal",
            weakness: "fighting",
            description:
                "To protect its young, it will never give up during battle, no matter how badly wounded it is.",
        },
        images: {
            photo: "images/kangaskhan.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Dizzy Punch", dp: 70, type: "normal" },
            { name: "Leer", type: "normal" },
            { name: "Mega Punch", dp: 80, type: "normal" },
        ],
    },
    {
        name: "Pidgeotto",
        shortname: "pidgeotto",
        hp: 160,
        info: {
            id: 17,
            type: "flying",
            weakness: "electric",
            description:
                "It has outstanding vision. However high it flies, it is able to distinguish the movements of its prey.",
        },
        images: {
            photo: "images/pidgeotto.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Sand Attack", type: "ground" },
            { name: "Wing Attack", dp: 60, type: "flying" },
        ],
    },
    {
        name: "Pinsir",
        shortname: "pinsir",
        hp: 160,
        info: {
            id: 127,
            type: "bug",
            weakness: "fire",
            description:
                "When the temperature drops at night, it sleeps on treetops or among roots where it is well hidden.",
        },
        images: {
            photo: "images/pinsir.jpg",
            typeIcon: "icons/bug.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Harden", type: "normal" },
            { name: "Vice Grip", dp: 55, type: "normal" },
        ],
    },
    {
        name: "Eevee",
        shortname: "eevee",
        hp: 220,
        info: {
            id: 133,
            type: "normal",
            weakness: "fighting",
            description:
                "Sven's favorite Pokemon! Due to its unstable genetic makeup, this special Pokemon conceals many different possible evolutions.",
        },
        images: {
            photo: "images/eevee.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Growl", type: "normal" },
            { name: "Shadow Ball", dp: 80, type: "ghost" },
            { name: "Swift", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Dodrio",
        shortname: "dodrio",
        hp: 230,
        info: {
            id: 85,
            type: "flying",
            weakness: "electric",
            description:
                "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
        },
        images: {
            photo: "images/dodrio.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Drill Peck", dp: 80, type: "flying" },
            { name: "Pursuit", dp: 40, type: "dark" },
            { name: "Swords Dance", type: "normal" },
            { name: "Tri Attack", dp: 80, type: "normal" },
        ],
    },
    {
        name: "Ditto",
        shortname: "ditto",
        hp: 206,
        info: {
            id: 132,
            type: "normal",
            weakness: "fighting",
            description:
                "Duncan's favorite Pokemon (he has an awesome painting of Ditto on his wall). It can transform into anything. When it sleeps, it changes into a stone to avoid being attacked.",
        },
        images: {
            photo: "images/ditto.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [{ name: "Transform", dp: 40, type: "normal" }],
    },
    {
        name: "Zubat",
        shortname: "zubat",
        hp: 160,
        info: {
            id: 41,
            type: "poison",
            weakness: "psychic",
            description:
                "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
        },
        images: {
            photo: "images/zubat.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Double Team", type: "normal" },
            { name: "Poison Fang", dp: 50, type: "poison" },
            { name: "Wing Attack", dp: 60, type: "flying" },
        ],
    },
    {
        name: "Koffing",
        shortname: "koffing",
        hp: 190,
        info: {
            id: 109,
            type: "poison",
            weakness: "psychic",
            description:
                "If one gets close enough to it when it expels poisonous gas, the gas swirling inside it can be seen.",
        },
        images: {
            photo: "images/koffing.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Tackle", dp: 40, type: "normal" },
            { name: "Assurance", dp: 60, type: "dark" },
            { name: "Sludge", dp: 65, type: "poison" },
            { name: "Smokescreen", type: "normal" },
        ],
    },
    {
        name: "Vaporeon",
        shortname: "vaporeon",
        hp: 370,
        info: {
            id: 134,
            type: "water",
            weakness: "grass",
            description:
                "As it uses the fins on the tip of its tail to swim, it blends with the water perfectly.",
        },
        images: {
            photo: "images/vaporeon.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/grass.jpg",
        },
        moves: [
            { name: "Hydro Pump", dp: 110, type: "water" },
            { name: "Ice Beam", dp: 100, type: "ice" },
            { name: "Quick Attack", dp: 40, type: "normal" },
            { name: "Sand Attack", type: "ground" },
        ],
    },
    {
        name: "Kabutops",
        shortname: "kabutops",
        hp: 230,
        info: {
            id: 141,
            type: "rock",
            weakness: "grass",
            description:
                "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.",
        },
        images: {
            photo: "images/kabutops.jpg",
            typeIcon: "icons/rock.jpg",
            weaknessIcon: "icons/grass.jpg",
        },
        moves: [
            { name: "Ancient Power", dp: 60, type: "rock" },
            { name: "Harden", type: "normal" },
            { name: "Night Slash", dp: 70, type: "dark" },
            { name: "Slash", dp: 70, type: "normal" },
        ],
    },
    {
        name: "Rapidash",
        shortname: "rapidash",
        hp: 160,
        info: {
            id: 78,
            type: "fire",
            weakness: "water",
            description:
                "Very competitive, this Pokemon will chase anything that moves fast in the hopes of racing it.",
        },
        images: {
            photo: "images/rapidash.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Fire Blast", dp: 110, type: "fire" },
            { name: "Stomp", dp: 65, type: "normal" },
            { name: "Tackle", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Mankey",
        shortname: "mankey",
        hp: 160,
        info: {
            id: 56,
            type: "fighting",
            weakness: "flying",
            description:
                "Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
        },
        images: {
            photo: "images/mankey.jpg",
            typeIcon: "icons/fighting.jpg",
            weaknessIcon: "icons/flying.jpg",
        },
        moves: [
            { name: "Karate chop", dp: 50, type: "fighting" },
            { name: "Leer", type: "normal" },
            { name: "Scratch", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Hitmonlee",
        shortname: "hitmonlee",
        hp: 210,
        info: {
            id: 106,
            type: "fighting",
            weakness: "flying",
            description:
                "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe.",
        },
        images: {
            photo: "images/hitmonlee.jpg",
            typeIcon: "icons/fighting.jpg",
            weaknessIcon: "icons/flying.jpg",
        },
        moves: [
            { name: "Blaze Kick", dp: 85, type: "fire" },
            { name: "Double Kick", dp: 60, type: "fighting" },
            { name: "Meditate", type: "psychic" },
            { name: "Mega Kick", dp: 120, type: "normal" },
        ],
    },
    {
        name: "Venonat",
        shortname: "venonat",
        hp: 160,
        info: {
            id: 48,
            type: "bug",
            weakness: "fire",
            description:
                "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
        },
        images: {
            photo: "images/venonat.jpg",
            typeIcon: "icons/bug.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [{ name: "Psybeam", dp: 65, type: "psychic" }],
    },
    {
        name: "Ponyta",
        shortname: "ponyta",
        hp: 160,
        info: {
            id: 77,
            type: "fire",
            weakness: "water",
            description:
                "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes. Not to be confused with the 20% cooler PonyTA.",
        },
        images: {
            photo: "images/ponyta.jpg",
            typeIcon: "icons/fire.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Ember", dp: 40, type: "fire" },
            { name: "Growl", type: "normal" },
            { name: "Stomp", dp: 65, type: "normal" },
        ],
    },
    {
        name: "Nidoking",
        shortname: "nidoking",
        hp: 160,
        info: {
            id: 34,
            type: "poison",
            weakness: "psychic",
            description:
                "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
        },
        images: {
            photo: "images/nidoking.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Venoshock", dp: 65, type: "poison" },
            { name: "Mega Horn", dp: 125, type: "bug" },
            { name: "Earth Power", dp: 90, type: "ground" },
            { name: "Amnesia", type: "psychic" },
        ],
    },
    {
        name: "Rattata",
        shortname: "rattata",
        hp: 160,
        info: {
            id: 19,
            type: "normal",
            weakness: "fighting",
            description:
                "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
        },
        images: {
            photo: "images/rattata.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [{ name: "Bite", dp: 60, type: "dark" }],
    },
    {
        name: "Mr. Mime",
        shortname: "mr-mime",
        hp: 160,
        info: {
            id: 122,
            type: "psychic",
            weakness: "ghost",
            description:
                "Always practices its pantomime act. It makes enemies believe something exists that really doesn't.",
        },
        images: {
            photo: "images/mr-mime.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/ghost.jpg",
        },
        moves: [
            { name: "Barrier", type: "psychic" },
            { name: "Psybeam", dp: 65, type: "psychic" },
        ],
    },
    {
        name: "Kingler",
        shortname: "kingler",
        hp: 220,
        info: {
            id: 99,
            type: "water",
            weakness: "electric",
            description:
                "It can hardly lift its massive, overgrown pincer. The pincer's size makes it difficult to aim properly.",
        },
        images: {
            photo: "images/kingler.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Crabhammer", dp: 100, type: "water" },
            { name: "Harden", type: "normal" },
            { name: "Mud Shot", dp: 65, type: "ground" },
            { name: "Vice Grip", dp: 55, type: "normal" },
        ],
    },
    {
        name: "Nidoqueen",
        shortname: "nidoqueen",
        hp: 160,
        info: {
            id: 31,
            type: "poison",
            weakness: "psychic",
            description:
                "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
        },
        images: {
            photo: "images/nidoqueen.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Venoshock", dp: 65, type: "poison" },
            { name: "Superpower", dp: 120, type: "fighting" },
            { name: "Earth Power", dp: 90, type: "ground" },
            { name: "Charm", type: "fairy" },
        ],
    },
    {
        name: "Graveler",
        shortname: "graveler",
        hp: 220,
        info: {
            id: 75,
            type: "rock",
            weakness: "water",
            description:
                "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
        },
        images: {
            photo: "images/graveler.jpg",
            typeIcon: "icons/rock.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Bulldoze", dp: 60, type: "ground" },
            { name: "Defense Curl", type: "normal" },
            { name: "Hidden Power", dp: 60, type: "normal" },
            { name: "Smack Down", dp: 50, type: "rock" },
        ],
    },
    {
        name: "Staryu",
        shortname: "staryu",
        hp: 160,
        info: {
            id: 120,
            type: "water",
            weakness: "electric",
            description:
                "An enigmatic Pokemon that can effortlessly regenerate any appendage it loses in battle.",
        },
        images: {
            photo: "images/staryu.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Harden", type: "normal" },
            { name: "Water Gun", dp: 40, type: "water" },
        ],
    },
    {
        name: "Mew",
        shortname: "mew",
        hp: 160,
        info: {
            id: 151,
            type: "psychic",
            weakness: "dark",
            description:
                "Its DNA is said to contain the genetic codes of all Pokemon.",
        },
        images: {
            photo: "images/mew.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Amnesia", type: "psychic" },
            { name: "Psychic", dp: 90, type: "psychic" },
        ],
    },
    {
        name: "Kadabra",
        shortname: "kadabra",
        hp: 190,
        info: {
            id: 64,
            type: "psychic",
            weakness: "dark",
            description:
                "It emits special alpha waves from its body that induce headaches just by being close by.",
        },
        images: {
            photo: "images/kadabra.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Fire Punch", dp: 75, type: "fire" },
            { name: "Ice Punch", dp: 75, type: "ice" },
            { name: "Kinesis", type: "psychic" },
            { name: "Psychic", dp: 90, type: "psychic" },
        ],
    },
    {
        name: "Beedrill",
        shortname: "beedrill",
        hp: 240,
        info: {
            id: 15,
            type: "flying",
            weakness: "fire",
            description:
                "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
        },
        images: {
            photo: "images/beedrill.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Pursuit", dp: 40, type: "dark" },
            { name: "Swords Dance", type: "normal" },
            { name: "Twineedle", dp: 25, type: "bug" },
            { name: "Venoshock", dp: 60, type: "poison" },
        ],
    },
    {
        name: "Metapod",
        shortname: "metapod",
        hp: 160,
        info: {
            id: 11,
            type: "grass",
            weakness: "fire",
            description:
                "A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.",
        },
        images: {
            photo: "images/metapod.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Harden", type: "normal" },
            { name: "Tackle", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Ekans",
        shortname: "ekans",
        hp: 180,
        info: {
            id: 23,
            type: "poison",
            weakness: "psychic",
            description:
                "It always hides in grass. When first born, it has no poison, so its bite is painful, but harmless.",
        },
        images: {
            photo: "images/ekans.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Acid", dp: 40, type: "poison" },
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Leer", type: "normal" },
            { name: "Mud Bomb", dp: 65, type: "ground" },
        ],
    },
    {
        name: "Chansey",
        shortname: "chansey",
        hp: 610,
        info: {
            id: 113,
            type: "normal",
            weakness: "fighting",
            description:
                "Being few in number and difficult to capture, it is said to bring happiness to the Trainer who catches it.",
        },
        images: {
            photo: "images/chansey.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [
            { name: "Defense Curl", type: "normal" },
            { name: "Egg Bomb", dp: 100, type: "normal" },
            { name: "Growl", type: "normal" },
            { name: "Pound", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Golem",
        shortname: "golem",
        hp: 270,
        info: {
            id: 76,
            type: "rock",
            weakness: "water",
            description:
                "It is enclosed in a hard shell that is as rugged as slabs of rock. It sheds skin once a year to grow larger.",
        },
        images: {
            photo: "images/golem.jpg",
            typeIcon: "icons/rock.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Defense Curl", type: "normal" },
            { name: "Earthquake", dp: 100, type: "ground" },
            { name: "Rock Throw", dp: 50, type: "rock" },
            { name: "Steamroller", dp: 65, type: "bug" },
        ],
    },
    {
        name: "Persian",
        shortname: "persian",
        hp: 160,
        info: {
            id: 53,
            type: "normal",
            weakness: "fighting",
            description:
                "Many adore it for its sophisticated air. However, it will lash out and scratch for little reason.",
        },
        images: {
            photo: "images/persian.jpg",
            typeIcon: "icons/normal.jpg",
            weaknessIcon: "icons/fighting.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Screech", type: "normal" },
            { name: "Swift", dp: 60, type: "normal" },
        ],
    },
    {
        name: "Paras",
        shortname: "paras",
        hp: 160,
        info: {
            id: 46,
            type: "bug",
            weakness: "fire",
            description:
                "Mushrooms named tochukaso grow on its back. They grow along with the host Paras.",
        },
        images: {
            photo: "images/paras.jpg",
            typeIcon: "icons/bug.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Peck", dp: 35, type: "flying" },
            { name: "Scratch", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Aerodactyl",
        shortname: "aerodactyl",
        hp: 270,
        info: {
            id: 142,
            type: "flying",
            weakness: "water",
            description:
                "This vicious Pokemon is said to have flown in ancient skies while shrieking high-pitched cries.",
        },
        images: {
            photo: "images/aerodactyl.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Double Team", type: "normal" },
            { name: "Ice Fang", dp: 65, type: "ice" },
            { name: "Wing Attack", dp: 60, type: "flying" },
        ],
    },
    {
        name: "Slowpoke",
        shortname: "slowpoke",
        hp: 160,
        info: {
            id: 79,
            type: "psychic",
            weakness: "dark",
            description:
                "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
        },
        images: {
            photo: "images/slowpoke.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Amnesia", type: "psychic" },
            { name: "Headbutt", dp: 70, type: "normal" },
        ],
    },
    {
        name: "Tangela",
        shortname: "tangela",
        hp: 160,
        info: {
            id: 114,
            type: "grass",
            weakness: "fire",
            description:
                "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.",
        },
        images: {
            photo: "images/tangela.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Slam", dp: 80, type: "normal" },
            { name: "Vine Whip", dp: 45, type: "grass" },
        ],
    },
    {
        name: "Tentacool",
        shortname: "tentacool",
        hp: 160,
        info: {
            id: 72,
            type: "water",
            weakness: "electric",
            description:
                "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
        },
        images: {
            photo: "images/tentacool.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Acid", dp: 40, type: "poison" },
            { name: "Barrier", type: "psychic" },
            { name: "Water Gun", dp: 40, type: "water" },
        ],
    },
    {
        name: "Haunter",
        shortname: "haunter",
        hp: 200,
        info: {
            id: 93,
            type: "ghost",
            weakness: "dark",
            description:
                "It hides in the dark, planning to take the life of the next living thing that wanders close by.",
        },
        images: {
            photo: "images/haunter.jpg",
            typeIcon: "icons/ghost.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Double Team", type: "normal" },
            { name: "Shadow Punch", dp: 60, type: "ghost" },
            { name: "Thief", dp: 60, type: "dark" },
            { name: "Venoshock", dp: 65, type: "poison" },
        ],
    },
    {
        name: "Doduo",
        shortname: "doduo",
        hp: 180,
        info: {
            id: 84,
            type: "flying",
            weakness: "electric",
            description:
                "It races through grassy plains with powerful strides, leaving footprints up to four inches deep.",
        },
        images: {
            photo: "images/doduo.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Growl", type: "normal" },
            { name: "Peck", dp: 35, type: "flying" },
            { name: "Pursuit", dp: 40, type: "dark" },
            { name: "Quick Attack", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Seel",
        shortname: "seel",
        hp: 160,
        info: {
            id: 86,
            type: "water",
            weakness: "electric",
            description:
                "The light blue fur that covers it keeps it protected against the cold. It loves iceberg-filled oceans.",
        },
        images: {
            photo: "images/seel.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Growl", type: "normal" },
            { name: "Headbutt", dp: 70, type: "normal" },
        ],
    },
    {
        name: "Poliwag",
        shortname: "poliwag",
        hp: 160,
        info: {
            id: 60,
            type: "water",
            weakness: "electric",
            description:
                "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
        },
        images: {
            photo: "images/poliwag.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [{ name: "Water Gun", dp: 40, type: "water" }],
    },
    {
        name: "Rhyhorn",
        shortname: "rhyhorn",
        hp: 160,
        info: {
            id: 111,
            type: "rock",
            weakness: "water",
            description:
                "It doesn't care if there is anything in its way. It just charges and destroys all obstacles.",
        },
        images: {
            photo: "images/rhyhorn.jpg",
            typeIcon: "icons/rock.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Horn Attack", dp: 65, type: "normal" },
            { name: "Peck", dp: 35, type: "flying" },
        ],
    },
    {
        name: "Hypno",
        shortname: "hypno",
        hp: 280,
        info: {
            id: 97,
            type: "psychic",
            weakness: "dark",
            description:
                "It carries a pendulum-like device. There once was an incident in which it took away a child it hypnotized.",
        },
        images: {
            photo: "images/hypno.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Fire Punch", dp: 75, type: "fire" },
            { name: "Headbutt", dp: 70, type: "normal" },
            { name: "Meditate", type: "psychic" },
            { name: "Psychic", dp: 90, type: "psychic" },
        ],
    },
    {
        name: "Onix",
        shortname: "onix",
        hp: 160,
        info: {
            id: 95,
            type: "rock",
            weakness: "water",
            description:
                "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
        },
        images: {
            photo: "images/onix.jpg",
            typeIcon: "icons/rock.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Dig", dp: 80, type: "ground", warmup: 1 },
            { name: "Harden", type: "normal" },
            { name: "Rock Slide", dp: 75, type: "rock" },
            { name: "Slam", dp: 80, type: "normal" },
        ],
    },
    {
        name: "Butterfree",
        shortname: "butterfree",
        hp: 230,
        info: {
            id: 12,
            type: "flying",
            weakness: "fire",
            description:
                "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
        },
        images: {
            photo: "images/butterfree.jpg",
            typeIcon: "icons/flying.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Double Team", type: "normal" },
            { name: "Gust", dp: 40, type: "flying" },
            { name: "Psybeam", dp: 65, type: "psychic" },
            { name: "Silver Wind", dp: 60, type: "bug" },
        ],
    },
    {
        name: "Geodude",
        shortname: "geodude",
        hp: 190,
        info: {
            id: 74,
            type: "rock",
            weakness: "water",
            description:
                "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
        },
        images: {
            photo: "images/geodude.jpg",
            typeIcon: "icons/rock.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Bulldoze", dp: 60, type: "ground" },
            { name: "Defense Curl", type: "normal" },
            { name: "Rock Throw", dp: 50, type: "rock" },
            { name: "Tackle", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Voltorb",
        shortname: "voltorb",
        hp: 160,
        info: {
            id: 100,
            type: "electric",
            weakness: "ground",
            description:
                "It was discovered when Poke balls were introduced. It is said that there is some connection.",
        },
        images: {
            photo: "images/voltorb.jpg",
            typeIcon: "icons/electric.jpg",
            weaknessIcon: "icons/ground.jpg",
        },
        moves: [
            { name: "Charge Beam", dp: 50, type: "electric" },
            { name: "Rollout", dp: 30, type: "rock" },
            { name: "Screech", type: "normal" },
            { name: "Tackle", dp: 40, type: "normal" },
        ],
    },
    {
        name: "Dugtrio",
        shortname: "dugtrio",
        hp: 180,
        info: {
            id: 51,
            type: "ground",
            weakness: "water",
            description:
                "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake.",
        },
        images: {
            photo: "images/dugtrio.jpg",
            typeIcon: "icons/ground.jpg",
            weaknessIcon: "icons/water.jpg",
        },
        moves: [
            { name: "Earthquake", dp: 100, type: "ground" },
            { name: "Growl", type: "normal" },
            { name: "Night Slash", dp: 70, type: "dark" },
            { name: "Tri Attack", dp: 80, type: "normal" },
        ],
    },
    {
        name: "Abra",
        shortname: "abra",
        hp: 160,
        info: {
            id: 63,
            type: "psychic",
            weakness: "dark",
            description:
                "Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps.",
        },
        images: {
            photo: "images/abra.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Double Team", type: "normal" },
            { name: "Energy Ball", dp: 90, type: "grass" },
            { name: "Psychic", dp: 90, type: "psychic" },
            { name: "Thief", dp: 60, type: "dark" },
        ],
    },
    {
        name: "Machoke",
        shortname: "machoke",
        hp: 160,
        info: {
            id: 67,
            type: "fighting",
            weakness: "flying",
            description:
                "Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.",
        },
        images: {
            photo: "images/machoke.jpg",
            typeIcon: "icons/fighting.jpg",
            weaknessIcon: "icons/flying.jpg",
        },
        moves: [
            { name: "Karate chop", dp: 50, type: "fighting" },
            { name: "Leer", type: "normal" },
        ],
    },
    {
        name: "Raichu",
        shortname: "raichu",
        hp: 160,
        info: {
            id: 26,
            type: "electric",
            weakness: "ground",
            description:
                "Its long tail serves as a ground to protect itself from its own high voltage power.",
        },
        images: {
            photo: "images/raichu.jpg",
            typeIcon: "icons/electric.jpg",
            weaknessIcon: "icons/ground.jpg",
        },
        moves: [
            { name: "Quick Attack", dp: 40, type: "normal" },
            { name: "Tackle", dp: 60, type: "normal" },
            { name: "Thunder", dp: 120, type: "electric" },
            { name: "Thunderbolt", dp: 90, type: "electric" },
        ],
    },
    {
        name: "Drowzee",
        shortname: "drowzee",
        hp: 230,
        info: {
            id: 96,
            type: "psychic",
            weakness: "dark",
            description:
                "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
        },
        images: {
            photo: "images/drowzee.jpg",
            typeIcon: "icons/psychic.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Headbutt", dp: 70, type: "normal" },
            { name: "Ice Punch", dp: 75, type: "ice" },
            { name: "Meditate", type: "psychic" },
            { name: "Psybeam", dp: 65, type: "psychic" },
        ],
    },
    {
        name: "Exeggutor",
        shortname: "exeggutor",
        hp: 300,
        info: {
            id: 103,
            type: "grass",
            weakness: "fire",
            description:
                "Its cries are very noisy. This is because each of the 3 heads thinks about whatever it likes.",
        },
        images: {
            photo: "images/exeggutor.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Barrage", dp: 15, type: "normal" },
            { name: "Confide", type: "normal" },
            { name: "Seed Bomb", dp: 80, type: "grass" },
            { name: "Stomp", dp: 65, type: "normal" },
        ],
    },
    {
        name: "Dewgong",
        shortname: "dewgong",
        hp: 290,
        info: {
            id: 87,
            type: "water",
            weakness: "electric",
            description:
                "Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters.",
        },
        images: {
            photo: "images/dewgong.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Aqua Tail", dp: 90, type: "water" },
            { name: "Growl", type: "normal" },
            { name: "Headbutt", dp: 70, type: "normal" },
            { name: "Ice Beam", dp: 90, type: "ice" },
        ],
    },
    {
        name: "Arbok",
        shortname: "arbok",
        hp: 230,
        info: {
            id: 24,
            type: "poison",
            weakness: "psychic",
            description:
                "It is rumored that the ferocious warning markings on its belly differ from area to area.",
        },
        images: {
            photo: "images/arbok.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Acid", dp: 40, type: "poison" },
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Screech", type: "normal" },
            { name: "Thunder Fang", dp: 65, type: "electric" },
        ],
    },
    {
        name: "Electrode",
        shortname: "electrode",
        hp: 230,
        info: {
            id: 101,
            type: "electric",
            weakness: "ground",
            description:
                "It is dangerous. If it has too much electricity and has nothing to do, it amuses itself by exploding.",
        },
        images: {
            photo: "images/electrode.jpg",
            typeIcon: "icons/electric.jpg",
            weaknessIcon: "icons/ground.jpg",
        },
        moves: [
            { name: "Screech", type: "normal" },
            { name: "Tackle", dp: 40, type: "electric" },
            { name: "Thief", dp: 60, type: "dark" },
            { name: "Thunder", dp: 120, type: "electric" },
        ],
    },
    {
        name: "Vileplume",
        shortname: "vileplume",
        hp: 160,
        info: {
            id: 45,
            type: "grass",
            weakness: "fire",
            description:
                "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
        },
        images: {
            photo: "images/vileplume.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Hidden Power", dp: 60, type: "normal" },
            { name: "Petal Blizzard", dp: 90, type: "grass" },
            { name: "Swords Dance", type: "normal" },
            { name: "Venoshock", dp: 65, type: "poison" },
        ],
    },
    {
        name: "Blastoise",
        shortname: "blastoise",
        hp: 268,
        info: {
            id: 9,
            type: "water",
            weakness: "grass",
            description:
                "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.",
        },
        images: {
            photo: "images/blastoise.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/grass.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Flash Cannon", dp: 80, type: "steel" },
            { name: "Hydro Pump", dp: 110, type: "water" },
            { name: "Withdraw", type: "water" },
        ],
    },
    {
        name: "Articuno",
        shortname: "articuno",
        hp: 290,
        info: {
            id: 144,
            type: "ice",
            weakness: "rock",
            description:
                "A legendary bird Pokemon that is said to appear to doomed people who are lost in icy mountains.",
        },
        images: {
            photo: "images/articuno.jpg",
            typeIcon: "icons/ice.jpg",
            weaknessIcon: "icons/rock.jpg",
        },
        moves: [
            { name: "Ancient Power", dp: 60, type: "rock" },
            { name: "Double Team", type: "normal" },
            { name: "Hurricane", dp: 110, type: "flying" },
            { name: "Ice Beam", dp: 90, type: "ice" },
        ],
    },
    {
        name: "Nidorino",
        shortname: "nidorino",
        hp: 160,
        info: {
            id: 33,
            type: "poison",
            weakness: "psychic",
            description:
                "It raises its big ears to check its surroundings. If it senses anything, it attacks immediately.",
        },
        images: {
            photo: "images/nidorino.jpg",
            typeIcon: "icons/poison.jpg",
            weaknessIcon: "icons/psychic.jpg",
        },
        moves: [
            { name: "Bite", dp: 60, type: "dark" },
            { name: "Double Kick", dp: 60, type: "fighting" },
            { name: "Horn Attack", dp: 65, type: "normal" },
            { name: "Leer", type: "normal" },
        ],
    },
    {
        name: "Machop",
        shortname: "machop",
        hp: 160,
        info: {
            id: 66,
            type: "fighting",
            weakness: "flying",
            description:
                "Always brimming with power, it passes time by lifting boulders. Doing so makes it even stronger.",
        },
        images: {
            photo: "images/machop.jpg",
            typeIcon: "icons/fighting.jpg",
            weaknessIcon: "icons/flying.jpg",
        },
        moves: [
            { name: "Karate chop", dp: 50, type: "fighting" },
            { name: "Leer", type: "normal" },
        ],
    },
    {
        name: "Bellsprout",
        shortname: "bellsprout",
        hp: 210,
        info: {
            id: 69,
            type: "grass",
            weakness: "fire",
            description:
                "A carnivorous Pokemon that traps and eats bugs. It uses its root feet to soak up needed moisture.",
        },
        images: {
            photo: "images/bellsprout.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Acid", dp: 40, type: "poison" },
            { name: "Growth", type: "grass" },
            { name: "Vine Whip", dp: 45, type: "grass" },
            { name: "Wrap", dp: 15, type: "normal" },
        ],
    },
    {
        name: "Victreebel",
        shortname: "victreebel",
        hp: 80,
        info: {
            id: 71,
            type: "grass",
            weakness: "fire",
            description:
                "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
        },
        images: {
            photo: "images/victreebel.jpg",
            typeIcon: "icons/grass.jpg",
            weaknessIcon: "icons/fire.jpg",
        },
        moves: [
            { name: "Acid Spray", dp: 40, type: "poison" },
            { name: "Leaf Tornado", dp: 65, type: "flying" },
            { name: "Razor Leaf", dp: 55, type: "grass" },
            { name: "Tickle", type: "normal" },
        ],
    },
    {
        name: "Gastly",
        shortname: "gastly",
        hp: 170,
        info: {
            id: 92,
            type: "ghost",
            weakness: "dark",
            description:
                "With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind.",
        },
        images: {
            photo: "images/gastly.jpg",
            typeIcon: "icons/ghost.jpg",
            weaknessIcon: "icons/dark.jpg",
        },
        moves: [
            { name: "Double Team", type: "normal" },
            { name: "Lick", dp: 30, type: "ghost" },
            { name: "Payback", dp: 50, type: "dark" },
            { name: "Thief", dp: 60, type: "dark" },
        ],
    },
    {
        name: "Machamp",
        shortname: "machamp",
        hp: 160,
        info: {
            id: 68,
            type: "fighting",
            weakness: "flying",
            description:
                "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.",
        },
        images: {
            photo: "images/machamp.jpg",
            typeIcon: "icons/fighting.jpg",
            weaknessIcon: "icons/flying.jpg",
        },
        moves: [
            { name: "Leer", type: "normal" },
            { name: "Low Sweep", dp: 65, type: "fighting" },
            { name: "Strength", dp: 80, type: "normal" },
            { name: "Ice Punch", dp: 75, type: "ice" },
        ],
    },
    {
        name: "Horsea",
        shortname: "horsea",
        hp: 170,
        info: {
            id: 116,
            type: "water",
            weakness: "electric",
            description:
                "It maintains balance using its tail, which is wound up like a coil. It may spray ink from its mouth.",
        },
        images: {
            photo: "images/horsea.jpg",
            typeIcon: "icons/water.jpg",
            weaknessIcon: "icons/electric.jpg",
        },
        moves: [
            { name: "Aurora Beam", dp: 65, type: "ice" },
            { name: "Bubble", dp: 40, type: "water" },
            { name: "Smokescreen", type: "normal" },
            { name: "Twister", dp: 40, type: "dragon" },
        ],
    },
];
let imageGet = function(id) {
    while (id.length != 3) id = "0" + id;
    return id;
};
let newData = oldData.map((ele) => {
    return {
        id: ele.info.id,
        name: ele.name,
        alias: ele.shortname,
        type: ele.info.type,
        description: ele.info.description,
        image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageGet(
            ele.info.id + ""
        )}.png`,
        weakness: ele.info.weakness,
        hp: ele.hp,
        moves: [...ele.moves],
    };
});

fs.writeFileSync("./pokemonsData.txt", JSON.stringify(newData));
