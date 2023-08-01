import React from 'react';
import Layout from '@/components/Layout/Layout';
// import Button from "@/components/Button/Button";
import Icon from '@/components/Icon/Icon';
import Tab from '@/components/Tabs/Tabs';
import Tabpanel from '@/components/Tabpanel/Tabpanel';
import Card from '@/components/CardCourse/CardCourse';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import ColorBlock from '@/components/ColorBlock/ColorBlock';
import Container from '@/components/Container/Container';
import Rating from '@/components/Rating/Rating';
import Star from '@/components/Stars/Stars';
import style from './instructor.module.css';
import { CategoriesContext } from '@/contexts/categoryContext';
import { useRouter } from 'next/router';
import Textarea from '@/components/Textarea/Textarea';
import { Button, Loading } from '@nextui-org/react';
type Data = {
  attributes?: { description: string; courses: {} };
};

type User = {
  login?: string;
  jwt: string;
  id: string;
};
export async function getServerSideProps(context: any) {
  let id = context.query.id;
  let request = await fetch('http://localhost:3000/api/getCategories');
  let request2 = await fetch(
    `http://localhost:3000/api/getInstructors?populate=courses&id=${id}`
  );
  let request3 = await fetch(
    `http://localhost:3000/api/getComments?id=${id}&populate=*`
  );
  let [response, response2, response3] = await Promise.all([
    request,
    request2,
    request3,
  ]);
  let categories = await response.json();
  let instructors = await response2.json();
  let comments = await response3.json();
  return {
    props: {
      categories: categories,
      instructors: instructors,
      comments: comments,
    },
  };
}

