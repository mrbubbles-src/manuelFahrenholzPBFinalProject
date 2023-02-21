/**
 * POKEMON CLASS
 */
class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
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
HP: ${this.health}
MP: ${this.magic}
Available Skills: ${availableSkills.join(", ")}`;
    }
    attack(skillIndex, attackedPokemon) {
        if (this.magic < this.skills[skillIndex].MPCost) {
            return `${this.name} only has ${this.magic}MP left and can't use ${this.skills[skillIndex].skillName}.`;
        } else if (this.magic >= this.skills[skillIndex].MPCost) {
            this.magic -= this.skills[skillIndex].MPCost;
            attackedPokemon.health -= this.skills[skillIndex].dmgAmount;
            if (attackedPokemon.health <= 0) {
                attackedPokemon.health = 0;
                return `${this.name} used ${this.skills[skillIndex].skillName} against ${attackedPokemon.name}. ${attackedPokemon.name} fainted! ${this.name} has won the battle!`;
            }
            return `${this.name} used ${this.skills[skillIndex].skillName} against ${attackedPokemon.name} and dealt ${this.skills[skillIndex].dmgAmount} damage! ${attackedPokemon.name} has ${attackedPokemon.health} HP left`;
        }
    }
    getMagic() {
        this.magic += 20;
        return `${this.name} used a Potion and restored 20MP. ${this.name} noch has ${this.magic}`;
    }
    getHealth() {
        this.health += 50;
        return `${this.name} used a Potion and restored 50HP. ${this.name} noch has ${this.health}`;
    }
    learnAttackSkill(skillStr) {
        if (skillStr) this.skills.push(skillStr);
    }
}
const pikachu = new Pokemon("Pikachu", 100, 210);
// console.log(pikachu);
const bulbasaur = new Pokemon("Bulbasaur", 90, 60);
// console.log(bulbasaur);

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
const lightningBolt = new AttackSkill("Lightning Bolt", 40, 70);
const tackle = new AttackSkill("Tackle", 20, 30);
pikachu.learnAttackSkill(lightningBolt);
bulbasaur.learnAttackSkill(tackle);
// console.log(pikachu.skills[0].skillName);
// console.log(pikachu);
// console.log(bulbasaur.skills[0].skillName);
// console.log(bulbasaur);
// console.log(pikachu.showStatus());
console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.showStatus());
console.log(pikachu.showStatus());
console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.showStatus());
console.log(pikachu.showStatus());
console.log(pikachu.attack(0, bulbasaur));
console.log(bulbasaur.getMagic());
console.log(bulbasaur.showStatus());
