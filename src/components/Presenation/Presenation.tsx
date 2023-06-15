import React from 'react';
import style from './Presenation.module.css';
import Container from '../Container/Container';
import Image from 'next/image';

export default function Presenation() {

  return (
    <Container>
      <div className={style.Presenation}>
        <div className={style.Presenation__title}>
          Начните свое образовательное путешествие сегодня!
        </div>
        <div className={style.Presenation__descr}>Наши принципы</div>
        <div className={style.Presenation__wrap}>
          <div className={style.Presentation__card}>
            <Image
              src="/rating.png"
              alt=""
              width="60"
              height="60"
            />
            <div className={style.Presentation__h2}>Учитесь у экспертов</div>
            <div className={style.Presentation__text}>
              Лучшие эксперты из топ компаний
            </div>
          </div>
          <div className={style.Presentation__card}>
            <Image src="/science.png" alt="" width="60" height="60" />
            <div className={style.Presentation__h2}>Учите все</div>
            <div className={style.Presentation__text}>
              Большой выбор направлений для изучения
            </div>
          </div>
          <div className={style.Presentation__card}>
            <Image src="/online-learning.png" alt="" width="60" height="60" />
            <div className={style.Presentation__h2}>Гибкая учеба</div>
            <div className={style.Presentation__text}>
              Учитесь в любое удобное для вас время
            </div>
          </div>
          <div className={style.Presentation__card}>
            <Image src="/certificate.png" alt="" width="60" height="60" />
            <div className={style.Presentation__h2}>Промышленный стандарт</div>
            <div className={style.Presentation__text}>
              Выдача сертификата по окончанию обучения
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
