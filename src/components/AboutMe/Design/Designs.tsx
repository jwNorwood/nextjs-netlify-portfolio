import React, { useState } from "react";
import Design from "./Design";
import SlideShow from "../../SlideShow/SlideShow";

const Designs = () => {
  const items = [
    {
      title: "1",
      thumbnail: "/images/designs/small/01.png",
      full: "/images/designs/full/01.png",
    },
    {
      title: "2",
      thumbnail: "/images/designs/small/02.png",
      full: "/images/designs/full/02.png",
    },
    {
      title: "3",
      thumbnail: "/images/designs/small/03.png",
      full: "/images/designs/full/03.png",
    },
    {
      title: "4",
      thumbnail: "/images/designs/small/04.png",
      full: "/images/designs/full/04.png",
    },
    { 
      title: "5",
      thumbnail: "/images/designs/small/05.png",
      full: "/images/designs/full/05.png",
    },
    {
      title: "6",
      thumbnail: "/images/designs/small/06.png",
      full: "/images/designs/full/06.png",
    },
    {
      title: "7",
      thumbnail: "/images/designs/small/07.png",
      full: "/images/designs/full/07.png",
    },
    {
      title: "8",
      thumbnail: "/images/designs/small/08.png",
      full: "/images/designs/full/08.png",
    }];

    const [selectedItem, setSelectedItem] = useState();
    const [showSlideShow, setShowSlideShow] = useState(false);


  return (
    <>
      <h2>Design Work</h2>
      {showSlideShow && (
        <SlideShow items={items} initialSlide={selectedItem} closeSlideShow={() => setShowSlideShow(false)} />
      )}

      <div className="designs">
        {items.map((item, index) => (
          <Design key={index} item={item} index={index} setSelectedItem={setSelectedItem} setShowSlideShow={setShowSlideShow} />
        ))}
      </div>
      <style jsx>{`
        .designs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        h2 {
          font-size: 2.5rem;
          line-height: 0.75;
        }
      `}</style>
    </>
  );
};

export default Designs;