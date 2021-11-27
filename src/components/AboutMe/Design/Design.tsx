import React from "react";
import Image from "next/image";

const Design = ({ item, index, setSelectedItem, setShowSlideShow }) => {
  return (
    <>
    <div className="item">
      <img 
        src={item.thumbnail} 
        alt={item.title} 
        className="thumbnail" 
        onClick={
          () => {
            setSelectedItem(index);
            setShowSlideShow(true);
          }
        }
        />
    </div>
      <style jsx>{`
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 10px;
          border: 1px solid #eaeaea;
          margin-bottom: 2rem;
          border-radius: 5px;
          cursor: pointer;
          
          width: 200px;
          height: 200px;
        }
        .thumbnail {  
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (min-width: 1024px) {
          .item {
            width: 300px;
            height: 300px;
          }
        }
        @media (min-width: 1224px) {
          .item {
            width: 400px;
            height: 400px;
          }
        }
      `}</style>
    </>
  );
}

export default Design;