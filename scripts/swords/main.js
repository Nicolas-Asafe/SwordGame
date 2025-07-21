import ServiceSwords from "./service.js";
import Sword from "./entitie.js";
import swords from "./swords_data.js";

const serviceSwords = new ServiceSwords(swords);    

function InitSwords(){
    const NoobSword = new Sword({name: "NoobSword", damage: 0.2, price: 0,level:1,life:3});   
    swords.push(NoobSword)
}

export {serviceSwords,InitSwords};