/**
 * PokéMon Lite w/o chalk
 * DCI FBW WD D07 A
 * Programming Basics Module Final Project
 * by Manuel Fahrenholz
 */
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
        this.curHealth = health;
        this.maxHealth = health;
        this.curMagic = magic;
        this.maxMagic = magic;
        this.skills = [];
    }
    showStatus() {
        let availableSkills = [];
        if (this.skills.length === 0) {
            availableSkills.push(
                `${this.name} has not learned any skills yet!`
            );
        }
        for (let i = 0; i < this.skills.length; i++) {
            if (this.skills.length !== 0) {
                availableSkills.push(this.skills[i].skillName);
            }
        }
        return `${this.name}
HP: ${this.curHealth}/${this.maxHealth}
MP: ${this.curMagic}/${this.maxMagic}
Available Skills: ${availableSkills.join(", ")}`;
    }
    attack(skillIndex, attackedPokemon) {
        if (this.curMagic < this.skills[skillIndex].MPCost) {
            return `${this.name} tried to use ${this.skills[skillIndex].skillName} but has only ${this.curMagic}MP left.`;
        } else if (this.curMagic >= this.skills[skillIndex].MPCost) {
            this.curMagic -= this.skills[skillIndex].MPCost;
            attackedPokemon.curHealth -= this.skills[skillIndex].dmgAmount;
            if (attackedPokemon.curHealth <= 0) {
                attackedPokemon.curHealth = 0;
                return `${this.name} used ${this.skills[skillIndex].skillName} against ${attackedPokemon.name}. ${attackedPokemon.name} fainted! ${this.name} has won the battle!`;
            }
            return `${this.name} used ${this.skills[skillIndex].skillName} against ${attackedPokemon.name} and dealt ${this.skills[skillIndex].dmgAmount} damage! ${attackedPokemon.name} has ${attackedPokemon.curHealth}/${attackedPokemon.maxHealth} HP left`;
        }
    }
    getMagic() {
        if (this.maxMagic - this.curMagic === 0) {
            return `${this.name} is already at ${this.curMagic}/${this.maxMagic}MP. No potion used.`;
        } else if (this.maxMagic - this.curMagic <= 40) {
            this.curMagic = this.maxMagic;
            return `${this.name} is now at ${this.curMagic}/${this.maxMagic}MP - No more Potions needed!`;
        } else {
            this.curMagic += 40;
            return `${this.name} used a Potion and restored 40MP. ${this.name} is now at ${this.curMagic}/${this.maxMagic}MP.`;
        }
    }
    getHealth() {
        if (this.maxHealth - this.curHealth === 0) {
            return `${this.name} is already at ${this.curHealth}/${this.maxHealth}HP. No potion used.`;
        } else if (this.maxHealth - this.curHealth <= 50) {
            this.curHealth = this.maxHealth;
            return `${this.name} is now at ${this.curHealth}/${this.maxHealth}HP - No more Potions needed!`;
        } else {
            this.curHealth += 50;
            return `${this.name} used a Potion and restored 50HP. ${this.name} is now at ${this.curHealth}/${this.maxHealth}HP.`;
        }
    }
    learnAttackSkill(skillStr) {
        if (this.skills.length === 4) {
            return `${this.name} can't learn ${skillStr.skillName} as it already has four abilities!`;
        } else if (this.skills.includes(skillStr)) {
            return `${this.name} already knows ${skillStr.skillName}!`;
        } else {
            this.skills.push(skillStr);
            return `${this.name} learned ${skillStr.skillName}!`;
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
const bulbasaur = new Pokemon("Bulbasaur", 294, 100);
const pikachu = new Pokemon("Pikachu", 274, 100);
const psyduck = new Pokemon("Psyduck", 304, 100);
const gengar = new Pokemon("Gengar", 324, 100);
const magikarp = new Pokemon("Magicarp", 244, 100);
const jigglypuff = new Pokemon("Jigglypuff", 434, 100);
const snorlax = new Pokemon("Snorlax", 524, 100);
const voltorb = new Pokemon("Voltorb", 284, 100);

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
const psychoBoost = new AttackSkill("Psycho Boost", 140, 25);
const headSmash = new AttackSkill("Head Smash", 150, 25);
const blastBurn = new AttackSkill("Blast Burn", 150, 25);
const hydroCannon = new AttackSkill("Hydro Cannon", 150, 25);
const frenzyPlant = new AttackSkill("Frenzy Plant", 150, 25);
const hyperBeam = new AttackSkill("Hyper Beam", 150, 25);
const tenMVThunderBolt = new AttackSkill(
    "10-Million Volt Thunder Bolt",
    195,
    50
);
const knockOff = new AttackSkill("Knock Off", 65, 5);
const scald = new AttackSkill("Scald", 80, 6);
const fireLash = new AttackSkill("Fire Lash", 80, 5);
const firePunch = new AttackSkill("Fire Punch", 75, 5);
const leafBlade = new AttackSkill("Leaf Blade", 90, 5);
const razorLeaf = new AttackSkill("Razor Leaf", 80, 4);
const bodySlam = new AttackSkill("Body Slam", 85, 6);
const crushClaw = new AttackSkill("Crush Claw", 75, 10);
const aquaCutter = new AttackSkill("Aqua Cutter", 70, 5);
const splishySplash = new AttackSkill("Splishy Splash", 90, 6);
const thunder = new AttackSkill("Thunder", 110, 10);
const thunderBolt = new AttackSkill("Thunder Bolt", 90, 6);
const thunderShock = new AttackSkill("Thunder Shock", 40, 6);

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
console.log(pikachu.showStatus());
console.log(pokemonGenerator().showStatus());
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
// setTimeout(function () {
//     console.log(
//         `--------------------------------------------------------------------------`
//     );
// }, 500);
// setTimeout(function () {
//     console.log(` `);
// }, 500);
// setTimeout(function () {
//     console.log(`Pikachu VS. The Food Thief`);
// }, 500);
// setTimeout(function () {
//     console.log(` `);
// }, 1000);
// setTimeout(function () {
//     console.log(`A PokéMon Story`);
// }, 1000);
// setTimeout(function () {
//     console.log(` `);
// }, 1000);
// setTimeout(function () {
//     console.log(`${pikachu.name} is practising new attacks...`);
// }, 6000);
// setTimeout(function () {
//     console.log(` `);
// }, 6000);
// setTimeout(function () {
//     console.log(pikachu.learnAttackSkill(thunder));
// }, 11000);
// setTimeout(function () {
//     console.log(pikachu.learnAttackSkill(thunderBolt));
// }, 16000);
// setTimeout(function () {
//     console.log(pikachu.learnAttackSkill(thunderShock));
// }, 21000);
// setTimeout(function () {
//     console.log(pikachu.learnAttackSkill(tenMVThunderBolt));
// }, 26000);
// setTimeout(function () {
//     console.log(
//         `--------------------------------------------------------------------------`
//     );
// }, 26000);
// setTimeout(function () {
//     console.log(
//         `Meanwhile, close nearby, ${snorlax.name} is looking for some food ...`
//     );
// }, 31000);
// setTimeout(function () {
//     console.log(` `);
// }, 36000);
// setTimeout(function () {
//     console.log(
//         `... they find various TM's and HM's, thinks it's food and goes to town' ...`
//     );
// }, 36000);
// setTimeout(function () {
//     console.log(` `);
// }, 36000);
// setTimeout(function () {
//     console.log(snorlax.learnAttackSkill(headSmash));
// }, 41000);
// setTimeout(function () {
//     console.log(snorlax.learnAttackSkill(hyperBeam));
// }, 41500);
// setTimeout(function () {
//     console.log(snorlax.learnAttackSkill(bodySlam));
// }, 42000);
// setTimeout(function () {
//     console.log(snorlax.learnAttackSkill(crushClaw));
// }, 42500);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 42500);
// setTimeout(function () {
//     console.log(
//         `${snorlax.name} is still hungry and looks around for more things to eat.`
//     );
// }, 47000);
// setTimeout(function () {
//     console.log(` `);
// }, 52000);
// setTimeout(function () {
//     console.log(
//         `${snorlax.name} spots ${pikachu.name} and sees their basket full of yummies and starts to "run" over to eat all of the food in the basket.`
//     );
// }, 52000);
// 0;
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 52000);
// setTimeout(function () {
//     console.log(
//         `After a 5 minute run, ${snorlax.name} finally managed to get to the basket and starts to eat it.`
//     );
// }, 57000);
// setTimeout(function () {
//     console.log(` `);
// }, 62000);
// setTimeout(function () {
//     console.log(
//         `Alerted by all the gross sounds of someone eating, ${pikachu.name} turns around in disgust and immediately get's angry about what they sees: \n Someone is eating all their berries and other yums they brought with them!`
//     );
// }, 62000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 62000);
// setTimeout(function () {
//     console.log(
//         `Fully enraged, ${pikachu.name} sprints towards ${snorlax.name}, jumps on it's back and uses the newly learned ${thunderShock.skillName} on it.`
//     );
// }, 72000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 72000);
// setTimeout(function () {
//     console.log(pikachu.attack(2, snorlax));
// }, 77000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 77000);
// setTimeout(function () {
//     console.log(
//         `Suprised about the sudden tickle, ${snorlax.name} shakes their body, laughing, throwing ${pikachu.name} off their back.`
//     );
// }, 82000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 82000);
// setTimeout(function () {
//     console.log(
//         `${pikachu.name}, now even angrier, makes themselves ready to attack ${snorlax.name} with all their power...`
//     );
// }, 87000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 87000);
// setTimeout(function () {
//     console.log(`The Battle begins!`);
// }, 92000);
// setTimeout(function () {
//     console.log(` `);
// }, 92000);
// setTimeout(function () {
//     console.log(pikachu.showStatus());
// }, 95000);
// setTimeout(function () {
//     console.log(`----`);
// }, 97000);
// setTimeout(function () {
//     console.log(` VS `);
// }, 97000);
// setTimeout(function () {
//     console.log(`----`);
// }, 97000);
// setTimeout(function () {
//     console.log(snorlax.showStatus());
// }, 100000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 100000);
// setTimeout(function () {
//     console.log(pikachu.attack(1, snorlax));
// }, 105000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 105000);
// setTimeout(function () {
//     console.log(snorlax.attack(2, pikachu));
// }, 110000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 110000);
// setTimeout(function () {
//     console.log(pikachu.showStatus());
// }, 115000);
// setTimeout(function () {
//     console.log(` `);
// }, 118000);
// setTimeout(function () {
//     console.log(snorlax.showStatus());
// }, 118000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 118000);
// setTimeout(function () {
//     console.log(pikachu.attack(3, snorlax));
// }, 122000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 122000);
// setTimeout(function () {
//     console.log(snorlax.attack(2, pikachu));
// }, 127000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 127000);
// setTimeout(function () {
//     console.log(pikachu.showStatus());
// }, 130000);
// setTimeout(function () {
//     console.log(` `);
// }, 133000);
// setTimeout(function () {
//     console.log(snorlax.showStatus());
// }, 133000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 133000);
// setTimeout(function () {
//     console.log(
//         `Out of breath, ${pikachu.name} looks around, trying to find something they can use to their advantage... A HEALTH POTION! ${pikachu.name} sprints towards the potion hoping to get there before ${snorlax.name} can get to them... And just in time ${pikachu.name} makes it to the potion!`
//     );
// }, 138000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 138000);
// setTimeout(function () {
//     console.log(pikachu.getHealth());
// }, 148000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 148000);
// setTimeout(function () {
//     console.log(
//         `After drinking the potion, ${pikachu.name} turns around, seeing ${snorlax.name} running towards them... They see something else though: A MANA POTION... pressed into ${snorlax.name}$'s bellybutton ...${pikachu.name} is grossed out but does not want to loose against the food theif so they sprint towards the enemy, focused on the target, jumps at it and ....`
//     );
// }, 152000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 152000);
// setTimeout(function () {
//     console.log(pikachu.getMagic());
// }, 162000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 162000);
// setTimeout(function () {
//     console.log(
//         `${pikachu.name}, feeling much better now, jumps off ${snorlax.name}'s belly and readies another attack...`
//     );
// }, 167000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 167000);
// setTimeout(function () {
//     console.log(pikachu.attack(3, snorlax));
// }, 172000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 172000);
// setTimeout(function () {
//     console.log(pikachu.showStatus());
// }, 177000);
// setTimeout(function () {
//     console.log(` `);
// }, 182000);
// setTimeout(function () {
//     console.log(snorlax.showStatus());
// }, 182000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 182000);
// setTimeout(function () {
//     console.log(
//         `Almost collapsing from exhaustion, ${snorlax.name} prepares a devestating attack...`
//     );
// }, 187000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 187000);
// setTimeout(function () {
//     console.log(snorlax.attack(1, pikachu));
// }, 192000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 192000);
// setTimeout(function () {
//     console.log(pikachu.showStatus());
// }, 197000);
// setTimeout(function () {
//     console.log(` `);
// }, 202000);
// setTimeout(function () {
//     console.log(snorlax.showStatus());
// }, 202000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 202000);
// setTimeout(function () {
//     console.log(
//         `Both ${pikachu.name} and ${snorlax.name} prepare themselves for a final attack. Which one of them will be faster at this point? ...`
//     );
// }, 207000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 207000);
// setTimeout(function () {
//     console.log(pikachu.attack(0, snorlax));
// }, 212000);
// setTimeout(function () {
//     console.log(
//         `-------------------------------------------------------------------------`
//     );
// }, 212000);
// setTimeout(function () {
//     console.log(
//         `Exhausted from this tough battle, but happy that they've got revenge against the food thief, ${pikachu.name} makes their way to the nearest Poké-Café to grab some well earned yums.`
//     );
// }, 217000);
// setTimeout(function () {
//     console.log(`
// --The End--
// `);
// }, 227000);
// setTimeout(function () {
//     console.log(
//         `--------------------------------------------------------------------------`
//     );
// }, 227000);
