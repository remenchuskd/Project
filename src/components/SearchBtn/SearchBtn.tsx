import React from 'react';
import style from './SearchBtn.module.css';
import Button from '../Button/Button';
type props={
    onChange: Function;
    placeholder: string;
    textBtn: string;
    smallBtn?: boolean;
    colorBtn: string;
    radiusBtn?:boolean;
}

export default function SearchBtn({ onChange, placeholder, textBtn, smallBtn, radiusBtn, colorBtn}:props){
    let [isSearch, setIsSearch] = React.useState('');

    React.useEffect(() => {
        onChange(isSearch);
      }, [isSearch]);

    return(
        <div className={style.Search}>
            <input
                className={style.Search__input}
                type="text"
                placeholder={placeholder}
                onChange={(e) => setIsSearch(e.target.value)}
            />
            <span className={style.Search__btn}>
                <Button radius={radiusBtn} color={colorBtn} text={textBtn} small={smallBtn}/>
            </span>
        </div>
    );
}