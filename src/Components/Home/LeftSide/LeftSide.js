import SocialMedia from "../SocialMedia/SocialMedia";
import "./LeftSide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
function LeftSide() {
  return (
    <>
      <div className="container">
        <h1 className="name">
          Hi , I’m <span>Mohammed Gamal </span>
        </h1>
        <p className="description">Content Writer | SEO Specialist</p>
        <SocialMedia />
        <div className="cv mt-5">
          <a
            href="https://drive.google.com/file/d/1XEuW8zleGu6qBey_37LYy2olo6zYqf_S/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="downloadCv"
          >
            Download my CV{" "}
            <FontAwesomeIcon icon={faExternalLink} className="ps-2" />
          </a>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
