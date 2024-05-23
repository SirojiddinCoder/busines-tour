import React from 'react'
import './About.css'
import afr from '../assets/img/afr.jpg';
import pilot1 from '../assets/img/airplane.jpg'
import { useTranslation } from 'react-i18next';


export const About = () => {
  const {t} = useTranslation()
  
const AboutData = [
  {
    id:1,
    img1:afr,
    aboutTitle:t("ABOUT2.text3"),
    aboutTitleDesc:t("ABOUT2.text4"),
    aboutText:t("ABOUT2.text5"),
  },
  { 
    id:2,
    img1:pilot1,
    aboutTitle:t("ABOUT2.TEXT1"),
    aboutTitleDesc:t("ABOUT2.TEXT2"),
    aboutText:t("ABOUT2.TEXT3"),
  }
]
  

  return (
    <div className='about_container' id='about'>
      <div className='about_cards'>
        <h2 className='about-title'>{t("ABOUT.text1")}</h2>
        <p className='about-description'>
        {t("ABOUT.text2")}
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


export default About;