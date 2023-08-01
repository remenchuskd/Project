import React from 'react';
import style from './Instructor.module.css';
import Image from 'next/image';
import Icon from '../Icon/Icon';
import Star from '../Stars/Stars';
import Rating from '../Rating/Rating';
type props = {
  name: string;
  course: string;
  description?: string;
};

export default function Instructor({ name, course, description }: props) {
  return (
    <div className={style.Instructor}>
      <div className={style.Instructor__h}>Инструктор</div>
      <div className={style.Instructor__wrap}>
        <Image
          src="/photoInstructor_default.png"
          width="120"
          height="120"
          alt=""
        />
        <div className={style.Instructor__info}>
          <div className={style.Instructor__card}>
            <div className={style.Instructor__name}>{name}</div>
            <div className={style.Instructor__prof}>{}</div>
          </div>

          <div className={style.Instructor__social}>
            <div className={style.Instructor__elem}>
              <Star size={'small'} qnty={1} />
              <span className={style.Instructor__rate}>
                {' '}
                <Rating rating={4} />
              </span>

              <span className={style.Instructor__text}>{}Рейтинг </span>
            </div>
            <div className={style.Instructor__elem}>
              <Icon type={'comment'} />
              <span className={style.Instructor__text}>{}Отзывы </span>
            </div>
            <div className={style.Instructor__elem}>
              <Icon type={'student'} />
              <span className={style.Instructor__text}>{}Студенты </span>
            </div>
            <div className={style.Instructor__elem}>
              <Icon type={'course'} />
              <span className={style.Instructor__text}>{course} </span>
            </div>
            <div className={style.Instructor__elem}></div>
            <div className={style.Instructor__elem}></div>
          </div>
        </div>
      </div>
      <div className={style.Instructor__descr}>
        {description}
        </div>
    </div>
  );
}
