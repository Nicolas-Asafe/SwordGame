import { serviceSwords, InitSwords } from "../../scripts/swords/main.js";

InitSwords();

const divSwords = document.getElementById("swords");

function renderSword() {
    const sword = serviceSwords.getSwordByName("NoobSword");
    divSwords.innerHTML += `
    <div id="sword">
         <img src="${sword.image_url}" alt="${sword.name}">
    </div>
    `;
}

renderSword()