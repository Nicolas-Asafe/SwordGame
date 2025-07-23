import { serviceSwords } from "../swords/main.js";
import { MaterialsService } from "../materials/main.js";
import User from './CreateAccount.js'


const user = User();

for (let i = 0; i < 3; i++) {
    user.AddMaterial(MaterialsService.getMaterialByName("Wood"));
}

const InventorySwords = document.querySelector(".swords-list");

function RenderInventorySwords(){
    user.getData().Swords.forEach(sword => {
        InventorySwords.innerHTML += `
        <div class="sword-item">
            <img src="${sword.image_url}" alt="${sword.name}" class="sword-image">
        </div>
        `;
 })
}
function RenderInventoryMaterials(){
    const InventoryMaterials = document.querySelector(".materials-list");
    user.getData().Materials.forEach(material => {
        InventoryMaterials.innerHTML += `
        <div class="material-item">
            <img src="${material.image_url}" alt="${material.name}" class="material-image">
        </div>
        `;
    });
}
RenderInventoryMaterials();
RenderInventorySwords();