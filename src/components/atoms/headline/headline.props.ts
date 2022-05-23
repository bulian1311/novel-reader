import React, { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLElement> & {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
};
