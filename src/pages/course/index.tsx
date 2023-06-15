import React from 'react';
import Layout from '@/components/Layout/Layout';
import Container from '@/components/Container/Container';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import ColorBlock from '@/components/ColorBlock/ColorBlock';
import style from './cousre.module.css';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';
import Star from '@/components/Stars/Stars';
import Review from '@/components/Review/Review';
import Icon from '@/components/Icon/Icon';
import Image from 'next/image';
import Tabs from '@/components/Tabs/Tabs';
import Tab from '@/components/Tabpanel/Tabpanel';
import Description from '@/components/DescriptionTab/DescriptionTab';
import Instructor from '@/components/Instructor/Instructor';
import ReviewTab from '@/components/Reviewstab/Review';
import Overview from '@/components/Overview/Overview';
import { useRouter } from 'next/router';

export default function course(props: any) {
  let data = {
    id: 1,
    image:
      'https://koshka.top/uploads/posts/2021-12/1638771511_1-koshka-top-p-milogo-kotika-v-shapochke-1.jpg',
    text: 'Карточка курса название1',
    description: 'Описание курса Карточка курса название1 ',
    lesson: 'Урок1',
    level: 'Уровень1',
    time: '1,5',
    author: 'Автор1',
    price: 123,
    rating: 4.5,
    qnty: 199,
    tag: ['popular', 'new', 'bestseller'],
    students: 853,
    update: '11/2022',
  };

  let accordion = {
    title: ['название', 'название', 'название', 'название'],
    info: ['название', 'название', 'название', 'название'],
    description: ['описание', 'описание', 'описание', 'описание'],
  };

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

          <div className={style.Course}>
            <div className={style.Course__tags}>
              {data.tag.map((tag, key) => {
                return (
                  <div key={key} className={style.Course__tag}>
                    {' '}
                    <Tag type={tag} />
                  </div>
                );
              })}
            </div>
            <div className={style.Course__h}> {data.text} </div>
            <div className={style.Course__descr}> {data.description} </div>
            <div className={style.Course__info}>
              <div className={style.Course__item}>
                <span className={style.Course__infoelem}>
                  <Rating rating={data.rating} />{' '}
                </span>
                <span className={style.Course__infoelem}>
                  <Star size={'small'} qnty={5} />{' '}
                </span>{' '}
                <Review review={data.qnty} />
              </div>
              <div className={style.Course__item}>
                <span className={style.Course__infoelem}>
                  <Icon type={'student'} />{' '}
                </span>{' '}
                {data.students} Студентов занимаются на курсе
              </div>
              <div className={style.Course__item}>
                <span className={style.Course__infoelem}>
                  <Icon type={'clock'} />{' '}
                </span>
                Последнее обновление {data.update}
              </div>
            </div>
            <div className={style.Course__author}>
              <Image src="" alt="" width="0" height="0" /> {data.author}
            </div>
          </div>
        </Container>
      </ColorBlock>
      <Container>
        <div className={style.Course__tabs}>
          <Tabs title={['Описание', 'Курс', 'Инструкторы', 'Отзывы']}>
            <Tab>
              <Description data={[]} />
            </Tab>
            <Tab>
              <Overview />
            </Tab>
            <Tab>
              <Instructor />
            </Tab>
            <Tab>
              <ReviewTab />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </Layout>
  );
}
