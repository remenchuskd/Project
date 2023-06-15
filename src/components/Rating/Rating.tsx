import React from 'react';
import style from './Rating.module.css';
type Props = {
  rating: number;
  size?:string,
};

export default function Rating({ rating, size }: Props) {
  let result;
  switch(size){
    case 'large':
      result=style.Rating_lg;
      break;
    default:
      result=style.Rating_st;
  }


  return (
    <div className={`${style.Rating} ${result}`}>
        {rating} 
    </div>
  );
}
