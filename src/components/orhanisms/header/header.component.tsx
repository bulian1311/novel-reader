import React from 'react';
import { Props } from './header.props';
import styles from './header.module.css';

export const Header = ({ ...props }: Props): JSX.Element => {
  return <div {...props}>Header</div>;
};
