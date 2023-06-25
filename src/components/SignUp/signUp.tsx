import React from "react";
import style from "./signUp.module.css";
import ColorBlock from "../ColorBlock/ColorBlock";
import Link from "next/link";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import translate from "../Hook/translateError";
import Button from "../Button/Button";
import { UserContext } from "../../contexts/userContext";
import useCookie from "../Hook/useCookie";

type ValidationError = {
  username?: string;
  email?: string;
  password?: string;
  ApplicationError?: string;
};

type ValidationData = {
  user?: { username: string };
};

export default function Signup() {
  let [username, setUsername] = React.useState("");
  let [email, setMail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [checkPassword, setCheckPassword] = React.useState("");
  let [accept, setAccept] = React.useState();
  let [passwordError, setPasswordError] = React.useState(false);
  let [errors, setErrors] = React.useState<ValidationError>({});
  let [completeSign, setCompleteSign] = React.useState(false);
  let [timer, setTimer] = React.useState(10);
  let [data, setData] = React.useState<ValidationData>({});
  //let { user, setUser } = React.useContext(UserContext);

  async function getregistration() {
    try {
      let response = await fetch("http://localhost:3000/api/registration", {
        method: "POST",
        body: JSON.stringify({
          username: `${username}`,
          email: `${email}`,
          password: `${password}`,
        }),
      });
      let data = await response.json();
      if (data.error?.status === 400) {
        throw Error(JSON.stringify(data.error));
      } else {
        // @ts-ignore
        // setUser(data);
        setCompleteSign(true);
        timerLink();
        let name = data.user.username;
        let token = data.jwt;
        useCookie("login", name);
        useCookie("token", token);
      }
    } catch (error: any) {
      setCompleteSign(false);
      let obj: any = {};
      let data = JSON.parse(error.message);
      if (data.details.errors) {
        data.details.errors.forEach((err: any) => {
          obj[err.path[0]] = err.message;
        });
        setErrors(translate(obj));
      } else {
        obj[data.name] = data.message;
        setErrors(translate(obj));
      }
    }
  }

  function registration() {
    if (password === checkPassword) {
      setPasswordError(false);
      getregistration();
    } else {
      setPasswordError(true);
    }
  }

  function timerLink() {
    let timeoutId;
    let i = 0;
    while (i <= 10) {
      i++;
      timeoutId = setTimeout(() => {
        setTimer((prev) => prev - 1);

        if (i === 0) {
          window.location.href = "/";
        }
      }, 1000 * i);
    }
  }

  function timerLink2() {
    if (timer === 0) {
      window.location.href = "/";
    } else {
      setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
  }

  return (
    <ColorBlock color={"yellow"}>
      <div className={style.Signup}>
        <div
          className={
            completeSign
              ? `${style.Signup__complete}`
              : `${style.Signup__complete} ${style.invisible}`
          }
        >
          <div className={style.Signup__success}>
            {" "}
            Вы зарегистрированны, проверьте, пожалуйста почту!
          </div>
          <Link className={style.Signup__link} href="/">
            <Button color={'blue'} text={"На главную страницу"} />
          </Link>
          <div className={style.Signup__timer}>
            Вы будете возвращены на главную страницу через {timer}{" "}
          </div>
        </div>
        <div
          className={
            completeSign
              ? `${style.Signup__sign} ${style.invisible}`
              : `${style.Signup__sign}`
          }
        >
          <div className={style.Signup__h}>Регистрация</div>
          <div className={style.Signup__desrc}>
            Есть аккаунт?{" "}
            <Link className={style.Signup__sign} href="/login">
              {" "}
              Пройти регистрацию бесплатно
            </Link>{" "}
          </div>
          <div
            className={`${style.Signup__error_application} ${
              errors.ApplicationError !== undefined ? style.visible_mail : ""
            } `}
          >
            {errors.ApplicationError}
          </div>
          <div className={style.Signup__wrap}>
            <div className={style.Signup__input}>
              <Input
                label={"Введите почту*"}
                placeholder={"почта"}
                setValue={setMail}
              />
              <div
                className={`${style.Signup__error_mail} ${
                  errors.email !== undefined ? style.visible_mail : ""
                } `}
              >
                {errors.email}
              </div>
            </div>
            <div className={style.Signup__input}>
              <Input
                label={"Логин*"}
                placeholder={"логин"}
                setValue={setUsername}
              />
              <div
                className={`${style.Signup__error_login} ${
                  errors.username ? style.visible_login : ""
                }`}
              >
                {errors.username}
              </div>
            </div>
          </div>
          <div className={style.Signup__wrap}>
            <div className={style.Signup__input}>
              <Input
                label={"Пароль*"}
                placeholder={"*****"}
                setValue={setPassword}
              />
            </div>
            <div className={style.Signup__input}>
              <Input
                label={"Подтвердите пароль*"}
                placeholder={"*****"}
                setValue={setCheckPassword}
              />
              <div
                className={`${style.Signup__error_password} ${
                  passwordError ? style.visible_password : ""
                }`}
              >
                {" "}
                пароль не совпадает
              </div>
              <div
                className={`${style.Signup__error_password} ${
                  errors.password !== undefined ? style.visible_password : ""
                } `}
              >
                {errors.password}
              </div>
            </div>
          </div>
          <div className={style.Signup__check}>
            <Checkbox onChange={setAccept} />
            <span className={style.Signup__accept}>
              {" "}
              Принимаю условия и политику конфиденциальности
            </span>
          </div>
          <Link href="" className={style.Signup__link}>
            {" "}
            <button
              disabled={!accept}
              onClick={registration}
              className={style.Signup__btn}
            >
              {" "}
              Регистрация
            </button>
          </Link>
        </div>
      </div>
    </ColorBlock>
  );
}
