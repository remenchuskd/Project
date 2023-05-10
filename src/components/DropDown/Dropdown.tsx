import React from 'react';
import style from './Dropdown.module.css';
import Icon from '../Icon/Icon';
import Link from 'next/link';
type Props = {
  vertical?: boolean;
};

export default function Dropdown({ vertical }: Props) {
  let Vertical = vertical ? style.vertical : '';

  return (
    <div className={`${style.Dropdown} ${Vertical}`}>
      {new Array(4).fill('colums').map((column, key) => {
        return (
          <div key={key} className={`${style.Dropdown__column} ${Vertical}`}>
            <div className={`${style.Dropdown__name} ${Vertical}`}>
              {' '}
              Column Name
            </div>
            <span className={`${style.Dropdown__column_svg} ${Vertical}`}>
              <Icon type={'tick-right'} hoverable={true} />
            </span>
            <div className={`${style.Dropdown__allLinks} ${Vertical}`}>
              {new Array(6).fill('link').map((link, key) => {
                return (
                  <Link
                    key={key}
                    className={style.Dropdown__link}
                    href={`/courses/${key}`}
                  >
                    {' '}
                    Курс{key}{' '}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
