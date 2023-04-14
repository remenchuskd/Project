import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import style from "./Header.module.css";
import Link from "next/link";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Icon from "../Icon/Icon";
import Dropdown from "../DropDown/Dropdown";

export default function Header() {
  let [isSearch, setIsSearch] = React.useState("");

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
            <div className={style.Header__exploreText}>Explore</div>
          </div>
        </div>
        <div className={style.Header__border}></div>

        <div className={style.Header__menu}>
        <div className={style.Header__nav}>
            <Link className={style.Header__link} href="/">
              Home
            </Link>
          </div>
          <div className={`${style.Header__nav} ${style.Courses}`}>
            <div className={style.Header__navElement}>
              Courses
            </div>
            <span>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.58745 5.3393L8.37478 1.5519C8.46245 1.4643 8.51074 1.34736 8.51074 1.22268C8.51074 1.09799 8.46245 0.981058 8.37478 0.89346L8.09593 0.614544C7.91423 0.433052 7.61892 0.433052 7.43749 0.614544L4.25712 3.79492L1.07322 0.611015C0.985558 0.523417 0.868691 0.475052 0.744075 0.475052C0.61932 0.475052 0.502454 0.523417 0.414718 0.611015L0.135941 0.889931C0.0482731 0.977598 -2.29153e-05 1.09446 -2.29207e-05 1.21915C-2.29262e-05 1.34383 0.048273 1.46077 0.135941 1.54837L3.92673 5.3393C4.01467 5.4271 4.13209 5.47533 4.25692 5.47505C4.38222 5.47533 4.49957 5.4271 4.58745 5.3393Z"
                  fill="#202124"
                />
              </svg>
            </span>
            <div className={`${style.Header__dropdownCourses} ${style.Header__dropdown}`}>
                <Dropdown/>
            </div>
          </div>
          <div className={`${style.Header__nav} ${style.Pages}`}>
            <div className={style.Header__navElement} >
              Pages
            </div>
            <span>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.58745 5.3393L8.37478 1.5519C8.46245 1.4643 8.51074 1.34736 8.51074 1.22268C8.51074 1.09799 8.46245 0.981058 8.37478 0.89346L8.09593 0.614544C7.91423 0.433052 7.61892 0.433052 7.43749 0.614544L4.25712 3.79492L1.07322 0.611015C0.985558 0.523417 0.868691 0.475052 0.744075 0.475052C0.61932 0.475052 0.502454 0.523417 0.414718 0.611015L0.135941 0.889931C0.0482731 0.977598 -2.29153e-05 1.09446 -2.29207e-05 1.21915C-2.29262e-05 1.34383 0.048273 1.46077 0.135941 1.54837L3.92673 5.3393C4.01467 5.4271 4.13209 5.47533 4.25692 5.47505C4.38222 5.47533 4.49957 5.4271 4.58745 5.3393Z"
                  fill="#202124"
                />
              </svg>
            </span>
          </div>
          <div className={style.Header__nav}>
            <Link className={style.Header__link} href="/contacts">
              Contacts
            </Link>
          </div>
        </div>
      </div>
      <div className={style.Header__right}>
        <Search text={"Введите запрос"} onChange={whatSearch} />
        <ButtonIcon icontype={"cart"} iconHover={true} />
        <div className={style.Header__border}></div>
        <div className={style.Header__login}>Log in</div>
        <Button radius={true} text={"Click"} color={"blue"} />
      </div>
    </div>
  );
}
