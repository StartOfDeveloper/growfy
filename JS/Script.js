let slideSwiper = new Swiper('.swiper', {
    simulateTouch: true,
    grabCursor: true,
    slidesPerView: 4.5,
    centeredslides: true,
    initialslide: 2,
    freeMode: true,
    breakpoints: {
        992: {
            slidesPerview: 3.3,
            },
        480: {
             slidesPerview: 2.9,
            },
        320: {
            slidesPerView: 1.3,
            },
        },
});

const burgerMenu = document.querySelector('.header-nuv-menu');
const burgerMenuItems = document.querySelector('.nav');
const navBlock = document.querySelector('.nav-block')
bodyElement = document.documentElement.lastChild;

if (burgerMenu) {
    burgerMenu.addEventListener('click', function (e) {
            bodyElement.classList.toggle('bodyMenu');
    })
}

const elementsFooter = document.querySelector('.footer');
const footerSpolerOne = document.querySelector('.footer-grup-2');
const footerSpolerTwho = document.querySelector('.footer-grup-3');
elementsFooter.addEventListener('click', function spoiler (e) {
    if (e.target.closest('.spoilerBatton-1')) {
        footerSpolerOne.classList.toggle('active_spoler');
    }
    if (e.target.closest('.spoilerBatton-2')) {
        footerSpolerTwho.classList.toggle('active_spoler');
    }
})