import "./Contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k1igj1j",
        "template_n8a37nm",
        formRef.current,
        "rli3R3IGCok7VUt09"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact-page">
      <h1 className="contact-page__title">Contact</h1>

      <div className="contact">
        <div className="contact__wrapper">
          <p className="contact__intro">
            If you have any questions, please email customer service at{" "}
            <a href="mailto:sales@watchexpressions.com">
              sales@watchexpressions.com
            </a>{" "}
            or fill out the form below to contact us.
          </p>

          <a
            href="https://wa.me/15852822451?text=Hello%20I%20have%20a%20question%20about%20a%20watch"
            target="_blank"
            rel="noreferrer"
            className="contact__whatsapp"
          >
            Chat on WhatsApp
          </a>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact__form"
          >
            <div className="contact__row">
              <div className="contact__field">
                <label>Name *</label>
                <input type="text" name="name" placeholder="First" required />
              </div>

              <div className="contact__field">
                <label>&nbsp;</label>
                <input type="text" placeholder="Last" />
              </div>
            </div>

            <div className="contact__field">
              <label>Email *</label>
              <input type="email" name="email" required />
            </div>

            <div className="contact__field">
              <label>Comment or Message</label>
              <textarea name="message" rows="5" />
            </div>

            <button type="submit" className="contact__submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
