import React from 'react';
import { Props } from './qq.props';
import styles from './qq.module.css';

export const QQ = ({ children, ...props }: Props): JSX.Element => {
  return <div {...props}>QQ</div>;
};
