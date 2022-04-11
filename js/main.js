let header = document.querySelector('.header');
let hamburgerBtn = document.querySelector('.header .hamburger-btn');

// SCROLL FOR NAVBAR

window.onscroll = function() {
    if (window.scrollY > 30) {
        header.classList.add('dark');
    }
    else {
        header.classList.remove('dark');
    }
}

// RESPONSIVE MENU

hamburgerBtn.addEventListener('click', function() {
    header.classList.toggle('active');
});

// CAROUSEL SLIDER

let prev = document.querySelector('#carousel .prev');
let next = document.querySelector('#carousel .next');
let items = document.querySelectorAll('#carousel .item-outer .nft-item');

let count = 0;

next.onclick = function() {
    count++;
    for ( let i of items) {
        if (count == 0) { i.style = "transform: translateX(0)"}
        if (count == 1) { i.style = "transform: translateX(-332.33px)"}
        if (count == 2) { i.style = "transform: translateX(-664.66px)"}
        if (count == 3) { i.style = "transform: translateX(-996.99px)"}
        if (count == 4) { i.style = "transform: translateX(-1329.32px)"}
        if (count > 4) { count = 0; i.style = "transform: translateX(0)"}

        // console.log(i);
    }
}

prev.onclick = function() {
    count--;
    for ( let i of items) {
        if (count == 0) { i.style = "transform: translateX(0)"}
        if (count == 1) { i.style = "transform: translateX(-332.33px)"}
        if (count == 2) { i.style = "transform: translateX(-664.66px)"}
        if (count == 3) { i.style = "transform: translateX(-996.99px)"}
        if (count == 4) { i.style = "transform: translateX(-1329.32px)"}
        if (count < 0) { count = 4; i.style = "transform: translateX(-1329.32px)" }

        // console.log(i);
    }
}