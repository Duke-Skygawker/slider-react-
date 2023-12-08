import { useState, useEffect } from "react";
import { shortList, list, longList } from "./data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slide from "./Slide";

const Carousel = () => {
  const [currentPerson, setCurrentPerson] = useState(0);
  const [items, setItems] = useState(longList);

  const showNext = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % items.length;
      return result;
    });
  };
  const showPrev = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + items.length) % items.length;
      return result;
    });
  };
  useEffect(() => {
    let sliderId = setInterval(() => {
      showNext();
    }, 3000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);
  return (
    <div className="slider-container">
      {items.map((item, personIndex) => {
        return (
          <Slide
            person={item}
            key={item.id}
            showNext={showNext}
            showPrev={showPrev}
            setCurrentPerson={setCurrentPerson}
            currentPerson={currentPerson}
            personIndex={personIndex}
          />
        );
      })}
      <button className="btn prev" type="button" onClick={showPrev}>
        <i>
          <FaAngleLeft />
        </i>
      </button>
      <button className="btn next" type="button" onClick={showNext}>
        <i>
          <FaAngleRight />
        </i>
      </button>
    </div>
  );
};
export default Carousel;
