import React from 'react';
import { Props } from './headline.props';
import styles from './headline.module.css';

export const Headline = ({ tag, children, ...props }: Props): JSX.Element => {
  const HTah = tag;

  return <HTah {...props}>{children}</HTah>;
};
