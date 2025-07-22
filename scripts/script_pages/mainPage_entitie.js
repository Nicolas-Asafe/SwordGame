export default class MainPage{
    constructor(page,userData) {
        this.page = page;
        this.userData = userData;
        this.name = page.name;
        this.path = page.path;
        window.location.href = page.path;
    }
    ChangePage(page) {
        this.page = page;
        this.name = page.name;
        this.path = page.path;
        window.location.href = page.path;
        this.userData.SetPage(page);
    }
}