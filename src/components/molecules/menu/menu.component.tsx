import React from 'react';
import { Props } from './menu.props';
import { MenuLink } from '../../atoms';

export const Menu = ({ children, ...props }: Props): JSX.Element => {
  return (
    <div {...props}>
      Menu
      <MenuLink to="/" title="qwerty" icon="user" />
    </div>
  );
};
