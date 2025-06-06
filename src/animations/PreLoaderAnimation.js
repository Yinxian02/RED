import gsap from "gsap";

export const preLoaderAnim = () => {
  const tl = gsap.timeline();

  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })

    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "100vh" },
    })

    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })

    .from(".texts-container .letter", {
      duration: 1.2,
      delay: 1,
      x: 100,
      opacity: 0,
      stagger: 0.05,
      ease: "power3.out",
    })

    .to(".texts-container .letter", {
      duration: 1,
      x: -20,
      opacity: 1,
      stagger: 0.02,
      ease: "power3.out",
    })

    .to(".texts-container .letter", {
      duration: 1.5,
      opacity: 0,
      stagger: 0.02,
      ease: "power3.inOut",
    }, "-=2")

    .to(".texts-container", {
      duration: 1,
      opacity: 0,
      ease: "power3.inOut",
    }, "+=3")

    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })

    .to("body", {
      duration: 0.1,
      ease: "power3.inOut",
    })

    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })

    .to(".preloader", {
      duration: 5,
      height: "0vh",
      ease: "Power3.easeOut",
    });

};

