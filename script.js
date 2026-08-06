document.addEventListener("DOMContentLoaded", () => {


    // ================= Hero Animation =================

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



    // ================= Typing Effect =================

    const typing = document.getElementById("typing");
    const text = "Mohamed Hassan";


    if (typing) {

        typing.textContent = "";

        let i = 0;


        function type(){

            if(i < text.length){

                typing.textContent += text.charAt(i);

                i++;

                setTimeout(type,120);

            }

        }


        type();

    }




    // ================= Cards Animation =================

    const cards = document.querySelectorAll(".card");


    const observer = new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }


        });


    },{

        threshold:0.2

    });



    cards.forEach(card=>{


        card.style.opacity="0";

        card.style.transform="translateY(60px)";

        card.style.transition=".8s ease";


        observer.observe(card);


    });



});





// ================= Profile Scroll Animation =================


window.addEventListener("scroll",()=>{


    const profile = document.querySelector(".hero-profile");


    if(!profile) return;



    let progress = window.scrollY / 350;


    if(progress > 1){

        progress = 1;

    }



    if(progress > 0.3){


        profile.classList.add("scrolled");


    }else{


        profile.classList.remove("scrolled");


    }



});





// ================= Mobile Menu =================


function toggleMenu(){


    const menu = document.getElementById("menu");


    if(menu){

        menu.classList.toggle("show");

    }


}





// ================= Image Viewer =================


function openImage(img){


    const viewer = document.querySelector(".image-viewer");

    const bigImage = document.getElementById("bigImage");


    if(!viewer || !bigImage) return;



    bigImage.src = img.src;


    viewer.style.display="flex";


}




function closeImage(){


    const viewer = document.querySelector(".image-viewer");


    if(viewer){

        viewer.style.display="none";

    }


}
