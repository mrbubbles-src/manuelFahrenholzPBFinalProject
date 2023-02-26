/**
 * PokéMon Lite w/ chalk
 * DCI FBW WD D07 A
 * Programming Basics Module Final Project
 * by Manuel Fahrenholz
 */

import chalk from "chalk";

/**
 * POKEMON CLASS
 *
 * constructor:
 * Takes in 3 properties
 *      name, health magic
 * internal properties:
 *      current Health (damage will be subtracted here; takes input from health)
 *      maximum Health (comparison property; takes input from health)
 *      current Magic (cost of skill will be subtracted here; takes input from magic)
 *      maximum Magic (comparison property; takes input from magic)
 *      empty skills array
 *
 * class methods:
 *
 * show status:
 *      shows pokemon name, current and max health, current and max mana (magic) and available skills
 *
 * attack:
 *      checks if attack is possible (= enough magic for skill cost is available)
 *          if not return message that there's not enough MP (magic points / mana points)
 *      if attack is possible
 *          subtract magcic cost of skill from current magic value
 *          subtract skill damage value from opponent current health value
 *              if health of opponent is smaller or equal to 0
 *                  set oponents health to 0
 *                  return victory string
 *      return basic attack string (i.e. "pokemon.name attacked opponent.name with skill.name and did x dmg. opponent.name has x/y hp left")
 *
 * getMagic / getHealth:
 *      checks if maximum health/magic minus current health/magic is 0 (= nothing was lost before)
 *          return string that says is already max
 *      chek if maximum healt/magic minus current health/magic is smaller or equal to what potion is supposed to retun if function is called
 *          set current healt/magic to maximum health/magic
 *          return string that says current/max value and no more potions needed
 *      else add x to current healt/magic value
 *       return string that says how much was added to pokemon and current/max values
 *
 * learnAttackSkill:
 *      takes one argument ("skill name")
 *    checks if skills array length is already equal to 4
 *      it it is return string that says can't learn any more attacks
 *    checks if pokemon already know that skill that you want it to learn
 *      if it knows it, return string that says it already knows it
 *    else push skill to skill array and return string that pokemon learned skill.name
 */
