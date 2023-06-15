import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function SocialMedia() {
  return (
    <>
      <div className="social-media">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100030990244958&mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        {/* Instagram */}
        <a
          href="https://instagram.com/mohammedgamal677?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        {/* Linked In */}
        <a
          href="https://www.linkedin.com/in/mohammed-gamal-3b3098264"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        {/* Twitter */}
        <a
          href="https://twitter.com/Mohammed70764?t=k7LPJbkga9rpwzhAxdXcgQ&s=09"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        {/* Whatsapp */}
        <a
          href="https://wa.me/+201148713473"
          target="_blank"
          rel="noreferrer"
          className="socialLink"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </a>
      </div>
    </>
  );
}

export default SocialMedia;
