import React from "react";

export default function Image(props) {
  return <img src={props.img} className={props.variant} alt={props.alt} />;
}
Image.defaultProps = {
  alt: "img",
  variant: "",
};
