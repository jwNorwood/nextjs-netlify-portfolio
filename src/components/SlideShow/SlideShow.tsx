import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const SlideShow = ({ items, initialSlide = 0, closeSlideShow }) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  return (
    <>
      
      <div className="slide-show">
        <div className="slide-show-close" onClick={closeSlideShow}>
          <span>&times;</span>
        </div>
        <Slide item={items[currentSlide]} />
        <div className="slide-show-nav">
          <button
            className="slide-show-nav-button"
            onClick={() => {
              setCurrentSlide(currentSlide - 1 < 0 ? items.length - 1 : currentSlide - 1);
            }}
          >
            <BiLeftArrow color={"#218380"} />
          </button>
          {items.map((item, index) => (
            <div
              key={index}
              className={`slide-show-nav-item ${index === currentSlide ? "active" : ""
                }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
          <button
            className="slide-show-nav-button"
            onClick={() => {
              setCurrentSlide(currentSlide + 1 > items.length - 1 ? 0 : currentSlide + 1);
            }}
          >
            <BiRightArrow color={"#218380"} />
          </button>
        </div>
      </div>
      <style jsx>{`
      .slide-show {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;

        background-color: #363a3c4d;
        width: 100vw;
        height: 100vh;
        z-index: 99;

      }
      .slide-show-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        flex-direction: row;
      }
      .slide-show-nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        flex-direction: column;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        margin: 0 15px;

        cursor: pointer;
      }
      .slide-show-nav-item.active {
        background-color: #218380;
      }
      .slide-show-nav-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1 1 auto;
        flex-direction: column;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        cursor: pointer;
        border: 5px solid #218380;
      }
      .slide-show-close {
        height: 50px;
        width: 50px;
        background-color: #fff;
        border-radius: 50%;
        
        margin: 15px;
        cursor: pointer;
        position: fixed;
        top: 0;
        left: 0;
        
        border: 5px solid #218380;
      }
      .slide-show-close span {
        font-size: 1.5rem;
        font-weight: bold;
        color: #218380;
        position: relative;
        top: 10px;
        left: 19px;
      }
    `}</style>
    </>
  );
};

export default SlideShow;