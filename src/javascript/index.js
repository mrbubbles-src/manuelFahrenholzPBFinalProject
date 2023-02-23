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
    console.log(
        `--------------------------------------------------------------------------`
    );
}, 500);
setTimeout(function () {
    console.log(` `);
}, 500);
setTimeout(function () {
    console.log(`Pikachu VS. The Food Thief`);
}, 500);
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
        `Meanwhile, close nearby, Snorlax is looking for some food ...`
    );
}, 31000);
setTimeout(function () {
    console.log(` `);
}, 36000);
setTimeout(function () {
    console.log(
        `... but can only find various TM's and HM's and 'goes to town' ...`
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
        `Snorlax is still hungry and looks around for more things to eat.`
    );
}, 47000);
setTimeout(function () {
    console.log(` `);
}, 52000);
setTimeout(function () {
    console.log(
        `Snorlax spots Pikachu and sees their basket full of yummies and starts to "run" over to eat all of the food in the basket.`
    );
}, 52000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 52000);
setTimeout(function () {
    console.log(
        `After a 5 minute run, Snorlax finally managed to get to the basket and starts to eat it.`
    );
}, 57000);
setTimeout(function () {
    console.log(` `);
}, 62000);
setTimeout(function () {
    console.log(
        `Alerted by all the gross sounds of someone eating, Pikachu turns around in disgust and immediately get's angry about what they sees:
    Someone is eating all their berries and other yums they brought with them!`
    );
}, 62000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 62000);
setTimeout(function () {
    console.log(
        `Fully enraged, Pikachu sprints towards Snorlax, jumps on it's back and uses the newly learned Thunder Shock on it.`
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
        `Suprised about the sudden tickle, Snorlax shakes their body, laughing, throwing Pikachu off their back.`
    );
}, 82000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 82000);
setTimeout(function () {
    console.log(
        `Pikachu, now even angrier, makes themselves ready to attack snorlax with all their power.... `
    );
}, 87000);
setTimeout(function () {
    console.log(
        `-------------------------------------------------------------------------`
    );
}, 87000);
setTimeout(function () {
    console.log(`The Battle begins!`);
}, 92000);
setTimeout(function () {
    console.log(` `);
}, 92000);
setTimeout(function () {
    console.log(pikachu.showStatus());
}, 95000);
setTimeout(function () {
    console.log(`----`);
}, 97000);
setTimeout(function () {
    console.log(` VS `);
}, 97000);
setTimeout(function () {
    console.log(`----`);
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
        `Out of breath, Pikachu looks around, trying to find something they can use to their advantage... A HEALTH POTION! Pikachu sprints towards the potion hoping to get there before Snorlax can get to them... And just in time Pikachu makes it to the potion! `
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
        `After drinking the potion, Pikachu turns around, seeing Snorlax running towards them... They see something else though: A MANA POTION ... pressed into Snorlax's bellybutton ... - Pikachu is grossed out but does not want to loose against the food theif so they sprint towards the enemy, focused on the target, jumps at it and ....`
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
        `Pikachu, feeling much better now, jumps off Snorlax's belly and readies another attack...`
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
        `Almost collapsing from exhaustion, Snorlax prepares a devestating attack...`
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
        `Both Pikachu and Snorlax prepare themselves for a final attack. Which of them will be faster at this point? ....`
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
        `Exhausted from this tough battle, but happy that they've got revenge against the food thief, Pikachu makes their way to the nearest Poké-Café to grab some well earned yums.`
    );
}, 217000);
setTimeout(function () {
    console.log(`
-- The End --
`);
}, 227000);
setTimeout(function () {
    console.log(
        `--------------------------------------------------------------------------`
    );
}, 227000);
