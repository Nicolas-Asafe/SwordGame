import ServiceSwords from "./service.js";
import Sword from "./entitie.js";
import swords from "./swords_data.js";

const serviceSwords = new ServiceSwords(swords);    

function InitializeSwords(){
    const NoobSword = new Sword({name: "NoobSword", damage: 0.2, price: 0,level:1,life:3});   
    const CandySword = new Sword({name: "CandySword", damage: 0.4, price: 1,level:2,life:6});
    const KnifeSword = new Sword({name: "Knife", damage: 0.6, price: 3,level:2,life:9});
    const IronSword = new Sword({name: "IronSword", damage: 1, price: 5,level:3,life:15});
    const WaterSword = new Sword({name: "WaterSword", damage: 3, price: 10,level:5,life:20});
    const DiamondSword = new Sword({name: "DiamondSword", damage: 10, price: 50,level:10,life:50});
    const TitaniumSword = new Sword({name: "TitaniumSword", damage: 20, price: 100,level:15,life:100});
    const MoonSword = new Sword({name: "MoonSword", damage: 50, price: 200,level:20,life:200});
    const GoldSword = new Sword({name: "GoldSword", damage: 55, price: 300,level:23,life:300});
    const MidNightAxe = new Sword({name: "MidnightAxe", damage: 100, price: 500,level:30,life:500});

    swords.push(NoobSword, CandySword, IronSword,WaterSword,KnifeSword,DiamondSword,
        GoldSword,TitaniumSword,MoonSword,MidNightAxe);
}

export {serviceSwords,InitializeSwords};