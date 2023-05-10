import React from 'react';
import style from './ButtonLink.module.css';
import Icon from '../Icon/Icon';
import Link from 'next/link';
type Props = {
  text: string;
  type: string;
  radius?: boolean;
  link: string;
};

export default function ButtonLink({ text, type, radius, link }: Props) {
  let radiusClass = radius ? style.Button_radius : '';
  let result;
  switch (type) {
    case 'blue':
      result = style.Button_blue;
      break;
    case 'outlined':
      result = style.Button_outlined;
  }

  return (
    <Link href={`/${link}`} className={style.Button__link}>
      <button className={`${style.Button} ${result} `}>
        <span className={style.Button__text}>{text}</span>
        <svg
          className={style.Button__svg}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.834 0.916504L1.16732 12.5832"
            stroke="#6440FB"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.834 9.47484V0.916504H4.27565"
            stroke="#6440FB"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {/* <Icon type={'link'} hoverable={true} /> */}
      </button>
    </Link>
  );
}
