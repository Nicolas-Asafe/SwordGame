import { Select_URL_of_Material } from "../image_scripts/main.js";

export default class Material{
    constructor(name,price){
        this.name = name;
        this.price = price;
        this.image_url = Select_URL_of_Material(name)[0];
    }
}