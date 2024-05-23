import React from 'react'
import './Viza.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../assets/img/antalya.jpg'
import { PiUsersThreeDuotone } from "react-icons/pi";
import { IoIosPricetags } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { TiInputChecked } from "react-icons/ti";
import { useTranslation } from 'react-i18next';

export const Viza = () => {
  const {t} = useTranslation()
  let silederTour = [
    {
      name: "Xong Kong",
        bg_card_img: img1,
        persons: t("VIZA.TEXTV1"),
        icon1: PiUsersThreeDuotone,
        desc:t("VIZA.TEXTV2"),
        icon2: IoIosPricetags,
        descTitle: t("VIZA.TEXTV3"),
         descTitle2: t("VIZA.TEXTV4"),
        icon3: IoIosTime ,
        location: t("VIZA.TEXTV5"),
        icon4: TiInputChecked,
      },
      {
        name: "Hindiston",



        bg_card_img: img1,
        persons: t("VIZA.TEXTV1"),
        icon1: PiUsersThreeDuotone,
        desc:t("VIZA.TEXTV2"),
        icon2: IoIosPricetags,
        descTitle: t("VIZA.TEXTV3"),
         descTitle2: t("VIZA.TEXTV4"),
        icon3: IoIosTime ,
        location: t("VIZA.TEXTV5"),
        icon4: TiInputChecked,
      },
      {

        name: "Yaponiya",

        bg_card_img: img1,
        persons: t("VIZA.TEXTV1"),
        icon1: PiUsersThreeDuotone,
        desc:t("VIZA.TEXTV2"),
        icon2: IoIosPricetags,
        descTitle: t("VIZA.TEXTV3"),
         descTitle2: t("VIZA.TEXTV4"),
        icon3: IoIosTime ,
        location: t("VIZA.TEXTV5"),
        icon4: TiInputChecked,
      },
      {
        name: "BAA",

        bg_card_img: img1,
        persons: t("VIZA.TEXTV1"),
        icon1: PiUsersThreeDuotone,
        desc:t("VIZA.TEXTV2"),
        icon2: IoIosPricetags,
        descTitle: t("VIZA.TEXTV3"),
         descTitle2: t("VIZA.TEXTV4"),
        icon3: IoIosTime ,
        location: t("VIZA.TEXTV5"),
        icon4: TiInputChecked,
      },
      {

        name: "Xiyot",

        bg_card_img: img1,
        persons: t("VIZA.TEXTV1"),
        icon1: PiUsersThreeDuotone,
        desc:t("VIZA.TEXTV2"),
        icon2: IoIosPricetags,
        descTitle: t("VIZA.TEXTV3"),
         descTitle2: t("VIZA.TEXTV4"),
        icon3: IoIosTime ,
        location: t("VIZA.TEXTV5"),
        icon4: TiInputChecked,
      },
      {
        name: "Omon",

        bg_card_img: img1,
        persons: t("VIZA.TEXTV1"),
        icon1: PiUsersThreeDuotone,
        desc:t("VIZA.TEXTV2"),
        icon2: IoIosPricetags,
        descTitle: t("VIZA.TEXTV3"),
         descTitle2: t("VIZA.TEXTV4"),
        icon3: IoIosTime ,
        location: t("VIZA.TEXTV5"),
        icon4: TiInputChecked,
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
    <div className='tour_container'>
   <h1 className='tour-title-viza'>{t("VIZA.text1")}</h1>
        <p className='tour-text'>
        {t("VIZA.text2")}
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
                
                            </div>
                            <div className='card-tour-left'></div>
                          </div>
                          <hr className='line' />
                          <div className='card-tour-body'>
                            <h4 className='tour-body-card-title'>{item.desc}</h4>
                            <ul>
                              <li><span><IoIosPricetags /></span>{item.descTitle}</li>
                              <li><span><IoIosTime /></span>{item.descTitle2}</li>
                              <li><span><TiInputChecked /></span>{item.location}</li>
                            </ul>
                          </div>
                          <div className='card-tour-footer'>
                            <a className='tour-card-footer-btn' href="#contacts">{t("VIZA.text3")}</a>
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

export default Viza;