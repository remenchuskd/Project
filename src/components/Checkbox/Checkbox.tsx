import React from 'react';
import style from './Checkbox.module.css';
type props = {
  size?: 'string';
  onChange: Function;
  onClick?:Function;
  checked?: boolean;
  index?:number,
};

export default function Checkbox({ onChange, size, checked, index,onClick }: props) {
  
  return (
    <div className={style.CheckBox}>
      <input
        onClick={()=>function click(){
          if(onClick){
            onClick(index)
          }
        }}
        className={style.CheckBox__input}
        type="checkbox"
        id={`checkbox${index}`}
        checked={checked}
        onChange={(e)=>onChange(e.target.checked)}
      />
      <label className={style.CheckBox__label} htmlFor={`checkbox${index}`}></label>
    </div>
  );
}
