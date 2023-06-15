import React from 'react';
import style from './Switch.module.css';
type props={
    onChange:Function,
    color?:string,
    checked?:boolean,
}

export default function Switch({onChange, color, checked}:props){

    return(
        <div className={style.Switch}>
            <input onChange={(event)=>{onChange(event.target.checked);}} checked={checked} className={style.Switch__input} type="checkbox" id='switch'/>
            <label className={style.Switch__label} htmlFor="switch"></label>
        </div>
    );
}