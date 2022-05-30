import Link from 'next/link';
import React from 'react';
import { Icon } from '../icon';
import { Props } from './menu-link.props';

export const MenuLink = ({ title, icon, to, ...props }: Props): JSX.Element => {
  return (
    <Link href={to}>
      <a className="px-4 py-2 bg-slate-800 text-slate-200 flex items-center justify-start">
        <Icon type={icon} />
        <span className="ml-4">{title}</span>
      </a>
    </Link>
  );
};
