import React from "react";
import Layout from "@/components/Layout/Layout";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import style from "./categories.module.css";
import Container from "@/components/Container/Container";
import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";
import Sort from "@/components/Sort/Sort";
import Card from "@/components/CardCourse/CardCourse";
import ColorBlock from "@/components/ColorBlock/ColorBlock";
import { CategoriesContext } from "@/contexts/categoryContext";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
  let request = fetch("http://localhost:3000/api/getCategories");
  let id = context.query.id;
  let request2 = fetch(
    `http://localhost:3000/api/getCourses?populate=channels&page=1&categoryId=${id}`
  );
  let [response, response2] = await Promise.all([request, request2]);
  let categories = await response.json();
  let courses = await response2.json();
  return {
    props: {
      categories: categories,
      courses: courses,
    },
  };
}

export default function Categories(props: any) {
  let [ischecked, setIschecked] = React.useState();
  let [sort, setSort] = React.useState();
  let [currentPage, setCurrentPage] = React.useState(1);
  let [data, setData] = React.useState(props.courses);
  let router = useRouter();
  let [routerId, setRouterId] = React.useState(router.query.id);
  let [params, setParams] = React.useState({
    pageSize: 12,
    currentPage: 1,
    sort: "asc",
    search: "",
  });

  React.useEffect(() => {
    Course();
  }, [router.query.id]);

  async function Course() {
    let response = await fetch(
      `http://localhost:3000/api/getCourses?populate=channels&page=1&categoryId=${router.query.id}`
    );
    let data = await response.json();
    setData(data);
  }

  React.useEffect(() => {
    async function getPage() {
      let response = await fetch(
        `http://localhost:3000/api/getCourses?populate=channels&sort=${
          params.sort || "asc"
        }&pageSize=${params.pageSize}&page=${params.currentPage}&categoryId=${
          router.query.id
        }`
      );
      let data = await response.json();
      setData(data);
    }
    getPage();
  }, [params]);

  return (
    <CategoriesContext.Provider value={props.categories}>
      <Layout>
        <ColorBlock color={"lightblue"}>
          <Container>
            <div className={style.BreadCrumbs}>
              <BreadCrumbs
                data={[
                  { text: "Hello", link: "/" },
                  { text: "All courses", link: "/courses" },
                ]}
              />
            </div>
          </Container>
        </ColorBlock>
        <Container>
          <div className={style.Courses__h}> Категория: </div>
          <div className={style.Courses__wrap}>
            <div className={style.Courses__sidebar}>
              <div className={style.Courses__filter}>
                <Filter
                  type={"checkbox"}
                  setIschecked={setIschecked}
                  title={"Автор"}
                  data={data}
                />
              </div>
            </div>
            <div className={style.Courses__cards}>
              <div className={style.Courses__top}>
                <div className={style.Courses__total}>
                  Всего{" "}
                  <span className={style.Courses__total_res}>
                    {data.meta.pagination.total}
                  </span>{" "}
                  результатов
                </div>
                {/* <Sort data={tag} onChange={setSort} /> */}
              </div>
              <div className={style.Courses__cardslist}>
                {
                  // @ts-ignore
                  data.data.map((card, key) => {
                    return (
                      <div key={key} className={style.Courses__card}>
                        <Link
                          className={style.Courses__link}
                          href={`/courses/${card.id}`}
                        ></Link>
                        <Card
                          id={card.id}
                          image={card.attributes.ch_image}
                          text={card.attributes.name_ru}
                          // author={''}
                          author={
                            card.attributes.channels.data[0].attributes.name_ru
                          }
                        />
                      </div>
                    );
                  })
                }
              </div>
              <div className={style.Pagination}>
                <Pagination
                  totalCount={data.meta.pagination.total}
                  pageSize={12}
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
            </div>
          </div>
        </Container>
      </Layout>
    </CategoriesContext.Provider>
  );
}
