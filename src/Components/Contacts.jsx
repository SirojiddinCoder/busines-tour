import React from 'react';
import './Contacts.css';
import { IoCall } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Map, RouteButton, YMaps } from '@pbe/react-yandex-maps';

export const Contacts = () => {
  return (
    <>
     <div className='contacts_container' id='contact'>
      <div className='contacts'>
        <div className="contact-box">
          <p className='contact-text'>   yoqtirganingizni    tanlang</p>
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

      </div>
      
    </div>
     <div className="contacts">
     <div className="map-container ">
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
          <h4 className='registr-form-name'>
        <span className='line'>  O'z </span>

            <span className='form-info line'>joyingizni</span>

         <span className='line'>   band </span>

            <span className='form-info line'>qiling</span>
          </h4>
        <div className='container p-0'>
          <div className='row p-0 m-0'>
                <div className="col-12 col-lg-6">
                  <label for="exampleInputEmail1" class="form-label pt-4  ">Ismingiz</label>
                  <input type="text" placeholder="Sirojiddin" class="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-12 col-lg-6">
                  <label for="exampleInputEmail1" class="form-label pt-4 ">Telefon raqamingiz</label>
                  <input type="tel"  placeholder="+998993729998"  class="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="col-12 col-lg-6">
                <label for="exampleInputEmail1" class="form-label pt-4 ">Necha kishisiz</label>
                <select class="form-select rounded-pill" aria-label="Default select example">
               <option selected>ex.3 or 4 or 5</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
                   </select>
                </div>
                <di v className="col-12 col-lg-6">
                <label for="exampleInputEmail1" class="form-label pt-4 ">Uchish sanasi</label>
    <input type="date" class="form-control rounded-pill" placeholder="dd/mm/yy"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </di>
                <div className="col-12 ">
                <label for="exampleInputEmail1" class="form-label pt-4 ">Manzilingizni tanlang</label>
                <select class="form-select rounded-pill" aria-label="Default select example">
               <option selected>Antalya</option>
              <option value="1">Dubai</option>
              <option value="2">Istanbul</option>
              <option value="3">Xitoy</option>
              <option value="3">Kanada</option>
              <option value="3">AQSH</option>
              <option value="3">Polsha</option>
                   </select>
                </div>
                <div className="col-12 ">
                <label for="exampleInputEmail1" class="form-label pt-4 ">Visa turini tanlang</label>
                <select class="form-select rounded-pill" aria-label="Default select example">
               <option selected>Country</option>
              <option value="1">Europe</option>
              <option value="2">England</option>
              <option value="3">Japan</option>
              <option value="3">China</option>
              <option value="3">USA</option>
              <option value="3">Oman</option>
                   </select>
                </div>
               
                <div className="col-12 p-2">
                  <br />
                  
                <div class="d-grid gap-2">
                    <button class="btn btn-info rounded-pill btn-hover text-white " type="button">Band   Qilish</button>

                       </div>

                </div>
          </div>
        </div>     
        </div>
        
     

     </div>
    
    </>
  )
}

export default Contacts;
