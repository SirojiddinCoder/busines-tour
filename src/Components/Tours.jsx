import React from 'react'
import './Tours.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../assets/img/antalya.jpg'

export const Tours = () => {
  let silederTour = [
    {
      bg_card_img: img1,
      name: "Canada",
      persons: "buyurtmalar ",
      price: "$700",
      kishi: "/kishi",
      icon1: "😂",
      desc: "tur o'z ichiga oladi",
      icon2: "👌",
      descTitle: "👍",
      icon3: "💕",
      location: "location"
    },
    {
      bg_card_img: img1,
      name: "Canada",
      persons: "buyurtmalar ",
      price: "$700",
      kishi: "/kishi",
      icon1: "😂",
      desc: "tur o'z ichiga oladi",
      icon2: "👌",
      descTitle: "👍",
      icon3: "💕",
      location: "location"
    },
    {
      bg_card_img: img1,
      name: "Canada",
      persons: "buyurtmalar ",
      price: "$700",
      kishi: "/kishi",
      icon1: "😂",
      desc: "tur o'z ichiga oladi",
      icon2: "👌",
      descTitle: "👍",
      icon3: "💕",
      location: "location"
    },
    {
      bg_card_img: img1,
      name: "Canada",
      persons: "buyurtmalar ",
      price: "$700",
      kishi: "/kishi",
      icon1: "😂",
      desc: "tur o'z ichiga oladi",
      icon2: "👌",
      descTitle: "👍",
      icon3: "💕",
      location: "location"
    },
    {
      bg_card_img: img1,
      name: "Canada",
      persons: "buyurtmalar ",
      price: "$700",
      kishi: "/kishi",
      icon1: "😂",
      desc: "tur o'z ichiga oladi",
      icon2: "👌",
      descTitle: "👍",
      icon3: "💕",
      location: "location"
    },
    {
      bg_card_img: img1,
      name: "Canada",
      persons: "buyurtmalar ",
      price: "$700",
      kishi: "/kishi",
      icon1: "😂",
      desc: "tur o'z ichiga oladi",
      icon2: "👌",
      descTitle: "👍",
      icon3: "💕",
      location: "location"
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
        <h1 className='tour-title'>Lorem ipsum dolor sit amet.</h1>
        <p className='tour-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, voluptate sapiente sit soluta mollitia commodi!</p>
        <div className="tour_slider">
          <div className="slider-container">
            <Carousel responsive={responsive}>
                {silederTour.map((item, index)=>{
                  return (
                      <div className='card_bg' key={index}>
                        <img src={item.bg_card_img} alt="" />
                        <div className='card_tour'>
                        
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