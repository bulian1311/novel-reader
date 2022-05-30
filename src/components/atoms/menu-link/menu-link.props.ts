import { HTMLAttributes, ReactNode } from 'react';
import { IconType } from '../../../icons/icon.types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  icon: IconType;
  to: string;
};
