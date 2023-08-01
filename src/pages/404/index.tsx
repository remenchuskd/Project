import React from 'react';
import Layout from '@/components/Layout/Layout';
import ColorBlock from '@/components/ColorBlock/ColorBlock';
import Container from '@/components/Container/Container';
import style from './404.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import { CategoriesContext } from '@/contexts/categoryContext';

export async function getServerSideProps() {
  let response = await fetch('http://localhost:3000/api/getCategories');
  let categories = await response.json();

  return {
    props: {
      categories: categories,
    },
  };
}

export default function Error404() {
  return (
    <CategoriesContext.Provider value={props.categories}>
      <Layout>
        <ColorBlock color={'yellow'}>
          <Container>
            <div className={style.Error}>
              <div className={style.Error__left}></div>
              <div className={style.Error__right}>
                <div className={style.Error__text}>
                  Упс, похоже вы потерялись
                </div>
                <div className={style.Error__descr}>
                  Страница, которую вы ищете, недоступна. Попробуйте поискать
                  еще раз или воспользуйтесь переходом.
                </div>
                <Link className={style.Error__link} href="/">
                  {' '}
                  <Button
                    color={'blue'}
                    text={'Вернуться на главную страницу'}
                  />{' '}
                </Link>
              </div>
            </div>
          </Container>
        </ColorBlock>
      </Layout>
    </CategoriesContext.Provider>
  );
}
