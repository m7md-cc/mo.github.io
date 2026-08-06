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
