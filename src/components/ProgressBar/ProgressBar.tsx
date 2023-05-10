import React from 'react';
import style from './ProogressBar.module.css';
type props={
    procent:number,
}

export default function Progressbar({procent}:props){

    return(
        <div className={style.Progress}>
            <div className={style.Progress__result} style={{width:`${procent}%`}}>

            </div>
        </div>
    );
}