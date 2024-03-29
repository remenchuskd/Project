import React from 'react';
import Layout from '@/components/Layout/Layout';
import style from './index.module.css';
import Search from '@/components/Search/Search';
import Sort from '@/components/Sort/Sort';
import Pagination from '@/components/Pagination/Pagination';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import ColorBlock from '@/components/ColorBlock/ColorBlock';
import { CategoriesContext } from '@/contexts/categoryContext';
import Container from '@/components/Container/Container';
import InstructorCard from '@/components/InstructorCard/InstructorCard';
import Link from 'next/link';

export async function getServerSideProps() {
  let request = await fetch('http://localhost:3000/api/getCategories');
  let request2 = await fetch(
    'http://localhost:3000/api/getInstructors?page=1&populate=courses'
  );
  let [response, response2] = await Promise.all([request, request2]);
  let categories = await response.json();
  let instructors = await response2.json();
  return {
    props: {
      categories: categories,
      instructors: instructors,
    },
  };
}

export default function Instructors(props: any) {
  let [data, setData] = React.useState(props.instructors);
  let [search, setSearch] = React.useState('');
  let [params, setParams] = React.useState({
    pageSize: 8,
    currentPage: 1,
    sort: 'asc',
    search: '',
  });

  console.log(data);

  React.useEffect(() => {
    async function getPage() {
      let response = await fetch(
        `http://localhost:3000/api/getInstructors?pageSize=${
          params.pageSize
        }&search=${params.search || ''}&page=${
          params.currentPage
        }&populate=courses`
      );
      let data = await response.json();
      setData(data);
    }
    getPage();
  }, [params]);

  function sortCards(item: any) {
    if (item.includes('↑')) {
      setParams((prev) => {
        return { ...prev, sort: 'asc', currentPage: 1 };
      });
    } else if (item.includes('↓')) {
      setParams((prev) => {
        return {
          ...prev,
          sort: 'desc',
          currentPage: 1,
        };
      });
    }
  }

  function debounce(originalFn: Function, timeoutMs: number) {
    let timeout: any;
    return (ev: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => originalFn(ev), timeoutMs);
    };
  }

  let debounceSearch = debounce(whatSearch, 500);

  function whatSearch(ev: any) {
     setParams((prev)=> {return{...prev, search:ev, currentPage:1};});
  }

  return (
    <CategoriesContext.Provider value={props.categories}>
      <Layout>
        <ColorBlock color={'lightblue'}>
          <BreadCrumbs data={['Crumb', 'Crumb', 'Crumb', 'Crumb']} />
        </ColorBlock>
        <Container>
          <div className={style.Instructors__h}>Инструкторы</div>
          <div className={style.Instructors__descr}>
            Мы стремимся предоставлять увлекательные, кураторские курсы по
            разумной цене.
          </div>
          <div className={style.Instructors__top}>
            <div className={style.Instructors__results}>
              Показано всего{' '}
              <span className={style.Instructors__res}>
                {data.meta.pagination.total}
              </span>{' '}
              результатов
            </div>
            <div className={style.Instructors__wrap}>
              <div className={style.Instructors__search}>
                <Search
                  onChange={debounceSearch}
                  placeholder={'Найти инструктора'}
                />
              </div>
              <div className={style.Instructors__sort}>
                <Sort onChange={sortCards} data={['А-Я ↑', 'Я-А ↓']} />
              </div>
            </div>
          </div>
          <div className={style.Instructors__cards}>
            {data.data.map((item: any, key: React.Key | null | undefined) => {
              return (
                <div key={key} className={style.Instructors__card}>
                  <Link
                    className={style.Instructors__link}
                    href={`/instructors/${item.id}`}
                  ></Link>
                  <InstructorCard
                    id={item.id}
                    instructor={item.attributes.name_ru}
                    rate={1}
                    students={1}
                    course={item.attributes.courses.data.length}
                    image={''}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.Instructors__pagination}>
            <Pagination
              pageSize={8}
              totalCount={data.meta.pagination.total}
              siblingCount={1}
              currentPage={params.currentPage}
              setCurrentPage={(num: number) =>
                setParams((prev) => {
                  return {
                    ...prev,
                    currentPage: num,
                  };
                })
              }
            />
          </div>
        </Container>
      </Layout>
    </CategoriesContext.Provider>
  );
}
