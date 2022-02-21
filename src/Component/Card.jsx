import React from "react";
import H3 from "./H3";
import Image from "./Image";
import Paragraph from "./Paragraph";

export default function Card(props) {
  return (
    <div className="col4 relative text-center boxShadow cardBox ">
      <Image img={props.content.img} variant="cardimg" alt="avtart2.jpg" />
      <H3 title={props.content.name} />

      <Paragraph text={props.content.text} />
    </div>
  );
}
