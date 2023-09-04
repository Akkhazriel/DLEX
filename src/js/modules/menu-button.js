const burger = document.querySelector('.nav-menu');
const menu = document.querySelector('.nav');
const body = document.body;
if (burger && menu) {
    const aduptiveMenu = burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    })
}

export default aduptiveMenu;

// ON MOBILE

export const dropMenu = 
document.querySelector('.nav__dropmenu')
.addEventListener('click', () => {
    dropMenu.classList.toggle('active');
})

export const buttons = document.querySelector('.header__buttons');
burger.addEventListener('click', () => {
    buttons.classList.toggle('active');
})

