import ServiceSwords from "./service.js";
import Sword from "./entitie.js";
import swords from "./swords_data.js";

const serviceSwords = new ServiceSwords(swords);    

function InitSwords(){
    const NoobSword = new Sword({name: "NoobSword", damage: 0.2, image_url: "../../assets/images/swords/NoobSword/use.png", gif_url: "./assets/swords/noobsword.gif", price: 0, rarity: "Trash"});   
    swords.push(NoobSword)
    
    console.log("Swords created: ", serviceSwords.getSwords()); 
}

export {serviceSwords,InitSwords};