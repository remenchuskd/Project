import React from 'react';
import style from './InstructorsTop.module.css';
import Container from '../Container/Container';
import ColorBlock from '../ColorBlock/ColorBlock';
import ButtonLink from '../ButtonLink/ButtonLink';
import Instructor from '../InstructorCard/InstructorCard';

export default function InstructorsTop(props: any) {
  let [data, setData] = React.useState(props.data);

  return (
    <ColorBlock color={'yellow'}>
      <Container>
        <div className={style.Instructors}>
          <div className={style.Instructors__h}>Топ инструкторов</div>
          <div className={style.Instructors__wrap}>
            <div className={style.Instructors__descr}>Лучшие инструкторы</div>
            <ButtonLink
              link="instructors"
              type={'blue'}
              text={'Все инструкторы'}
            />
          </div>
          <div className={style.Instructors__cards}>
            {data.map((card: { id:number, attributes: { name_ru: string; courses: { data: string | any[]; }; }; }, key: React.Key | null | undefined) => {
                return (
                  <div key={key} className={style.Instructors__card}>
                    {' '}
                    <Instructor
                    outlined={true}
                    id={card.id}
                      instructor={card.attributes.name_ru}
                      image={''}
                      course={card.attributes.courses.data.length}
                    />{' '}
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </ColorBlock>
  );
}
