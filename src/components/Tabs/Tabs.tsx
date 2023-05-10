import React from 'react';
import style from './Tabs.module.css';
import flattenChildren from 'react-flatten-children';
type props = {
  children: any;
  title: string[];
};

export default function Tab({ children, title }: props) {
  let [active, setActive] = React.useState(0);

  return (
    <>
      <div className={style.Tabs}>
        <div className={style.Tabs__head}>
          {title.map((tab: string, key) => {
            return (
              <div
                className={
                  active === key
                    ? `${style.Tabs__name} ${style.active} `
                    : style.Tabs__name}
                onClick={() => setActive(key)}
                key={key}
              >
                {tab}{' '}
              </div>
            );
          })}
        </div>
      </div>
      {flattenChildren(children).map((child, key) => {
        return (
          <div
            key={key}
            className={
              active === key
                ? `${style.Tabs__item} ${style.active} `
                : style.Tabs__item
            }
          >
            {' '}
            {child}{' '}
          </div>
        );
      })}
    </>
  );
}
