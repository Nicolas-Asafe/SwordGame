import ServiceSwords from "./service.js";
import Sword from "./entitie.js";
import swords from "./swords_data.js";

const serviceSwords = new ServiceSwords(swords);    

function InitializeSwords(){
    const NoobSword = new Sword({name: "NoobSword", damage: 0.2, price: 0,level:1,life:3});   
    const CandySword = new Sword({name: "CandySword", damage: 0.4, price: 1,level:2,life:6});
    const IronSword = new Sword({name: "IronSword", damage: 0.6, price: 2,level:3,life:9});
    const WaterSword = new Sword({name: "WaterSword", damage: 0.8, price: 3,level:4,life:12});
    swords.push(NoobSword, CandySword, IronSword,WaterSword);
}

export {serviceSwords,InitializeSwords};