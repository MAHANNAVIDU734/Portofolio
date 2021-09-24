import React from 'react';
import styles from "./about.module.css";

function About({ Name, describe}) {
  return (
    <div className={styles.about}>
      <h1>{Name}</h1>
      <h2>{describe}</h2>
    </div>
  );
}

export default About;
