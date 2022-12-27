/*navbar js*/
let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');


hamburger.onclick = () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
};

