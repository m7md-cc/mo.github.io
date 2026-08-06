document.addEventListener("DOMContentLoaded", () => {

    // Hero Animation
    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(50px)";

    setTimeout(() => {
        hero.style.transition = "all 1.2s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 300);

    // Cards Animation
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition = ".8s ease";
        observer.observe(card);
    });

    // Typing Effect
    const text = "Mohamed Hassan";
    const typing = document.getElementById("typing");

    let i = 0;

    function type() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(type, 120);
        }
    }

    type();

});

// Profile Scroll Animation
window.addEventListener("scroll", () => {

    const img = document.querySelector(".profile-image");

    if (!img) return;

    if (window.scrollY > 150) {
        img.classList.add("move");
    } else {
        img.classList.remove("move");
    }

});

// Mobile Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Image Viewer
function openImage(img) {
    const viewer = document.querySelector(".image-viewer");
    const big = document.getElementById("bigImage");

    big.src = img.src;
    viewer.style.display = "flex";
}

function closeImage() {
    document.querySelector(".image-viewer").style.display = "none";
}
