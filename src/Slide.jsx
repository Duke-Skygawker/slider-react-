import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa6";

const Slide = ({ person }) => {
  const { image, name, title, quote } = person;
  return (
    <section className="slide">
      <img className="person-img" src={image} alt={name} />
      <h3 className="name">{name}</h3>
      <h5 className="title">{title}</h5>
      <p className="text">{quote}</p>
      <i className="icon">
        <FaQuoteRight />
      </i>
      <button className="btn prev" type="button">
        <i>
          <FaAngleLeft />
        </i>
      </button>
      <button className="btn next" type="button">
        <i>
          <FaAngleRight />
        </i>
      </button>
    </section>
  );
};
export default Slide;
