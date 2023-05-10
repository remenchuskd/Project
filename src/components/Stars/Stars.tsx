import React from 'react';
import style from './Stars.module.css';
import Image from 'next/image';
type Props = {
  size: string;
  qnty: number;
};

export default function Star({ size, qnty }: Props) {
  let result:any;
  let sizeClass:any;
  switch (size) {
    case 'small':
      result = (<Image src="/star.png" alt="star" width="10" height="10" />);
      break;
    case 'big':
      result = <Image src="/star.png" alt="" width="14" height="14" />;
      sizeClass=style.Star_bg;
      break;
    default:
      result = <Image src="/star.png" alt="" width="10" height="10" />;
  }

  return (
    <div className={style.Star__wrap}>
      {new Array(qnty).fill('star').map((star, key) => {
        return (
          <div key={key} className={`${style.Star} ${sizeClass} `}>
            {result}
          </div>
        );
      })}
    </div>
  );
}
