import React from 'react';
import style from './Tabpanel.module.css';
type props = {
  children: any;
};

export default function Tabpanel({ children }: props) {

  return (
    <div className={style.Tabpanel}>
        {children}
    </div>
  );
}
