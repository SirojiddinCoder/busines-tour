import React from 'react';
import './Contacts.css';
import { IoCall } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Map, RouteButton, YMaps } from '@pbe/react-yandex-maps';
import { Input } from 'antd';

export const Contacts = () => {
  return (
    <div className='contacts_container'>
      <div className='contacts'>
        <div className="contact-box">
          <p className='contact-text'>O'zingiz yoqtirganingizni tanlang</p>
          <h2 className='contact-text-title'>O'z joyingizni band qiling</h2>
          <p className='btn-text'>    
            <a className='contact__btn' href='#contacts'>Ko'proq bilish</a>
          </p>
        </div>
        
        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon"><IoCall /></div>  
            <div> <p className='phone-text'>Telefon raqam  </p></div>
            <div><a className='tel-number'  href="#contacts">+998 99 299 99 96</a></div>
          </div>
          <div className="contact-card">
            <div className="icon"><FaRegMessage /></div>
            <div> <p className='phone-text'>Bizga email orqali bog'laning </p></div>
            <div><a className='tel-number'  href="#contacts">zamonbiznestour@mail.ru</a></div>
          </div>
          <div className="contact-card">
            <div className="icon"><CiLocationOn /></div>
            <div> <p className='phone-text'>Ofisimizga tashrif buyuring</p></div>
            <div><a className='tel-number'  href="#contacts">15/25, Chilanzar - 9, Tashkent city</a></div>
          </div>
        </div>

        {/* ============================Map============================== */}

        <div className="map-container">
          <div className='map'>
            <YMaps>
              <Map
                defaultState={{
                  center: [41.3112, 69.2797],
                  zoom: 15,
                  controls: [],
                }}
                style={{ height: '480px' }} 
              >
                <RouteButton options={{ float: "right" }} />
              </Map>
            </YMaps>
          </div>

          <h1 className='form-name'>O'z <span className='color-text'>joyingizni</span> band<span className='color-text'>qiling</span></h1>
          <div className='form-1'>
            <div className='name-form'>
              <p>Ismingiz</p>
              <Input placeholder="Eshmat" />;
            </div>  
            <div className='name-form'>
              <p>Telefon raqamingiz</p>
              <Input placeholder="+998993729998" />;
            </div>  

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
