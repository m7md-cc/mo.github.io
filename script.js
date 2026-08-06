document.addEventListener("DOMContentLoaded", () => {

    // Hero Animation
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(50px)";

        setTimeout(() => {
            hero.style.transition = "all 1.2s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 300);
    }

    // Cards Animation
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition = "0.8s ease";

        observer.observe(card);

    });

});


// ====================================
// Navbar + Hero Scroll Effect
// ====================================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");
    const hero = document.querySelector(".hero");

    // Navbar
    if (nav) {

        if (window.scrollY > 50) {

            nav.style.background = "rgba(9,9,15,.95)";
            nav.style.boxShadow = "0 10px 30px rgba(76,201,240,.15)";
            nav.style.padding = "15px 8%";

        } else {

            nav.style.background = "rgba(9,9,15,.75)";
            nav.style.boxShadow = "none";
            nav.style.padding = "20px 8%";

        }

    }

    // Hero Animation
    if (hero) {

        if (window.scrollY > 120) {

            hero.classList.add("scrolled");

        } else {

            hero.classList.remove("scrolled");

        }

    }

});


// ====================================
// Typing Effect
// ====================================

const text = "Mohamed Hassan";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (typing && i < text.length) {

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter, 180);

    }

}

window.addEventListener("load", typeWriter);


// ====================================
// Image Viewer
// ====================================

function openImage(img) {

    const viewer = document.querySelector(".image-viewer");
    const bigImage = document.getElementById("bigImage");

    if (viewer && bigImage) {

        bigImage.src = img.src;
        viewer.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}

function closeImage() {

    const viewer = document.querySelector(".image-viewer");

    if (viewer) {

        viewer.style.display = "none";

        document.body.style.overflow = "auto";

    }

}

// إغلاق الصورة بزر ESC

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeImage();

    }

});


// ====================================
// Mobile Menu
// ====================================

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {

        menu.classList.toggle("show");

    }

}

// إغلاق القائمة عند الضغط على أي رابط

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("menu").classList.remove("show");

    });

});
