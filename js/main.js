//  elements capture
const links = document.querySelectorAll('.hero__link');
const heroElement = document.querySelector('.hero');
const heroHiddenElement = document.querySelector('.hero__hidden');

//  remove styles based on the browser's screen width
window.addEventListener('resize', () => {
    if ((window.innerWidth) > 787) {
        heroHiddenElement.classList.remove('active');
        heroElement.classList.remove('active');
    } else {
        heroHiddenElement.classList.remove('show');
    }
});

//  access all the links
links.forEach(link => {
    link.addEventListener('click', () => {
        if ((window.innerWidth) > 787) {
            // add or remove show styles
            heroHiddenElement.classList.toggle('show');
        } else {
            // add or remove  active styles
            heroElement.classList.toggle('active');
            heroHiddenElement.classList.toggle('active');
        }
    });
});