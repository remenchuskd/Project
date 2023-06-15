import React from 'react';
import style from './Instructor.module.css';
import Image from 'next/image';
import Icon from '../Icon/Icon';
import Star from '../Stars/Stars';
import Rating from '../Rating/Rating';

export default function Instructor() {
  return (
    <div className={style.Instructor}>
      <div className={style.Instructor__h}>
          Инструктор
      </div>
      <div className={style.Instructor__wrap}>
        <Image
          src="/photoInstructor_default.png"
          width="120"
          height="120"
          alt=""
        />
        <div className={style.Instructor__info}>
          <div className={style.Instructor__card}>
            <div className={style.Instructor__name}>Иван Иванов</div>
            <div className={style.Instructor__prof}>Учитель искусство</div>
          </div>

          <div className={style.Instructor__social}>
            <div className={style.Instructor__elem}>
              <Star size={'small'} qnty={1} />
              <span className={style.Instructor__rate} >  <Rating rating={4} /></span>
              
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
              <span className={style.Instructor__text}>{}Курсы </span>
            </div>
            <div className={style.Instructor__elem}></div>
            <div className={style.Instructor__elem}></div>
          </div>
        </div>
      </div>
      <div className={style.Instructor__descr}>
        Еще в 2010 году я начал мозговой штурм с желанием разрабатывать
        привлекательные и привлекательные приложения. За более чем 7 лет я
        разработал множество высококлассных веб-приложений и приложений для
        iPhone. Диапазон приложений варьируется от трехмерных медицинских
        веб-приложений до приложений для управления проектами в нишевых
        отраслях. Я также являюсь основателем крупной местной дизайнерской
        организации Salt Lake Designers, где я и другие местные влиятельные лица
        помогаем развивать таланты начинающих UX-дизайнеров посредством
        семинаров и панельных дискуссий.
      </div>
    </div>
  );
}
