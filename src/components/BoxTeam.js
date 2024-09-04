import React from "react";
import "./AboutUs.css";

export const BoxTeam = (props) => {
  const { img, name, position, text } = props;
  return (
    <div className="box-team">
      <div className="box-team-img">{img}</div>
      <div className="box-team-name">{name}</div>
      <div className="box-team-position">{position}</div>
      <div className="box-team-text">{text}</div>
    </div>
  );
};

export default BoxTeam;
