import styles from './Button.module.css';
import React from 'react';
import Icon from '../Icon/Icon';

export default function Button({ color, outlined, text, icontype, iconHover }) {
  let buttonColorClass;
  let buttonOutlinedClass = outlined ? styles.Button_outlined : '';
  switch (color) {
    case 'blue':
      buttonColorClass = styles['Button_color_blue'];
      break;
    case 'green':
      buttonColorClass = styles['Button_color_green'];
      break;
    case 'darkblue':
      buttonColorClass = styles['Button_color_darkblue'];
      break;
    default:
      buttonColorClass = styles['Button'];
  }

  return (
    <button
      className={`${styles.Button} ${buttonColorClass} ${buttonOutlinedClass} `}
    >
      {text}
      <Icon type={icontype} hoverable={iconHover} />
    </button>
  );
}
