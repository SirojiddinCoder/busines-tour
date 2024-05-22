import React from 'react'
import './Tours.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../assets/img/antalya.jpg'
import { PiUsersThreeDuotone } from "react-icons/pi";
import { FaCar } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

export const Tours = () => {
  let silederTour = [
    {
      bg_card_img: img1,
      name: "Dubai",
      persons: "415 buyurtmalar ",
      price: "$810",
      kishi: "/kishi",
      icon1: PiUsersThreeDuotone,
      desc: "tur o'z ichiga oladi",
      icon2: FaCar,
      descTitle: " 5 kunlik sayohat > Mehmonxona",
       descTitle2: "Aviabilet",
      icon3: IoAirplane ,
      location: " Eng yaxshi manzillar",
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "Kanada",
      persons: "410 buyurtmalar ",
      price: "$710",
      kishi: "/kishi",
      icon1: PiUsersThreeDuotone,
      desc: "tur o'z ichiga oladi",
      icon2: FaCar,
      descTitle: " 8 kunlik sayohat > Mehmonxona",
       descTitle2: "Aviabilet",
      icon3: IoAirplane ,
      location: " Eng yaxshi manzillar",
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "Istanbul",
      persons: "618 buyurtmalar ",
      price: "$840",
      kishi: "/kishi",
      icon1: PiUsersThreeDuotone,
      desc: "tur o'z ichiga oladi",
      icon2: FaCar,
      descTitle: " 6 kunlik sayohat > Mehmonxona",
       descTitle2: "Aviabilet",
      icon3: IoAirplane ,
      location: " Eng yaxshi manzillar",
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "AQSH",
      persons: "355 buyurtmalar ",
      price: "$910",
      kishi: "/kishi",
      icon1: PiUsersThreeDuotone,
      desc: "tur o'z ichiga oladi",
      icon2: FaCar,
      descTitle: " 4 kunlik sayohat > Mehmonxona",
       descTitle2: "Aviabilet",
      icon3: IoAirplane ,
      location: " Eng yaxshi manzillar",
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "Yevropa",
      persons: "417 buyurtmalar ",
      price: "$877",
      kishi: "/kishi",
      icon1: PiUsersThreeDuotone,
      desc: "tur o'z ichiga oladi",
      icon2: FaCar,
      descTitle: " 5 kunlik sayohat > Mehmonxona",
       descTitle2: "Aviabilet",
     
      icon3: IoAirplane ,
      location: " Eng yaxshi manzillar",
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "DubSharm El-Sheikhai",
      persons: "415 buyurtmalar ",
      price: "$805",
      kishi: "/kishi",
      icon1: PiUsersThreeDuotone,
      desc: "tur o'z ichiga oladi",
      icon2: FaCar,
      descTitle: " 4 kunlik sayohat > Mehmonxona",
      descTitle2: "Aviabilet",
      icon3: IoAirplane ,
      location: " Eng yaxshi manzillar",
      icon4: IoLocation,
    },
  ]
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1330 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1330, min: 920 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 920, min: 0 },
      items: 1
    }
  };
  return (
    <div className='tour_container' id='tours'>
   <h1 className='tour-title'>Eng Yaxshi Haftalik Takliflarimiz</h1>
        <p className='tour-text'>
        Har bir shaharda faqat siz uchun tuzilgan eng yaxshi haftalik takliflarni kashf eting. <br />
         O'zingizni sarguzashtlar dunyosida his qiling.
        </p>
        <div className="tour_slider">
          <div className="slider-container">
            <Carousel responsive={responsive}>
                {silederTour.map((item, index)=>{
                  return (
                      <div className='card_bg' key={index}>
                        <img src={item.bg_card_img} alt="" />
                        <div className='card_tour'>
                          <div className='card-tour-header'>
                            <div className='card-tour-right'>
                              <p className='tour-card-title'>{item.name}</p>
                              <p className='tour-card-desc'> <span>{item.icon1}</span> {item.persons}</p>
                            </div>
                            <div className='card-tour-right'>
                              <p className='tour-card-price'>{item.price}</p>
                              <p className='tour-card-person'>/Kishi</p>
                            </div>
                            <div className='card-tour-left'></div>
                          </div>
                          <hr className='line' />
                          <div className='card-tour-body'>
                            <h4 className='tour-body-card-title'>{item.desc}</h4>
                            <ul>
                              <li><span><FaCar /></span>{item.descTitle}</li>
                              <li><span><IoAirplane /></span>{item.descTitle2}</li>
                              <li><span><IoLocation /></span>{item.location}</li>
                            </ul>
                          </div>
                          <div className='card-tour-footer'>
                            <a className='tour-card-footer-btn' href="#contacts">Joy band qilish</a>
                          </div>
                        
                        </div>
                      </div>
                  )
                })}
              </Carousel>
          </div>
        </div>
    </div>




    
  )
}

export default Tours;