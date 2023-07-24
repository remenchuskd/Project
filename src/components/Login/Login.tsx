import style from './Login.module.css';
import React from 'react';
import Link from 'next/link';
import Checkbox from '@/components/Checkbox/Checkbox';
import Input from '@/components/Input/Input';
import Icon from '@/components/Icon/Icon';
import useCookie from '../Hook/useCookie';

export default function Login(){
    let [login, setLogin] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [remember, setRemember] = React.useState();
    let [completeLogin,setCompleteLogin]=React.useState(false);
    let[error,setError]=React.useState(false);

    async function getLogin() {
        try{
          let response= await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({
              username: `${login}`,
              password: `${password}`,
            }),
          });
          let data = await response.json();
          if (data.error?.status === 400) {
            console.log(data);
            throw Error(JSON.stringify(data.error));
          } else {
            setCompleteLogin(true);
            console.log(11111,data)
            let name = data.user.username;
            let token = data.jwt;
            let id=data.user.id
            useCookie("login", name);
            useCookie("token", token);
            useCookie('id',id)
            window.location.href = "/";
          }
        }catch{
          setError(true)
        }
    }


    return (
        <div className={style.Login}>
            <div className={style.Login__h}>Войти </div>
            <div className={style.Login__desrc}>
              Нет аккаунта?{' '}
              <Link className={style.Login__sign} href="/signup">
                {' '}
                Пройти регистрацию бесплатно
              </Link>{' '}
            </div>
            <div className={style.Login__info}>
              <div className={`${style.Login__error} ${
                  error ? style.visible : ""
                }`}>
                  Неправильно введен логин или пароль
              </div>
              <Input
                label={'Введите логин или почту'}
                placeholder={'логин'}
                setValue={setLogin}
              />
            </div>

            <div className={style.Login__info}>
              <Input
                label={'Введите пароль'}
                placeholder={'*****'}
                setValue={setPassword}
              />
            </div>
            <div className={style.Login__block}>
              <div className={style.Login__check}>
                <Checkbox onChange={setRemember} />
                <span className={style.Login__remember}> Запомнить меня</span>
              </div>
              <Link className={style.Login__password} href="">
                Забыли свой пароль?
              </Link>
            </div>
            <Link href="" className={style.Login__link}>
              {' '}
              <button onClick={getLogin} className={style.Login__btn}> Вход</button>
            </Link>
            <div className={style.Login__text}>
                Войти с помощью
            </div>
            <div className={style.Login__wrap} >
                <button className={style.Login__btnFB}> <Icon type={'fb-blue'} /> Войти с помощью  </button>
                <button className={style.Login__btnGoogle}> <Icon type={'google'} /> Войти с помощью  </button>
            </div>
          </div>
    )
}