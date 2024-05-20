import React from 'react'
import './About.css'
import afr from '../assets/img/afr.jpg';
import pilot1 from '../assets/img/airplane.jpg'

const AboutData = [
  {
    id:1,
    img1:afr,
    aboutTitle:'Dubai',
    aboutTitleDesc:"Birlashgan Arab Amirliklari",
    aboutText:"Dubay - Birlashgan Arab Amirliklaridagi shahar va amirlik, hashamatli xaridlar, ultramodern arxitektura va jonli tungi hayot sahnasi bilan mashhur. Balandligi 830 m bo'lgan Burj Xalifa minorasi osmono'par binolar bilan to'ldirilgan osmon chizig'ida hukmronlik qiladi. Uning etagida musiqaga xoreografiya qilingan samolyotlar va chiroqlar bilan jihozlangan Dubay favvorasi joylashgan. Sun'iy orollarda Atlantis, Palm, suv va dengiz hayvonlari bog'lari joylashgan kurort joylashgan."
  },
  { 
    id:2,
    img1:pilot1,
    aboutTitle:'Antalya',
    aboutTitleDesc:"Turkiya",
    aboutText:"Antaliya Turkiyaning eng tez rivojlanayotgan shahri bo'lib, butun dunyodan kelgan sayyohlar uning ajoyib plyajlari va an'anaviy turk madaniyatining ajoyib aralashmasini kashf qilmoqdalar. Bolalarga Aqua Land (suvli slaydni yaxshi ko'radiganlar orzusi) va Dolphin Land (delfinlar, dengiz sherlari va oq kitlarning uyi) o'rin olgan Beach Park yoqadi. Eski shahar markazini o'rganing va Hadrian darvozasini ko'ring."
  }
]


export const About2 = () => {

  return (
    <div className='about_container'>
      <div className='about_cards'>
        <h2 className='about-title'>Shaharlardan Biriga Hoziroq <br /> Tashrif Buyuring</h2>
        <p className='about-description'>
        Har bir shahardagi eng yaxshi takliflarimizni kashf eting, faqat siz <br /> uchun. O'zingiz uchun yangi dunyosni oching va misli ko'rilmagan <br />
         sarguzashtlar ega bo'ling.
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


export default About2;