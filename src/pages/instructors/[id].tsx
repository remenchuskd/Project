import React from "react";
import Layout from "@/components/Layout/Layout";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import Tab from "@/components/Tabs/Tabs";
import Tabpanel from "@/components/Tabpanel/Tabpanel";
import Card from "@/components/CardCourse/CardCourse";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import ColorBlock from "@/components/ColorBlock/ColorBlock";
import Container from "@/components/Container/Container";
import Rating from "@/components/Rating/Rating";
import Star from "@/components/Stars/Stars";
import style from "./instructor.module.css";
import { CategoriesContext } from "@/contexts/categoryContext";
import { useRouter } from "next/router";
import Textarea from "@/components/Textarea/Textarea";
type Data = {
  attributes?: { description: string; courses: {} };
};

type User = {
  login?: string;
  jwt?: string;
};
export async function getServerSideProps() {
  let response = await fetch("http://localhost:3000/api/getCategories");
  let categories = await response.json();
  return {
    props: {
      categories: categories,
    },
  };
}

export default function Instructor(props: any) {
  let [hide, setHide] = React.useState(true);
  let [data, setData] = React.useState<Data>({});
  let [courses, serCousres] = React.useState([]);
  let ref = React.useRef(null);
  let router = useRouter();
  let id = router.query.id;
  let [user, setUser] = React.useState<User>();
  let [cookie, setCookie] = React.useState(
    isBrowser() ? window.document.cookie : ""
  );
  let [review,setReview]=React.useState('');

  function isBrowser() {
    if (typeof window !== "undefined") {
      return true;
    } else {
      return false;
    }
  }

  React.useEffect(() => {
    let objCookie = {};
    // @ts-ignore
    cookie
      .split(";")
      .map((item) => {
        return item.split("=");
      })
      .forEach((arr) => (objCookie[arr[0]] = arr[1]));
    // @ts-ignore
    setUser(objCookie);
  }, [cookie]);

  React.useEffect(() => {
    if (ref.current) {
      if (hide === true) {
        ref.current.style.height = 260 + "px";
      } else {
        ref.current.style.height = 100 + "%";
      }
    }
  }, [hide]);

  function hidden() {
    if (hide === true) {
      setHide(false);
    } else {
      setHide(true);
    }
  }
  async function getInstructor() {
    let response = await fetch(
      `http://localhost:3000/api/getInstructors?populate=courses&id=${id}`
    );
    let data = await response.json();
    setData(data.data[0].attributes);
    serCousres(data.data[0].attributes.courses.data);
  }
  getInstructor();

  async function onClick() {
    let response = await fetch(
      `http://localhost:3000/api/getComments`,
      {
        method:'POST',
        body: JSON.stringify({
          user: `${user?.login}`,
          text: `${review}`,
          channel: `${user?.login}`,
        }),
      }
    );
    let data = await response.json();
    console.log(data)
  }

  function click(){
    onClick()
  }

  return (
    <CategoriesContext.Provider value={props.categories}>
      <Layout>
        <ColorBlock color={"lightblue"}>
          <Container>
            <BreadCrumbs data={["Crumb", "Crumb", "Crumb", "Crumb"]} />
          </Container>
        </ColorBlock>
        <div className={style.Instructor}>
          <ColorBlock color={"blue"}>
            <div className={style.Container}>
              <div className={style.Instructor__card}>
                <div className={style.Instructor__img}></div>
                <div className={style.Instructor__descr}>
                  <div className={style.Instructor__name}>{data.name_ru}</div>
                  <div className={style.Instructor__prof}></div>
                  <div className={style.Instructor__info}>
                    <div className={style.Instructor__item}>
                      <Star size={"big"} qnty={1} />
                      <span className={style.Instructor__infoelem}>
                        <Rating rating={4.5} />
                      </span>{" "}
                      Рейтинг инструктора
                    </div>
                    <div className={style.Instructor__item}>
                      <span className={style.Instructor__infoelem}>
                        <Icon type={"reviews_white"} />{" "}
                      </span>
                      {} Отзывы
                    </div>

                    <div className={style.Instructor__item}>
                      <span className={style.Instructor__infoelem}>
                        <Icon type={"student_white"} />{" "}
                      </span>{" "}
                      {} Студента
                    </div>
                    <div className={style.Instructor__item}>
                      <span className={style.Instructor__infoelem}>
                        <Icon type={"course_white"} />{" "}
                      </span>
                      {courses.length} Курс
                    </div>
                  </div>
                  <div className={style.Instructor__wrap}>
                    <button className={style.Instructor__btn}>
                      Отправить сообщение{" "}
                    </button>
                    <div className={style.Instructor__media}>
                      <span className={style.Instructor__social}>
                        <Icon type={"facebook"} />
                      </span>
                      <span className={style.Instructor__social}>
                        <Icon type={"insta"} />
                      </span>
                      <span className={style.Instructor__social}>
                        <Icon type={"linkedin"} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ColorBlock>
        </div>
        <div className={style.Container}>
          <Tab title={["Описание", "Курсы", "Отзывы"]}>
            <Tabpanel>
              <div className={style.Instructor__tab}>
                <div className={style.Instructor__h2}>Описание</div>
                <div ref={ref} className={style.Instructor__description}>
                  {
                    // @ts-ignore
                    data.attributes?.description
                  }
                </div>
                <div onClick={hidden} className={style.Instructor__showMore}>
                  {" "}
                  {hide ? "Показать еще" : "Показать меньше"}
                </div>
              </div>
            </Tabpanel>
            <Tabpanel>
              <div className={style.Instructor__tab}>
                <div className={style.Instructor__coursesCards}>
                  {courses.map((card, key) => {
                    return (
                      <div className={style.Instructor__coursesCards}>
                        <Card
                          size={"large"}
                          image={card.attributes.ch_image}
                          id={card.id}
                          text={card.attributes.name_ru}
                          // lesson={card.lesson}
                          author={data.name_ru}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tabpanel>
            <Tabpanel>
              <div>Отзывы</div>
              <Textarea
                label={""}
                name={"отзывы"}
                placeholder={"Оставьте свой отзыв"}
                setText={setReview}
              />

              <Button click={click} color={"blue"} text={"Отправить"} />
            </Tabpanel>
          </Tab>
        </div>
      </Layout>
    </CategoriesContext.Provider>
  );
}
