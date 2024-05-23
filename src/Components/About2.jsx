import React from 'react'
import './About.css'
import afr from '../assets/img/afr.jpg';
import pilot1 from '../assets/img/airplane.jpg'
import { useTranslation } from 'react-i18next';



export const About2 = () => {
  const {t} = useTranslation()

  
const AboutData = [
  {
    id:1,
    img1:afr,
    aboutTitle:'Dubai',
    aboutTitleDesc:t("ABOUT2.TEXT4"),
    aboutText:t("ABOUT2.TEXT5"),
  },
  { 
    id:2,
    img1:pilot1,
    aboutTitle:'Antalya',
    aboutTitleDesc:"Turkiya",
    aboutText:t("ABOUT2.TEXT6"),
  }
]

  return (
    <div className='about_container'>
      <div className='about_cards'>
        <h2 className='about-title'>{t("ABOUT2.text1")}</h2>
        <p className='about-description'>
        {t("ABOUT2.text2")}
           </p>
       
       {
        AboutData.map((item,index)=>{
          return(
            <div className="about-card">
            <div className="about_card_left">
              <img src={item.img1} alt="afr img" />
            </div>
            <div className="about_card_right">
              <div className="about_card_left_header">
        <p>
          
        <h2 className='about__item'>{item.aboutTitle}</h2> 
                 <p className='about__desc'>{item.aboutTitleDesc}</p> 
        </p>
                <a className='about__btn' href='#contacts'>{t("ABOUT2.text6")}</a>
              </div>
              <p className='about__item-text'>{item.aboutText}</p>
           
            </div>
          </div>
          )
        })
       }
      </div>
    </div>
  )
}


export default About2;