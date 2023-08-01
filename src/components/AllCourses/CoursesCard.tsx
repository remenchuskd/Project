import React from 'react';
import style from './CoursesCard.module.css';
import Card from '../CardCourse/CardCourse';
import { CARD_WIDTH } from '../CardCourse/CardCourse';
import Container from '../Container/Container';
import Carousel from '../Carousel/Carousel';

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

  return (
    <Container>
      <div className={style.Courses}>
        <div className={style.Courses__h}>Курсы</div>
        <Carousel data={data} width={CARD_WIDTH}>
          {data.map((card, key) => {
            return (
              <Card
              key={key}
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
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
}
