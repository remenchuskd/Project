import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import style from "./Header.module.css";
import Link from "next/link";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import Dropdown from "../DropDown/Dropdown";
import { CategoriesContext } from "../../contexts/categoryContext";
import { UserContext } from "@/contexts/userContext";
import useCookie from "../Hook/useCookie";


export default function Header() {
  let [isSearch, setIsSearch] = React.useState("");
  let data = React.useContext(CategoriesContext);
  let {user,setUser}= React.useContext(UserContext);
  function click(){
    useCookie('login','')
    useCookie('token','')
    setUser({})
  }

  function whatSearch(ev: string) {
    setIsSearch(ev);
    return isSearch;
  }
  return (
    <div className={style.Header}>
      <div className={style.Header__left}>
        <div className="Header__logo">
          <Link href="/">
            <Icon type={"logo"} />
          </Link>
        </div>
        <div className={style.Header__border}></div>
        <div>
          <div className={style.Header__explore}>
            <div className={style.Header__exploreBorder}></div>
            <div className={style.Header__exploreText}>Изучаем</div>
          </div>
        </div>
        <div className={style.Header__border}></div>
        <div className={style.Header__menu}>
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
              <Icon type={"tick"} />
            </span>
            <div
              className={`${style.Header__dropdownCourses} ${style.Header__dropdown}`}
            >
              <Dropdown vertical={true} data={data} />
            </div>
          </div>
          <div className={style.Header__nav}>
            <Link
              className={`${style.Header__link} ${style.Header__navElement}`}
              href="/instructors"
            >
              Инструкторы
            </Link>
          </div>
          {/* <div className={`${style.Header__nav} ${style.Pages}`}>
            <div className={style.Header__navElement}>Страницы</div>
            <span className={style.Header__dropdown_svg}>
              <Icon type={"tick"} />
            </span>
            <div
              className={`${style.Header__dropdownPages} ${style.Header__dropdown}`}
            >
              <Dropdown data={[]} vertical={false} />
            </div>
          </div> */}
          <div className={style.Header__nav}>
            <Link
              className={`${style.Header__link} ${style.Header__navElement}`}
              href="/contact"
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
      <div className={style.Header__right}>
        <Search placeholder={"Введите запрос"} onChange={whatSearch} />
        <ButtonIcon icontype={"cart"} iconHover={true} />
        <div className={style.Header__border}></div>
        <div className={user.login===undefined?`${style.Header__enter}`:`${style.Header__enter} ${style.inactive}`}>
          <Link
            href="/login"
            className={`${style.Header__link} ${style.Header__login}`}
          >
            Войти
          </Link>
          <Link
            href="/signup"
            className={`${style.Header__link} ${style.Header__login}`}
          >
            <Button radius={true} text={"Регистрация"} color={"blue"} />
          </Link>
        </div>
        <div className={user.login!==undefined?`${style.Header__user}`:`${style.Header__user} ${style.inactive}`}>
            <div className={style.Header__userHello}>
              Привет {user.login}!
            </div>
            <Button click={click} radius={true} text={"Выйти"} color={"blue"} />
        </div>
      </div>
    </div>
  );
}
