import React from "react";
import Button from "./Button";
import H2 from "./H2";
import Image from "./Image";
import Paragraph from "./Paragraph";

export default function Content_img(props) {
  console.log(props);
  return (
    <div className="wrapper ">
      <div className="row align-center contentimg ">
        <div className="col6">
          <H2 title={props.content.heading} />
          <Paragraph title={props.content.text} />
          <p className="my-4">{props.content.text}</p>
          <Button text="Get Started" />
        </div>
        <div className="col6">
          <Image img={props.content.img} alt="" />
        </div>
      </div>
    </div>
  );
}
