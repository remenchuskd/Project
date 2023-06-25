import React from 'react';
import style from './Input.module.css';
type props = {
  label: string;
  placeholder: string;
  setValue: Function;
};

export default function Input({ label, placeholder, setValue }: props) {

  function handleChange(event: any) {
    setValue(event);
  }
  return (

      <label className={style.Input} htmlFor={label}>
        <div className={style.Input__label}>{label}</div>
        <input
          id={label}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className={style.Input__input}
          type="text"
        />
      </label>

  );
}
