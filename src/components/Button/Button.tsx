import styles from "./Button.module.css";
import React from "react";
export default function Button({ color, outlined, text }) {
  let buttonClassName;
  let buttonOutlinedClass = outlined ? styles.Button_outlined : "";
  switch (color) {
    case "blue":
      buttonClassName = styles["Button_color_blue"];
      break;
    case "green":
      buttonClassName = styles["Button_color_green"];
      break;
    case "darkblue":
      buttonClassName = styles["Button_color_darkblue"];
      break;
  }

  return (
    <button
      className={`${styles.Button} ${buttonClassName} ${buttonOutlinedClass} `}
    >
      {text}
    </button>
  );
}
