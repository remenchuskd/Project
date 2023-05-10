import React from 'react';
import Button from '../Button/Button';
import style from './Promo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Partners from '../Partners/Partners';
import ColorBlock from '../ColorBlock/ColorBlock';
import Container from '../Container/Container';

export default function Promo() {
  return (
    <>
    <div className={style.Container}>
            <div className={style.Promo}>
        <div className={style.Promo__text}>
          <div className={style.Promo__header}>
            Master the Skills to Drive your{' '}
            <span className={style.Promo__underline}>Career</span>
          </div>
          <div className={style.Promo__descr}>
            Free online courses from the world’s leading experts. Join 17
            million learners today
          </div>
          <div className={style.Promo__buttons}>
            <div className={style.Promo__button}>
              <Button color={'blue'} text={'Join For Free'} radius={true} />
            </div>

            <Button
              color={'darkblue'}
              outlined={true}
              text={'Find Courses'}
              radius={true}
            />
          </div>
        </div>
        <div className={style.Promo__img}></div>
      </div>
      <ColorBlock color={'grey'}>
        <Container>
          <Partners />
        </Container>
      </ColorBlock>
      
    </div>

    </>
  );
}
