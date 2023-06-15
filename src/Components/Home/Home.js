import "./Home.css";
import "../../Global.css";
import mohammedGamalPhoto from "../../Images/mohammed-gamal.png";
import LeftSide from "./LeftSide/LeftSide";
import "animate.css";
function Home() {
  return (
    <div className="container">
      <div className="home d-flex flex-row flex-wrap align-items-center justify-content-between ">
        <div className="leftSide mx-auto animate__animated animate__fadeInLeft animate__delay-1s my-4">
          <LeftSide />
        </div>
        <div className="rightSide mx-auto animate__animated animate__fadeInRight animate__delay-0.5s">
          <img
            src={mohammedGamalPhoto}
            alt="profile"
            className="profile my-3"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
