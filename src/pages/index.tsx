import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@/components/Button/Button";
import Search from "@/components/Search/Search";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  let [isSearch, setIsSearch] = React.useState("");

  function whatSearch(ev: string) {
    setIsSearch(ev);
    return isSearch;
  }

  return (
    <>
      <main className={styles.main}>
        <Button text={'Привет'} color={'green'} outlined={true}  />
        <div>
          ________________
        </div>
        <Search text={'Введите текст'} onChange={whatSearch}/>
      </main>
    </>
  );
}