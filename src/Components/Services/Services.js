import Card from "./Card/Card";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faAd, faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

function Services() {
  return (
    <>
      <div className="container">
        <div id="services">
          <h2
            data-aos="fade"
            className="services-title text-center "
            id="servicesTitle"
          >
            Services
          </h2>
          <div className="cards d-flex flex-row flex-wrap align-items-center justify-content-around">
            <Card
              icon={
                <FontAwesomeIcon
                  icon={faSearchengin}
                  className="cardIcon ms-auto me-auto "
                />
              }
              title="SEO Services"
              description="Writing articles with SEO rules that make your site top the first search engines"
              id="card1"
              class="Card d-flex flex-column align-items-center "
              animation="fade-up"
            />
            <Card
              icon={
                <FontAwesomeIcon
                  icon={faAd}
                  className="cardIcon ms-auto me-auto"
                />
              }
              title="Copy Writing"
              description="Writing advertising text that helps you achieve maximum results for the advertising campaign"
              id="card2"
              class="Card d-flex flex-column align-items-center "
              animation="fade-up"
            />
            <Card
              icon={
                <FontAwesomeIcon
                  icon={faFeatherAlt}
                  className="cardIcon ms-auto me-auto"
                />
              }
              title="Content Writing"
              description="Writing content for websites and social media pages helps you achieve the highest reach and number of visits"
              id="card3"
              class="Card d-flex flex-column align-items-center "
              animation="fade-up"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
