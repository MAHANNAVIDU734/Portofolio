import React from 'react';
import styles from "./Header.module.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
      <h1>Protofilio</h1>
      </div>
      <div className={styles.header__right}>
      <Link to='/Contact'>
      <p>Contact</p>
      </Link>
      <Avatar />
      </div>
    </div>
  );
}

export default Header;
