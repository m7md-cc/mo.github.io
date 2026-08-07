document.addEventListener("DOMContentLoaded", () => {

    // ================= Hero Animation =================

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(50px)";

        setTimeout(() => {

            hero.style.transition = "opacity 1.2s ease, transform 1.2s ease";
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

        function type() {

            if (i < text.length) {

                typing.textContent += text.charAt(i);

                i++;

                setTimeout(type, 120);

            }

        }

        type();

    }


    // ================= Cards Animation =================

    const cards = document.querySelectorAll(".card");

    if (cards.length) {

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
            card.style.transition = "opacity .8s ease, transform .8s ease";

            observer.observe(card);

        });

    }


    // ================= Profile Scroll Animation =================

    const profile = document.querySelector(".hero-profile");

    if (profile) {

        let lastState = false;

        function updateProfile() {

            const shouldMove = window.scrollY > 80;

            if (shouldMove === lastState) return;

            lastState = shouldMove;

            if (shouldMove) {

                /*
                 * مهم جداً:
                 * نستخدم move-left الموجود في CSS
                 * ولا نستخدم transform مباشرة من JavaScript
                 */

                profile.classList.add("move-left");

            } else {

                profile.classList.remove("move-left");

            }

        }

        window.addEventListener("scroll", updateProfile, {
            passive: true
        });

        // تشغيل الحالة الصحيحة عند تحميل الصفحة
        updateProfile();

    }


    // ================= Music Player =================

    const music = document.getElementById("bgMusic");
    const musicWidget = document.querySelector(".music-widget");
    const musicPlay = document.getElementById("musicPlay");
    const musicProgress = document.getElementById("musicProgress");
    const musicStatus = document.getElementById("musicStatus");


    if (music && musicWidget && musicPlay && musicProgress) {

        music.volume = 0.5;


        // ================= تحديث واجهة الموسيقى =================

        function setPlayingState() {

            musicWidget.classList.add("playing");

            musicPlay.innerHTML =
                '<i class="fas fa-pause"></i>';

            if (musicStatus) {
                musicStatus.textContent = "يعمل الآن";
            }

        }


        function setPausedState() {

            musicWidget.classList.remove("playing");

            musicPlay.innerHTML =
                '<i class="fas fa-play"></i>';

            if (musicStatus) {
                musicStatus.textContent = "متوقف";
            }

        }


        // ================= التشغيل التلقائي =================

        const autoPlayMusic = () => {

            music.play()
                .then(() => {

                    setPlayingState();

                })
                .catch(() => {

                    if (musicStatus) {
                        musicStatus.textContent = "اضغط تشغيل";
                    }

                });

        };


        autoPlayMusic();


        // ================= تشغيل / إيقاف الموسيقى =================

        window.toggleMusic = function () {

            if (music.paused) {

                music.play()
                    .then(() => {

                        setPlayingState();

                    })
                    .catch(() => {

                        if (musicStatus) {
                            musicStatus.textContent = "اضغط تشغيل";
                        }

                    });

            } else {

                music.pause();

                setPausedState();

            }

        };


        // ================= تحديث شريط التقدم =================

        music.addEventListener("timeupdate", () => {

            if (!music.duration || !isFinite(music.duration)) return;

            musicProgress.value =
                (music.currentTime / music.duration) * 100;

        });


        // ================= التحكم في شريط التقدم =================

        musicProgress.addEventListener("input", () => {

            if (!music.duration || !isFinite(music.duration)) return;

            music.currentTime =
                (musicProgress.value / 100) * music.duration;

        });


        // ================= عند انتهاء الأغنية =================

        music.addEventListener("ended", () => {

            setPausedState();

            musicProgress.value = 0;

        });

    }

});


// ================= Mobile Menu =================

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {

        menu.classList.toggle("show");

    }

}


// ================= Music Widget =================

function toggleMusicWidget() {

    const widget = document.querySelector(".music-widget");

    if (widget) {

        widget.classList.toggle("open");

    }

}


// ================= Image Viewer =================

function openImage(img) {

    const viewer = document.querySelector(".image-viewer");
    const bigImage = document.getElementById("bigImage");

    if (!viewer || !bigImage || !img) return;

    bigImage.src = img.src;

    viewer.style.display = "flex";

    document.body.style.overflow = "hidden";

}


// ================= Close Image =================

function closeImage() {

    const viewer = document.querySelector(".image-viewer");

    if (viewer) {

        viewer.style.display = "none";

    }

    document.body.style.overflow = "";

}


// ================= Close Image With ESC =================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeImage();

    }

});            }

        }).catch(() => {

            if (musicStatus) {
                musicStatus.textContent = "اضغط تشغيل";
            }

        });

    };


    autoPlayMusic();


    // تشغيل / إيقاف الموسيقى

    window.toggleMusic = function () {

        if (music.paused) {

            music.play().then(() => {

                musicWidget.classList.add("playing");

                musicPlay.innerHTML =
                    '<i class="fas fa-pause"></i>';

                if (musicStatus) {
                    musicStatus.textContent = "يعمل الآن";
                }

            });

        } else {

            music.pause();

            musicWidget.classList.remove("playing");

            musicPlay.innerHTML =
                '<i class="fas fa-play"></i>';

            if (musicStatus) {
                musicStatus.textContent = "متوقف";
            }

        }

    };


    // تحديث شريط التقدم

    music.addEventListener("timeupdate", () => {

        if (!music.duration) return;

        musicProgress.value =
            (music.currentTime / music.duration) * 100;

    });


    // التحكم في شريط التقدم

    musicProgress.addEventListener("input", () => {

        if (!music.duration) return;

        music.currentTime =
            (musicProgress.value / 100) * music.duration;

    });


    // انتهاء الأغنية

    music.addEventListener("ended", () => {

        musicWidget.classList.remove("playing");

        musicPlay.innerHTML =
            '<i class="fas fa-play"></i>';

        if (musicStatus) {
            musicStatus.textContent = "متوقف";
        }

    });

}

});

// ================= Profile Scroll Animation =================

window.addEventListener("scroll", () => {

const profile = document.querySelector(".hero-profile");

const image = document.querySelector(".profile-image");

const name = document.getElementById("typing");

if (!profile || !image || !name) return;


if (window.scrollY > 80) {

    profile.classList.add("scrolled");

    // تحريك البروفايل بسرعة إلى اليسار
    profile.style.transform = "translateX(-120px)";

    // تصغير الصورة
    image.style.transform = "scale(.85)";

    // تقريب الاسم من الصورة
    name.style.transform = "translateX(15px)";

} else {

    profile.classList.remove("scrolled");

    // الرجوع للوضع الأصلي
    profile.style.transform = "translateX(0)";

    image.style.transform = "scale(1)";

    name.style.transform = "translateX(0)";

}

});

// ================= Mobile Menu =================

function toggleMenu() {

const menu = document.getElementById("menu");

if (menu) {

    menu.classList.toggle("show");

}

}

// ================= Music Widget =================

function toggleMusicWidget() {

const widget = document.querySelector(".music-widget");

if (widget) {

    widget.classList.toggle("open");

}

}

// ================= Image Viewer =================

function openImage(img) {

const viewer = document.querySelector(".image-viewer");

const bigImage = document.getElementById("bigImage");

if (!viewer || !bigImage) return;


bigImage.src = img.src;

viewer.style.display = "flex";

}

function closeImage() {

const viewer = document.querySelector(".image-viewer");

if (viewer) {

    viewer.style.display = "none";

}

                }
