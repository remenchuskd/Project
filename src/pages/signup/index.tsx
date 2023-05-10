import React from 'react';
import style from './signup.module.css';
import Layout from '@/components/Layout/Layout';
import Header from '@/components/Header/Header';
import ColorBlock from '@/components/ColorBlock/ColorBlock';
import Container from '@/components/Container/Container';
import Link from 'next/link';
import Checkbox from '@/components/Checkbox/Checkbox';
import Input from '@/components/Input/Input';
import Icon from '@/components/Icon/Icon';

export default function Signup() {
  let [login, setLogin] = React.useState('');
  let [mail, setMail] = React.useState('');
  let [password, setPassword] = React.useState('');
  let [accept, setAccept] = React.useState();
  function checkPassword(ev: string) {
    if (ev === password) {
      console.log('yes');
    }
  }
  return (
    <Layout>
      <ColorBlock color={'yellow'}>
        <div className={style.Signup}>
          <div className={style.Signup__h}>Войти </div>
          <div className={style.Signup__desrc}>
            Есть аккаунт?{' '}
            <Link className={style.Signup__sign} href="/login">
              {' '}
              Пройти регистрацию бесплатно
            </Link>{' '}
          </div>
          <div className={style.Signup__wrap}>
            <div className={style.Signup__input}>
              <Input
                label={'Введите почту*'}
                placeholder={'почта'}
                setName={setMail}
              />
            </div>
            <div className={style.Signup__input}>
              <Input
                label={'Логин*'}
                placeholder={'логин'}
                setName={setLogin}
              />
            </div>
          </div>
          <div className={style.Signup__wrap}>
            <div className={style.Signup__input}>
              <Input
                label={'Пароль*'}
                placeholder={'*****'}
                setName={setPassword}
              />
            </div>
            <div className={style.Signup__input}>
              <Input
                label={'Подтвердите пароль*'}
                placeholder={'*****'}
                setName={checkPassword}
              />
            </div>
          </div>
          <div className={style.Signup__check}>
            <Checkbox onChange={setAccept} />
            <span className={style.Signup__accept}>
              {' '}
              Принимаю условия и политику конфиденциальности
            </span>
          </div>
          <Link href="" className={style.Signup__link}>
              {' '}
              <button className={style.Signup__btn}> Регистрация</button>
            </Link>
        </div>
      </ColorBlock>
    </Layout>
  );
}