class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.curHealth = health;
        this.maxHealth = health;
        this.magic = magic;
        this.curMagic = magic;
        this.maxMagic = magic;
        this.skills = [];
    }
    showStatus() {
        let availableSkills = [];
        if (this.skills.length === 0) {
            availableSkills.push(
                `${this.name} ${chalk.bold("has not learned any skills yet!")}`
            );
        }
        for (let i = 0; i < this.skills.length; i++) {
            if (this.skills.length !== 0) {
                availableSkills.push(this.skills[i].skillName);
            }
        }
        return `${this.name}
${chalk.bold("HP:")} ${chalk.hex("#49D188").bold([this.curHealth])}${chalk.bold(
            "/"
        )}${chalk.hex("#49D188").bold([this.maxHealth])}
${chalk.bold("MP:")} ${chalk.hex("#4694E8").bold([this.curMagic])}${chalk.bold(
            "/"
        )}${chalk.hex("#4694E8").bold([this.maxMagic])}
${chalk.bold("Available Skills:")} ${availableSkills.join(", ")}`;
    }
    attack(skillIndex, attackedPokemon) {
        if (this.curMagic < this.skills[skillIndex].MPCost) {
            return `${this.name} ${chalk.bold("tried to use")} ${
                this.skills[skillIndex].skillName
            } ${chalk.bold("but has only")} ${chalk
                .hex("#4694E8")
                .bold([this.curMagic])}MP left.`;
        } else if (this.curMagic >= this.skills[skillIndex].MPCost) {
            this.curMagic -= this.skills[skillIndex].MPCost;
            attackedPokemon.curHealth -= this.skills[skillIndex].dmgAmount;
            if (attackedPokemon.curHealth <= 0) {
                attackedPokemon.curHealth = 0;
                return `${this.name} ${chalk.bold("used")} ${
                    this.skills[skillIndex].skillName
                } ${chalk.bold("against")} ${attackedPokemon.name}. ${
                    attackedPokemon.name
                } ${chalk.bold("fainted!")} ${this.name} ${chalk.bold(
                    "has won the battle!"
                )}`;
            }
            return `${this.name} ${chalk.bold("used")} ${
                this.skills[skillIndex].skillName
            } ${chalk.bold("against")} ${attackedPokemon.name} ${chalk.bold(
                "and dealt"
            )} ${chalk
                .hex("#DE2336")
                .bold([this.skills[skillIndex].dmgAmount])} ${chalk.bold(
                "damage!"
            )} ${attackedPokemon.name} ${chalk.bold("has")} ${chalk
                .hex("#49D188")
                .bold([attackedPokemon.curHealth])}${chalk.bold("/")}${chalk
                .hex("#49D188")
                .bold([attackedPokemon.maxHealth])} ${chalk.bold("HP left")}`;
        }
    }
    getMagic() {
        if (this.maxMagic - this.curMagic === 0) {
            return `${this.name} ${chalk.bold("is already at")} ${chalk
                .hex("#4694E8")
                .bold([this.curMagic])}}${chalk.bold("/")}${chalk
                .hex("#4694E8")
                .bold([this.maxMagic])}${chalk.bold("MP. No potion used.")}`;
        } else if (this.maxMagic - this.curMagic <= 40) {
            this.curMagic = this.maxMagic;
            return `${this.name} ${chalk.bold("is now at")} ${chalk
                .hex("#4694E8")
                .bold([this.curMagic])}}${chalk.bold("/")}${chalk
                .hex("#4694E8")
                .bold([this.maxMagic])}${chalk.bold(
                "MP - No more Potions needed!"
            )}`;
        } else {
            this.curMagic += 40;
            return `${this.name} ${chalk.bold(
                "used a Potion and restored"
            )} ${chalk.hex("#4694E8").bold("40")}${chalk.bold("MP")}. ${
                this.name
            } ${chalk.bold("is now at")} ${chalk
                .hex("#4694E8")
                .bold([this.curMagic])}${chalk.bold("/")}${chalk
                .hex("#4694E8")
                .bold([this.maxMagic])}${chalk.bold("MP")}.`;
        }
    }
    getHealth() {
        if (this.maxHealth - this.curHealth === 0) {
            return `${this.name} ${chalk.bold("is already at")} ${chalk
                .hex("#49D188")
                .bold([this.curHealth])}${chalk.bold("/")}${chalk
                .hex("#49D188")
                .bold([this.maxHealth])}${chalk.bold("HP. No potion used.")}`;
        } else if (this.maxHealth - this.curHealth <= 50) {
            this.curHealth = this.maxHealth;
            return `${this.name} ${chalk.bold("is now at")} ${chalk
                .hex("#49D188")
                .bold([this.curHealth])}${chalk.bold("/")}${chalk
                .hex("#49D188")
                .bold([this.maxHealth])}${chalk.bold(
                "HP - No more Potions needed!"
            )}`;
        } else {
            this.curHealth += 50;
            return `${this.name} ${chalk.bold(
                "used a Potion and restored"
            )} ${chalk.hex("#49D188").bold("50")}${chalk.bold("HP.")} ${
                this.name
            } ${chalk.bold("is now at")} ${chalk
                .hex("#49D188")
                .bold([this.curHealth])}${chalk.bold("/")}${chalk
                .hex("#49D188")
                .bold([this.maxHealth])}${chalk.bold("HP")}.`;
        }
    }
    learnAttackSkill(skillStr) {
        if (this.skills.length === 4) {
            return `${this.name} ${chalk.bold("can't learn")} ${
                skillStr.skillName
            } ${chalk.bold("as it already has four abilities!")}`;
        } else if (this.skills.includes(skillStr)) {
            return `${this.name} ${chalk.bold("already knows")} ${
                skillStr.skillName
            }!`;
        } else {
            this.skills.push(skillStr);
            return `${this.name} ${chalk.bold("learned")} ${
                skillStr.skillName
            }!`;
        }
    }
}
/**
 * CREATED POKEMON
 *
 * create new pokemon instances:
 *
 * const pokemonName = new Pokemon("pokemon Name", health value as number, magic value as number)
 *
 * assume pokemon as if it's level 100
 * every pokemon gets max possible health value it can get in pokemon game based on wiki pages
 * every pokemon gets flat magic value of 100 since there is no mana in pokemon games
 */
