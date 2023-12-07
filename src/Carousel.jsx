import { useState } from "react";
import { shortList, longList } from "./data";
import Slide from "./Slide";

const Carousel = () => {
  const [items, setItems] = useState(shortList);
  return (
    <div className="slider-container">
      {items.map((item) => {
        return <Slide person={item} key={item.id} />;
      })}
    </div>
  );
};
export default Carousel;
