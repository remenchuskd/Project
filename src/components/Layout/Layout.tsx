import React from 'react';
import Header from '../Header/Header';
import ColorBlock from '../ColorBlock/ColorBlock';
import Footer from '../Footer/Footer';


export default function Layout(props:any) {
  return (
    <>
      <Header />
      {props.children}
      <ColorBlock color={'blue'}>
        <Footer/>
      </ColorBlock>
    </>
  );
}