export default function Instructor(props: any) {
  let [hide, setHide] = React.useState(true);
  let [data, setData] = React.useState(props.instructors);
  let [comments, setComments] = React.useState(props.comments.data);
  let ref = React.useRef(null);
  let [user, setUser] = React.useState<User>();
  let [cookie, setCookie] = React.useState(
    isBrowser() ? window.document.cookie : ''
  );
  let [activeButton, setActiveButton] = React.useState(true);
  let [resetComment, setResetComment] = React.useState(false);
  let [review, setReview] = React.useState('');

  React.useEffect(() => {
    let objCookie = {};
    // @ts-ignore
    cookie
      .split('; ')
      .map((item) => {
        return item.split('=');
      }) // @ts-ignore
      .forEach((arr) => (objCookie[arr[0]] = arr[1]));
    // @ts-ignore
    setUser(objCookie);
  }, [cookie]);

  React.useEffect(() => {
    if (ref.current) {
      if (hide === true) {
        // @ts-ignore
        ref.current.style.height = 260 + 'px';
      } else {
        // @ts-ignore
        ref.current.style.height = 100 + '%';
      }
    }
  }, [hide]);

  function isBrowser() {
    if (typeof window !== 'undefined') {
      return true;
    } else {
      return false;
    }
  }

  function hidden() {
    if (hide === true) {
      setHide(false);
    } else {
      setHide(true);
    }
  }

  function onClick() {
    setActiveButton(false);
    setResetComment(true);
    async function comments() {
      let request = await fetch('http://localhost:3000/api/postComments', {
        method: 'POST',
        body: JSON.stringify({
          user: `${user.id}`,
          text: `${review}`,
          channel: data.data[0].id,
        }),
      });
      let response = await request.json();
      setComments((prev: any) => {
        return [...prev, response.data];
      });
      setActiveButton(true);
      setResetComment(false);
    }

    comments();
  }

  function click() {
    onClick();
  }

  return (
    <CategoriesContext.Provider value={props.categories}>
      <Layout>
        <ColorBlock color={'lightblue'}>
          <Container>
            <BreadCrumbs data={['Crumb', 'Crumb', 'Crumb', 'Crumb']} />
          </Container>
        </ColorBlock>
        <div className={style.Instructor}>
          <ColorBlock color={'blue'}>
            <div className={style.Container}>
              <div className={style.Instructor__card}>
                <div className={style.Instructor__img}></div>
                <div className={style.Instructor__descr}>
                  <div className={style.Instructor__name}>
                    {data.data[0].attributes.name_ru}
                  </div>
                  <div className={style.Instructor__prof}></div>
                  <div className={style.Instructor__info}>
                    <div className={style.Instructor__item}>
                      <Star size={'big'} qnty={1} />
                      <span className={style.Instructor__infoelem}>
                        <Rating rating={4.5} />
                      </span>{' '}
                      Рейтинг инструктора
                    </div>
                    <div className={style.Instructor__item}>
                      <span className={style.Instructor__infoelem}>
                        <Icon type={'reviews_white'} />{' '}
                      </span>
                      {} Отзывы
                    </div>

                    <div className={style.Instructor__item}>
                      <span className={style.Instructor__infoelem}>
                        <Icon type={'student_white'} />{' '}
                      </span>{' '}
                      {} Студента
                    </div>
                    <div className={style.Instructor__item}>
                      <span className={style.Instructor__infoelem}>
                        <Icon type={'course_white'} />{' '}
                      </span>
                      {data.data[0].attributes.courses.data.length} Курс
                    </div>
                  </div>
                  <div className={style.Instructor__wrap}>
                    <button className={style.Instructor__btn}>
                      Отправить сообщение{' '}
                    </button>
                    <div className={style.Instructor__media}>
                      <span className={style.Instructor__social}>
                        <Icon type={'facebook'} />
                      </span>
                      <span className={style.Instructor__social}>
                        <Icon type={'insta'} />
                      </span>
                      <span className={style.Instructor__social}>
                        <Icon type={'linkedin'} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ColorBlock>
        </div>
        <div className={style.Container}>
          <Tab title={['Описание', 'Курсы', 'Отзывы']}>
            <Tabpanel>
              <div className={style.Instructor__tab}>
                <div className={style.Instructor__h2}>Описание</div>
                <div ref={ref} className={style.Instructor__description}>
                  {data.data[0].attributes.description}
                </div>
                <div onClick={hidden} className={style.Instructor__showMore}>
                  {' '}
                  {hide ? 'Показать еще' : 'Показать меньше'}
                </div>
              </div>
            </Tabpanel>
            <Tabpanel>
              <div className={style.Instructor__tab}>
                <div className={style.Instructor__h2}>Курсы</div>
                <div className={style.Instructor__coursesCards}>
                  {
                    // @ts-ignore
                    data.data[0].attributes.courses.data.map((card, key) => {
                      return (
                        <div key={key} className={style.Instructor__coursesCards}>
                          <Card
                            size={'large'}
                            image={card.attributes.ch_image}
                            id={card.id}
                            text={card.attributes.name_ru}
                            author={data.name_ru}
                          />
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </Tabpanel>
            <Tabpanel>
              <div className={style.Instructor__reviews}>
                <div className={style.Instructor__h2}>Отзывы студентов:</div>
                <div className={style.Instructor__comments}>
                  {comments.length > 0 &&
                    comments.map(
                      (comment: {
                        attributes: {
                          text: string;
                          user: { attributes: { username: string } };
                        };
                      }, key: React.Key | null | undefined) => {
                        return (
                          <div key={key}>
                            <div className={style.Instructor__commentUser}>
                              Студент{' '}
                              {comment.attributes.user.data.attributes.username}
                            </div>
                            <div
                              className={style.Instructor__commentInstructor}
                            >
                              Инструктор {data.data[0].attributes.name_ru}
                            </div>
                            <div className={style.Instructor__comment}>
                              {' '}
                              Отзыв: {comment.attributes.text}
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
                <div className={style.Instructor__h2}>Написать отзыв</div>
                <Textarea
                  label={''}
                  name={'отзывы'}
                  placeholder={'Оставьте свой отзыв'}
                  setText={setReview}
                  text={resetComment ? '' : undefined}
                />
                <Button
                  disabled={!activeButton ? true : false}
                  onPress={click}
                  color="gradient"
                  size="md"
                >
                  {activeButton ? (
                    'Отправить'
                  ) : (
                    <Loading type="spinner" color="currentColor" size="md" />
                  )}
                </Button>
              </div>
            </Tabpanel>
          </Tab>
        </div>
      </Layout>
    </CategoriesContext.Provider>
  );
}
