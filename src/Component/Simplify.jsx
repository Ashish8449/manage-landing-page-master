import React from "react";
import Button from "./Button";
import H2 from "./H2";

export default function Simplify() {
  return (
    <div className="wrapper smiplify ">
      <div className="row  ">
        <div className="col6">
          <H2
            title="Simplify how your team works today."
            variant="text-white"
          />
        </div>

        <div className="col3">
          <Button text="Get Started" />
        </div>
      </div>
    </div>
  );
}
