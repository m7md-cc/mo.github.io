document.addEventListener("DOMContentLoaded", () => {


    // ================= Hero Animation =================

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(50px)";

        setTimeout(() => {

            hero.style.transition =
                "opacity 1.2s ease, transform 1.2s ease";

            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";

        }, 300);

    }



    // ================= Typing Effect =================

    const typing = document.getElementById("typing");

    const text = "Mohamed Hassan";


    if (typing) {

        typing.textContent = "";

        let index = 0;


        function typeWriter() {

            if (index < text.length) {

                typing.textContent += text[index];

                index++;

                setTimeout(typeWriter,120);

            }

        }


        typeWriter();

    }




    // ================= Cards Animation =================

    const cards = document.querySelectorAll(".card");


    if (cards.length) {


        const observer = new IntersectionObserver((entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){

                    entry.target.style.opacity="1";

                    entry.target.style.transform=
                    "translateY(0)";

                }


            });


        },{

            threshold:.2

        });



        cards.forEach(card=>{


            card.style.opacity="0";

            card.style.transform=
            "translateY(60px)";


            card.style.transition=
            "all .8s ease";


            observer.observe(card);


        });


    }





    // ================= Profile Scroll =================


    const profile =
    document.querySelector(".hero-profile");


    if(profile){


        function updateProfile(){


            if(window.scrollY > 80){

                profile.classList.add("move-left");

            }

            else{

                profile.classList.remove("move-left");

            }


        }



        window.addEventListener(
            "scroll",
            updateProfile,
            {passive:true}
        );


        updateProfile();


    }






    // ================= Music Player =================


    const music =
    document.getElementById("bgMusic");


    const widget =
    document.querySelector(".music-widget");


    const play =
    document.getElementById("musicPlay");


    const progress =
    document.getElementById("musicProgress");


    const status =
    document.getElementById("musicStatus");




    if(
        music &&
        widget &&
        play &&
        progress
    ){


        music.volume=.5;



        function playing(){


            widget.classList.add("playing");


            play.innerHTML=
            '<i class="fas fa-pause"></i>';



            if(status)
            status.textContent="يعمل الآن";


        }




        function paused(){


            widget.classList.remove("playing");


            play.innerHTML=
            '<i class="fas fa-play"></i>';



            if(status)
            status.textContent="متوقف";


        }






        window.toggleMusic=function(){



            if(music.paused){



                music.play()

                .then(()=>{


                    playing();


                })

                .catch(()=>{


                    if(status)
                    status.textContent="اضغط تشغيل";


                });



            }


            else{


                music.pause();


                paused();


            }



        };






        music.addEventListener(
            "timeupdate",
            ()=>{


                if(
                    !music.duration ||
                    !isFinite(music.duration)
                )
                return;



                progress.value =
                (music.currentTime /
                music.duration)*100;



            }
        );







        progress.addEventListener(
            "input",
            ()=>{


                if(
                    !
