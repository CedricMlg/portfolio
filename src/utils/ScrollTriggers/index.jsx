export default function ScrollTriggers() {
  window.onload = function () {
    gsap.from(".about__title", {
      scrollTrigger: {
        trigger: ".about__title",
        start: "bottom 80%",
      },
      opacity: 0,
      yPercent: -70,
      duration: 1.3,
    });
    gsap.from(".about__description", {
      scrollTrigger: {
        trigger: ".about__description",
        start: "200% 80%",
      },
      opacity: 0,
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
      duration: 1.3,
    });
    gsap.from(".work__title", {
      scrollTrigger: {
        trigger: ".work__title",
        start: "bottom 80%",
      },
      opacity: 0,
      yPercent: -70,
      duration: 1.3,
    });
    gsap.from(".work__projects a", {
      scrollTrigger: {
        trigger: ".work__projects a",
        start: "100% 80%",
      },
      opacity: 0,
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
      yPercent: -70,
      duration: 1.3,
    });
    gsap.from(".contact__description", {
      scrollTrigger: {
        trigger: ".contact__description",
        start: "200% 80%",
      },
      opacity: 0,
      duration: 1.3,
    });
    gsap.from(".contact__form div", {
      scrollTrigger: {
        trigger: ".contact__form",
        start: "30% 80%",
      },
      stagger: {
        each: 0.6,
      },
      opacity: 0,
      duration: 0.8,
    });
  };
}
