import React from 'react';
import './Location.css'; // CSS faylini import qilamiz

const Slide = ({ id, title, description, image }) => {
  return (
    <>
      <input type="radio" name="slide" id={id} />
      <label htmlFor={id} className="card">
        <div className="row">
          <div className="icon">{id}</div>
          <div className="description">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </>
  );
};

const Location = () => {
  const slides = [
    {
      id: "1",
      title: "Dubai",
      description: "Aholisi:2M",
      image: "./img1.jpeg"
    },
    {
      id: "2",
      title: "Istanbul",
      description: "Aholisi:4.1M",
      image: "./img2.jpeg"
    },
    {
      id: "3",
      title: "Japan",
      description: "Aholisi:1.57M",
      image: "./img3.jpeg"
    },
    {
      id: "4",
      title: "Antalya",
      description: "Aholisi:2M",
      image: "./img4.jpeg"
    },
    {
      id: "5",
      title: "Xitoy",
      description: "Aholisi:1.7M",
      image: "./img4.jpeg"
    }
  ];

  return (

    <div className='location_container'>
       <div className='location_slider'>
        <h2 className='location-title'>
          Eng Yaxshi Manzillar
        </h2>       <p className='location-description'>
          Har bir shahardagi eng yaxshi takliflarimizni kashf eting, faqat siz uchun. O'zingiz <br />
          uchun yangi dunyosni oching va misli ko'rilmagan sarguzashtlar ega bo'ling.
        </p>

        <div className="wrapper">
          <div className="container">
            {slides.map((slide) => (
              <Slide
                key={slide.id}
                id={slide.id}
                title={slide.title}
                description={slide.description}
                image={slide.image}
              />
            ))}
          </div>
        </div>
       </div>

    </div>

  );
};

export default Location;
