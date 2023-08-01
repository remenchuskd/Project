import React from 'react';
import Layout from '@/components/Layout/Layout';
import Container from '@/components/Container/Container';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import ColorBlock from '@/components/ColorBlock/ColorBlock';
import style from './[id].module.css';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';
import Star from '@/components/Stars/Stars';
import Review from '@/components/Review/Review';
import Icon from '@/components/Icon/Icon';
import Image from 'next/image';
import Tabs from '@/components/Tabs/Tabs';
import Accordion from '@/components/Accordion/Accordion';
import Tab from '@/components/Tabpanel/Tabpanel';
import Instructor from '@/components/Instructor/Instructor';
import ReviewTab from '@/components/Reviewstab/Review';
import { useRouter } from 'next/router';
import { CategoriesContext } from '@/contexts/categoryContext';

export async function getServerSideProps(context: any) {
  let request = await fetch('http://localhost:3000/api/getCategories');
  let id = context.query.id;
  let request2 = await fetch(
    `http://localhost:3000/api/getCourses?populate=channels&id=${id}`
  );
  let [response, response2] = await Promise.all([request, request2]);
  let course = await response2.json();
  let categories = await response.json();
  return {
    props: {
      categories: categories,
      course: course,
    },
  };
}

export default function Course(props: any) {
  let router = useRouter();
  let id = router.query.id;
  let [data, setData] = React.useState(props.course);

  return (
    <CategoriesContext.Provider value={props.categories}>
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
              <div className={style.Course__h}>
                {' '}
                {data.data[0].attributes.name_ru}{' '}
              </div>
              <div className={style.Course__descr}>
                {' '}
                {data.data[0].attributes.description_ru}{' '}
              </div>
              <div className={style.Course__info}>
                <div className={style.Course__item}>
                  <span className={style.Course__infoelem}>
                    <Icon type={'clock'} />{' '}
                  </span>
                  Последнее обновление {data.data[0].attributes.updatedAt}
                </div>
              </div>
              <div className={style.Course__author}>
                <Image src="" alt="" width="0" height="0" />{' '}
                {data.data[0].attributes.channels.data[0].attributes.name_ru}
              </div>
            </div>
          </Container>
        </ColorBlock>

        <Container>
          <div className={style.Course__tabs}>
            <Tabs title={['Инструкторы', 'Отзывы']}>
              <Tab>
                <Instructor
                  name={data.data[0].attributes.channels.data[0].attributes.name_ru}
                  course={data.data[0].attributes.name_ru}
                  description={
                    data.data[0].attributes.channels.data[0].attributes.description_ru
                  }
                />
              </Tab>
              <Tab>
                <ReviewTab />
              </Tab>
            </Tabs>
          </div>
        </Container>
      </Layout>
    </CategoriesContext.Provider>
  );
}
