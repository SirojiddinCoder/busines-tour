import React, { useState } from 'react';
import './Contacts.css';
import { IoCall } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Map, RouteButton, YMaps } from '@pbe/react-yandex-maps';
import axios from 'axios';

export const Contacts = () => {

  const [loading,setLoading] = useState(false)



const SendMessage = (event)=>{
  setLoading(true)
  event.preventDefault();
  const token ="7045954792:AAFQAI9R6q9CQ5veso12Ijc5dWToIVCMOj4";
  const URL = `https://api.telegram.org/bot${token}/sendMessage`;

  const chat_id = '5011507273';
  const name = document.getElementById('name').value;
  const telRaqam = document.getElementById('telRaqam').value;
  const kishi = document.getElementById('kishi').value;
  const date = document.getElementById('date').value;
  const adress = document.getElementById('adress').value;
  const viza = document.getElementById('viza').value;

  const MessageContent = `ismi : ${name} \n Tel: ${telRaqam} \n Kishi soni: ${kishi} \n Uchish sanasi: ${date} \n  Borish manazili:${adress} \n tolov turi:${viza}`


  axios({
    url:URL,
    method: 'POST',
    data:{
      "chat_id":chat_id,
      "text":MessageContent,
     

    }

  }).then((res)=>{
    document.getElementById('MyForm').reset()
      alert('muvofaqiyatli yuborildi')  
  }).catch((error)=>{
    console.log('Xatolik yuz berdi',error);
  }).finally(()=>{
    setLoading(false)
  }) 

}


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

                  {/* forma============== */}

<form id="MyForm" onSubmit={SendMessage}>
<label for="exampleInputEmail1" class="form-label pt-4  ">Ismingiz</label>
                  <input type="text" placeholder="Sirojiddin" class="form-control rounded-pill" id="name" aria-describedby="emailHelp"/>
                
</form>
                </div>
                <div className="col-12 col-lg-6">
<form  id="MyForm" onSubmit={SendMessage}>
<label for="exampleInputEmail1" class="form-label pt-4 ">Telefon raqamingiz</label>
                  <input type="tel"  placeholder="+998993729998"  class="form-control rounded-pill" id="telRaqam" aria-describedby="emailHelp" />
</form>
                </div>
                <div className="col-12 col-lg-6">
             <form  id="MyForm" onSubmit={SendMessage}>
             <label for="exampleInputEmail1" class="form-label pt-4 ">Necha kishisiz</label>
                <select class="form-select rounded-pill" aria-label="Default select example" id="kishi">
               <option selected>ex.3 or 4 or 5</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
                   </select>
             </form>
                </div>
                <div className="col-12 col-lg-6">
        <form>
        <label for="exampleInputEmail1" class="form-label pt-4 ">Uchish sanasi</label>
    <input type="date" class="form-control rounded-pill" placeholder="dd/mm/yy"  id="date" aria-describedby="emailHelp"/>
        </form>
                </div>
                <div className="col-12 ">
             <form  id="MyForm" onSubmit={SendMessage}>
             <label for="exampleInputEmail1" class="form-label pt-4 ">Manzilingizni tanlang</label>
                <select class="form-select rounded-pill" aria-label="Default select example" id="adress">
               <option selected>Antalya</option>
              <option value="Dubai">Dubai</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Xitoy">Xitoy</option>
              <option value="Kanada">Kanada</option>
              <option value="AQSH">AQSH</option>
              <option value="Polsha">Polsha</option>
                   </select>
             </form>
                </div>
                <div className="col-12 ">
            <form  id="MyForm" onSubmit={SendMessage}>
            <label for="exampleInputEmail1" class="form-label pt-4 ">Visa turini tanlang</label>
                <select class="form-select rounded-pill" aria-label="Default select example" id="viza">
               <option selected>Country</option>
              <option value="Europe">Europe</option>
              <option value="England">England</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
              <option value="Oman">Oman</option>
                   </select>
                    
                <div className="col-12 p-2">
                  <br />
                  
                <div class="d-grid gap-2">
                    <button class="btn btn-info rounded-pill btn-hover text-white " type="submit" loading={loading}>{loading? "Yuborilmoqda..." : "Yuborish"}</button>

                       </div>

                </div>
            </form>
                </div>
              
          </div>
        </div>     
        </div>
        
     

     </div>
    
    </>
  )
}

export default Contacts;
