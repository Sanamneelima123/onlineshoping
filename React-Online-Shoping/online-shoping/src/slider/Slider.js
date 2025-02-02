import React, { useState } from "react";
import "./Slider.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { sliderItems } from "../data";

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);

   const handleClick = (direction) => {
     if (direction === "left") {
        // Move left (decrease index) but stay within bounds (0 to length of sliderItems - 1)
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
     } else {
        // Move right (increase index) but stay within bounds (0 to length of sliderItems - 1)
        setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
     }
   };

    return (
        <div className="slider-container">
            {/* Left Arrow */}
            <div className="arrow left" direction="left" onClick={() => handleClick("left")}>
                <IoMdArrowDropleft className="icon" />
            </div>

            {/* Slider Wrapper */}
            <div className="slider-wrapper" style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>
                {sliderItems.map((item) => (
                    <div className="slide" key={item.id} style={{ backgroundColor: `#${item.bg}` }}>
                        <div className="img-container">
                            <img src={item.img} alt={item.title} className="img" />
                        </div>

                        <div className="info-container">
                            <h1 className="title">{item.title}</h1>
                            <p className="desc">{item.desc}</p>
                            <button className="button">Shop Now</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <div className="arrow right" direction="right" onClick={() => handleClick("right")}>
                <IoMdArrowDropright className="icon" />
            </div>
        </div>
    );
};

export default Slider;
