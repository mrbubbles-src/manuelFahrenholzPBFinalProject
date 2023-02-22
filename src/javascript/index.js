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
const opponentPokemonGenerator = () => {
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
    return availablePokeMonArr[generatedPokemon];
};

/**
 * ATTACK LEARNING
 */
console.log(`Pikachu is practising new attacks...`);
console.log(` `);
console.log(pikachu.learnAttackSkill(thunder));
console.log(pikachu.learnAttackSkill(thunderBolt));
console.log(pikachu.learnAttackSkill(thunderShock));
console.log(pikachu.learnAttackSkill(tenMVThunderBolt));
console.log(`-------------------------------------------------------------`);
console.log(`Snorlax is hungry but can only find various TM's and VM's...`);
console.log(` `);
console.log(snorlax.learnAttackSkill(headSmash));
console.log(snorlax.learnAttackSkill(hyperBeam));
console.log(snorlax.learnAttackSkill(bodySlam));
console.log(snorlax.learnAttackSkill(crushClaw));
console.log(`-------------------------------------------------------------`);
console.log(`Snorlax is still hungry and looks around for more things to eat.`);
console.log(
    `Snorlax spots Pikachu and sees their basket full of yummies and starts "run" over to eat all of the food in the basket.`
);
console.log(`-------------------------------------------------------------`);
console.log(
    `After a 5 minute run, Snorlax finally managed to get to the basket and starts to eat it.`
);
console.log(
    `Alerted by all the gross sounds of someone eating, Pikachu turns around in disgust and immediately get's angry about what they sees:
    Someone is eating all their berries and other yums they brought with them!`
);
console.log(`-------------------------------------------------------------`);
console.log(
    `Fully enraged, Pikachu sprints towards Snorlax, jumps on it's back and uses the newly learned Thunder Shock on it.`
);
console.log(`-------------------------------------------------------------`);
console.log(pikachu.attack(2, snorlax));
console.log(`-------------------------------------------------------------`);
console.log(
    `Suprised about the sudden tickle, Snorlax shakes their body, laughing, throwing Pikachu off their back.`
);
console.log(`-------------------------------------------------------------`);
console.log(
    `Pikachu, now even angrier, makes themselves ready to attack snorlax with all their power.... `
);
console.log(`-------------------------------------------------------------`);
console.log(`The Battle begins!`);
console.log(`-------------------------------------------------------------`);
/**
 * ATTACK SEQUENCE
 */
console.log(pikachu.showStatus());
console.log(`----`);
console.log(` VS `);
console.log(`----`);
console.log(snorlax.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(pikachu.attack(1, snorlax));
console.log(`-------------------------------------------------------------`);
console.log(snorlax.attack(2, pikachu));
console.log(`-------------------------------------------------------------`);
console.log(pikachu.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(snorlax.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(pikachu.attack(3, snorlax));
console.log(`-------------------------------------------------------------`);
console.log(snorlax.attack(2, pikachu));
console.log(`-------------------------------------------------------------`);
console.log(pikachu.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(snorlax.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(
    `Out of breath, Pikachu looks around, trying to find something they can use to their advantage... A HEALTH POTION! Pikachu sprints towards the potion hoping to get there before Snorlax can get to them... And just in time Pikachu makes it to the potion! `
);
console.log(`-------------------------------------------------------------`);
console.log(pikachu.getHealth());
console.log(`-------------------------------------------------------------`);
console.log(
    `After drinking the potion, Pikachu turns around, seeing Snorlax running towards them... They see something else though: A MANA POTION ... pressed into Snorlax's bellybutton ... - Pikachu is grossed out but does not want to loose against the food theif so they sprint towards the enemy, focused on the target, jumps at it and ....`
);
console.log(`-------------------------------------------------------------`);
console.log(pikachu.getMagic());
console.log(`-------------------------------------------------------------`);
console.log(
    `Pikachu, feeling much better now jumps off Snorlax's belly and readies another attack...`
);
console.log(`-------------------------------------------------------------`);
console.log(pikachu.attack(3, snorlax));
console.log(`-------------------------------------------------------------`);
console.log(pikachu.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(snorlax.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(
    `Almost collapsing from exhaustion, Snorlax prepares a devestating attack...`
);
console.log(`-------------------------------------------------------------`);
console.log(snorlax.attack(1, pikachu));
console.log(`-------------------------------------------------------------`);
console.log(pikachu.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(snorlax.showStatus());
console.log(`-------------------------------------------------------------`);
console.log(
    `Both Pikachu and Snorlax prepare themselves for a final attack. Which of them will be faster at this point? ....`
);
console.log(`-------------------------------------------------------------`);
console.log(pikachu.attack(0, snorlax));
console.log(`-------------------------------------------------------------`);
console.log(
    `Exhausted from this tough battle, but happy that they've got revenge against the food thief, Pikachu makes their way to the nearest Poké-Café to grab some well earned yums.`
);
console.log(`
-- The End --
`);
