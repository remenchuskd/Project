import React from 'react';
import style from './InstructorsTop.module.css';
import Container from '../Container/Container';
import ColorBlock from '../ColorBlock/ColorBlock';
import ButtonLink from '../ButtonLink/ButtonLink';
import Instructor from '../InstructorCard/InstructorCard';

export default function InstructorsTop() {
  
    // let[cards,setCards]=React.useState([]);
    // let[data,setData]=React.useState([]);

    // React.useEffect(()=>{
    //   let res:any[]=[];
    //   for(let i=0;i<4;i++){
    //     let num= Math.floor(Math.random()*data.length)+1
    //     if(res.includes(num)==false){
    //         res.push(num)
    //     }else{
    //       i--
    //     }
    //   }
    //   setCards(res)
    //   getInstructors()
    // },[])

    // async function getInstructors() {
    //   let reponse = await fetch('http://localhost:3000/api/getInstructors')
    //   let data=await reponse.json();
    //   console.log(data)
    //   // @ts-ignore
    //   setData(data.data)
    // }
    

  return (
    <ColorBlock color={'yellow'}>
      {/* <Container>
        <div className={style.Instructors}>
          <div className={style.Instructors__h}>Топ инструкторов</div>
          <div className={style.Instructors__wrap}>
            <div className={style.Instructors__descr}>
              Лучшие инструкторы
            </div>
            <ButtonLink
              link='instructors'
              type={'blue'}
              text={'Все инструкторы'}
            />
          </div>
          <div className={style.Instructors__cards}>
            {data.filter(card=>{
              return cards.includes(card.id)
            }).map((card, key) => {
              return (
                <div key={key} className={style.Instructors__card}>
                  {' '}
                  <Instructor
                    instructor={card.name_ru}
                    // position={card.position}
                    image={''}
                    // rate={''}
                    // students={''}
                    // course={''}
                  />{' '}
                </div>
              );
            })}
          </div>
        </div>
      </Container> */}
    </ColorBlock>
  );
}
