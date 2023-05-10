import React from 'react';
import style from './Checkbox.module.css';
type props = {
  size?: 'string';
  onChange: Function;
  checked?: boolean;
  index?:number,
};

export default function Checkbox({ onChange, size, checked, index }: props) {
  return (
    <div className={style.CheckBox}>
      <input
        onClick={()=>onChange(index)}
        className={style.CheckBox__input}
        type="checkbox"
        id={`checkbox${index}`}
        checked={checked}
      />
      <label className={style.CheckBox__label} htmlFor={`checkbox${index}`}></label>
    </div>
  );
}
