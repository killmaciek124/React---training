import clasess from "./Card.module.css";
const Card = (props) => {
  //props.children czyli wszystko co jest w srodku carda!
  return (
    <div className={`${props.className} ${clasess.card}`}>{props.children}</div>
  );
};

export default Card;
