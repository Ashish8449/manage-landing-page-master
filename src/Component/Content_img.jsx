import React from "react";
import Button from "./Button";

export default function Content_img(props) {
  console.log(props);
  return (
    <div className="wrapper ">
      <div className="row align-center ">
        <div className="col6">
          <h2>{props.content.heading}</h2>
          <p className="my-4">{props.content.text}</p>
          <Button text="Get Started" />
        </div>
        <div className="col6">
          <img src={props.content.img} alt="" />
        </div>
      </div>
    </div>
  );
}
