export default class serviceMaterials {
    constructor(materials = []) {
        this.materials = materials;
    }
    getMaterialByName(name) {
        return this.materials.find(material => material.name === name);
    }
    getMaterialsByPrice(price) {
        return this.materials.filter(material => material.price <= price);
    }
    getMaterials() {
        return this.materials;
    }
}