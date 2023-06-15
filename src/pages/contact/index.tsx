import React from 'react';
import style from './contact.module.css';
import Layout from '@/components/Layout/Layout';

export default function Contact() {
  return (
    <Layout>
      Контакты
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d999.2931691579029!2d30.3483243!3d59.939006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631098a87b5fd%3A0x809d168d45f72655!2sPizzeria%20da%20Vincenzo!5e0!3m2!1sru!2sru!4v1683541367858!5m2!1sru!2sru"
        width="1920"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaec2f4fc7c2707c8f0f826557eb94d473844810e8c12c2b9df2c34e613afa6e3&amp;source=constructor"
        width="100%"
        height="461"
        frameborder="0"
      ></iframe>
    </Layout>
  );
}
