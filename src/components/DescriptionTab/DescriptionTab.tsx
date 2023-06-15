import React from 'react';
import style from './DescriptionTab.module.css';
import Icon from '../Icon/Icon';
type props = {
  data: [];
};

export default function Description({ data }: props) {
  return (
    <div className={style.Description}>
      <div className={style.Description__h}>Описание </div>
      <div className={style.Description__descr}>
        Дизайнеры жилых и коммерческих интерьеров придумывают креативные
        концепции для квартир, ресторанов, офисов и фитнес-центров. Они
        превращают пустые бетонные коробки в уютные дома, а общественные зоны —
        в комфортные пространства, которые не хочется покидать. Сейчас услуги
        дизайнеров очень востребованы: каждый месяц открываются новые кафе и
        салоны красоты, а жилая застройка увеличивается ежегодно. По данным
        Росстата, в 2022-м новостроек возвели на 38% больше, чем в предыдущем.
        на 77% вырос спрос на услуги дизайнеров интерьеров в 2022 году, по
        данным сервиса «Ремонт со СберУслугами» и компании «ЮKassa» от 1 500 до
        7 000 рублей получает дизайнер интерьеров за каждый квадратный метр 6
        месяцев интенсивного обучения на платформе достаточно, чтобы найти
        первую работу
      </div>
      <div className={style.Description__show}>Показать полностью</div>
      <div className={style.Description__h}>Чему вы научитесь</div>
      <div className={style.Description__posibilities}>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Создавать дизайн жилых интерьеров
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Сможете разрабатывать дизайн-проекты и находить нестандартные
            решения для жилых помещений.
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Разрабатывать проекты коммерческих помещений
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Разрабатывать проекты коммерческих помещений
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Разрабатывать проектную документацию
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Визуализировать интерьеры
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Cоздавать фотореалистичные изображения интерьеров в 3ds
            Max, SketchUp и Procreate,Corona Renderer.
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Поймёте, чем отличается дизайн коммерческих интерьеров от дизайна
            жилых. 
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Научитесь создавать чертежи в Archicad, Autocad или Revit. 
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Продвигать свои услуги
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Узнаете, как использовать разные каналы продвижения для привлечения
            клиентов
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Управлять дизайн-студией
          </span>
        </div>
        <div className={style.Description__posibility}>
          <Icon type={'tick-circule'} />
          <span className={style.Description__text}>
            Поймёте, как делегировать задачи, организовать бизнес-процессы 
          </span>
        </div>
      </div>
      <div className={style.Description__h}>
            Понадобится
      </div>
      <div className={style.Description__requirements}>
        <div className={style.Description__requirement}>
            <Icon type={'circule'}/>
            <span className={style.Description__text} >Дизайнерские опыт не Понадобится</span>
        </div>
        <div className={style.Description__requirement}>
            <Icon type={'circule'}/>
            <span className={style.Description__text} >Умения работы Adobe </span>
        </div>
        <div className={style.Description__requirement}>
            <Icon type={'circule'}/>
            <span className={style.Description__text} >Дизайнерские опыт не Понадобится</span>
        </div>
        <div className={style.Description__requirement}>
            <Icon type={'circule'}/>
            <span className={style.Description__text} >Умения работы Adobe </span>
        </div>
      </div>
    </div>
  );
}
