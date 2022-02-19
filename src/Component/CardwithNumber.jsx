import React from "react";
import Button from "./Button";

export default  function cardwithNumber(props) {
  return (
    <div className="smwraper">
      <div className="row align-flex-start">
        <div className="col">
          <Button text={props.content.id} />
        </div>
        <div className="col">
          <h3>{props.content.title}</h3>
        </div>
      </div>
          <p className="content">{props.content.answer}</p>
    </div>
  );
}
