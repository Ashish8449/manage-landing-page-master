import React from "react";
import PropTypes from "prop-types";

export default function H2(props) {
  return (
    <>
      <h2 className={props.variant}>{props.title}</h2>
    </>
  );
}
H2.defaultProps = {
  variant: "",
};
H2.prototTypes = {
  variant: PropTypes.string,
};
