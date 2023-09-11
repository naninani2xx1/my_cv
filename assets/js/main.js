// xử lý height header khi cuộn qua banner thêm Bg , bỏ marrgin-top
const banner = document.getElementById("banner");
const header = document.getElementsByTagName("header")[0];
const bannerHeight = banner.offsetHeight;

var ennableHeader = false;
const mobileSize = 766;
// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll",scrollPage);

function scrollPage() {
    // Lấy tọa độ y hiện tại của trang
    var scrollY = window.scrollY;

    if(scrollY >= (bannerHeight - 100) && !ennableHeader) {
        changeHeader();
    }else if (scrollY <= (bannerHeight - 100) && ennableHeader){
        removeStyleHeader();
   }
}

function changeHeader() {
   
    let styleHeader = header.style;

    styleHeader.backgroundColor = '#2B4E67';

    if (window.innerWidth > mobileSize) {
        styleHeader.marginTop = '0px';
        styleHeader.transition = 'margin-top 0.3s ease-in';
    }
    ennableHeader = !ennableHeader;
}

function removeStyleHeader() {
    header.style = '';
    if (window.innerWidth > mobileSize) {
        header.style.transition = 'margin-top 0.3s ease-in';
    }
    ennableHeader = !ennableHeader;
}
// ================ finished height banner =============================

// show menu icon when viewport on mobile =============

const menuIcon = document.getElementsByClassName("navbar__menu")[0];
const menuBG = document.querySelector('.navbar__menu-bg');
const navbars = document.querySelectorAll('.navbar__items > li');

function visibilityMenuBg() {
    const isEnnabled = menuBG.style.display == 'block';
    menuBG.style.display = isEnnabled ? 'none' : 'block';
}

menuIcon.addEventListener("click",function(e) {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    visibilityMenuBg();
    console.log(navbars);
})

menuBG.addEventListener('click',function (e) {
    e.stopPropagation();
    document.body.style.overflow = "auto";
    visibilityMenuBg();
})