import React from "react";
import "./Products.css";

export const Box = (props) => {
  const { icon, title, text } = props;
  return (
    <div className="box">
      <div className="box-icon">{icon}</div>
      <div className="box-title">{title}</div>
      <div className="box-text">{text}</div>
    </div>
  );
};

export default Box;
