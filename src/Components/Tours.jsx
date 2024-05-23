import React from 'react'
import './Tours.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../assets/img/antalya.jpg'
import { PiUsersThreeDuotone } from "react-icons/pi";
import { FaCar } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

export const Tours = () => {
  const {t} = useTranslation()

  let silederTour = [
    {
      bg_card_img: img1,
      name: "Dubai",
      persons: t("Tours.title"),
      price: "$810",
      kishi: t("Tours.kishi"),
      icon1: PiUsersThreeDuotone,
      desc: t("Tours.desc11"),
      icon2: FaCar,
      descTitle:t("Tours.descTitle"),
       descTitle2:t("Tours.descTitle2"),
      icon3: IoAirplane ,
      location: t("Tours.location"),
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "Dubai",
      persons: t("Tours.title"),
      price: "$810",
      kishi: t("Tours.kishi"),
      icon1: PiUsersThreeDuotone,
    desc: t("Tours.desc11"),
      icon2: FaCar,
      descTitle:t("Tours.descTitle"),
       descTitle2:t("Tours.descTitle2"),
      icon3: IoAirplane ,
      location: t("Tours.location"),
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "Dubai",
      persons: t("Tours.title"),
      price: "$810",
      kishi: t("Tours.kishi"),
      icon1: PiUsersThreeDuotone,
    desc: t("Tours.desc11"),
      icon2: FaCar,
      descTitle:t("Tours.descTitle"),
       descTitle2:t("Tours.descTitle2"),
      icon3: IoAirplane ,
      location: t("Tours.location"),
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "Dubai",
      persons: t("Tours.title"),
      price: "$810",
      kishi: t("Tours.kishi"),
      icon1: PiUsersThreeDuotone,
    desc: t("Tours.desc11"),
      icon2: FaCar,
      descTitle:t("Tours.descTitle"),
       descTitle2:t("Tours.descTitle2"),
      icon3: IoAirplane ,
      location: t("Tours.location"),
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "Dubai",
      persons: t("Tours.title"),
      price: "$810",
      kishi: t("Tours.kishi"),
      icon1: PiUsersThreeDuotone,
    desc: t("Tours.desc11"),
      icon2: FaCar,
      descTitle:t("Tours.descTitle"),
       descTitle2:t("Tours.descTitle2"),
      icon3: IoAirplane ,
      location: t("Tours.location"),
      icon4: IoLocation,
    },
    {
      bg_card_img: img1,
      name: "Dubai",
      persons: t("Tours.title"),
      price: "$810",
      kishi: t("Tours.kishi"),
      icon1: PiUsersThreeDuotone,
    desc: t("Tours.desc11"),
      icon2: FaCar,
      descTitle:t("Tours.descTitle"),
       descTitle2:t("Tours.descTitle2"),
      icon3: IoAirplane ,
      location: t("Tours.location"),
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
      breakpoint: { max: 1330, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };
  return (
    <div className='tour_container' id='tours'>
   <h1 className='tour-title'>{t("Tours.title")}</h1>
        <p className='tour-text'>
        {t("Tours.desc")}
        </p>
        <div className="tour_slider">
          <div className="slider-container">
            <Carousel responsive={responsive}>
                {silederTour.map((item, index)=>{
                  return (
                      <div className='card_bg1' key={index}>
                        <img src={item.bg_card_img} alt="" />
                        <div className='card_tour'>
                          <div className='card-tour-header'>
                            <div className='card-tour-right'>
                              <p className='tour-card-title'>{item.name}</p>
                              <p className='tour-card-desc'> <span>{item.icon1}</span> {item.persons}</p>
                            </div>
                            <div className='card-tour-right'>
                              <p className='tour-card-price'>{item.price}</p>
                              <p className='tour-card-person'>/{item.kishi}</p>
                            </div>
                            <div className='card-tour-left'></div>
                          </div>
                          <hr className='line' />
                          <div className='card-tour-body'>
                            <h4 className='tour-body-card-title'>{item.desc}</h4>
                            <ul className='ps-0'>
                              <li><span><FaCar className='me-1' /></span>{item.descTitle}</li>
                              <li><span><IoAirplane className='me-1' /></span>{item.descTitle2}</li>
                              <li><span><IoLocation className='me-1' /></span>{item.location}</li>
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