import { useState } from "react";
import Slide from "./Slide";
import { shortList, list, longList } from "./data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Carousel = () => {
  const [currentPerson, setCurrentPerson] = useState(0);
  const [items, setItems] = useState(list);

  const showNext = () => {};
  const showPrev = () => {};

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
