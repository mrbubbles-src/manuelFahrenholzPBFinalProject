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
    attack() {}
    getMagic() {}
    getHealth() {}
    learnAttackSkill(skillStr) {
        if (skillStr) this.skills.push(skillStr);
    }
}
const pikachu = new Pokemon("Pikachu", 100, 50);
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
console.log(bulbasaur.showStatus());
console.log(pikachu.showStatus());
