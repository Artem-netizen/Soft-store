//sub menu
let navLink = document.querySelector('.nav__link.arrow');
let navMenu = document.querySelector('.nav__sub');

const toggleMenu = () => {
    navLink.classList.toggle('show');
    navMenu.classList.toggle('show');
}

navLink.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_navLink = target === navLink;
    let navMenu_is_active = navMenu.classList.contains('show');
    let its_navMenu = target === navMenu || navMenu.contains(target);

    if (!its_navMenu && !its_navLink && navMenu_is_active) {
        toggleMenu();
    }
})

//scroll hide header
window.addEventListener('DOMContentLoaded', () => {
    const headerFixed = document.querySelector('.header');
    window.onscroll = function () {
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (posTop > 0) {
            headerFixed.classList.add('active');
        } else {
            headerFixed.classList.remove('active');
        }
    }
});

//big main menu
const menuBtn = document.querySelector('.menu__btn');
const mainMenu = document.querySelector('.menu-wrap');

function openMenu() {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('show');
        mainMenu.classList.toggle('show');
    })
}

openMenu();

//tabs
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs__content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => {el.classList.remove('active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('active');
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => {el.classList.remove('--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('--active');
    };
});


//slider on main page
const swiper = new Swiper('.slider-wrap', {
    // loop: true,
    speed: 1300,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});

const swiper2 = new Swiper('.categories-slider-wrap', {
    // loop: true,
    speed: 1300,
    slidesPerView: 4.8,
    spaceBetween: 16,
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
});

//cookie
const cookie = document.querySelector('.cookie')
const cookieBtns = document.querySelectorAll('.click');

document.body.classList.add('stop-scrolling');
document.querySelector('html').classList.add('stop-scrolling');
document.querySelector('html').classList.add('start-scrolling');

cookieBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        cookie.classList.toggle('hide');
        document.body.classList.remove('stop-scrolling');
        document.querySelector('html').classList.remove('stop-scrolling');
        document.querySelector('html').classList.remove('start-scrolling');
    })
})