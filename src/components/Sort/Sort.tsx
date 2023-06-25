import React from 'react';
import style from './Sort.module.css';
import Button from '../Button/Button';
import Buttonsort from '../ButtonSort/Buttonsort';
type props={
    data:string[],
    onChange:Function,
    text?:string,
}


export default function Sort({data, onChange,text}:props){
    return(
        <div className={style.Sort}>
            <span className={style.Sort__desr}> {text}</span>
            <Buttonsort data={data} onChange={onChange} />
        </div>
    );
}

    

