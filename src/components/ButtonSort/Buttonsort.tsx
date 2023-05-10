import React from 'react';
import style from './Buttonsort.module.css';
import Icon from '../Icon/Icon';
type props = {
  data: string[];
  onChange: Function;
};

export default function Buttonsort({ data, onChange }: props) {
  let [isOpen, setIsOpen] = React.useState(false);
  let [current, setcurrent] = React.useState(data[0]);

  React.useEffect(() => {
    onChange(current);
    setIsOpen(false);
  }, [current]);

  function show() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  function clicked(ev: any) {
    setcurrent(ev);
  }

  return (
    <>
      <div className={style.Button}>
        <button onClick={show} className={style.Button__sort}>
          <span className={style.Button__text}> {current}</span>
          <Icon type={'tick'} />
        </button>
        <div
          className={
            isOpen
              ? `${style.Button__items} ${style.active}`
              : style.Button__items
          }
        >
          {data.map((sort: any, key: any) => {
            return (
              <div
                className={style.Button__item}
                onClick={() => setcurrent(sort)}
                key={key}
              >
                {sort}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
