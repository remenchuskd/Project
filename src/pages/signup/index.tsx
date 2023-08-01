import React from 'react';
import style from './signup.module.css';
import Layout2 from '@/components/Layout2/Layout2';
import Registrasion from '@/components/SignUp/signUp';
import { CategoriesContext } from '../../contexts/categoryContext';
export async function getServerSideProps() {
  let response = await fetch('http://localhost:3000/api/getCategories');
  let categories = await response.json();
  
  return {
    props: {
      categories: categories,
    },
  };
}

export default function Signup(props:any) {
  let [user, setUser]= React.useState({});
  return (
    <CategoriesContext.Provider value={props.categories}>
      <Layout2>
        <Registrasion />
      </Layout2>
    </CategoriesContext.Provider>
  );
}
