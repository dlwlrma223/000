import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const img = [
    { name: "Chinese", src: "./img/123.png" },
    { name: "Japan", src: "./img/1234.png" },
    { name: "Korean", src: "./img/12345.png" },
    { name: "America", src: "./img/12344.jpeg" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={styles.App}>
      <Slider {...settings}>
        {img.map((img) => (
          <div key={img.name} className={styles.wrap}>
            <img
              src={process.env.PUBLIC_URL + img.src}
              alt="img.name"
              style={{
                width: "450px",
              }}
              className="imgsetting"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
