import Select_img_URL from "../image/main.js";
export default class Sword{
    constructor(SwordParam={name, damage, price, level,life}) {
        const [image_url, gif_url] = Select_img_URL(SwordParam.name);
        this.name = SwordParam.name;
        this.damage = SwordParam.damage;
        this.image_url = image_url;
        this.gif_url = gif_url;
        this.price = SwordParam.price;
        this.rarity = SwordParam.rarity;
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
}