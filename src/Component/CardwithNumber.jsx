import React from "react";
import Button from "./Button";

export default function (props) {
  return (
    <div className="smwraper">
      <div className="row align-flex-start">
        <div className="col">
          <Button text={props.content.id} />
        </div>
        <div className="col">
          <h3>{props.content.title}</h3>
          <p>{props.content.answer}</p>
        </div>
      </div>
    </div>
  );
}
