import React from 'react';
import style from  './Container.module.css';

export default function Container(props:any){
    return(
        <div className={style.Container}>
            {props.children}
        </div>
    );
}