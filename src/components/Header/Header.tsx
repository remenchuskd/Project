import React from 'react';
import Button from '../Button/Button';
import Search from '../Search/Search';
import style from './Header.module.css'

export default function Header(){
    let [isSearch, setIsSearch] = React.useState('');

    function whatSearch(ev: string) {
      setIsSearch(ev);
      return isSearch;
    }
    return(
            <div className={style.Header}>
                <Search text={'Введите запрос'} onChange={whatSearch} />
                <Button icontype={'cart'} outlined={false} />
                <Button text={'Click'} color={'blue'}/>
            </div>
    )
}