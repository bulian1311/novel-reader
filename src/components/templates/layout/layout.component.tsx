import React from 'react';
import { Props } from './layout.props';
import { Header } from '../../orhanisms';

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-4">{children}</main>
    </>
  );
};
