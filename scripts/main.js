import { InitializeSwords, serviceSwords } from "./swords/main.js";
import { InitializeMaterials, MaterialsService } from "./materials/main.js";
import SectionUserData from "./user/data_user.js";

const UserData = localStorage.getItem("me");
const user = new SectionUserData(UserData ? JSON.parse(UserData).Name : "Default User");

InitializeMaterials();
InitializeSwords();





serviceSwords.getSwords().forEach(sword => {
    user.AddSword(sword);   
})

user.AddCoins(100);
user.AddExperience(50);

user.AddMaterial(MaterialsService.getMaterials()[0]);
user.AddMaterial(MaterialsService.getMaterials()[0]);

user.getData().Swords.forEach(sword => {
    const swordImage = document.createElement("img");
    swordImage.src = sword.image_url;
    swordImage.alt = sword.name;
    swordImage.classList.add("sword-image");
    document.querySelector(".swords-list").appendChild(swordImage);
})
user.getData().Materials.forEach(material => {
    const materialImage = document.createElement("img");
    materialImage.src = `../../assets/images/materials/${material.name}/use.png`;
    materialImage.alt = material.name;
    materialImage.classList.add("material-image");
    document.querySelector(".materials-list").appendChild(materialImage);
})
