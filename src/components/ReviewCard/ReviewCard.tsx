import React from 'react';
import style from './ReviewCard.module.css';
import Image from 'next/image';
import Star from '../Stars/Stars';
type props = {
  data: [];
};

export default function ReviewCard({ data }: props) {
  return (
    <div className={style.ReviewCard}>
      <Image src="/profileReview.png" width="60" height="60" alt="" />
      <div className={style.ReviewCard__wrap}>
        <div className={style.ReviewCard__h}>
          Али Туфан {}
          <span className={style.ReviewCard__data}> Дата {}</span>
        </div>
        <Star qnty={5} size={'small'} />
        <div className={style.ReviewCard__coursename}>{} Курс дизайнера</div>
        <div className={style.Review__review}>
          {}This course is a very applicable. Professor Ng explains precisely
          each algorithm and even tries to give an intuition for mathematical
          and statistic concepts behind each algorithm. Thank you very much.
        </div>
        <div className={style.Review__question}>
           <span className={style.Review__ask}> Был ли вам полезен отзыв? </span> 
           <button className={style.Review__btn}> Да</button>  
           <button className={style.Review__btn}> Нет</button>
        </div>
      </div>
    </div>
  );
}
