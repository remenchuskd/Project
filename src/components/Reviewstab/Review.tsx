import React from 'react';
import style from './Review.module.css';
import Progressbar from '../ProgressBar/ProgressBar';
import Rating from '../Rating/Rating';
import Star from '../Stars/Stars';
import ReviewCard from '../ReviewCard/ReviewCard';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
type props = {
  data?: [];
};

export default function ReviewTab({ data }: props) {
  let [text, setText] = React.useState('');
  let [name, setName] = React.useState('');

  return (
    <div className={style.Rewiev}>
      <div className={style.Rewiev__h}>Отзывы студентов</div>
      <div className={style.Rewiev__ratingInfo}>
        <div className={style.Rewiev__ratingbox}>
          <Rating rating={4.8} size={'large'} />
          <span className={style.Rewiev__ratingStar}>
            {' '}
            <Star qnty={5} size={'big'} />{' '}
          </span>
          Рейтинг курса
        </div>
        <div className={style.Rewiev__ratingProgress}>
          {/* тут количество тянется с аppi */}
          <div className={style.Review__progress}>
            <Progressbar procent={70} />
            <Star size={'small'} qnty={5} />
            <div className={style.Review__progressQnty}>70%</div>
          </div>
          <div className={style.Review__progress}>
            <Progressbar procent={60} />
            <Star size={'small'} qnty={4} />
            <div className={style.Review__progressQnty}>60%</div>
          </div>
          <div className={style.Review__progress}>
            <Progressbar procent={50} />
            <Star size={'small'} qnty={3} />
            <div className={style.Review__progressQnty}>50%</div>
          </div>
          <div className={style.Review__progress}>
            <Progressbar procent={40} />
            <Star size={'small'} qnty={2} />
            <div className={style.Review__progressQnty}>40%</div>
          </div>
          <div className={style.Review__progress}>
            <Progressbar procent={30} />
            <Star size={'small'} qnty={1} />
            <div className={style.Review__progressQnty}>30%</div>
          </div>
        </div>
      </div>
      <div className={style.Rewiev__h}>Отзывы</div>
      <div>
        <ReviewCard data={[]} />
        <ReviewCard data={[]} />
        <div className={style.Rewiev__all}> Смотреть все</div>
      </div>
      <div className={style.Rewiev__h}>Написать отзыв</div>
      <div className={style.Rewiev__ask}>Понравился ли вам курс?</div>
      <div className={style.Rewiev__stars}>
        <Star qnty={5} size={'small'} />
      </div>

      <div className={style.Rewiev__input}>
        <Input
          setName={setName}
          label={'Заголовок'}
          placeholder={'Заголовок'}
        />
      </div>
      <div className={style.Rewiev__input}>
        <Textarea
          setText={setText}
          label={'Отзыв'}
          placeholder={
            'There are tens of thousands of content marketing jobs being advertised on LinkedIn. These roles have never been in more demand. That’s why adding content marketing to your skill set is such a smart career move. '
          }
          name={'review'}
        />
      </div>

      <Button color={'blue'} text={'Отправить отзыв'} />
    </div>
  );
}
