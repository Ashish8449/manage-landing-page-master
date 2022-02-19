import React from "react";
import FooterLogo from "./FooterLogo";
import icon from "../images/logo.svg";
import List from "./List";
import Button from "./Button";
import humburger from "../images/icon-hamburger.svg";
import { useState } from "react";
const listitems = ["Pricing", " Product", " About Us", " Careers", "Community"];

export default function Navbar() {
  const [hamburger, sethamburger] = useState(false);
  const handelhamburger = () => {
    console.log("yes");
    sethamburger(!hamburger);
  };
  return (
    <>
      <nav>
        <div className="row">
          <div className="col">
            <FooterLogo img={icon} />
          </div>
          <div className="items">
            <List item={listitems} />
            <Button text="Get Started" />
          </div>
          <div className="hamburger">
            <img src={humburger} onClick={handelhamburger} alt="" />
          </div>
        </div>
        {hamburger && (
          <div className="hamburgeritmes">
            <List item={listitems} />
            <Button text="Get Started" />
          </div>
        )}
      </nav>
    </>
  );
}
