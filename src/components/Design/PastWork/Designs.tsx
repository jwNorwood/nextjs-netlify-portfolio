import React, { useState } from "react";
import Design from "./Design";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const Designs = () => {
  const items = [
    {
      title: "Platinum Landing Page",
      thumbnail: "/images/designs/small/01.png",
      full: "/images/designs/full/01.png",
    },
    {
      title: "Platinum Email Template",
      thumbnail: "/images/designs/small/02.png",
      full: "/images/designs/full/02.png",
    },
    {
      title: "Citibank Landing Page",
      thumbnail: "/images/designs/small/03.png",
      full: "/images/designs/full/03.png",
    },
    {
      title: "Citibank Content Page",
      thumbnail: "/images/designs/small/04.png",
      full: "/images/designs/full/04.png",
    },
    {
      title: "Volly Summit Website",
      thumbnail: "/images/designs/small/05.png",
      full: "/images/designs/full/05.png",
    },
    {
      title: "Marketing Landing Page",
      thumbnail: "/images/designs/small/06.png",
      full: "/images/designs/full/06.png",
    },
    {
      title: "Columbia Daily Tribune Homepage",
      thumbnail: "/images/designs/small/07.png",
      full: "/images/designs/full/07.png",
    },
    {
      title: "Magizine Content Page",
      thumbnail: "/images/designs/small/08.png",
      full: "/images/designs/full/08.png",
    }];

  const fullImages = items.map(item => item.full);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showSlideShow, setShowSlideShow] = useState(false);

  return (
    <>
      {showSlideShow && (
        <Lightbox
          mainSrc={fullImages[selectedItem]}
          nextSrc={fullImages[(selectedItem + 1) % fullImages.length]}
          prevSrc={fullImages[(selectedItem + fullImages.length - 1) % fullImages.length]}
          onCloseRequest={() => setShowSlideShow(false)}
          onMovePrevRequest={() =>
            setSelectedItem((selectedItem + fullImages.length - 1) % fullImages.length)
          }
          onMoveNextRequest={() =>
            setSelectedItem((selectedItem + 1) % fullImages.length)
          }
        />
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