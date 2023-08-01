import React from 'react';
import style from './Carousel.module.css';
import Card from '../CardCategory/CardCategory';
import flattenChildren from 'react-flatten-children';
type props = {
  data: any[];
  children: any;
  width: number;
  length?: number;
};

export default function Carousel({ children, data, width }: props) {
  let totalCards = data.length;
  let ref = React.useRef(null);
  let [isMove, setIsMove] = React.useState(0);
  let [cards, setCards] = React.useState(0);
  let [pageSize, setPageSize] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setPageSize(Math.round(ref.current.offsetWidth / width));
      setCards(pageSize);
    }
  }, []);
  React.useEffect(() => {
    setCards(pageSize);
  }, [pageSize]);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.left = `${isMove}px`;
    }
  }, [isMove]);

  function onNext() {
    if (cards < totalCards) {
      setIsMove((prev) => prev - width);
      setCards((prev) => prev + 1);
    }
  }

  function onPrev() {
    if (cards !== pageSize) {
      setIsMove((prev) => prev + width);
      setCards((prev) => prev - 1);
    }
  }

  return (
    <div className={style.Carousel__wrap}>
      <div
        onClick={onNext}
        className={
          cards !== totalCards
            ? `${style.Carousel__button_next}`
            : `${style.Carousel__button_next} ${style.disabled}`
        }
      >
        <span className={style.Carousel__arrow}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </span>
      </div>
      <div
        onClick={onPrev}
        className={
          cards !== pageSize
            ? `${style.Carousel__button_prev}`
            : `${style.Carousel__button_prev} ${style.disabled}`
        }
      >
        <span className={style.Carousel__arrow}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
          </svg>
        </span>
      </div>
      <div ref={ref} className={style.Carousel__cards}>
        {flattenChildren(children).map((child, key) => {
          return (
            <div key={key} className={style.Carousel__card}>
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}
