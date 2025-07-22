export default class MainPage{
    constructor(page){
        this.page = page;
        this.name = page.name;
        this.path = page.path;
        window.location.href = page.path;
    }
    ChangePage(page) {
        this.page = page;
        this.name = page.name;
        this.path = page.path;
        window.location.href = page.path;
    }
}