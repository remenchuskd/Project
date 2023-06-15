import React from 'react';
import style from './login.module.css';
import Layout from '@/components/Layout/Layout';
import Header from '@/components/Header/Header';
import ColorBlock from '@/components/ColorBlock/ColorBlock';
import Container from '@/components/Container/Container';
import Link from 'next/link';
import Checkbox from '@/components/Checkbox/Checkbox';
import Input from '@/components/Input/Input';
import Icon from '@/components/Icon/Icon';

export default function Login() {
  let [login, setLogin] = React.useState('');
  let [password, setPassword] = React.useState('');
  let [remember, setRemember] = React.useState();
  return (
    <>
      <Layout>
        <ColorBlock color={'yellow'}>
          <div className={style.Login}>
            <div className={style.Login__h}>Войти </div>
            <div className={style.Login__desrc}>
              Нет аккаунта?{' '}
              <Link className={style.Login__sign} href="/signup">
                {' '}
                Пройти регистрацию бесплатно
              </Link>{' '}
            </div>
            <div className={style.Login__block}>
              <Input
                label={'Введите логин или почту'}
                placeholder={'логин'}
                setName={setLogin}
              />
            </div>

            <div className={style.Login__block}>
              <Input
                label={'Введите пароль'}
                placeholder={'*****'}
                setName={setPassword}
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
              <button className={style.Login__btn}> Вход</button>
            </Link>
            <div className={style.Login__text}>
                Войти с помощью
            </div>
            <div className={style.Login__wrap} >
                <button className={style.Login__btnFB}> <Icon type={'fb-blue'} /> Войти с помощью  </button>
                <button className={style.Login__btnGoogle}> <Icon type={'google'} /> Войти с помощью  </button>
            </div>
          </div>
        </ColorBlock>
      </Layout>
    </>
  );
}
