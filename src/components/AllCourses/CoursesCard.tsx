import React from 'react';
import style from './CoursesCard.module.css';
import Card from '../CardCourse/CardCourse';
import Container from '../Container/Container';

export default function CoursesCard() {
  let data = [
    {
      id: 1,
      image:
        'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
      text: 'Карточка курса название1',
      lesson: 'Урок1',
      level: 'Уровень1',
      time: '1,5',
      author: 'Автор1',
      price: 123,
      rating: 4.5,
      qnty: 199,
      tag: ['popular'],
    },
    {
      id: 2,
      image:
        'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
      text: 'Карточка курса название1',
      lesson: 'Урок2',
      level: 'Уровень2',
      time: '1,5',
      author: 'Автор2',
      price: 123,
      rating: 4.5,
      qnty: 199,
      tag: ['popular', 'new', 'bestseller'],
    },

    {
      id: 3,
      image:
        'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
      text: 'Карточка курса название1',
      lesson: 'Урок3',
      level: 'Уровень3',
      time: '1,5',
      author: 'Автор3',
      price: 123,
      rating: 4.5,
      qnty: 199,
      tag: ['popular', 'bestseller'],
    },

    {
      id: 4,
      image:
        'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
      text: 'Карточка курса название1',
      lesson: 'Урок4',
      level: 'Уровень4',
      time: '1,5',
      author: 'Автор4',
      price: 123,
      rating: 4.5,
      qnty: 199,
    },

    {
      id: 5,
      image:
        'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
      text: 'Карточка курса название1',
      lesson: 'Урок5',
      level: 'Уровень5',
      time: '1,5',
      author: 'Автор5',
      price: 123,
      rating: 4.5,
      qnty: 199,
    },

    {
      id: 6,
      image:
        'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
      text: 'Карточка курса название1',
      lesson: 'Урок6',
      level: 'Уровень6',
      time: '1,5',
      author: 'Автор6',
      price: 123,
      rating: 4.5,
      qnty: 199,
    },

    {
      id: 7,
      image:
        'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
      text: 'Карточка курса название1',
      lesson: 'Урок6',
      level: 'Уровень6',
      time: '1,5',
      author: 'Автор6',
      price: 123,
      rating: 4.5,
      qnty: 199,
    },

    {
      id: 8,
      image:
        'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
      text: 'Карточка курса название1',
      lesson: 'Урок6',
      level: 'Уровень6',
      time: '1,5',
      author: 'Автор6',
      price: 123,
      rating: 4.5,
      qnty: 199,
    },
  ];

  let scrollLength = data.length * 330; // общая длина дива с карточками
  let ref = React.useRef(null);
  let refWrapper = React.useRef(null);
  let [isMove, setIsMove] = React.useState(0);

  React.useEffect(() => {
    if(ref.current){
          ref.current.style.left = `${isMove}px`;
    }

  }, [isMove]);

  function onNext() {
    console.log(isMove);
    if (scrollLength + isMove -330 - 1290 > 0) {
      setIsMove((prev) => prev - 330);
    }
  }

  function onPrev() {
    console.log(isMove);
    if (isMove < 0) {
      setIsMove((prev) => prev + 330);
    }
  }

  return (
    <Container>
      <div className={style.Courses}>
        <div className={style.Courses__h}>Курсы</div>
        <div ref={refWrapper} className={style.Courses__wrap}>
          <div onClick={onNext} className={isMove<=0?`${style.Courses__button_next}`:`${style.Courses__button_next} ${style.disabled}` }>
            <span className={style.Courses__arrow}>
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
          <div onClick={onPrev} className={isMove!==0?`${style.Courses__button_prev}`:`${style.Courses__button_prev} ${style.disabled}` }>
            <span className={style.Courses__arrow}>
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
          <div ref={ref} className={style.Courses__cards}>
            {data.map((card, key) => {
              return (
                <div key={key} className={style.Courses__card}>
                  <Card
                    id={card.id}
                    text={card.text}
                    lesson={card.lesson}
                    time={card.time}
                    level={card.level}
                    author={card.author}
                    price={card.price}
                    rating={card.rating}
                    qnty={card.qnty}
                    tag={card.tag}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
