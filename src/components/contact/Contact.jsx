import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sjn83jv",
        "template_7635gts",
        formRef.current,
        "8w2m8CMq6-Mp1w5ch"
      )
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Napisz do mnie </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>raduchapiotr6@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Adres</h2>
          <span>Warszawa</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Telefon</h2>
          <span>789 417 103</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <input type="text" required placeholder="Imię" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Wiadomość" name="message" />
          <button>Wyślij</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
