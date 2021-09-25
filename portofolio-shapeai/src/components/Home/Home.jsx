import React from "react";
// import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import About from "../About/About";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.about}>
         <About 
           Name="Mahan Navidu Malporu"
           describe="Become a FullStack Developer"
         />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
