import React from 'react';
import style from './BreadCrumbs.module.css';
import Link from 'next/link';
type props = {
  data: Object[];
};

export default function BreadCrumbs({ data }: props) {
  let dat = [
    { text: 'Hello', link: '/' },
    { text: 'All courses', link: '/courses' },
  ];
  return (
    <div className={style.BreadCrumbs}  >
      {dat.map((crumb, key) => {
        return (
          <div key={key} className={style.BreadCrumbs__wrap}>
            <Link
              className={style.BreadCrumbs__crumbs}
              key={key}
              href={crumb.link}
            >
              {crumb.text}
            </Link>
            <span className={style.BreadCrumbs__slash}>  </span>
          </div>
        );
      })}
    </div>
  );
}
