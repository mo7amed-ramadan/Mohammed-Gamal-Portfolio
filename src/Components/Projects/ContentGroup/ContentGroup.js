import "./ContentGroup.css";
function ContentGroup(props) {
  return (
    <div
      id={props.id}
      data-aos={props.animate}
      data-aos-duration={props.duration}
    >
      {props.img1}
      {props.img2}
      {props.img3}
      {props.project}
    </div>
  );
}

export default ContentGroup;
