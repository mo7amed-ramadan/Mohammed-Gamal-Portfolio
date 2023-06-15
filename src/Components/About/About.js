import "./About.css";
import "animate.css";

function About() {
  return (
    <>
      <div className="container">
        <div data-aos="fade" data-aos-duration="1000" id="about">
          <h2 className="about-title text-center mb-5 " id="aboutTitle">
            About me
          </h2>
          <p
            className="about-description text-center ms-auto me-auto pb-5 "
            id="aboutDescription"
          >
            Hello, I am <span> Mohammed Gamal </span>. I have knowledge in
            writing all kinds of social media content such as publications or
            advertisement content. I also have experience in writing web
            articles taking into account spelling and seo rules. Here is a
            gallery of my work, I hope you will have a look at all the models
            presented and I hope you like it.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
