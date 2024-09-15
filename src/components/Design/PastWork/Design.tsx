import React from "react";

const Design = ({
  item,
  index,
  setSelectedItem,
  setShowSlideShow,
}) => {
  return (
    <>
      <div className="item">
        <img
          src={item.thumbnail}
          onClick={() => {
            setSelectedItem(index);
            setShowSlideShow(true);
          }}
          alt={item.title}
          className="thumbnail"
          loading="lazy"
        />
      </div>
      <style jsx>{`
        .item {
          margin: 10px;
          border: 1px solid #eaeaea;
          margin-bottom: 2rem;
          cursor: pointer;

          width: 200px;
          height: 200px;
          box-shadow: 0px 0px 10px
            rgba(0, 5, 5, 0.2);
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
};

export default Design;
