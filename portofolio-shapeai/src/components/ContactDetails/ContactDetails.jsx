import React from 'react';
import styles from "./contactdetails.module.css";
import {Link} from "react-router-dom";

function ContactDetails({Email, Github, PhoneNo, Facebook, LinkedIn}) {
  return (
    <div className={styles.contactdetails}>
      <div className={styles.Email}>
      <h2>Email: <Link>{Email}</Link></h2>
      </div>
      <div className={styles.Github}>
      <h2>Github: <Link>{Github}</Link> </h2>
      </div>
      <div className={styles.Phoneno}>
      <h2>Phone No: <Link>{PhoneNo}</Link> </h2>
      </div>
      <div className={styles.Facebook}>
      <h2>Facebook: <Link>{Facebook}</Link> </h2>
      </div>
      <div className={styles.LinkedIn}>
      <h2>LinkedIn: <Link>{LinkedIn}</Link> </h2>
      </div>
    </div>
  );
}


export default ContactDetails;
