import React from 'react';
import clsx from 'clsx';
import { Props } from './icon.props';
import {
  BookmarkIcon,
  ListIcon,
  PlusIcon,
  RemoveIcon,
  ReturnIcon,
  SearchIcon,
  StarIcon,
  StepBackIcon,
  StepForwardIcon,
  UserIcon,
} from '../../../icons';

export const Icon = ({
  type,
  size = 'normal',
  ...props
}: Props): JSX.Element => {
  let Icon = BookmarkIcon;

  switch (type) {
    case 'bookmark':
      Icon = BookmarkIcon;
      break;
    case 'list':
      Icon = ListIcon;
      break;
    case 'plus':
      Icon = PlusIcon;
      break;
    case 'remove':
      Icon = RemoveIcon;
      break;
    case 'return':
      Icon = ReturnIcon;
      break;
    case 'search':
      Icon = SearchIcon;
      break;
    case 'star':
      Icon = StarIcon;
      break;
    case 'step-back':
      Icon = StepBackIcon;
      break;
    case 'step-forward':
      Icon = StepForwardIcon;
      break;
    case 'user':
      Icon = UserIcon;
      break;
  }

  return (
    <i
      className={clsx({
        'w-2 h-2': size === 'sm',
        'w-5 h-5': size === 'normal',
        'w-8 h-8': size === 'lg',
      })}
      {...props}
    >
      <Icon fill="white" className="text-slate-200" />
    </i>
  );
};
