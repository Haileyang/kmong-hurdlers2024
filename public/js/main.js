
const header = document.querySelector("#header");
const headerMenu = document.querySelector(".header-content");
const headerBG = document.querySelector(".header-bg");
const headerSubMenu = document.querySelectorAll(".header-sub-menus");
const headerMenus = document.querySelectorAll('.header-menu');
const headerMenuPreviews = document.querySelectorAll('.header-menu-preview');
const headerMobileMenu = document.querySelector(".mobile-menu-btn");
const body = document.querySelector("body");
let sticky = header.offsetTop;

function handleHeaderSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("is-active");
        if (header.classList.contains('menu-black')) {
            header.classList.remove('menu-black');
        }
    } else {
        header.classList.remove("is-active");
        if (header.classList.contains('sub-header')){
            header.classList.add('menu-black');
        }
    }
}

function handleMobileMenuToggle() {
    headerMenu.classList.toggle("is-active");
    headerMobileMenu.classList.toggle("is-active");
    body.classList.toggle("lock-body-scroll");
}

const handleSubMenuShow = () => {
    headerBG.classList.add("is-active");
    headerSubMenu.forEach((lnb) => (lnb.style.display = "block"));
    if (header.classList.contains('sub-header')) {
        header.classList.remove('menu-black');
    }
};

const handleSubMenuHide = () => {
    headerBG.classList.remove("is-active");
    if (header.classList.contains('sub-header') && !header.classList.contains('is-active')) {
        header.classList.add('menu-black');
    }
    headerSubMenu.forEach((lnb) => (lnb.style.display = ""));
};


headerMenu.addEventListener("mouseenter", handleSubMenuShow);
headerBG.addEventListener("mouseleave", handleSubMenuHide);

header.addEventListener('mouseleave', () => {
    headerMenuPreviews.forEach(preview => {
        preview.style.display = 'none';
    });
});

headerMenus.forEach((menu, index) => {
    menu.addEventListener('mouseenter', () => {
        headerMenuPreviews.forEach(preview => {
            preview.style.display = 'none';
        });

        headerMenuPreviews[index].style.display = 'block';
    });
});

window.onload = window.onscroll = handleHeaderSticky;
headerMobileMenu.addEventListener("click", handleMobileMenuToggle);
