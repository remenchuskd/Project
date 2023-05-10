import React from 'react';
import style from './Partners.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Partners(){

    return(
        <div className={style.Partners}>
            <div className={style.Partners__Partner}>
            {' '}
            <Link href="https://www.amazon.com/">
                {' '}
                <Image src="/amazon.png" alt="" width='84' height='25'/>{' '}
            </Link>{' '}
            </div>
            <div className={style.Partners__Partner}>
            <Image src="/cisco.png" alt="" width='73' height='41'/>{' '}
            </div>
            <div className={style.Partners__Partner}> <Image src="/logitech.png" alt="" width='82' height='25'/>{' '}</div>
            <div className={style.Partners__Partner}> <Image src="/spotify.png" alt="" width='98' height='30'/>{' '}</div>
      </div>
    );
}