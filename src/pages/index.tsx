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

export default function Home() {
  let [isSearch, setIsSearch] = React.useState('');

  function whatSearch(ev: string) {
    setIsSearch(ev);
    return isSearch;
  }

  return (
    <>
      <main className={styles.main}>
        <Layout>
          <Promo />
          <CoursesCard />
          <CategoriesTop/>
          <InstructorsTop/>
          <Presenation/>
        </Layout>
      </main>
    </>
  );
}
