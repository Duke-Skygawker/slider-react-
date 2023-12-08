import { FaQuoteRight } from "react-icons/fa6";

const Slide = ({ person, currentPerson, personIndex }) => {
  const { image, name, title, quote } = person;
  return (
    <section
      className="slide"
      style={{
        transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
      }}
    >
      <img className="person-img" src={image} alt={name} />
      <h3 className="name">{name}</h3>
      <h5 className="title">{title}</h5>
      <p className="text">{quote}</p>
      <i className="icon">
        <FaQuoteRight />
      </i>
    </section>
  );
};
export default Slide;
