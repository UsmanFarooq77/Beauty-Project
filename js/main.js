
// With jQuery

let header_section = $('#header');

let header_postion = header_section.offset().top;

$(window).scroll(function () {
    let current_postion = $(this).scrollTop();

    if (current_postion > 100 && !isResponsiveNavigationOpen) {
        header_section.addClass('fixed');
    }
    else {
        header_section.removeClass('fixed');
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
var isResponsiveNavigationOpen = false;


function openResponsiveNavigation() {
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
    isResponsiveNavigationOpen = false;
    res_nav.classList.remove('open');
    video_section_height.style.minHeight = 'auto';
    ham_Buger_Image_Zindex.style.zIndex = '1';
}

// Our Services Gallery

var services = ['parlour', 'logo', 'cosmetic', 'makeup'];

function beauty_parlour_filter(value) {
    apply_filter(value);
}

function comapny_logo_filter(value) {
    apply_filter(value);
}
function cosmetic_products_filter(value) {
    apply_filter(value);
}
function bridal_filter(value) {
    apply_filter(value);
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