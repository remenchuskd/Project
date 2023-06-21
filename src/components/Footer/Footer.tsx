import React, { useContext } from "react";
import style from "./Footer.module.css";
import ColorBlock from "../ColorBlock/ColorBlock";
import Container from "../Container/Container";
import Link from "next/link";
import Icon from "../Icon/Icon";
import SearchBtn from "../SearchBtn/SearchBtn";
import {CategoriesContext} from '../../contexts/categoryContext'

export default function Footer() {
  let [isEmail, setIsEmail] = React.useState("");
  let data=useContext(CategoriesContext)

  // React.useEffect(() => {
  //   async function getFetch() {
  //     let response= await fetch('http://localhost:3000/api/getCategories')
  //     let data=await response.json();
  //     let arrayName=data.map((category:any)=>{
  //       return category.name
  //     })
  //     setData(arrayName)
  //   }
  //   getFetch()
      

  // }, []);

  let arrayName=data.map((category:any)=>{
          return category.name
  })

  function whatEmail(ev: string) {
    setIsEmail(ev);
    return isEmail;
  }


  let columnNum = data.length / 7;

  return (
    <Container>
      <div className={style.Footer__up}>
        <Link href="/">
          <Icon type={"logoWhite"} />
        </Link>
        <div className={style.Footer__social}>
          <span className={style.Footer__socialText}>
            {" "}
            мы в социальных сетях
          </span>
          <div className={style.Footer__icons}>
            <span className={style.Footer__icon}>
              <Icon type={"facebook"} />
            </span>
            <span className={style.Footer__icon}>
              <Icon type={"insta"} />
            </span>
            <span className={style.Footer__icon}>
              <Icon type={"linkedin"} />
            </span>
          </div>
        </div>
      </div>
      <div className={style.Footer__border}></div>
      <div className={style.Footer__center}>
        <div className={style.Footer__column}>
          <div className={style.Footer__info}>О нас</div>
          <div className={style.Footer__about}>
            <div className={style.Footer__elem}>О нас</div>
            <div className={style.Footer__elem}>Истории</div>
            <div className={style.Footer__elem}>Каръера</div>
            <div className={style.Footer__elem}>Пресса</div>
            <div className={style.Footer__elem}>Контакты</div>
          </div>
        </div>
        <div className={style.Footer__column}>
          <div className={style.Footer__info}>Категории</div>
          <div className={style.Footer__wrap}>
            {data.length && new Array(2).fill("column").map((column, key) => {
              let start = 0;
              if (key > 0) {
                start = 7 * key;
              }
              return (
                <div key={key} className={style.Footer__category}>
                  {arrayName.slice(start, 7 + start).map((elem, key) => {
                    return (
                      <div className={style.Footer__elem} key={key}>
                        {elem}{" "}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            {!arrayName.length && <div></div> // загрузчик

            }
          </div>
        </div>
        <div className={style.Footer__column}>
          <div className={style.Footer__info}>Поддержка</div>

          <div className={style.Footer__elem}>Докумнты</div>
          <div className={style.Footer__elem}>FAQs</div>
          <div className={style.Footer__elem}>Контакты</div>
        </div>
        <div className={style.Footer__column}>
          <div className={style.Footer__info}>Остаемся на связи</div>
          <div className={`${style.Footer__elem} ${style.Footer__spam}`}>
            {" "}
            Мы не будем рассылать спам, не беспокойтесь
          </div>
          <SearchBtn
            onChange={whatEmail}
            placeholder={"Email..."}
            textBtn={"Отправить"}
            colorBtn={"blue"}
            smallBtn={true}
            radiusBtn={true}
          />
        </div>
      </div>
      <div className={style.Footer__border}></div>
      <div className={style.Footer__bottom}>
        <div className={style.Footer__bottomLeft}>
          © 2022 Educrat. Все права защишены.
        </div>
        <div className={style.Footer__bottomRight}>
          <div className={style.Footer__privacy}>
            <Link className={style.Footer__terms} href="">
              Помощь
            </Link>

            <Link className={style.Footer__terms} href="">
              Политика безопсности
            </Link>

            <Link className={style.Footer__terms} href="">
              Положение Cookie
            </Link>

            <Link className={style.Footer__terms} href="">
              Безопасность
            </Link>
          </div>
          <button className={style.Footer__btn}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_535_14797)">
                <path
                  d="M18.1232 4.16738C18.3207 3.89648 18.4377 3.56328 18.4377 3.20312C18.4377 2.29848 17.7017 1.5625 16.7971 1.5625C16.4369 1.5625 16.1037 1.67945 15.8328 1.87695C14.127 0.648203 12.1173 0 10 0C7.92293 0 5.93117 0.630938 4.23996 1.82457C4.06371 1.94898 4.02168 2.1927 4.14609 2.36898C4.27051 2.54523 4.51426 2.58727 4.69051 2.46285C5.8202 1.66551 7.0957 1.14086 8.44121 0.912305C8.28461 1.11129 8.12727 1.35078 7.97199 1.63922C7.49809 2.51965 7.10699 3.73211 6.83438 5.16102C6.11719 5.21258 5.52637 5.7268 5.35973 6.40625H1.50809C1.73512 5.87035 2.01371 5.35445 2.34254 4.86512C2.46285 4.68605 2.4152 4.44336 2.23613 4.32305C2.05707 4.2027 1.81437 4.25035 1.69406 4.42941C0.585781 6.07879 0 8.00508 0 10C0 12.1166 0.648242 14.1268 1.87684 15.8328C1.67941 16.1036 1.5625 16.4368 1.5625 16.7969C1.5625 17.7015 2.29848 18.4375 3.20312 18.4375C3.56324 18.4375 3.89641 18.3206 4.16727 18.1231C5.8732 19.3518 7.8832 20 10 20C12.6711 20 15.1823 18.9598 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10C20 7.88289 19.3519 5.87324 18.1232 4.16738V4.16738ZM18.7795 12.8125H14.6139C14.4802 12.267 14.073 11.8281 13.5464 11.6494C13.5773 11.1068 13.5938 10.5538 13.5938 10C13.5938 9.03414 13.547 8.08906 13.4568 7.18754H18.7843C19.0713 8.08578 19.2188 9.03066 19.2188 10C19.2188 10.9805 19.0643 11.9254 18.7795 12.8125V12.8125ZM10 19.2188C9.34551 19.2188 8.63734 18.2664 8.10562 16.6713C7.80762 15.7772 7.57707 14.7328 7.42148 13.5938H11.4274C11.5525 14.1037 11.9163 14.5207 12.3934 14.7189C11.7991 17.8238 10.7744 19.2188 10 19.2188V19.2188ZM3.20312 15.1562C2.94191 15.1562 2.69492 15.2179 2.47551 15.327C2.08707 14.7802 1.76305 14.1999 1.50586 13.5938H6.63383C6.79617 14.8229 7.04254 15.9526 7.36445 16.9184C7.67398 17.847 8.03445 18.5735 8.43598 19.0875C7.08289 18.858 5.80613 18.3295 4.67301 17.5245C4.78207 17.3051 4.84375 17.0581 4.84375 16.7969C4.84375 15.8922 4.10777 15.1562 3.20312 15.1562V15.1562ZM7.1875 10C7.1875 9.46699 7.20312 8.93516 7.23242 8.4132C7.87598 8.30223 8.39223 7.81543 8.54621 7.1875H12.6718C12.7644 8.08563 12.8125 9.03121 12.8125 10C12.8125 10.5313 12.797 11.0615 12.7678 11.582C12.1119 11.6839 11.5835 12.1759 11.4274 12.8125H7.3282C7.23566 11.9144 7.1875 10.9688 7.1875 10V10ZM13.0207 14.0625C12.5468 14.0625 12.1613 13.677 12.1613 13.2031C12.1613 12.7293 12.5468 12.3438 13.0207 12.3438C13.4945 12.3438 13.88 12.7293 13.88 13.2031C13.88 13.677 13.4945 14.0625 13.0207 14.0625ZM12.6355 3.08164C12.326 2.15293 11.9655 1.42645 11.5639 0.912383C12.9173 1.14188 14.194 1.67039 15.3272 2.47547C15.2181 2.69492 15.1564 2.94191 15.1564 3.20312C15.1564 4.10777 15.8924 4.84375 16.7971 4.84375C17.0583 4.84375 17.3052 4.78207 17.5247 4.67305C17.9132 5.21984 18.2371 5.80016 18.4942 6.40629H13.3662C13.2038 5.17707 12.9574 4.04738 12.6355 3.08164V3.08164ZM17.6564 3.20312C17.6564 3.67699 17.2709 4.0625 16.7971 4.0625C16.3232 4.0625 15.9377 3.67699 15.9377 3.20312C15.9377 2.72926 16.3232 2.34375 16.7971 2.34375C17.2709 2.34375 17.6564 2.72926 17.6564 3.20312ZM10 0.78125C10.6545 0.78125 11.3627 1.73355 11.8944 3.32867C12.1924 4.22277 12.4229 5.26727 12.5785 6.40625H8.54625C8.42332 5.90504 8.06969 5.49367 7.60465 5.29156C8.1984 2.17953 9.22406 0.78125 10 0.78125V0.78125ZM6.95297 5.93754C7.42684 5.93754 7.81234 6.32305 7.81234 6.79691C7.81234 7.27078 7.42684 7.65629 6.95297 7.65629C6.4791 7.65629 6.09359 7.27078 6.09359 6.79691C6.09359 6.32305 6.4791 5.93754 6.95297 5.93754ZM5.35973 7.18754C5.4957 7.74195 5.91398 8.18648 6.45305 8.35938C6.42258 8.89914 6.40625 9.44906 6.40625 10C6.40625 10.9659 6.45305 11.911 6.54324 12.8125H1.2159C0.928828 11.9141 0.78125 10.9692 0.78125 10C0.78125 9.03578 0.929883 8.08914 1.21824 7.18754H5.35973ZM2.34375 16.7969C2.34375 16.323 2.72926 15.9375 3.20312 15.9375C3.67699 15.9375 4.0625 16.323 4.0625 16.7969C4.0625 17.2707 3.67699 17.6562 3.20312 17.6562C2.72926 17.6562 2.34375 17.2707 2.34375 16.7969ZM11.56 19.0861C11.7153 18.8886 11.8713 18.6514 12.0252 18.3661C12.5005 17.485 12.8929 16.2697 13.1661 14.837C13.8712 14.7747 14.4494 14.2647 14.6139 13.5938H18.4893C17.2817 16.4356 14.6871 18.5508 11.56 19.0861V19.0861Z"
                  fill="white"
                />
                <path
                  d="M3.12695 3.6748C3.23012 3.6748 3.33047 3.6334 3.40352 3.56035C3.47617 3.4877 3.51758 3.38691 3.51758 3.28418C3.51758 3.18145 3.47617 3.08105 3.40352 3.00801C3.33047 2.93535 3.23012 2.89355 3.12695 2.89355C3.02422 2.89355 2.92344 2.93535 2.85082 3.00801C2.77816 3.08105 2.73633 3.18145 2.73633 3.28418C2.73633 3.38691 2.77812 3.4877 2.85082 3.56035C2.92344 3.6334 3.02422 3.6748 3.12695 3.6748Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_535_14797">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className={style.Footer__btnText}>Русский</span>
          </button>
        </div>
      </div>
    </Container>
  );
}
