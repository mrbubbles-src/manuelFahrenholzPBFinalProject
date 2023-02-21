class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }
    showStatus() {}
    attack() {}
    getMagic() {}
    getHealth() {}
}
const pikachu = new Pokemon("Pikachu", 100, 50);
console.log(pikachu);
const bulbasaur = new Pokemon("Bulbasaur", 90, 60);
console.log(bulbasaur);
