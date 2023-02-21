class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }
    showStatus() {
        return `${this.name}
HP: ${this.health}
MP: ${this.magic}`;
    }
    attack() {}
    getMagic() {}
    getHealth() {}
}
const pikachu = new Pokemon("Pikachu", 100, 50);
console.log(pikachu);
const bulbasaur = new Pokemon("Bulbasaur", 90, 60);
console.log(bulbasaur);

console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());
