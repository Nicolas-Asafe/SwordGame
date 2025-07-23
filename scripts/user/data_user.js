export default class SectionUserData {
    constructor(Name) {
        this.Name = Name;
        this.Level = 1;
        this.Experience = 0;    
        this.Health = 100;
        this.Swords = [];
        this.Coins = 0;
        this.Achievements = [];  
        this.Page = "Home";
        localStorage.setItem("me", JSON.stringify(this));
    }
    AddLevel() {
        this.Level++;
        localStorage.setItem("me", JSON.stringify(this));
    }
    AddExperience(amount) {
        this.Experience += amount;
        localStorage.setItem("me", JSON.stringify(this));
    }   
    AddHealth(amount) {
        this.Health += amount;
        localStorage.setItem("me", JSON.stringify(this));
    }
    AddSword(sword) {
        this.Swords.push(sword);
    }
    AddMaterial(material) {
        if (!this.Materials) {
            this.Materials = [];
        }
        this.Materials.push(material);
        localStorage.setItem("me", JSON.stringify(this));
    }
    AddCoins(amount) {
        this.Coins += amount;
        localStorage.setItem("me", JSON.stringify(this));
    }
    AddAchievement(achievement) {
        this.Achievements.push(achievement);
        localStorage.setItem("me", JSON.stringify(this));
    }
    getData() {
        return JSON.parse(localStorage.getItem("me"));
    }
    SetPage(page) {
        this.Page = page;
        localStorage.setItem("me", JSON.stringify(this));
    }
}