import React from "react";
import "./AboutUs.css";
import BoxTeam from "./BoxTeam";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-mission">
          <h1>O nas</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
          <p>Przedstawiać krótką historię firmy, opis misji i wizji.</p>
          <p>Dodawać zdjęcia zespołu z krótkimi opisami członków</p>
        </div>
        <h2>Nasz zespół</h2>

        <div className="about-us-grid">
          <BoxTeam
            img={<img src="/images/Karolina_Saukens-300x300.jpg" />}
            name="Karolina Saukens"
            position="Trener"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          ></BoxTeam>
          <BoxTeam
            img={<img src="/images/dojdilo.png" />}
            name="Maciej Dojlido"
            position="Trener"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          ></BoxTeam>
          <BoxTeam
            img={<img src="/images/1-2.png" />}
            name="Agata Maciejewska"
            position="Asystentka"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          ></BoxTeam>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
