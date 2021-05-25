class App {
    constructor(){
        const DrawerToggle = document.getElementById('drawerToggle');
        DrawerToggle.addEventListener('click', this.opensidebarHandler.bind(this));
        const BackdropToggle = document.getElementById('Backdrop');
        BackdropToggle.addEventListener('click', this.closesidebarHandler.bind(this));
        const allPartnersToggle = document.getElementById('allPartners');
        allPartnersToggle.addEventListener('click', this.openallPartnersHandler.bind(this));
        const allPartnertwoToggle = document.getElementById('allPartnertwo');
        allPartnertwoToggle.addEventListener('click', this.openallPartnertwoHandler.bind(this));
    }
    opensidebarHandler(){
        const sideDrawer = document.getElementById("sideDrawer")
        sideDrawer.classList.add('open')
        const Backdrop = document.getElementById("Backdrop")
        Backdrop.classList.add('open')
    }
    closesidebarHandler() {
        const sideDrawer = document.getElementById("sideDrawer")
        sideDrawer.classList.remove('open')
        const Backdrop = document.getElementById("Backdrop")
        Backdrop.classList.remove('open')
    }
    openallPartnersHandler() {
        const allPartners = document.getElementById("mainNavigation")
        allPartners.classList.add('open')
    }
    openallPartnertwoHandler() {
        const allPartners = document.getElementById("mainNavigation")
        allPartners.classList.add('open')
        const sideDrawer = document.getElementById("sideDrawer")
        sideDrawer.classList.remove('open')
        const Backdrop = document.getElementById("Backdrop")
        Backdrop.classList.remove('open')
    }
}

const app = new App();