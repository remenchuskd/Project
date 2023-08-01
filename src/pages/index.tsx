import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button/Button';
import Search from '@/components/Search/Search';
import Header from '@/components/Header/Header';
import React from 'react';
import Promo from '@/components/Promo/Promo';
import CoursesCard from '@/components/AllCourses/CoursesCard';
import Layout from '@/components/Layout/Layout';
import CategoriesTop from '@/components/CategoriesTop/CategoriesTOP';
import InstructorsTop from '@/components/InstructorsTop/InstructorsTop';
import Presenation from '@/components/Presenation/Presenation';
import { CategoriesContext } from '@/contexts/categoryContext';

export async function getServerSideProps() {
  let request = await fetch('http://localhost:3000/api/getCategories');
  let request2 = await fetch(
    'http://localhost:3000/api/getInstructors?pageSize=100000&populate=courses'
  );
  let [response, response2] = await Promise.all([request, request2]);
  let instructors = await response2.json();
  let categories = await response.json();
  let res: any[] = [];
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * instructors.data.length) + 1;
    if (res.includes(num) == false) {
      res.push(num);
    } else {
      i--;
    }
  }
  let instructorsArray: any[] = [];
  instructors.data.forEach((item: { id: any }) => {
    instructorsArray.push(item.id);
  });
  let array: any[] = [];
  for (let i = 0; i < res.length; i++) {
    array.push(instructorsArray[res[i]]);
  }
console.log(array);
  let newInstructors=instructors.data.filter((item: { id: any }) => {
    return array.includes(item.id);
  });
  console.log(newInstructors);

  return {
    props: {
      categories: categories,
      instructors: newInstructors,
    },
  };
}

export default function Home(props: any) {
  let [isSearch, setIsSearch] = React.useState('');

  function whatSearch(ev: string) {
    setIsSearch(ev);
    return isSearch;
  }

  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta name="discription" content="Сайт с курсами компании..." />
      </Head>
      <CategoriesContext.Provider value={props.categories}>
        <main className={styles.main}>
          <Layout>
            <Promo />
            <CoursesCard />
            <CategoriesTop />
            <InstructorsTop data={props.instructors} />
            <Presenation />
          </Layout>
        </main>
      </CategoriesContext.Provider>
    </>
  );
}
