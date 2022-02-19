import React from "react";

export default function Card(props) {
  return (
    <div className="col4 relative text-center boxShadow cardBox ">
      <img src={props.content.img} className="cardimg" alt="avtart1.jpg" />
      <h3>{props.content.name}</h3>
      <p>{props.content.text}</p>
    </div>
  );
}
