"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./reservationInputs.module.css";

export default function ReservationInputs() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const HandleEmailSent = () => {
    setEmailSent(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u6gjg6s",
        "template_jsv5qfx",
        form.current,
        "y8nREYl_1OCsl1rBw"
      )
      .then(() => {
        HandleEmailSent();
      });
  };
  return (
    <>
      <form
        className={`${styles.form} ${emailSent === true ? styles.none : ""}`}
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className={`${styles.input} ${styles}`}
          type="text"
          name="user_name"
          placeholder="Enter your full name"
        />
        <div>
          <input
            className={`${styles.input} ${styles}`}
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <input
            className={`${styles.input} ${styles}`}
            type="tel"
            name="user_phone"
            placeholder="Phone number"
          />
        </div>
        <div>
          <input
            className={`${styles.input} ${styles}`}
            type="date"
            name="user_date"
            placeholder="Date"
          />
          <input
            className={`${styles.input} ${styles}`}
            type="time"
            name="user_time"
            placeholder="Time"
          />
        </div>
        <input
          className={`${styles.input} ${styles}`}
          type="text"
          name="user_quantity"
          placeholder="Number of people"
        />
        <textarea
          className={`${styles.textArea} ${styles.input}`}
          name="message"
          placeholder="Any special requirements?"
        />
        <input
          className={`button1 ${styles.buttonSend}`}
          type="submit"
          value="Send"
        />
      </form>
      <div className={emailSent ? styles.formSent : styles.hide}>
        <h6> Thank you for your request</h6>
        <h5>Wait for our confirmtion</h5>
      </div>
    </>
  );
}
