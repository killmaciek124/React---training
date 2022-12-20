import "./Card.css";

function Card(props) {
  // LOGIKA CARDA ZAPOBIEGA DUPLIKACJI KODU !
  const classes = "card " + props.className; // czyli wszystko przejdzie???
  // customowy znacznik jak div (z basic CSS)
  return <div className={classes}>{props.children}</div>; // te children daje nam to..
  // .. ze ten card moze nam posluzyc jako wrapper (czyli wszystko w srodku przejmie CSS)
}

export default Card;
