import React from "react";
import Layout from "@/components/Layout/Layout";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import style from "./courses.module.css";
import Container from "@/components/Container/Container";
import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";
import Sort from "@/components/Sort/Sort";
import Card from "@/components/CardCourse/CardCourse";
import ColorBlock from "@/components/ColorBlock/ColorBlock";
import { CategoriesContext } from "@/contexts/categoryContext";
import Link from "next/link";

export async function getServerSideProps() {
  let request = await fetch("http://localhost:3000/api/getCategories");
  let request2 = await fetch(
    "http://localhost:3000/api/getCourses?populate=channels&page=1"
  );
  let request3 = await fetch(
    "http://localhost:3000/api/getInstructors?populate=courses&pageSize=100500"
  );
  let [response, response2, response3] = await Promise.all([
    request,
    request2,
    request3,
  ]);
  let categories = await response.json();
  let courses = await response2.json();
  let instructors = await response3.json();
  let updatedCategories: any = [];
  categories.forEach((item: { attributes: { childrens: { data: [] } } }) => {
    if (item.attributes.childrens.data.length > 0) {
      item.attributes.childrens.data.forEach((item) => {
        updatedCategories.push(item);
      });
    }
  });

  return {
    props: {
      categories:categories,
      updatedCategories: updatedCategories,
      courses: courses,
      instructors: instructors,
    },
  };
}

export default function Courses(props: any) {
  let [data, setData] = React.useState(props.courses);
  let [instructors, setInstructors] = React.useState(props.instructors.data);
  let [categories, setCategories] = React.useState(props.updatedCategories);
  let [filterInstrucor, setFilterInstrucor] = React.useState([]);
  let [filterCategory, setFilterCategory] = React.useState([]);
  console.log(data);

  let [params, setParams] = React.useState({
    pageSize: 12,
    currentPage: 1,
    sort: "asc",
    search: "",
    filter: "",
    categoryId: "",
  });

  React.useEffect(() => {
    async function getPage() {
      let response = await fetch(
        `http://localhost:3000/api/getCourses?populate=channels&sort=${
          params.sort || "asc"
        }&pageSize=${params.pageSize}&page=${params.currentPage}${param()}`
      );
      let data = await response.json();
      setData(data);
    }
    getPage();
  }, [params, filterInstrucor, filterCategory]);

  function param() {
    let newArr = [];
    let newArr2 = [];
    for (let i = 0; i < filterInstrucor.length; i++) {
      newArr.push(`&instructorId=${filterInstrucor[i]}`);
    }

    let instructor = newArr.join("");
    for (let i = 0; i < filterCategory.length; i++) {
      newArr2.push(`&categoryId=${filterCategory[i]}`);
    }

    let category = newArr2.join("");
    let result = instructor + category;
    return result;
  }

  function sortCards(item: any) {
    if (item.includes("↑")) {
      setParams((prev) => {
        return { ...prev, sort: "asc", currentPage: 1 };
      });
    } else if (item.includes("↓")) {
      setParams((prev) => {
        return {
          ...prev,
          sort: "desc",
          currentPage: 1,
        };
      });
    }
  }

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
          <div className={style.Courses__h}> Курсы</div>
          <div className={style.Courses__wrap}>
            <div className={style.Courses__sidebar}>
              <div className={style.Courses__filter}>
                <Filter
                  type={"checkbox"}
                  setId={(num: number) => {
                    if (!filterInstrucor.includes(num)) {
                      //@ts-ignore
                      setFilterInstrucor((prev) => {
                        return [...prev, num];
                      });
                    } else {
                      let ind = filterInstrucor.indexOf(num);
                      return setFilterInstrucor((prev) => {
                        return [...prev.slice(0, ind), ...prev.slice(ind + 1)];
                      });
                    }
                  }}
                  title={"Автор"}
                  elements={"instructors"}
                  data={instructors}
                />
              </div>
              <div className={style.Courses__filter}>
                <Filter
                  type={"checkbox"}
                  setId={(num: number) =>
                    //@ts-ignore
                    setFilterCategory((prev) => {
                      return [...prev, num];
                    })
                  }
                  title={"Категории"}
                  elements={"categories"}
                  data={categories}
                />
              </div>
            </div>
            <div className={style.Courses__cards}>
              <div className={style.Courses__top}>
                <div className={style.Courses__total}>
                  Всего{" "}
                  <span className={style.Courses__total_res}>
                    {data.meta?.pagination.total}
                  </span>{" "}
                  результатов
                </div>
                <Sort onChange={sortCards} data={["А-Я ↑", "Я-А ↓"]} />
              </div>
              <div className={style.Courses__cardslist}>
                {data.data.map(
                  (
                    card: {
                      id: number;
                      attributes: {
                        ch_image: string | undefined;
                        name_ru: string;
                        channels: {
                          data: { attributes: { name_ru: string } }[];
                        };
                      };
                    },
                    key: React.Key | null | undefined
                  ) => {
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
                          author={
                            card.attributes.channels.data[0].attributes.name_ru
                          }
                        />
                      </div>
                    );
                  }
                )}
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
