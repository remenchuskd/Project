import React from "react";
import style from './Dropdown.module.css';

export default function Dropdown(){

    return(
        <div className={style.Dropdown}>
            {new Array(4).fill('colums').map((column,key)=>{
                return (
                    <div key={key} className={style.Dropdown__column}>
                        <div className={style.Dropdown_name}> Column Name</div>
                        {new Array(6).fill('link').map((link,key)=>{
                            return(
                                <div key={key} className={style.Dropdown__link}>link </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}