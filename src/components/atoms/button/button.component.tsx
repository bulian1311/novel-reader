import React from "react";
import { Props } from "./button.props";
import styles from "button.module.css";

export const Button = ({ children, ...props }: Props): JSX.Element => {
  return <button {...props}>{children}</button>;
};
