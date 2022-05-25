import React from 'react';
import { Props } from './layout.props';
import { Header } from '../../orhanisms';
import styles from './layout.module.css';

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
};
