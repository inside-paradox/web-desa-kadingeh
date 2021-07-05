const translate = document.querySelectorAll(".animated");
const opacity = document.querySelectorAll(".opacity");
const explore = document.querySelector(".explore");
const big_title = document.querySelector(".big-title");
const show_more = document.querySelector(".show-more");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform  = `translateY(${scroll * speed}px)`;
    })

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })


    big_title.style.opacity = - scroll / ( header_height / 2) + 1;

    show_more.style.opacity = - scroll / ( header_height / 2) + 1;
    
    explore.style.opacity = scroll / (sectionY.top + section_height);

    shadow.style.height = `${scroll * 0.5 + 320}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
})

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    explore.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50}px)`;
}

function scrollToSection() {
    console.log(section_height);
    document.body.scrollTop = section_height; // For Safari
    document.documentElement.scrollTop = section_height;
}