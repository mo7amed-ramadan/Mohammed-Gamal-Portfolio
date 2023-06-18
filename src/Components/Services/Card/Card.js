import "./Card.css";
import "../../../Global.css";
import "animate.css";
function Card(props) {
  return (
    <div className={props.class} id="card" data-aos={props.animation}>
      {props.icon}
      <h3 className="cardTitle">{props.title} </h3>
      <p className="cardDescription text-center">{props.description}</p>
    </div>
  );
}

export default Card;