const bulbasaur = new Pokemon(
    `${chalk.hex("#8BC7AE").bold("Bulbasaur")}`,
    294,
    100
);
const pikachu = new Pokemon(
    `${chalk.hex("#FFCC01").bold("Pikachu")}`,
    274,
    100
);
const psyduck = new Pokemon(
    `${chalk.hex("#F5CC82").bold("Psyduck")}`,
    304,
    100
);
const gengar = new Pokemon(`${chalk.hex("#A29DB9").bold("Gengar")}`, 324, 100);
const magikarp = new Pokemon(
    `${chalk.hex("#F07A5F").bold("Magikarp")}`,
    244,
    100
);
const jigglypuff = new Pokemon(
    `${chalk.hex("#F9D1D9").bold("Jigglypuff")}`,
    434,
    100
);
const snorlax = new Pokemon(
    `${chalk.hex("#029FC7").bold("Snorlax")}`,
    524,
    100
);
const voltorb = new Pokemon(
    `${chalk.hex("#E59388").bold("Voltorb")}`,
    284,
    100
);

const availablePokeMonArr = [
    bulbasaur,
    pikachu,
    psyduck,
    gengar,
    magikarp,
    jigglypuff,
    snorlax,
    voltorb,
];
/**
 * ATTACKSKILL CLASS
 *
 * constructor:
 *
 * takes in 3 properties
 *      sillName, dmgAmount, MPCost
 *
 * skill name = name of the skill
 * dmgAmount = amount of damage a skill does to health
 * MPCost = amount of magic it requires to be used
 *
 * saves inputs into an object
 */
class AttackSkill {
    constructor(skillName, dmgAmount, MPCost) {
        this.skillName = skillName;
        this.dmgAmount = dmgAmount;
        this.MPCost = MPCost;
    }
}
/**
 * AVAILABLE SKILLS
 *
 * create new attack skill instances:
 *
 * const skillName = new AttackSkill("Skill Name", damage value as number, magic cost as number)
 *
 * damage value is same as listed for skill on wiki pages
 *
 * cost value based on PP value from pokemon games. so an attack that can be used 5 times as base in pokemon games has a cost of 25 magic assuming every pokemon has 100 mana
 */
const psychoBoost = new AttackSkill(
    `${chalk.hex("#F85888").bold("Psycho Boost")}`,
    140,
    25
);
const headSmash = new AttackSkill(
    `${chalk.hex("#B8A038").bold("Head Smash")}`,
    150,
    25
);
const blastBurn = new AttackSkill(
    `${chalk.hex("#F08030").bold("Blast Burn")}`,
    150,
    25
);
const hydroCannon = new AttackSkill(
    `${chalk.hex("#6890F0").bold("Hydro Cannon")}`,
    150,
    25
);
const frenzyPlant = new AttackSkill(
    `${chalk.hex("#78C850").bold("Frenzy Plant")}`,
    150,
    25
);
const hyperBeam = new AttackSkill(
    `${chalk.hex("#A8A878").bold("Hyper Beam")}`,
    150,
    25
);
const tenMVThunderBolt = new AttackSkill(
    `${chalk.hex("#F8D030").bold("10-Million Volt Thunder Bolt")}`,
    195,
    50
);
const knockOff = new AttackSkill(
    `${chalk.hex("#68A090").bold("Knock Off")}`,
    65,
    5
);
const scald = new AttackSkill(`${chalk.hex("#6890F0").bold("Scald")}`, 80, 6);
const fireLash = new AttackSkill(
    `${chalk.hex("#F08030").bold("Fire Lash")}`,
    80,
    5
);
const firePunch = new AttackSkill(
    `${chalk.hex("#F08030").bold("Fire Punch")}`,
    75,
    5
);
const leafBlade = new AttackSkill(
    `${chalk.hex("#78C850").bold("Leaf Blade")}`,
    90,
    5
);
const razorLeaf = new AttackSkill(
    `${chalk.hex("#78C850").bold("Razor Leaf")}`,
    80,
    4
);
const bodySlam = new AttackSkill(
    `${chalk.hex("#A8A878").bold("Body Slam")}`,
    85,
    6
);
const crushClaw = new AttackSkill(
    `${chalk.hex("#A8A878").bold("Crush Claw")}`,
    75,
    10
);
const aquaCutter = new AttackSkill(
    `${chalk.hex("#6890F0").bold("Aqua Cutter")}`,
    70,
    5
);
const splishySplash = new AttackSkill(
    `${chalk.hex("#6890F0").bold("Splishy Splash")}`,
    90,
    6
);
const thunder = new AttackSkill(
    `${chalk.hex("#F8D030").bold("Thunder")}`,
    110,
    10
);
const thunderBolt = new AttackSkill(
    `${chalk.hex("#F8D030").bold("Thunder Bolt")}`,
    90,
    6
);
const thunderShock = new AttackSkill(
    `${chalk.hex("#F8D030").bold("Thunder Shock")}`,
    40,
    6
);

