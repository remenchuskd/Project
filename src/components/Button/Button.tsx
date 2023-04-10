import styles from  "./Button.module.css";
import React from "react";
export default function Button({color, outlined, text}) {
    let buttonBorderClassName;
    let buttonClassName;
    switch(color){
        case'blue':
            buttonClassName=styles['Button_color_blue'];
            break
        case'green':
            buttonClassName=styles['Button_color_green'];
            break
        case'darkblue':
            buttonClassName=styles['Button_color_darkblue'];
             break
        
    }

  return (
    <button
      className={
        outlined ? `${styles.Button} ${buttonClassName} ${styles.Button_outlined} ` : `${styles.Button} ${buttonClassName}`
      }
    >
      {text}
    </button>
  );
}
