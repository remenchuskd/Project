import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button/Button";
import Search from "@/components/Search/Search";
import Header from "@/components/Header/Header";
import React from "react";
import Promo from "@/components/Promo/Promo";
import CoursesCard from "@/components/AllCourses/CoursesCard";
import Layout from "@/components/Layout/Layout";
import CategoriesTop from "@/components/CategoriesTop/CategoriesTOP";
import InstructorsTop from "@/components/InstructorsTop/InstructorsTop";
import Presenation from "@/components/Presenation/Presenation";
import { CategoriesContext } from "@/contexts/categoryContext";

export async function getServerSideProps() {
  let response = await fetch("http://localhost:3000/api/getCategories");
  let categories = await response.json();
  
  return {
    props: {
      categories: categories,
    },
  };
}

export default function Home(props: any) {
  let [isSearch, setIsSearch] = React.useState("");

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
            {/* <InstructorsTop /> */}
            <Presenation />
          </Layout>
        </main>
      </CategoriesContext.Provider>
    </>
  );
}
