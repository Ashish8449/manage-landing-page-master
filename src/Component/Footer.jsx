import React from "react";
import CopyRight from "./CopyRight";
import FooterLogo from "./FooterLogo";
import List from "./List";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import footerimg from "../images/footerlog.svg";
import pinterest from "../images/icon-pinterest.svg";

import Search from "./Search";
import Icon from "./Icon";
const list = [
  ["Home", " Pricing", "Products", "About Us"],
  ["Careers", "Community", " Privacy Policy"],
];
const icons = [facebook, instagram, youtube, twitter, pinterest];

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="footerlog">
          <div className="mb10">
            <FooterLogo img={footerimg} />
          </div>
          <div className="icons">
            <List
              item={icons.map((item, indx) => (
                <Icon key={indx} img={item} />
              ))}
            />
          </div>
        </div>
        {list.map((item, indx) => (
          <List key={indx} item={item} />
        ))}

        <div className="col3 ">
          <div className="mb10">
            <Search placeholder="Updates in your inbox…" />
          </div>
          <CopyRight />
        </div>
      </div>
    </footer>
  );
}
