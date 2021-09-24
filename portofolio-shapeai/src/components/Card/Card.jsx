import React from 'react';
import styles from "./card.module.css";
import { Link } from "react-router-dom";

function Card({ progname, img, githubrepo, description}) {
  return (
    <div className={styles.card}>
    <img src={styles.img} alt="" />
    <div className={styles.card__info}>
        <h2>{progname}</h2>
        <h4>{description}</h4>
        <Link>{githubrepo}</Link>
    </div>
      
    </div>
  );
}

export default Card;
