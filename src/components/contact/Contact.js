import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

import { SiGmail } from "react-icons/si";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gqlecgr",
        "template_soln3q8",
        form.current,
        "ivu8mGPWkJS3iz6Tl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <SiGmail className="contact_option_icon email_icon" />
            <h4>Email</h4>
            <h5>ismail.rammer@gmail.com</h5>
            <a
              href="mailto:ismail.rammer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Send a message{" "}
            </a>
          </article>

          <article className="contact_option">
            <BsMessenger className="contact_option_icon messenger_icon" />
            <h4>Messenger</h4>
            <h5></h5>
            <a
              href="https://m.me/profile.php?id=100002701500239"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option_icon whatsapp_icon" />
            <h4>WhatsApp</h4>
            <h5>+2-01118384647</h5>
            <a
              href="https://api.whatsapp.com/send?phone=01118384647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
