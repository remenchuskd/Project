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
import Description from '@/components/DescriptionTab/DescriptionTab';
import Instructor from '@/components/Instructor/Instructor';
import ReviewTab from '@/components/Reviewstab/Review';
import Overview from '@/components/Overview/Overview';
import { useRouter } from 'next/router';
import { CategoriesContext } from '@/contexts/categoryContext';



export async function getServerSideProps() {
  let response = await fetch("http://localhost:3000/api/getCategories");
  let categories = await response.json();

  return {
    props: {
      categories: categories,
    },
  };
}

export default function course(props: any) {
  let router=useRouter();
  let id=router.query.id;
  let [data,setData]=React.useState([])

  async function Course(){
    let response=await fetch(`http://localhost:3000/api/getCourses?populate=channels&id=${id}`)
    let data=await response.json()
    setData(data.data)
    console.log(data.data[0].attributes.name_ru)
  };
  Course()

  let accordion = {
    title: ['название', 'название', 'название', 'название'],
    info: ['название', 'название', 'название', 'название'],
    description: ['описание', 'описание', 'описание', 'описание'],
  };



  return (
    <CategoriesContext.Provider value={props.categories} >
          <Layout  >
      <ColorBlock color={'lightblue'}>
        <Container>
          <div className={style.BreadCrumbs}>
            <BreadCrumbs data={[ { text: 'Hello', link: '/' }, { text: 'All courses', link: '/courses' } ]}/>
          </div>

          <div className={style.Course}>
            {/* <div className={style.Course__tags}>
              {data.tag.map((tag, key) => {
                return (
                  <div key={key}  className={style.Course__tag}>
                    {' '}
                    <Tag type={tag} />
                  </div>
                );
              })}
            </div> */}
            <div className={style.Course__h}> {data[0]?.attributes.name_ru} </div>
            <div className={style.Course__descr}> {data[0]?.attributes.description_ru} </div>
            <div className={style.Course__info}>
              {/* <div className={style.Course__item}>
                <span className={style.Course__infoelem}>
                  <Rating rating={data.rating} />{' '}
                </span>
                <span className={style.Course__infoelem}>
                  <Star size={'small'} qnty={5} />{' '}
                </span>{' '}
                <Review review={data.qnty} />
              </div> */}
              {/* <div className={style.Course__item}>
                <span className={style.Course__infoelem}>
                  <Icon type={'student'} />{' '}
                </span>{' '}
                {data.students} Студентов занимаются на курсе
              </div> */}
              <div className={style.Course__item}>
                <span className={style.Course__infoelem}>
                  <Icon type={'clock'} />{' '}
                </span>
                Последнее обновление {data[0]?.attributes.updatedAt}
              </div>
            </div>
            <div className={style.Course__author}>
              <Image src="" alt="" width="0" height="0" /> {data[0]?.channels?.data[0].attributes.name_ru}
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
              <Instructor 
              name={data[0]?.channels?.data[0].attributes.name_ru} 
              course={data[0]?.attributes.name_ru} 
              description={data[0]?.channels?.data[0].attributes.description_ru}/>
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
