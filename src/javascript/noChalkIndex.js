/**
 * PokéMon Lite
 * DCI FBW WD D07 A
 * Programming Basics Module Final Project
 * by Manuel Fahrenholz
 */
/**
 * POKEMON CLASS
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
/** RND PKMN GENRATOR */
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
