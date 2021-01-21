import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster pic"
        src={`https://robohash.org/${props.id}?set=set2&size=160x160`}
      ></img>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
