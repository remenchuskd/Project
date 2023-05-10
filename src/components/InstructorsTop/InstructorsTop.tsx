import React from 'react';
import style from './InstructorsTop.module.css';
import Container from '../Container/Container';
import ColorBlock from '../ColorBlock/ColorBlock';
import ButtonLink from '../ButtonLink/ButtonLink';
import Instructor from '../InstructorCard/InstructorCard';

export default function InstructorsTop() {
    let data=[
        {name:'Floyd Miles',
        position:'President of Sales',
        students:298,
        course:153,
        rate:4.5,
        },
        {name:'Floyd Miles',
        position:'President of Sales',
        students:298,
        course:153,
        rate:4.5,
        },
        {name:'Floyd Miles',
        position:'President of Sales',
        students:298,
        course:153,
        rate:4.5,
        },
        {name:'Floyd Miles',
        position:'President of Sales',
        students:298,
        course:153,
        rate:4.5,
        }
    ];
  return (
    <ColorBlock color={'yellow'}>
      <Container>
        <div className={style.Instructors}>
          <div className={style.Instructors__h}>Топ инструкторов</div>
          <div className={style.Instructors__wrap}>
            <div className={style.Instructors__descr}>
              Лучшие инструкторы
            </div>
            <ButtonLink
              link={'Instructors'}
              type={'blue'}
              text={'Все инструкторы'}
            />
          </div>
          <div className={style.Instructors__cards}>
            {data.map((card, key) => {
              return (
                <div key={key} className={style.Instructors__card}>
                  {' '}
                  <Instructor
                    instructor={card.name}
                    position={card.position}
                    image={card.image}
                    rate={card.rate}
                    students={card.students}
                    course={card.course}
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