const availableSkillArr = [
    psychoBoost,
    headSmash,
    blastBurn,
    hydroCannon,
    frenzyPlant,
    hyperBeam,
    tenMVThunderBolt,
    knockOff,
    scald,
    fireLash,
    firePunch,
    leafBlade,
    razorLeaf,
    bodySlam,
    crushClaw,
    aquaCutter,
    splishySplash,
    thunder,
    thunderBolt,
    thunderShock,
];
/** RND PKMN GENRATOR
 *
 * rndPkmn variable is a save-state variable
 *      stops generator from generating again if pokemon was already generated so generated pokemon can be used multiple times before new node is executed
 * can be set to undefined or null so generator will generate again before a new node is executed
 * -----
 * checks if rndPkmn is already generated and saved into rndPkmn variable
 *      if not
 *          create let generatedPokemon variable and
 *              generate a random pokemon out of availablePokeMonArr
 *      do a loop 4x to teach generatedPokemon 4 radomly selected skills from availableSkillArr
 *          set rndPkm to generatedPokemon
 *      return rndPkm
 */
let rndPkmn;
const pokemonGenerator = () => {
    if (!rndPkmn) {
        let generatedPokemon = Math.floor(
            Math.random() * availablePokeMonArr.length
        );
        for (let i = 0; i < 4; i++) {
            availablePokeMonArr[generatedPokemon].learnAttackSkill(
                availableSkillArr[
                    Math.floor(Math.random() * availableSkillArr.length)
                ]
            );
        }
        rndPkmn = availablePokeMonArr[generatedPokemon];
    }
    return rndPkmn;
};
// console.log(pokemonGenerator()); // logs the generated Pokémon
// console.log(pokemonGenerator()); // logs the same Pokémon as before
// console.log(pokemonGenerator()); // logs the same Pokémon as before

// console.log(pikachu.showStatus());
// console.log(pokemonGenerator().showStatus());
// rndPkmn = undefined;
// console.log(pokemonGenerator().showStatus());
// console.log(pikachu.learnAttackSkill(thunder));
// console.log(pikachu.learnAttackSkill(tenMVThunderBolt));
// console.log(pikachu.learnAttackSkill(thunderBolt));
// console.log(pikachu.learnAttackSkill(thunderShock));
// console.log(pokemonGenerator());
// console.log(pikachu.showStatus());
// console.log(pokemonGenerator().showStatus());
// console.log(pokemonGenerator().attack(2, pikachu));
// console.log(pikachu.attack(2, pokemonGenerator()));
// console.log(pokemonGenerator().attack(2, pikachu));
// console.log(pikachu.getHealth());
// console.log(pokemonGenerator().getMagic());
// console.log(pokemonGenerator().showStatus());
// console.log(pikachu.showStatus());

/**
 * FIGHT STORY
 */
