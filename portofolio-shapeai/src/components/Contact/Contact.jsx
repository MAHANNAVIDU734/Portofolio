import React from 'react';
import styles from "./contact.module.css";
import ContactDetails from "../ContactDetails/ContactDetails";

function Contact() {

  return (
    <div>
      <div className={styles.contact}>
      <h1>Contact Details</h1>
      <p>Ways To Contact Me</p>
      <ContactDetails 
      Email="mahan.navidu@gmail.com"
      Github="https://github.com/MAHANNAVIDU734"
      PhoneNo="+94712192296"
      Facebook="https://www.facebook.com/mahan.navidu"

      LinkedIn="https://www.linkedin.com/in/mahan-malporu-55538a1b5/"
      />
      </div>
    </div>
  );
}

export default Contact;
