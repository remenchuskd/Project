import React from "react";
import style from "./Layout2.module.css";
import ColorBlock from "../ColorBlock/ColorBlock";
import Link from "next/link";
import Icon from "../Icon/Icon";
import { CategoriesContext } from "../../contexts/categoryContext";
import Header2 from "../Header2/Header2";

export default function Layout2({ children }: any) {
  return (
    <div className={style.Layout}>
      <div className={style.Layout__left}>
        <ColorBlock color={"darkblue"}>
          <div className={style.Layout__wrap}>
            <div className={style.Layout__logo}>
              <Link href="/">
                <Icon type={"logoWhite2"} />
              </Link>
            </div>
            <div className={style.Layout__image}></div>
          </div>
        </ColorBlock>
      </div>
      <div className={style.Layout__right}>
        <ColorBlock color={"yellow"}>
          <div className={style.Layout__wrap}>
            <div className={style.Layout__header}>
              <Header2 />
            </div>
            <div className={style.Layout__login}>
              {children}  
            </div>
            
          </div>
        </ColorBlock>
      </div>
    </div>
  );
}
