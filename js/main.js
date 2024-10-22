//  elements capture
const links = document.querySelectorAll('.hero__link');
const heroElement = document.querySelector('.hero');
const heroHiddenElement = document.querySelector('.hero__hidden');

//  access all the links
links.forEach(link => {
    link.addEventListener('click', () => {
        
        // add or remove  active styles
        heroElement.classList.toggle('active');
        heroHiddenElement.classList.toggle('active');
    })
})