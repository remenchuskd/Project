import React from 'react';
import Layout from '@/components/Layout/Layout';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import style from './courses.module.css';
import Container from '@/components/Container/Container';
import Filter from '@/components/Filter/Filter';
import Pagination from '@/components/Pagination/Pagination';
import Sort from '@/components/Sort/Sort';
import Card from '@/components/CardCourse/CardCourse';
import ColorBlock from '@/components/ColorBlock/ColorBlock';

export default function Courses() {
  let [ischecked, setIschecked] = React.useState();
  let [sort, setSort] = React.useState();
  let [currentPage, setCurrentPage] = React.useState(1);

  let elements = [
    'искусство0',
    'искусство1',
    'искусство2',
    'искусство3',
    'искусство4',
  ];
  let qnty = [12, 12, 12, 12, 12];
  let elements1 = [
    'арт1',
    'арт2',
    'арт3',
    'арт4',
    'арт5',
    'артарт6',
    'арт1',
    'арт1',
    'арт1',
  ];
  let qnty1 = [13, 13, 13, 13, 13, 13, 13, 13, 13, 13];
  let tag = ['all', 'popular', 'new', 'bestseller'];
  let rate = [4, 5, 4, 5, 4, 5, 4, 5];

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
    <Layout>
      <ColorBlock color={'lightblue'}>
        <Container>
          <div className={style.BreadCrumbs}>
            <BreadCrumbs
              data={[
                { text: 'Hello', link: '/' },
                { text: 'All courses', link: '/courses' },
              ]}
            />
          </div>
        </Container>
      </ColorBlock>
      <Container>
        <div className={style.Courses__h}> Курсы</div>
        <div className={style.Courses__wrap}>
          <div className={style.Courses__sidebar}>
            <div className={style.Courses__filter}>
              <Filter
                type={'checkbox'}
                setIschecked={setIschecked}
                title={'Категории'}
                elements={elements}
                qntyInfo={qnty}
              />
            </div>
            <div className={style.Courses__filter}>
              <Filter
                type={'radiobox'}
                setIschecked={setIschecked}
                title={'Категория2'}
                elements={rate}
                qntyInfo={qnty1}
                rate={true}
              />
            </div>
            <div className={style.Courses__filter}>
              <Filter
                type={'checkbox'}
                setIschecked={setIschecked}
                title={'Категории'}
                elements={elements}
                qntyInfo={qnty}
              />
            </div>
            <div className={style.Courses__filter}>
              <Filter
                type={'radiobox'}
                setIschecked={setIschecked}
                title={'Категория2'}
                elements={elements1}
                qntyInfo={qnty1}
              />
            </div>
          </div>
          <div className={style.Courses__cards}>
            <div className={style.Courses__top}>
              <div className={style.Courses__total}>
                Всего{' '}
                <span className={style.Courses__total_res}>{data.length}</span>{' '}
                результатов
              </div>
              <Sort data={tag} onChange={setSort} />
            </div>
            <div className={style.Courses__cardslist}>
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
            <div className={style.Pagination}>
              <Pagination
                totalCount={100}
                pageSize={12}
                siblingCount={1}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
