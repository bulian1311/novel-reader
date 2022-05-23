import { ButtonHTMLAttributes, ReactNode } from "react";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
