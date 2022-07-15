import React, { useState, useRef, FormEvent } from 'react';
import styles from './ContactForm.module.css';
import * as EmailValidator from 'email-validator';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [validatedFields, setValidatedFields] = useState({
    message: true,
    name: true,
    email: true,
  })
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const message = e.target[0].value.trim() !== '';
    const name = e.target[1].value.trim() !== '';
    const email = EmailValidator.validate(e.target[2].value.trim());
    const canBeSent = message && name && email;
    if (canBeSent) {
      setSent(true)
      // emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
    }
    setValidatedFields({ message, name, email })
  }

  const {message, name, email} = validatedFields;

  return (
    <div className={sent ? styles.sent : ''} style={{ minHeight: '30rem' }}>
      <div className={`${styles.wrapper} ${styles.centered}`}>
        <article className={styles.letter}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.side}>
              <h1 className={styles.h1}>Napište nám:</h1>

              <p className={styles.p}>
                <textarea className={styles.textarea} name="message" placeholder="Vaše zpráva"></textarea>
              </p>
              <span className={message ? styles.alertHidden : styles.alertVisible}>* Přece jen nám něco napište :)</span>
            </div>
            <div className={styles.side}>
              <p className={styles.p}>
                <input className={styles.input} type="text" name="user_name" placeholder="Vaše jméno" />
              </p>
              <span className={name ? styles.alertHidden : styles.alertVisible}>* Vyplňte prosím své jméno</span>
              <p className={styles.p}>
                <input className={styles.input} type="text" name="user_email" placeholder="Váš email" />
              </p>
              <span className={email ? styles.alertHidden : styles.alertVisible}>* Vyplňte prosím email ve správném formátu</span>
              <p className={styles.p}>
                <button className={styles.button} id="sendLetter">ODESLAT</button>
              </p>
            </div>
          </form>
        </article>
        <div className={`${styles.envelope} ${styles.front}`}></div>
        <div className={`${styles.envelope} ${styles.back}`}></div>
      </div>
      <p className={`${styles.resultMessage} ${styles.centered}`}>Děkujeme Vám za zprávu! Pokud obsahuje dotaz, ozveme se Vám co nejdříve!</p>
    </div>
  )
}

export default ContactForm