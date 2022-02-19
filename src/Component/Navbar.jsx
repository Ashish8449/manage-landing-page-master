import React from "react";
import FooterLogo from "./FooterLogo";
import icon from "../images/logo.svg";
import List from "./List";
import Button from "./Button";
const listitems = ["Pricing", " Product", " About Us", " Careers", "Community"];

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="row">
          <div className="col">
            <FooterLogo img={icon} />
          </div>
        <List  item = {listitems}/>
          <Button text="Get Started" />
        </div>
      </nav>
    </>
  );
}
