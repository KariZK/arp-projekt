import React from "react";
import "./Products.css";
import { Box } from "./Box";
import { UpskillingIcon } from "./Icons/UpsokillingIcon";
import { ReskillingIcon } from "./Icons/ReskillingIcon";
import { ForBusinessIcon } from "./Icons/ForBusinessIcon";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2>Dla kogo?</h2>

        <div className="products-grid">
          <Box
            icon={<UpskillingIcon />}
            title="UPSKILLING"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          ></Box>
          <Box
            icon={<ReskillingIcon />}
            title="RESKILLING"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          ></Box>
          <Box
            icon={<ForBusinessIcon />}
            title="BUSINESS"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          ></Box>
        </div>
      </div>
    </section>
  );
};

export default Products;
