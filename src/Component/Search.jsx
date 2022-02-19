import React from "react";
import Button from "./Button";
import CopyRight from "./CopyRight";

export default function Search(props) {
  return (
    <div className="row">
      <div className="col">
        <input type="text" placeholder={props.placeholder} />
      </div>
      <div className="col">
        <Button text="Go" />

      
      </div>
    </div>
  );
}
