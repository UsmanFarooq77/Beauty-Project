
function servicesScroll() {
    document.querySelector('.services').scrollIntoView({
        behavior: 'smooth',
    });
}

$(document).ready(function () {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    }),
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        nav: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1196: {
                items: 4
            },
            1440: {
                items: 5
            }

        }
    })
},
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        captions: true,
        // autoControls: true,
        // autoHover: true,
        // stopAutoOnClick: true,
        // ticker: true,
        // touchEnabled: true,
        // tickerHover: true,
        // autoHover: true,
        // pager: true,
        // video: true,
    }),
    // $("#thing-with-videos").fitVids(),
);

// With jQuery

let header_section = $('#header');

let header_postion = header_section.offset().top;

let arrow_top_dom_reference = getDomReference('arrowTop');

$(window).scroll(function () {
    let current_postion = $(this).scrollTop();

    if (current_postion > 70 && !isResponsiveNavigationOpen) {
        header_section.addClass('fixed');
    }
    else {
        header_section.removeClass('fixed');
    }
    if (current_postion > 500){
        arrow_top_dom_reference.style.display = 'inline-block';
        document.querySelector('.fa-arrow-circle-up').style.color = 'darkorange';
    }
    else {
        arrow_top_dom_reference.style.display = 'none';
    }
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
        document.querySelector('.fa-arrow-circle-up').style.color = '#000';
    }
    
});
// With Javascript

// window.addEventListener('scroll', function(){
//     let header_section = document.getElementById('header');
//     if(window.pageYOffset > 100){

//         header_section.classList.add('fixed')
//     }
//     else{
//         header_section.classList.remove('fixed')
//     }
// });

// HamBuger Icon and Cross Icon
let res_nav = document.getElementById('responsive_navigation_section_id');
let video_section_height = document.getElementById('video_section_id');
let ham_Buger_Image_Zindex = document.getElementById('hamBugerImage');
let header_Zindex = document.getElementById('header');
var isResponsiveNavigationOpen = false;


function openResponsiveNavigation() {
    header_Zindex.style.zIndex = '0';
    isResponsiveNavigationOpen = true;
    res_nav.classList.add('open');
    video_section_height.style.minHeight = '100vh';
    ham_Buger_Image_Zindex.style.zIndex = '0';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function closeResponsiveNavigation() {
    header_Zindex.style.zIndex = '999';
    isResponsiveNavigationOpen = false;
    res_nav.classList.remove('open');
    video_section_height.style.minHeight = 'auto';
    ham_Buger_Image_Zindex.style.zIndex = '1';
}

// Our Services Gallery
var popup_image_full_screen_domRef = getDomReference('popUpImageFullScreen');
var popup_image_domRef = getDomReference('popup_image_id_1');
var all_images = [];
var parlourImage = [];
var imageCounter = 0;
var services = ['parlour', 'logo', 'cosmetic', 'makeup'];

window.onload = beauty_parlour_filter('parlour');

function beauty_parlour_filter(value) {
    apply_filter(value);
    let parlour = getDomReference('parlour');
    let parlourLength = parlour.children.length;
    parlourImage = [];
    for (let i = 0; i < parlourLength; i++) {
        parlourImage.push(parlour.children[i].childNodes[1].getAttribute('src'));
    }
    all_images = parlourImage;
}

function comapny_logo_filter(value) {
    apply_filter(value);
    let parlour = getDomReference('logo');
    let parlourLength = parlour.children.length;
    parlourImage = [];
    for (let i = 0; i < parlourLength; i++) {
        parlourImage.push(parlour.children[i].childNodes[1].getAttribute('src'));
    }
    all_images = parlourImage;
}
function cosmetic_products_filter(value) {
    apply_filter(value);
    let parlour = getDomReference('cosmetic');
    let parlourLength = parlour.children.length;
    parlourImage = [];
    for (let i = 0; i < parlourLength; i++) {
        parlourImage.push(parlour.children[i].childNodes[1].getAttribute('src'));
    }
    all_images = parlourImage;
}
function bridal_filter(value) {
    apply_filter(value);
    let parlour = getDomReference('makeup');
    let parlourLength = parlour.children.length;
    parlourImage = [];
    for (let i = 0; i < parlourLength; i++) {
        parlourImage.push(parlour.children[i].childNodes[1].getAttribute('src'));
    }
    all_images = parlourImage;
}

function apply_filter(service_value) {
    for (let x = 0; x <= services.length - 1; x++) {
        if (services[x] == service_value) {
            document.getElementById(services[x]).style.display = "flex";
        }
        else {
            document.getElementById(services[x]).style.display = "none";
        }
    }
}

// Full Screen Image With Js
function popUpImage(srcImage) {
    popup_image_domRef.style.display = 'block';
    for (let i = 0; i <= all_images.length - 1; i++) {
        imageCounter = i;
        if (srcImage == all_images[i]) {
            if (i > 0) {
                arrow_circle_left_id.style.color = '#ffffff';
            }
            if (i == all_images.length - 1) {
                arrow_circle_right_id.style.color = 'rgba(0,0,0,0.5)';
            }
            popup_image_full_screen_domRef.src = srcImage;
            return;
        }
    }
}

function popupClose() {
    popup_image_domRef.style.display = 'none';
    imageCounter = 0;
    arrow_circle_right_id.style.color = '#ffffff';
    arrow_circle_left_id.style.color = 'rgba(0,0,0,0.5)';
}


function popUpImageRightArrow() {
    if (imageCounter < all_images.length - 1) {
        arrow_circle_left_id.style.color = '#ffffff';
        imageCounter++;
        popup_image_full_screen_domRef.src = all_images[imageCounter];
    }
    else {
        popup_image_full_screen_domRef.src = all_images[imageCounter];
    }
    if (imageCounter == all_images.length - 1) {
        arrow_circle_right_id.style.color = 'rgba(0,0,0,0.5)';
    }
}

function popUpImageLeftArrow() {
    if (imageCounter > 0) {
        arrow_circle_right_id.style.color = '#ffffff';
        imageCounter--;
        popup_image_full_screen_domRef.src = all_images[imageCounter];
    }
    if (imageCounter == 0) {
        arrow_circle_left_id.style.color = 'rgba(0,0,0,0.5)';
    }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    // allowTouchMove: true,
    // initialSlide: 1,
    loop: true,
    slideToclickedslide: true,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredSlides: false,
            effect: 'slide'
        },
        992: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
$('.counter').counterUp({
    delay: 10,
    time: 3000
});
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}
function getDomReference(id) {
    return document.getElementById(id);
}