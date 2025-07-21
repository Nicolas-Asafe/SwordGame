export default class Sword{
    constructor(SwordParam={name, damage, image_url,gif_url, price, rarity}) {
        this.name = SwordParam.name;
        this.damage = SwordParam.damage;
        this.image_url = SwordParam.image_url;
        this.gif_url = SwordParam.gif_url;
        this.price = SwordParam.price;
        this.rarity = SwordParam.rarity;
        return this
    }
}
