import {Select_URL_of_Sword} from "../image_scripts/main.js";
export default class Sword{
    constructor(SwordParam={name, damage, price, level,life,isEquiped,materials:[]}) {
        const [image_url, gif_url] = Select_URL_of_Sword(SwordParam.name);
        this.name = SwordParam.name;
        this.damage = SwordParam.damage;
        this.image_url = image_url;
        this.gif_url = gif_url;
        this.level = SwordParam.level || 1;
        this.life = SwordParam.life || this.level * 0.3;
        this.price = SwordParam.price || this.level * 2;
        this.materials = SwordParam.materials || [];
        this.isEquiped = false;
        return this
    }
    AddLevel(level) {
        this.level = level;
        this.life = this.level * 0.3;
        this.damage = this.level * 0.4;
        this.price = this.level * 2;
        return this
    }
    RemoveLife(life) {
        this.life -= life;
        if (this.life < 0) {
            this.life = 0;
        }
        return this
    }
    GetData() {
        return {
            name: this.name,
            damage: this.damage,
            price: this.price,
            level: this.level,
            life: this.life,
            image_url: this.image_url,
            gif_url: this.gif_url,
            isEquiped: this.isEquiped,
            materials: this.materials
        }
    }
    Equip() {
        this.isEquiped = true;
        return this
    }
    Unequip() {
        this.isEquiped = false;
        return this
    }
}