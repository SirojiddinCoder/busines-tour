import React from 'react'
import './About.css'
import afr from '../assets/img/afr.jpg';
import pilot1 from '../assets/img/airplane.jpg'

const AboutData = [
  {
    id:1,
    img1:afr,
    aboutTitle:' Temir Yo‘l Biletleri Biz Bilan',
    aboutTitleDesc:"Butun dunyo bo'ylab",
    aboutText:"Temir yo'l orqali biz bilan sarguzashtlarni kashf eting! Baland tog'larni, betakror tabiat  manzalarni, qadimiy va navqiron shaharlarni, takrorlanmas landshaflarni biz bilan birga toping. Qiziqarlimi? Biz bilan bog'laning."
  },
  { 
    id:2,
    img1:pilot1,
    aboutTitle:' Aviabiletlar Biz Bilan Arzon',
    aboutTitleDesc:"Jahon bo‘ylab Manzillar",
    aboutText:"Eng arzon, qulay, xavfsiz aviabiletlar biz bilan! Bizga bog'laning, biz sizga eng maqbul bo'ladigan aviabilerni topib beramiz"
  }
]


export const About = () => {

  return (
    <div className='about_container'>
      <div className='about_cards'>
        <h2 className='about-title'>Chiptalarni Biz Bilan Arzon Va <br /> Oson Toping</h2>
        <p className='about-description'>Har bir shaharda eng yaxshi temir yo‘l va aviachipta biletlarini biz <br /> bilan toping</p>
       
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
                <a className='about__btn' href='#contacts'>Ko'proq bilish</a>
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