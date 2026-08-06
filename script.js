document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(50px)";

    setTimeout(() => {
        hero.style.transition = "all 1.2s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 300);

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {threshold:0.2});

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition = "0.8s ease";

        observer.observe(card);

    });

});
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(9,9,15,.95)";
        nav.style.boxShadow = "0 10px 30px rgba(76,201,240,.15)";
        nav.style.padding = "15px 8%";
    } else {
        nav.style.background = "rgba(9,9,15,.75)";
        nav.style.boxShadow = "none";
        nav.style.padding = "20px 8%";
    }
});
// تأثير كتابة الاسم
const text = "Mohamed Hassan";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 180);
    }
}

window.addEventListener("load", typeWriter);
function toggleLogo() {
    const logoText = document.getElementById("logoText");
    logoText.classList.toggle("logo-show");
}
function openImage(img){

    let viewer = document.querySelector(".image-viewer");
    let bigImage = document.getElementById("bigImage");

    bigImage.src = img.src;
    viewer.style.display = "flex";

}


function closeImage(){

    document.querySelector(".image-viewer").style.display = "none";

}
