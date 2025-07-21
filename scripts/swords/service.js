export default class ServiceSwords{
    constructor(swords=[]) {
        this.swords = swords;
    } 
    getSwords() {
        return this.swords;
    }
    getSwordByName(name) {
        return this.swords.find(sword => sword.name === name);
    } 
    getSwordsByRarity(rarity) {
        return this.swords.filter(sword => sword.rarity === rarity);
    }
    getSwordsByPrice(price) {
        return this.swords.filter(sword => sword.price <= price);
    } 
    getSwordsByDamage(damage) {
        return this.swords.filter(sword => sword.damage >= damage);
    }
    getRandomSword() {
        return this.swords[Math.floor(Math.random() * this.swords.length)];
    }
}