particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#9d4dff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    },
    line_linked: {
      enable: true,
      color: "#9d4dff",
      opacity: 0.3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    }
  }
});

gsap.from(".hero h1", {
  y: -80,
  opacity: 0,
  duration: 1.2
});

gsap.from(".hero p", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.3
});

gsap.from(".btn", {
  scale: 0,
  duration: 1,
  delay: 0.6
});

gsap.from(".card", {
  scrollTrigger: ".cards",
  opacity: 0,
  y: 80,
  stagger: 0.2,
  duration: 1
});
