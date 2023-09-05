window.addEventListener('scroll', () => {
    const triggerELement = document.querySelector('.stats');
    const logo = document.querySelector('.logo-color');
    
    if (window.scrollY >= triggerELement.offsetTop) {
            logo.setAttribute("src", "./img/index/header/onDark-logo.svg");
        } else {
            logo.setAttribute("src", "./img/page-02/header-02/onDark-logo-purple.svg")
        }
});