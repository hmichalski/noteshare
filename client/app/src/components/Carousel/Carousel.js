import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//mozna dodac zeby kazdy img tez anchorem byl
const Carousel = () => {
    const images = [
        "icons/html.png",
        "icons/css.png",
        "icons/js.png",
        "icons/nodejs.png",
        "icons/express.png",
        "icons/react.png",
        "icons/mongodb.png",
    ];

    const settings = {
        dots: false, // no nav dots
        infinite: true, // infinite loop
        autoplay: true, 
        draggable: false,
        swipe: false,
        speed: 6000, // sliding speed
        autoplaySpeed: 0, // delay between slides
        slidesToShow: images.length, // num of images visible at the time
        cssEase: "linear", // linear motion
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style= {{
                            height: "64px",
                            width: "auto",
                        }}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;