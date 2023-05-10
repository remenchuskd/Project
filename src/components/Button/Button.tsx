import styles from './Button.module.css';
import React from 'react';
type Props = {
  color?: string;
  outlined?: boolean;
  text: string;
  radius?: boolean;
  small?: boolean;
  func?:Function
};

export default function Button({
  color,
  outlined,
  text,
  radius,
  small,
  func
}: Props) {
  let buttonColorClass;
  let buttonOutlinedClass = outlined ? styles.Button_outlined : '';
  let buttonRadiusClass = radius ? styles.Button_radius : '';
  let buttonSmallClass = small ? styles.Button_small : '';

  function Buttonclick(){
    func();
  }

  switch (color) {
    case 'blue':
      buttonColorClass = styles['Button_color_blue'];
      break;
    case 'lightblue':
      buttonColorClass = styles['Button_color_lightblue'];
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
    <button onClick={Buttonclick}
      className={`${styles.Button} ${buttonColorClass} ${buttonOutlinedClass} ${buttonRadiusClass} ${buttonSmallClass} `}
    >
      {text}
    </button>
  );
}
