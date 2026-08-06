document.addEventListener("DOMContentLoaded", () => {

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




// تأثير الناف بار عند النزول

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");


    if(nav){

        if(window.scrollY > 50){

            nav.style.background = "rgba(9,9,15,.95)";
            nav.style.boxShadow = "0 10px 30px rgba(76,201,240,.15)";
            nav.style.padding = "15px 8%";

        }else{

            nav.style.background = "rgba(9,9,15,.75)";
            nav.style.boxShadow = "none";
            nav.style.padding = "20px 8%";

        }

    }

});




// تأثير كتابة الاسم

const text = "Mohamed Hassan";
const typing = document.getElementById("typing");

let i = 0;


function typeWriter(){

    if(typing && i < text.length){

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter,180);

    }

}


window.addEventListener("load", typeWriter);





// فتح الصورة بحجم الشاشة

function openImage(img){

    const viewer = document.querySelector(".image-viewer");
    const bigImage = document.getElementById("bigImage");


    if(viewer && bigImage){

        bigImage.src = img.src;
        viewer.style.display = "flex";

    }

}





// إغلاق الصورة

function closeImage(){

    const viewer = document.querySelector(".image-viewer");


    if(viewer){

        viewer.style.display = "none";

    }

}





// القائمة في الهاتف

function toggleMenu(){

    const menu = document.getElementById("menu");


    if(menu){

        menu.classList.toggle("show");

    }

}
