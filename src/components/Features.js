import React from "react";
import "./Features.css";
import { CertificateIcon } from "../components/Icons/CertificateIcon";

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Czego uczymy?</h2>

      <div className="flex-container">
        <div className="feature-item">
          <h3>
            <CertificateIcon /> Front-end
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="feature-item">
          <h3>
            <CertificateIcon /> OpenAI
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="feature-item">
          <h3>
            <CertificateIcon /> Elementor
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="feature-item">
          <h3>
            <CertificateIcon /> Leadership
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
