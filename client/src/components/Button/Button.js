import React from "react";
import classNames from "classnames";
import "./Button.css";

const Button = (props) => {
  const { children, variant = "primary", ...others } = props;

  return (
    <button type="button" className={classNames("button", variant)} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
