import React from 'react';
import style from './Checkbox.module.css';
type props = {
  size?: 'string';
  onChange: Function;
  onClick:Function;
  checked: boolean;
  id:number,
  index:number,
};

export default function Checkbox({  size, checked, index, onClick, id, onChange}: props) {
  return (
    <div className={style.CheckBox}>
      <input
        onClick={()=>onClick(id) }
        className={style.CheckBox__input}
        type="checkbox"
        id={`checkbox${id}`}
        checked={checked}
        onChange={()=>
            onChange(index)
        }
      />
      <label className={style.CheckBox__label} htmlFor={`checkbox${id}`}></label>
    </div>
  );
}
