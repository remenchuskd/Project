import React from 'react';
import style from './ColorBlock.module.css';
type Props = {
  color: string;
  children?: any;
};

export default function ColorBlock({ color, children }: Props) {
  let colorClass;

  switch (color) {
    case 'lightblue':
      colorClass = style['ColorBlock_lightblue'];
      break;
    case 'yellow':
      colorClass = style['ColorBlock_yellow'];
      break;
    case 'grey':
      colorClass = style['ColorBlock_grey'];
      break;
    case 'blue':
      colorClass = style['ColorBlock_blue'];
      break;
    case 'darkblue':
      colorClass = style['ColorBlock_darkblue'];
      break;
    default:
      colorClass = style['ColorBlock_lightblue'];
  }

  return (
    <div className={`${style.ColorBlock} ${colorClass}`}>{children}</div>
  );
}
