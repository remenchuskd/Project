import React from 'react';
import style from './Radio.module.css';
type props = {
  size?: 'string';
  onChange: Function;
  checked?: boolean;
  name?:string,
  index?:number,
};

export default function Radiobox({ onChange, size, checked, name, index }: props){
    return (
        <div className={style.Radiobox}>
          <input
            onClick={()=>onChange(index)}
            className={style.Radiobox__input}
            type="radio"
            id={`radio${name}${index}`}
            checked={checked}
            name={name}
          />
          <label className={style.Radiobox__label} htmlFor={`radio${name}${index}`}></label>
        </div>
      );
}