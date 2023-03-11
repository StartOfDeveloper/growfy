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