document.addEventListener("DOMContentLoaded", () => {


    // ================= Hero Animation =================

    const hero = document.querySelector(".hero");

    if(hero){

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(()=>{

            hero.style.transition =
            "1s ease";

            hero.style.opacity="1";
            hero.style.transform="translateY(0)";

        },300);

    }




    // ================= Typing Effect =================


    const typing = document.getElementById("typing");


    if(typing){

        const text = "Mohamed Hassan";

        let index = 0;


        function write(){

            if(index < text.length){

                typing.textContent += text[index];

                index++;

                setTimeout(write,120);

            }

        }


        write();

    }






    // ================= Cards Animation =================


    const cards =
    document.querySelectorAll(".card");


    if(cards.length){


        const observer =
        new IntersectionObserver(entries=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },{

            threshold:.2

        });



        cards.forEach(card=>{


            observer.observe(card);


        });


    }







    // ================= Profile Move =================


    const profile =
    document.querySelector(".hero-profile");



    if(profile){


        window.addEventListener("scroll",()=>{


            if(window.scrollY > 80){

                profile.classList.add("move-left");

            }

            else{

                profile.classList.remove("move-left");

            }


        });


    }








    // ================= Music =================


    const music =
    document.getElementById("bgMusic");


    const play =
    document.getElementById("musicPlay");


    const progress =
    document.getElementById("musicProgress");


    const status =
    document.getElementById("musicStatus");


    const widget =
    document.querySelector(".music-widget");




    if(music && play){



        music.volume=.5;


// ================= Auto Play Music =================

if (music) {

    music.volume = 0.5;

    music.play()
    .then(() => {

        if(widget){
            widget.classList.add("playing");
        }

        if(play){
            play.innerHTML =
            '<i class="fas fa-pause"></i>';
        }

        if(status){
            status.textContent = "يعمل الآن";
        }

    })
    .catch(() => {

        if(status){
            status.textContent = "اضغط تشغيل";
        }

    });

}
        

        window.toggleMusic=function(){



            if(music.paused){


                music.play()

                .then(()=>{


                    play.innerHTML =
                    '<i class="fas fa-pause"></i>';


                    widget.classList.add("playing");


                    if(status)
                    status.textContent="يعمل الآن";


                })

                .catch(()=>{


                    if(status)
                    status.textContent="خطأ في تشغيل الصوت";


                });



            }

            else{


                music.pause();


                play.innerHTML =
                '<i class="fas fa-play"></i>';


                widget.classList.remove("playing");


                if(status)
                status.textContent="متوقف";


            }


        };







        music.addEventListener("timeupdate",()=>{


            if(music.duration){


                progress.value =
                (music.currentTime /
                music.duration)*100;


            }


        });







        progress.addEventListener("input",()=>{


            if(music.duration){


                music.currentTime =
                (progress.value/100)
                *music.duration;


            }


        });





    }




});









// ================= Menu =================


function toggleMenu(){


    const menu =
    document.getElementById("menu");


    if(menu){

        menu.classList.toggle("show");

    }

}







// ================= Music Widget =================


function toggleMusicWidget(){


    const widget =
    document.querySelector(".music-widget");


    if(widget){

        widget.classList.toggle("open");

    }


}







// ================= Image Viewer =================



function openImage(img){


    const viewer =
    document.getElementById("imageViewer");


    const bigImage =
    document.getElementById("bigImage");



    if(!viewer || !bigImage)
    return;



    bigImage.src = img.src;


    viewer.style.display="flex";


    document.body.style.overflow="hidden";


}







function closeImage(){



    const viewer =
    document.getElementById("imageViewer");



    if(viewer){

        viewer.style.display="none";

    }


    document.body.style.overflow="";


}






document.addEventListener("keydown",(e)=>{


    if(e.key==="Escape"){

        closeImage();

    }


});
