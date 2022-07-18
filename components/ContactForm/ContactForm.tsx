import React, { useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import styles from './ContactForm.module.css';
import * as EmailValidator from 'email-validator';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [messageInvisible, setMessageInvisible] = useState(false)
  const [validatedFields, setValidatedFields] = useState({
    message: true,
    name: true,
    email: true,
  })
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    const message = e.target[0].value.trim() !== '';
    const name = e.target[1].value.trim() !== '';
    const email = EmailValidator.validate(e.target[2].value.trim());
    const canBeSent = message && name && email;
    if (canBeSent) {
      setSent(true)
      setMessageInvisible(false)
      emailjs.sendForm(process.env.SERVICE_ID as string, process.env.TEMPLATE_ID as string, form.current as HTMLFormElement, process.env.PUBLIC_KEY)
      e.target.reset()
    }
    setValidatedFields({ message, name, email })
  }

  const { message, name, email } = validatedFields;

  const handleSentMessage = () => {
    setSent(false)
    setMessageInvisible(true)
  }

  return (
    <div className={`${sent ? styles.sent : ''} ${styles.contactSection}`}>
      <h1 className={styles.contactUs}>
        <strong>NAPIŠTE NÁM</strong>
        <div>
          <div className={styles.blueDot} />
          <div className={styles.blueDot} />
        </div>
      </h1>
      <div className={`${styles.wrapper} ${styles.centered}`}>
        <article className={styles.letter}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.side}>
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
      <div>
        <p className={`${styles.resultMessage} ${styles.centered} ${messageInvisible ? styles.messageInvisible : ''}`}>
          Děkujeme Vám za zprávu! Pokud obsahuje dotaz, ozveme se Vám co nejdříve!
        </p>
      </div>
      <button className={`${styles.resend} ${messageInvisible ? styles.messageInvisible : ''}`} onClick={() => handleSentMessage()}>
        <Image src="/resend.svg" width="30px" height="30px" alt="resend" />
      </button>

    </div>
  )
}

export default ContactForm