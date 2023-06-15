import React from 'react';
import style from './Overview.module.css';
import Accordion from '../Accordion/Accordion';

export default function Overview(){

    return(
        <div className={style.Overview}>
            <div className={style.Overview__h }>Контент курса
                </div>  
              
              <Accordion
                title={'Название 1'}
                info={'название 2'}
              >  
              <div>
                <div className="style Overview__descr">Наполнение</div>
                <div className="style Overview__descr">Наполнение</div>
                <div className="style Overview__descr">Наполнение</div>
                <div className="style Overview__descr">Наполнение</div>
              </div>
              </Accordion>
            </div>
    );
}