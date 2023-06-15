import React, { useState } from 'react';
import style from './Filter.module.css';
import Icon from '../Icon/Icon';
import Checkbox from '../Checkbox/Checkbox';
import Radiobox from '../Radiobox/Radio';
import Star from '../Stars/Stars';
type props = {
  title: string;
  type: string;
  elements: any[];
  qntyInfo: number[];
  setIschecked: Function;
  rate?: boolean;
};

export default function Filter({
  title,
  type,
  elements,
  qntyInfo,
  setIschecked,
  rate,
}: props) {
  let [isOpen, setIsOpen] = React.useState(false);
  let [showMore, setShowMore] = React.useState(false);
  const [activeCheckbox, setActiveCheckbox] = React.useState(null);
  let [limit, setLimit] = React.useState(6);
  function onChange(index: any) {
    setActiveCheckbox(index);
    setIschecked(elements[index]);
  }

  function show() {
    if (!showMore) {
      setShowMore(true);
      setLimit(6);
    } else {
      setLimit(Infinity);
      setShowMore(false);
    }
  }

  React.useEffect(()=>{
    if (!showMore) {

      setLimit(6);
    } else {
      setLimit(Infinity);

    }
  }, [showMore]  );

  function Dropdown() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  // let limit=!showMore?6:Infinity

  return (
    <div className={style.Filter}>
      <div onClick={Dropdown} className={style.Filter__info}>
        <div className={style.Filter__title}>{title}</div>
        {isOpen ? <Icon type={'tick-up'} /> : <Icon type={'tick-down'} />}
      </div>
      {isOpen ? (
        <div className={style.Filter__descr}>
          {elements.slice(0, limit).map((elem, key) => {
            return (
              <div key={key} className={style.Filter__wrap}>
                <div className={style.Filter__elem}>
                  {' '}
                  <span>
                    {' '}
                    {type === 'checkbox' ? (
                      <Checkbox
                        checked={key === activeCheckbox}
                        onChange={onChange}
                        index={key}
                      />
                    ) : (
                      <Radiobox
                        name={'title'}
                        index={key}
                        onChange={onChange}
                      />
                    )}
                  </span>
                  <span
                    className={
                      rate
                        ? `${style.Filter__rate} ${style.active} `
                        : style.Filter__rate
                    }
                  >
                    {' '}
                    <Star size="small" qnty={5} />
                  </span>
                  <span className={style.Filter__name}>{elements[key]} </span>
                  <span
                    className={
                      rate
                        ? `${style.Filter__ratetext} ${style.active} `
                        : style.Filter__ratetext
                    }
                  >
                    &выше
                  </span>
                </div>
                <div className={style.Filter__qnty}>({qntyInfo[key]})</div>
              </div>
            );
          })}
          {elements.length > 6 && showMore===false ? (
            <div onClick={show} className={style.Filter__show}>
              Показать еще
            </div>
          ) : (
            <div onClick={show} className={style.Filter__show}>
              Показать меньше
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
