import React from "react";
import "./AboutUs.css";
import BoxTeam from "./BoxTeam";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-mission">
          <h2>O nas</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
        <h2>Nasz zespół</h2>

        <div className="about-us-grid">
          <BoxTeam
            img={
              <img
                src="/images/Karolina_Saukens-300x300.jpg"
                alt="Karolina Saukens"
              />
            }
            name="Karolina Saukens"
            position="Trener"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          ></BoxTeam>
          <BoxTeam
            img={<img src="/images/dojdilo.png" alt="Maciej Dojlido" />}
            name="Maciej Dojlido"
            position="Trener"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          ></BoxTeam>
          <BoxTeam
            img={<img src="/images/1-2.png" alt="Agata Maciejewska" />}
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
