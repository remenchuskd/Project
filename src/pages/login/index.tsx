import React from "react";
import style from "./login.module.css";
import Layout2 from "@/components/Layout2/Layout2";
import Login from "@/components/Login/Login";
import { CategoriesContext } from "../../contexts/categoryContext";
export async function getServerSideProps() {
  let response = await fetch("http://localhost:3000/api/getCategories");
  let categories = await response.json();

  return {
    props: {
      categories: categories,
    },
  };
}

export default function LogIn(props:any) {
  return (
    <CategoriesContext.Provider value={props.categories}>
      <Layout2>
        <Login />
      </Layout2>
    </CategoriesContext.Provider>
  );
}
