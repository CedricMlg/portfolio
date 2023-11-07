import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../Input";
import MainButton from "../MainButton";

export default function Contact() {
  const form = useRef();
  const [text, setText] = useState("");

  const inputs = [
    {
      id: 1,
      name: "contact_name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "contact_email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "contact_subject",
      type: "text",
      placeholder: "Subject",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_azxgvw7",
        "template_1ei1eu3",
        form.current,
        "q52InBS1JcWCiJewo"
      )
      .then(
        () => {
          setText("Your message was successfully sent");
          e.target[0].setAttribute("focused", "false");
          e.target[1].setAttribute("focused", "false");
        },
        () => {
          setText("Your message could not be sent, try again later");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact">
      <h4 className="contact__title">
        <span>Contact</span> me
      </h4>
      <div className="contact__description">
        <p>
          I&apos;m actively looking for full time job opportunities as a{" "}
          <span>Front-End Developer</span>.
        </p>
        <p>But if you have any request or question you know what to do !</p>
      </div>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        {inputs.map((input) => (
          <Input key={input.id} {...input} />
        ))}
        <div>
          <textarea name="contact_message" placeholder="Message" />
        </div>
        <div className="contact__block-submit">
          <p className="contact__submit-text">{text}</p>
          <MainButton
            props={{ text: "Send me", hidden: "Your message", type: "submit" }}
          />
        </div>
      </form>
    </div>
  );
}
