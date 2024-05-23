import React from 'react';
import { Carousel } from 'antd';
import { CiUser } from "react-icons/ci";
import { MdTerrain } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import img1 from '../assets/img/istanbul.jpg';
import img2 from '../assets/img/antalya2.jpg';
import img3 from '../assets/img/sharm.jpg';
import img4 from '../assets/img/dubai.jpg';
import './Home.css';
import { useTranslation } from 'react-i18next';




const Home = () => {
  const {t} = useTranslation()
  const CarouselItems = [
    {
      id: '1',
      content: t("home.title"),
      title: t("home.desc"),
      img: img1,
      Population: '44.48 M',
      Territory: '275.400 KM2',
     price:'$946.000'
  
    },
    {
      id: '2',
      content: t("home.title"),
      title: t("home.desc1"),
      img: img2,
      Population: '8.66 M',
      Territory: '41.29 KM2',
      price:'$946.000'
    },
    {
      id: '3',
      content: t("home.title"),
      title: t("home.desc2"),
      img: img3,
      Population: '8.66 M',
      Territory: '513.120 KM2',
      price:'$165.450'
    },
    
    {
      id: '4',
      content:t("home.title"),
      title: t("home.desc3"),
      img: img4,
      Population: '8.66 M',
      Territory: '551.500 KM2',
      price:'$425.600 '
    },
  ];
  

  return (
    <div className='carusel_container' id='home'>
      <Carousel autoplay>
        {CarouselItems.map((item) => (
          <div key={item.id} className='Carousel-content'>
            <div className='Carousel-gradient'></div>
            <div className='text-container'>
              <h3 className="home-content">{item.content}</h3>
              <p className='home-title'>{item.title}</p>
              <a href="#contacts" className="home-btn">{t("home.button1")}</a>
              <div className="home-info-card">
                <div className="home-left-icon-block">

                  <div className="home-card-block">
                    <div className="home-icon-user-line">
                      <CiUser />
                    </div>
                    <div>
                      <p className='home-text-item'>{t("home.Aholisi")}</p>
                      <h3 className='home-item-text'>{item.Population}</h3>
                    </div>
                  </div>
                  <div className="home-card-block">
                    <div className="home-icon-user-line">
                      <MdTerrain />
                    </div>
                    <div>
                      <p className='home-text-item'>{t("home.Hududi")}</p>
                      <h3 className='home-item-text'>{item.price}</h3>
                    </div>
                  </div>
                  
                  <div className="home-card-block">
                    <div className="home-icon-user-line">
                      <FaHome />
                    </div>
                    <div>
                      <p className='home-text-item'>{t("home.narxi")}</p>
                      <h3 className='home-item-text'>{item.Territory}</h3>
                    </div>
                  </div>
                  <div className="home-card-block">
                    <a href="#contacts" className="home-info-card-btn">{t("home.button2")}</a>
                  </div>
                </div>
                
              </div>
            </div>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home