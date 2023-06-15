import React from 'react';
import style from './Input.module.css';
type props = {
  label: string;
  placeholder: string;
  setName: Function;
};

export default function Input({ label, placeholder, setName }: props) {
  let [value, setValue] = React.useState('');

  function handleChange(event: any) {
    setName(event);
    setValue(event);
  }
  return (

      <label className={style.Input} htmlFor={label}>
        <div className={style.Input__label}>{label}</div>
        <input
          id={label}
          onChange={(event) => handleChange(event.target.value)}
          placeholder={placeholder}
          className={style.Input__input}
          type="text"
        />
      </label>

  );
}