setTimeout(function () {
    console.log(
        `--------------------------------------------------------------------------`
    );
}, 500);
setTimeout(function () {
    console.log(` `);
}, 500);
setTimeout(function () {
    console.log(
        `${chalk.hex("#FFCC01").bold("Pikachu")} ${chalk
            .hex("#DE2336")
            .bold("VS.")} ${chalk.hex("#029FC7").bold("The Food Thief")}`
    );
}, 500);
setTimeout(function () {
    console.log(` `);
}, 1000);
setTimeout(function () {
    console.log(
        `${chalk.bold("A")} ${chalk
            .hex("#FFCC01")
            .bold("PokéMon")} ${chalk.bold("Story")}`
    );
}, 1000);
setTimeout(function () {
    console.log(` `);
}, 1000);
setTimeout(function () {
    console.log(
        `${pikachu.name} ${chalk.bold("is practising new attacks...")}`
    );
}, 6000);
setTimeout(function () {
    console.log(` `);
}, 6000);
setTimeout(function () {
    console.log(pikachu.learnAttackSkill(thunder));
}, 11000);
setTimeout(function () {
    console.log(pikachu.learnAttackSkill(thunderBolt));
}, 16000);
setTimeout(function () {
    console.log(pikachu.learnAttackSkill(thunderShock));
}, 21000);
setTimeout(function () {
    console.log(pikachu.learnAttackSkill(tenMVThunderBolt));
}, 26000);
setTimeout(function () {
    console.log(
        `--------------------------------------------------------------------------`
    );
}, 26000);
setTimeout(function () {
    console.log(
        `${chalk.bold("Meanwhile, close nearby,")} ${snorlax.name} ${chalk.bold(
            "is looking for some food ..."
        )}`
    );
}, 31000);
setTimeout(function () {
    console.log(` `);
}, 36000);
setTimeout(function () {
    console.log(
        `${chalk.bold(
            "... they find various TM's and HM's, thinks it's food and goes to town' ..."
        )}`
    );
}, 36000);
setTimeout(function () {
    console.log(` `);
}, 36000);
setTimeout(function () {
    console.log(snorlax.learnAttackSkill(headSmash));
}, 41000);
setTimeout(function () {
    console.log(snorlax.learnAttackSkill(hyperBeam));
}, 41500);
setTimeout(function () {
    console.log(snorlax.learnAttackSkill(bodySlam));
}, 42000);
setTimeout(function () {
    console.log(snorlax.learnAttackSkill(crushClaw));
}, 42500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 42500);
setTimeout(function () {
    console.log(
        `${snorlax.name} ${chalk.bold(
            "is still hungry and looks around for more things to eat."
        )}`
    );
}, 47000);
setTimeout(function () {
    console.log(` `);
}, 52000);
setTimeout(function () {
    console.log(
        `${snorlax.name} ${chalk.bold("spots")} ${pikachu.name} ${chalk.bold(
            'and sees their basket full of yummies and starts to "run" over to eat all of the food in the basket.'
        )}`
    );
}, 52000);
0;
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 52000);
setTimeout(function () {
    console.log(
        `${chalk.bold("After a 5 minute run,")} ${snorlax.name} ${chalk.bold(
            "finally managed to get to the basket and starts to eat it."
        )}`
    );
}, 57000);
setTimeout(function () {
    console.log(` `);
}, 62000);
setTimeout(function () {
    console.log(
        `${chalk.bold("Alerted by all the gross sounds of someone eating,")} ${
            pikachu.name
        } ${chalk.bold(
            "turns around in disgust and immediately get's angry about what they sees: \n Someone is eating all their berries and other yums they brought with them!"
        )}`
    );
}, 62000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 62000);
setTimeout(function () {
    console.log(
        `${chalk.bold("Fully enraged,")} ${pikachu.name} ${chalk.bold(
            "sprints towards"
        )} ${snorlax.name}${chalk.bold(
            ", jumps on it's back and uses the newly learned"
        )} ${thunderShock.skillName} ${chalk.bold("on it.")}`
    );
}, 72000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 72000);
setTimeout(function () {
    console.log(pikachu.attack(2, snorlax));
}, 77000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 77000);
setTimeout(function () {
    console.log(
        `${chalk.bold("Suprised about the sudden tickle,")} ${
            snorlax.name
        } ${chalk.bold("shakes their body, laughing, throwing")} ${
            pikachu.name
        } ${chalk.bold("off their back.")}`
    );
}, 82000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 82000);
setTimeout(function () {
    console.log(
        `${pikachu.name} ${chalk.bold(
            ", now even angrier, makes themselves ready to attack"
        )} ${snorlax.name} ${chalk.bold("with all their power.... ")}`
    );
}, 87000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 87000);
setTimeout(function () {
    console.log(`${chalk.hex("#DE2336").bold("The Battle begins!")}`);
}, 92000);
setTimeout(function () {
    console.log(` `);
}, 92000);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 95000);
setTimeout(function () {
    console.log(`${chalk.hex("#FFCC01").bold("----")}`);
}, 97000);
setTimeout(function () {
    console.log(`${chalk.hex("#DE2336").bold(" VS ")}`);
}, 97000);
setTimeout(function () {
    console.log(`${chalk.hex("#029FC7").bold("----")}`);
}, 97000);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 100000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 100000);
setTimeout(function () {
    console.log(pikachu.attack(1, snorlax));
}, 105000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 105000);
setTimeout(function () {
    console.log(snorlax.attack(2, pikachu));
}, 110000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 110000);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 115000);
setTimeout(function () {
    console.log(` `);
}, 118000);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 118000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 118000);
setTimeout(function () {
    console.log(pikachu.attack(3, snorlax));
}, 122000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 122000);
setTimeout(function () {
    console.log(snorlax.attack(2, pikachu));
}, 127000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 127000);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 130000);
setTimeout(function () {
    console.log(` `);
}, 133000);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 133000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 133000);
setTimeout(function () {
    console.log(
        `${chalk.bold("Out of breath,")} ${pikachu.name} ${chalk.bold(
            "looks around, trying to find something they can use to their advantage... A"
        )} ${chalk.hex("49D188").bold("HEALTH POTION!")} ${
            pikachu.name
        } ${chalk.bold(
            "sprints towards the potion hoping to get there before"
        )} ${snorlax.name} ${chalk.bold(
            "can get to them... And just in time"
        )} ${pikachu.name} ${chalk.bold("makes it to the potion!")} `
    );
}, 138000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 138000);
setTimeout(function () {
    console.log(pikachu.getHealth());
}, 148000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 148000);
setTimeout(function () {
    console.log(
        `${chalk.bold("After drinking the potion,")} ${
            pikachu.name
        } ${chalk.bold("turns around, seeing")} ${snorlax.name} ${chalk.bold(
            "running towards them... They see something else though: A"
        )} ${chalk.hex("#4694E8").bold("MANA POTION")} ${chalk.bold(
            "... pressed into"
        )} ${snorlax.name}${chalk.bold("'s bellybutton ... ")}${
            pikachu.name
        } ${chalk.bold(
            "is grossed out but does not want to loose against the food theif so they sprint towards the enemy, focused on the target, jumps at it and ...."
        )}`
    );
}, 152000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 152000);
setTimeout(function () {
    console.log(pikachu.getMagic());
}, 162000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 162000);
setTimeout(function () {
    console.log(
        `${pikachu.name}${chalk.bold(", feeling much better now, jumps off")} ${
            snorlax.name
        }${chalk.bold("'s belly and readies another attack...")}`
    );
}, 167000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 167000);
setTimeout(function () {
    console.log(pikachu.attack(3, snorlax));
}, 172000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 172000);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 177000);
setTimeout(function () {
    console.log(` `);
}, 182000);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 182000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 182000);
setTimeout(function () {
    console.log(
        `${chalk.bold("Almost collapsing from exhaustion,")} ${
            snorlax.name
        } ${chalk.bold("prepares a devestating attack...")}`
    );
}, 187000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 187000);
setTimeout(function () {
    console.log(snorlax.attack(1, pikachu));
}, 192000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 192000);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 197000);
setTimeout(function () {
    console.log(` `);
}, 202000);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 202000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 202000);
setTimeout(function () {
    console.log(
        `${chalk.bold("Both")} ${pikachu.name} ${chalk.bold("and")} ${
            snorlax.name
        } ${chalk.bold(
            "prepare themselves for a final attack. Which one of them will be faster at this point? ...."
        )}`
    );
}, 207000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 207000);
setTimeout(function () {
    console.log(pikachu.attack(0, snorlax));
}, 212000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 212000);
setTimeout(function () {
    console.log(
        `${chalk.bold(
            "Exhausted from this tough battle, but happy that they've got revenge against the"
        )} ${chalk.hex("#029FC7").bold("food thief")}, ${
            pikachu.name
        } ${chalk.bold("makes their way to the nearest")} ${chalk
            .hex("#FFCC01")
            .bold("Poké")}${"-"}${chalk
            .hex("#E990F5")
            .bold("Café")} ${chalk.bold("to grab some well earned")} ${chalk
            .hex("#49D188")
            .bold("yums")}.`
    );
}, 217000);
setTimeout(function () {
    console.log(`
${chalk
    .hex("#FFCC01")
    .bold(
        "--"
    )} ${chalk.hex("#029FC7").bold("The")} ${chalk.hex("#FFCC01").bold("End")}${chalk.hex("#029FC7").bold("--")}
`);
}, 227000);
setTimeout(function () {
    console.log(
        `--------------------------------------------------------------------------`
    );
}, 227000);
