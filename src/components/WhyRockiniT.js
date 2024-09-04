import React from "react";
import "./WhyRockiniT.css";

const WhyRockiniT = () => {
  return (
    <section id="why" className="why">
      <div className="flex-why-container">
        <div className="why-image-item">
          <img src="/images/why-img.jpg" />
        </div>
        <div className="why-text-item">
          <h1>Jak uczymy, czyli dlaczego Rockin'iT?</h1>
          <p>Opisywać unikalne cechy firmy i jej podejście do nauczania</p>
          <p>Wymienić kluczowe metody i podejścia stosowane przez firmę</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Etiam in venenatis quam. Vivamus ac tellus ante. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy.
          </p>
        </div>
      </div>
      {/* <div className="why-grid">
      <div className="why-item">
        <p>"MyProduct has transformed our business operations!"</p>
        <p>- John Doe, CEO of Company</p>
      </div>
      <div className="why-item">
        <p>"I can't imagine going back to how we did things before."</p>
        <p>- Jane Smith, Operations Manager</p>
      </div>
      <div className="why-item">
        <p>"The best decision we made was choosing MyProduct."</p>
        <p>- Michael Brown, CTO of Another Company</p>
      </div>
      </div> */}
    </section>
  );
};

export default WhyRockiniT;
