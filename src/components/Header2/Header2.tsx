import React from 'react';
import Button from '../Button/Button';
import Search from '../Search/Search';
import style from './Header2.module.css';
import Link from 'next/link';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Icon from '../Icon/Icon';
import Dropdown from '../DropDown/Dropdown';
import { CategoriesContext } from '../../contexts/categoryContext';

export default function Header2() {
  let data = React.useContext(CategoriesContext);

  return (
    <div className={style.Header}>
      <div className={style.Header__menu} >
      <div className={style.Header__nav}>
        <Link
          className={`${style.Header__link} ${style.Header__navElement}`}
          href="/"
        >
          Главная
        </Link>
      </div>
      <div className={`${style.Header__nav} ${style.Courses}`}>
        <Link
          className={`${style.Header__link} ${style.Header__navElement}`}
          href="/courses"
        >
          Курсы
        </Link>
        <span className={style.Header__dropdown_svg}>
          <Icon type={'tick'} />
        </span>
        <div
          className={`${style.Header__dropdownCourses} ${style.Header__dropdown}`}
        >
          <Dropdown vertical={true} data={data} />
        </div>
      </div>
      <div className={`${style.Header__nav} ${style.Pages}`}>
        <div className={style.Header__navElement}>Страницы</div>
        <span className={style.Header__dropdown_svg}>
          <Icon type={'tick'} />
        </span>
        <div
          className={`${style.Header__dropdownPages} ${style.Header__dropdown}`}
        >
          <Dropdown data={[]} vertical={false} />
        </div>
      </div>
      <div className={style.Header__nav}>
        <Link
          className={`${style.Header__link} ${style.Header__navElement}`}
          href="/contact"
        >
          Контакты
        </Link>
      </div>
      </div>
      <div className={style.Header__wrap}>
        <div className={`${style.Header__nav} ${style.Header__login}`}>
          <Link
            className={`${style.Header__link} ${style.Header__navElement}`}
            href="/login"
          >
            Войти
          </Link>
        </div>
        <Button text={'Регистрация'} color={'darkblue'} radius={true} />
      </div>
    </div>
  );
}
