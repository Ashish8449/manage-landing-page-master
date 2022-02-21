import React from "react";
import Button from "./Button";
import H3 from "./H3";
import Paragraph from "./Paragraph";

export default function cardwithNumber(props) {
  return (
    <div className="smwraper">
      <div className="row align-flex-start">
        <div className="col">
          <Button text={props.content.id} />
        </div>
        <div className="col ">
          <H3 title={props.content.title} />
        </div>
      </div>
      <Paragraph text={props.content.answer} />
    </div>
  );
}
