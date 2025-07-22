import MainPage from "./mainPage_entitie.js";
import Page from "./page_entitie.js";


let PageInUse = null;
let Pages = {};

function InitializePages(UserData) {
    try {
        Pages = {
            "Home": new Page("Home", "./index.html"),
            "CreateAccount": new Page("Create Account", "./CreateAccount.html"),
            "Inventory": new Page("Inventory", "./inventory.html"),
        };
        if (UserData.Experience === 0){
            PageInUse = new MainPage(pages["Home"]);
            UserData.SetPage("Home");
        }else{
            PageInUse = new MainPage(pages["CreateAccount"]);
            UserData.SetPage("CreateAccount");
        }
    } catch (error) {
        console.error("Error initializing pages:", error);
    }
}

function ChangePage(PageName, UserData) {
    try {
        if (Pages[PageName]) {
            PageInUse.ChangePage(Pages[PageName]);
            UserData.SetPage(Pages[PageName]);
        } else {
            console.warn(`Page "${PageName}" does not exist.`);
        }
    } catch (error) {
        console.error("Error changing page:", error);
    }
}
export {InitializePages, ChangePage};
