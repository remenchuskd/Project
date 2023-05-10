import React from 'react';
import style from './Accordion.module.css';
import Icon from '../Icon/Icon';

type props = {
  title: string;
  info?: string;
  children:any;
};

export default function Accordion({ title, info, children }: props) {
  let [isShow, setIsshow] = React.useState(false);

  function show(key: any) {
    if (isShow === true) {
      setIsshow(false);
    } else {
      setIsshow(true);
    }
  }

  return (
    <div className={style.Accordion}>
      <div onClick={show} className={style.Accordion__wrap}>
        <div className={style.Accordion__top}>
          <div className={style.Accordion__name}>
            <Icon type={isShow ? 'tick-down' : 'tick-up'} />
            <span className={style.Accordion__title}>{title}</span>
          </div>
          {info ? <div className={style.Accordion__info}>{info}</div> : ''}
        </div>
        <div
          className={
            isShow
              ? `${style.Accordion__description} ${style.active}`
              : style.Accordion__description
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
