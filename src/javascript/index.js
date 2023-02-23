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
 * FIGHT STORY
 */
setTimeout(function () {
    console.log(`Pikachu VS. The Food Thief`);
}, 1000);
setTimeout(function () {
    console.log(` `);
}, 1000);
setTimeout(function () {
    console.log(`A PokéMon Story`);
}, 1000);
setTimeout(function () {
    console.log(` `);
}, 1000);
setTimeout(function () {
    console.log(`Pikachu is practising new attacks...`);
}, 5000);
setTimeout(function () {
    console.log(` `);
}, 5000);
setTimeout(function () {
    console.log(pikachu.learnAttackSkill(thunder));
}, 7000);
setTimeout(function () {
    console.log(pikachu.learnAttackSkill(thunderBolt));
}, 9000);
setTimeout(function () {
    console.log(pikachu.learnAttackSkill(thunderShock));
}, 11000);
setTimeout(function () {
    console.log(pikachu.learnAttackSkill(tenMVThunderBolt));
}, 13000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 14000);
setTimeout(function () {
    console.log(`Snorlax is hungry but can only find various TM's and VM's...`);
}, 15000);
setTimeout(function () {
    console.log(` `);
}, 15000);
setTimeout(function () {
    console.log(snorlax.learnAttackSkill(headSmash));
}, 16000);
setTimeout(function () {
    console.log(snorlax.learnAttackSkill(hyperBeam));
}, 16500);
setTimeout(function () {
    console.log(snorlax.learnAttackSkill(bodySlam));
}, 17000);
setTimeout(function () {
    console.log(snorlax.learnAttackSkill(crushClaw));
}, 17500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 18500);
setTimeout(function () {
    console.log(
        `Snorlax is still hungry and looks around for more things to eat.`
    );
}, 20000);
setTimeout(function () {
    console.log(
        `Snorlax spots Pikachu and sees their basket full of yummies and starts "run" over to eat all of the food in the basket.`
    );
}, 22500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 23000);
setTimeout(function () {
    console.log(
        `After a 5 minute run, Snorlax finally managed to get to the basket and starts to eat it.`
    );
}, 28000);
setTimeout(function () {
    console.log(
        `Alerted by all the gross sounds of someone eating, Pikachu turns around in disgust and immediately get's angry about what they sees:
    Someone is eating all their berries and other yums they brought with them!`
    );
}, 30000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 31000);
setTimeout(function () {
    console.log(
        `Fully enraged, Pikachu sprints towards Snorlax, jumps on it's back and uses the newly learned Thunder Shock on it.`
    );
}, 33000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 34000);
setTimeout(function () {
    console.log(pikachu.attack(2, snorlax));
}, 36000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 36500);
setTimeout(function () {
    console.log(
        `Suprised about the sudden tickle, Snorlax shakes their body, laughing, throwing Pikachu off their back.`
    );
}, 38000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 38500);
setTimeout(function () {
    console.log(
        `Pikachu, now even angrier, makes themselves ready to attack snorlax with all their power.... `
    );
}, 39500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 40000);
setTimeout(function () {
    console.log(`The Battle begins!`);
}, 42000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 42500);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 43500);
setTimeout(function () {
    console.log(`----`);
}, 44500);
setTimeout(function () {
    console.log(` VS `);
}, 44500);
setTimeout(function () {
    console.log(`----`);
}, 44500);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 46500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 47000);
setTimeout(function () {
    console.log(pikachu.attack(1, snorlax));
}, 49000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 49500);
setTimeout(function () {
    console.log(snorlax.attack(2, pikachu));
}, 51000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 51500);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 53000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 53500);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 55000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 55500);
setTimeout(function () {
    console.log(pikachu.attack(3, snorlax));
}, 57000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 57500);
setTimeout(function () {
    console.log(snorlax.attack(2, pikachu));
}, 59000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 59500);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 60500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 61000);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 62000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 62500);
setTimeout(function () {
    console.log(
        `Out of breath, Pikachu looks around, trying to find something they can use to their advantage... A HEALTH POTION! Pikachu sprints towards the potion hoping to get there before Snorlax can get to them... And just in time Pikachu makes it to the potion! `
    );
}, 64000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 64500);
setTimeout(function () {
    console.log(pikachu.getHealth());
}, 66000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 66500);
setTimeout(function () {
    console.log(
        `After drinking the potion, Pikachu turns around, seeing Snorlax running towards them... They see something else though: A MANA POTION ... pressed into Snorlax's bellybutton ... - Pikachu is grossed out but does not want to loose against the food theif so they sprint towards the enemy, focused on the target, jumps at it and ....`
    );
}, 67500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 68000);
setTimeout(function () {
    console.log(pikachu.getMagic());
}, 69000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 69500);
setTimeout(function () {
    console.log(
        `Pikachu, feeling much better now, jumps off Snorlax's belly and readies another attack...`
    );
}, 71000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 71500);
setTimeout(function () {
    console.log(pikachu.attack(3, snorlax));
}, 73000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 73500);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 75000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 75500);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 76500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 77000);
setTimeout(function () {
    console.log(
        `Almost collapsing from exhaustion, Snorlax prepares a devestating attack...`
    );
}, 78000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 78500);
setTimeout(function () {
    console.log(snorlax.attack(1, pikachu));
}, 80000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 80500);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 81000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 81500);
setTimeout(function () {
    console.log(snorlax.showStatus());
}, 82500);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 83000);
setTimeout(function () {
    console.log(
        `Both Pikachu and Snorlax prepare themselves for a final attack. Which of them will be faster at this point? ....`
    );
}, 85000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 85500);
setTimeout(function () {
    console.log(pikachu.attack(0, snorlax));
}, 90000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------`
    );
}, 90500);
setTimeout(function () {
    console.log(
        `Exhausted from this tough battle, but happy that they've got revenge against the food thief, Pikachu makes their way to the nearest Poké-Café to grab some well earned yums.`
    );
}, 91500);
setTimeout(function () {
    console.log(`
-- The End --
`);
}, 93000);
