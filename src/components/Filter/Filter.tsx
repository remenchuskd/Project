import React, { useState } from 'react';
import style from './Filter.module.css';
import Icon from '../Icon/Icon';
import Checkbox from '../Checkbox/Checkbox';
import Radiobox from '../Radiobox/Radio';
import Star from '../Stars/Stars';
type props = {
  title: string;
  type: string;
  elements: string;
  setId: Function;
  rate?: boolean;
  data: any[];
};

type filterboxProps = {
  type: string;
  activeCheckbox: any;
  id: any;
  onClick: Function;
  onChange: Function;
  index: number;
};

function FilterBox({
  type,
  activeCheckbox,
  id,
  onClick,
  index,
  onChange,
}: filterboxProps) {
  let result;
  switch (type) {
    case 'checkbox':
      result = (
        <Checkbox
          checked={activeCheckbox.includes(index)}
          onChange={onChange}
          id={id}
          onClick={onClick}
          index={index}
        />
      );
      break;
    case 'radiobox':
      result = <Radiobox name={'title'} index={index} onChange={onChange} />;
      break;
  }

  return <span>{result}</span>;
}

export default function Filter({
  title,
  type,
  elements,
  setId,
  rate,
  data,
}: props) {
  let [isOpen, setIsOpen] = React.useState(false);
  let [showMore, setShowMore] = React.useState(false);
  let [activeCheckbox, setActiveCheckbox] = React.useState([]);
  let [limit, setLimit] = React.useState(6);
  let [filterData, setFilterdata] = React.useState(data);

  React.useEffect(() => {
    if (elements === 'instructors') {
      let arr: any[] = [];
      let newdata=data.filter(item=>{
        return item.attributes.courses.data.length>0;
      });
      newdata.forEach((item: any) => {
        arr.push({
          id: item.id,
          name_ru: item.attributes.name_ru,
          courses: item.attributes.courses.data.length,
        });
      });

      setFilterdata(arr);
    }else{
      setFilterdata(data);
    }

  }, [data]);

  function onChange(index: number) {
    if (!activeCheckbox.includes(index)) {
      setActiveCheckbox((prev) => {
        return [...prev, index];
      });
    } else {
      let ind = activeCheckbox.indexOf(index);
      setActiveCheckbox((prev) => {
        return [...prev.slice(0, ind), ...prev.slice(ind + 1)];
      });
    }
  }

  function onClick(id: any) {
    setId(id);
  }

  function show() {
    if (!showMore) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }

  React.useEffect(() => {
    if (!showMore) {
      setLimit(6);
    } else {
      setLimit(Infinity);
    }
  }, [showMore]);

  function Dropdown() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div className={style.Filter}>
      <div onClick={Dropdown} className={style.Filter__info}>
        <div className={style.Filter__title}>{title}</div>
        {isOpen ? <Icon type={'tick-up'} /> : <Icon type={'tick-down'} />}
      </div>
      {isOpen ? (
        <div>
          <div
            className={
              limit !== Infinity
                ? `${style.Filter__descr}`
                : `${style.Filter__descr} ${style.active}`
            }
          >
            {elements == 'instructors' &&
              filterData.slice(0, limit).map((item, key) => {
                console.log(filterData);
                return (
                  <div key={key} className={style.Filter__wrap}>
                    <div className={style.Filter__elem}>
                      <FilterBox
                        type={type}
                        key={key}
                        activeCheckbox={activeCheckbox}
                        onClick={onClick}
                        id={item.id}
                        index={key}
                        onChange={onChange}
                      />
                      <span
                        className={
                          rate
                            ? `${style.Filter__rate} ${style.active} `
                            : style.Filter__rate
                        }
                      >
                        {' '}
                        <Star size="small" qnty={5} />
                      </span>
                      <span className={style.Filter__name}>
                        {item.name_ru}{' '}
                      </span>
                    </div>
                    <div
                      className={style.Filter__qnty}
                    >{`${item.courses}`}</div>
                  </div>
                );
              })}
            {elements === 'categories' &&
              filterData.slice(0, limit).map((item, key) => {
                return (
                  <div key={key} className={style.Filter__wrap}>
                    <div className={style.Filter__elem}>
                      <FilterBox
                        type={type}
                        key={key}
                        activeCheckbox={activeCheckbox}
                        onClick={onClick}
                        id={item.id}
                        index={key}
                        onChange={onChange}
                      />
                      <span
                        className={
                          rate
                            ? `${style.Filter__rate} ${style.active} `
                            : style.Filter__rate
                        }
                      >
                        {' '}
                        <Star size="small" qnty={5} />
                      </span>
                      <span className={style.Filter__name}>
                        {item.attributes.name_ru}{' '}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
          {filterData.length > 6 && showMore === false ? (
            <div onClick={show} className={style.Filter__show}>
              Показать еще
            </div>
          ) : (
            <div onClick={show} className={style.Filter__show}>
              Показать меньше
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
