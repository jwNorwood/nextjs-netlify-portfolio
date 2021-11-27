import React from "react";

const Slide = ({ item }) => {
  return (
    <>
    <div className="slide">
      <img src={item.full} alt={item.title} />
    </div>
    <style jsx>{`
      .slide img {
        width: auto;
        height: 80vh;
        
        padding: 2rem;
      }
    `}</style>
    </>
  );
}

export default Slide;