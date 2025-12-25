import "./styles.css";
import loadHomePage from "./home.js"
import loadMenuPage from "./menu.js"
import loadAboutPage from "./about.js"

const content = document.getElementById('content');
const tabs = document.querySelectorAll('.tab')
const loadPage = {
    home: loadHomePage,
    menu: loadMenuPage,
    about: loadAboutPage
};

tabs[0].classList.add('selected-tab');
let currentTab = tabs[0];
content.appendChild(loadHomePage());

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (currentTab !== tab) {
            currentTab.classList.remove('selected-tab');
            tab.classList.add('selected-tab');
            currentTab = tab;
            content.replaceChildren(loadPage[tab.id]());
        }
    });
});