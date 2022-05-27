import React from 'react';
import Image from 'next/image';
import { Props } from './item-card.props';
import styles from './item-card.module.css';

export const ItemCard = ({ ...props }: Props): JSX.Element => {
  return (
    <div {...props}>
      <Image width={150} height={220} src="/img/v01t01_001.jpg" />
    </div>
  );
};
