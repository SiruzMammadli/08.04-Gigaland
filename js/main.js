let header = document.querySelector('.header');
let hamburgerBtn = document.querySelector('.header .hamburger-btn');

window.onscroll = function() {
    if (window.scrollY > 30) {
        header.classList.add('dark');
    }
    else {
        header.classList.remove('dark');
    }
}

hamburgerBtn.addEventListener('click', function() {
    header.classList.toggle('active');
});