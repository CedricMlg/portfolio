import ContactComp from "../../components/Contact";
import { useEffect } from "react";

export default function Contact() {
  const mainTimeline = gsap.timeline();

  useEffect(() => {
    mainTimeline
      .from(".contact__title", {
        opacity: 0,
        ease: Power1.easeOut,
        yPercent: -70,
        duration: .7,
      })
      .from(".contact__description", {
        opacity: 0,
        ease: Power1.easeOut,
        duration: .7,
      })
      .from(".contact__form div", {
        opacity: 0,
        ease: Power1.easeOut,
        duration: .8,
        stagger: {
          each: .4,
        },
      });
  }, []);

  return (
    <main>
      {" "}
      <div className="contactPage">
        <ContactComp />
      </div>
    </main>
  );
}
