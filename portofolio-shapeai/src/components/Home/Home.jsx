import React from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import About from "../About/About";
import styles from "./home.module.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="about">
         <About 
           Name="Mahan Navidu Malporu"
           describe="Become a FullStack Developer"
         />
      </div>
      <div className={styles.projects}>
      <h1 className="title">My Projects</h1>
      <div className={styles.projects__section}>
      
      <Card 
             progname="AirBnb Clone"
             //img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fschneiderlegal.com%2F2016%2F07%2F27%2Fthe-airbnb-phenomena%2F&psig=AOvVaw0K31akTMLwszNl8ei6rgVi&ust=1632584050767000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCNCQydn3l_MCFQAAAAAdAAAAABAJ"
             githubrepo="https://github.com/MAHANNAVIDU734/Airbnb-clone"
             description="AirBnb clone for distribute Items and Manufacturing"
        />
        <Card 
             progname="Tesla Clone"
             //img="https://dribbble.com/tags/tesla_model_s_illustration"
             description="Tesla Cars destribution and Manufacturing"
             githubrepo="https://github.com/MAHANNAVIDU734/Tesla-cars.git"
        />
        <Card 
             progname="Mycartshop.lk"
             //img=""
             description="Online shopping system for providing items"
             githubrepo="https://github.com/MAHANNAVIDU734/Mycartshop.lk.git"
        />
        </div>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
