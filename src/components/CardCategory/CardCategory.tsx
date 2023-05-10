import React from 'react';
import style from './CardCategory.module.css';
import { requestToBodyStream } from 'next/dist/server/body-streams';
type Props={
    image?:any,
    text:string,
    qnty:number,
}

export default function CardCategory({image, text, qnty}:Props) {
  return (
    <div className={style.Card}>
      <div
        className={style.Card__img} >
        <div className={style.Card__svg}>
            {image ? image : ''} 
        </div>
      </div>
      <div className={style.Card__text}>
        {text}
      </div>
      <div className={style.Card__qnty}>
        {qnty}+ Курсы
      </div>
    </div>
  );
}
