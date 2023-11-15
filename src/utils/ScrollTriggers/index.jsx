export default function ScrollTriggers() {
  let mm = gsap.matchMedia();

  window.onload = function () {
    mm.add(
      {
        isSmall: "(max-width: 1090px)",
        isBig: "(min-width: 1091px)",
      },
      (context) => {
        let { isSmall, isBig } = context.conditions;

        gsap.from(".about__title", {
          scrollTrigger: {
            trigger: ".about__title",
            start: "bottom 80%",
          },
          opacity: 0,
          ease: Power1.easeOut,
          yPercent: -70,
          duration: 1.3,
        });
        gsap.from(".about__description", {
          scrollTrigger: {
            trigger: ".about__description",
            start: isSmall ? "100% 80%" : "200% 80%",
          },
          opacity: 0,
          ease: Power1.easeOut,
          duration: 1.3,
          stagger: {
            each: 0.8,
          },
        });
        gsap.from(".about__skills", {
          scrollTrigger: {
            trigger: ".about__skills",
            start: "-110% 80%",
          },
          opacity: 0,
          ease: Power1.easeOut,
          duration: 1.3,
        });
        gsap.from(".work__title", {
          scrollTrigger: {
            trigger: ".work__title",
            start: "bottom 80%",
          },
          opacity: 0,
          ease: Power1.easeOut,
          yPercent: -70,
          duration: 1.3,
        });
        gsap.from(".work__projects a", {
          scrollTrigger: {
            trigger: ".work__projects a",
            start: isSmall ? "70% 80%" : "100% 80%",
          },
          opacity: 0,
          ease: Power1.easeOut,
          duration: 1.3,
          stagger: {
            each: 0.8,
          },
        });
        gsap.from(".contact__title", {
          scrollTrigger: {
            trigger: ".contact__title",
            start: "bottom 80%",
          },
          opacity: 0,
          ease: Power1.easeOut,
          yPercent: -70,
          duration: 1.3,
        });
        gsap.from(".contact__description", {
          scrollTrigger: {
            trigger: ".contact__description",
            start: isSmall ? "90% 80%" : "200% 80%",
          },
          opacity: 0,
          ease: Power1.easeOut,
          duration: 1.3,
        });
        gsap.from(".contact__form div", {
          scrollTrigger: {
            trigger: ".contact__form",
            start: isSmall ? "10% 80%" : "30% 80%",
          },
          opacity: 0,
          ease: Power1.easeOut,
          duration: 0.8,
          stagger: {
            each: 0.6,
          },
        });
      }
    );
  };
}
