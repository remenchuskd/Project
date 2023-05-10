import React from 'react';
import style from './Review.module.css';
type props={
    review:number,
}

export default function Review({review}:props){

    return(
        <div className={style.Rewiev}>
            ({review})
        </div>

    );
}