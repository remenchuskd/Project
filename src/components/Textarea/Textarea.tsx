import React from 'react';
import style from './Textarea.module.css';
type props = {
    label:string,
    name:string,
    placeholder:string,
    setText:Function,


};

export default function Textarea({label, name, placeholder, setText}:props) {
  let [value, setValue] = React.useState('');

  function handleChange(event: any) {
    setText(event);
    setValue(event);
  }

  return (
    <div className={style.Textarea}>
      <label htmlFor={name}>
        <div className={style.Textarea__label}>
            {label}
            </div>
        <textarea 
        className={style.Textarea__textarea}
          onChange={(event) => handleChange(event.target.value)}
        name={name}
          id={name}
          placeholder={placeholder}
          value={value}
        ></textarea>
      </label>
    </div>
  );
}
