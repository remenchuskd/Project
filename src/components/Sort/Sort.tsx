import React from 'react';
import style from './Sort.module.css';
import Button from '../Button/Button';
import Buttonsort from '../ButtonSort/Buttonsort';
type props={
    data:string[],
    onChange:Function,
}


export default function Sort({data, onChange}:props){
    return(
        <div className={style.Sort}>
            <span className={style.Sort__desr}> Сортировать по:</span>
            <Buttonsort data={data} onChange={onChange} />
        </div>
    );
}

    

