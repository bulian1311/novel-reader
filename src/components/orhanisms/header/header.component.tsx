import React from 'react';
import { Props } from './header.props';
import Link from 'next/link';
import { Menu } from '../../molecules';

export const Header = ({ ...props }: Props): JSX.Element => {
  return (
    <header
      className="px-8 py-2 flex justify-between items-center bg-slate-900 text-slate-200"
      {...props}
    >
      <Link href="/">
        <a className="text-xl font-bold cursor-pointer">Logo</a>
      </Link>
      <div>
        <Menu />
      </div>
      <div>search</div>
      <div>buttons</div>
      <div>login</div>
    </header>
  );
};
