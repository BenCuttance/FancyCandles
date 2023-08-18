import React from "react";
import classNames from "classnames";
import "./Button.css";

const Button = (props) => {
  const { children, variant = "primary", className, ...others } = props;

  return (
    <button
      type="button"
      className={classNames("button", variant, className)}
      {...others}
    >
      {props.children}
    </button>
  );
};

export default Button;
