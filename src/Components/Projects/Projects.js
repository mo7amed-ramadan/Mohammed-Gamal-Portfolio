import ProjectButton from "./ProjectButton/ProjectButton";
import "./Projects.css";
import bookSummaryImg1 from "../../Images/book-summury.png";
import bookSummaryImg2 from "../../Images/book-summury-2.png";
import bookSummaryImg3 from "../../Images/book-summury-3.png";
import copyImg1 from "../../Images/copy-writing-1.png";
import copyImg2 from "../../Images/copy-writing-2.png";
import copyImg3 from "../../Images/copy-writing-3.png";
import articleImg1 from "../../Images/article-1.png";
import articleImg2 from "../../Images/article-2.png";
import articleImg3 from "../../Images/article-3.png";
import postImg1 from "../../Images/Posts-1.png";
import postImg2 from "../../Images/Posts-2.png";
import postImg3 from "../../Images/Posts-3.png";
import courseImg1 from "../../Images/course-summary-1.png";
import courseImg2 from "../../Images/course-summary-2.png";
import courseImg3 from "../../Images/course-summary-3.png";
import ContentGroup from "./ContentGroup/ContentGroup";
function Projects() {
  return (
    <>
      <div className="container">
        <div id="projects">
          <h2 className="projects-title text-center" data-aos="fade">
            Projects
          </h2>
          <div className="projects-holder d-flex flex-row flex-wrap">
            {/* Book Summary */}
            <ContentGroup
              img1={
                <img
                  src={bookSummaryImg1}
                  className="img book-img-1"
                  alt="content portfolio"
                />
              }
              img2={
                <img
                  src={bookSummaryImg2}
                  className="img book-img-2"
                  alt="content portfolio"
                />
              }
              img3={
                <img
                  src={bookSummaryImg3}
                  className="img book-img-3"
                  alt="content portfolio"
                />
              }
              id="content"
              project={
                <ProjectButton
                  name="Book Summary"
                  link="https://drive.google.com/drive/folders/1Ufxouo-30e80wJj3lV2JXgaodWbwkfFb?usp=drive_link"
                />
              }
              animate="fade-up"
              duration="1000"
            />
            {/* Copy Writing */}
            <ContentGroup
              img1={
                <img
                  src={copyImg1}
                  className="img copy-img-1"
                  alt="content portfolio"
                />
              }
              img2={
                <img
                  src={copyImg2}
                  className="img copy-img-2"
                  alt="content portfolio"
                />
              }
              img3={
                <img
                  src={copyImg3}
                  className="img copy-img-3"
                  alt="content portfolio"
                />
              }
              id="content"
              project={
                <ProjectButton
                  name="Copy Writing"
                  link="https://drive.google.com/drive/folders/15maSoYmsprkw488OicNnWvssMNi1wBhk?usp=drive_link"
                />
              }
              animate="fade-up"
              duration="1000"
            />
            {/* Articles */}
            <ContentGroup
              img1={
                <img
                  src={articleImg1}
                  className="img article-img-1"
                  alt="article portfolio"
                />
              }
              img2={
                <img
                  src={articleImg2}
                  className="img article-img-2"
                  alt="article portfolio"
                />
              }
              img3={
                <img
                  src={articleImg3}
                  className="img article-img-3"
                  alt="article portfolio"
                />
              }
              id="content"
              project={
                <ProjectButton
                  name="Articles"
                  link="https://drive.google.com/drive/folders/15soHUgK2vfoyEXBcYt2Yq-6uWPcqzaxD?usp=drive_link"
                />
              }
              animate="fade-up"
              duration="1000"
            />
            {/* Posts */}
            <ContentGroup
              img1={
                <img
                  src={postImg1}
                  className="img post-img-1"
                  alt="post portfolio"
                />
              }
              img2={
                <img
                  src={postImg2}
                  className="img post-img-2"
                  alt="post portfolio"
                />
              }
              img3={
                <img
                  src={postImg3}
                  className="img post-img-3"
                  alt="post portfolio"
                />
              }
              id="content"
              project={
                <ProjectButton
                  name="Content"
                  link="https://drive.google.com/drive/folders/15vdPo9gRvHig8Bs4hi53HEfi7WZBODXl?usp=drive_link"
                />
              }
              animate="fade-up"
              duration="1000"
            />
            {/* Courses Summary */}
            <ContentGroup
              img1={
                <img
                  src={courseImg1}
                  className="img course-img-1"
                  alt="post portfolio"
                />
              }
              img2={
                <img
                  src={courseImg2}
                  className="img course-img-2"
                  alt="post portfolio"
                />
              }
              img3={
                <img
                  src={courseImg3}
                  className="img course-img-3"
                  alt="post portfolio"
                />
              }
              id="content"
              project={
                <ProjectButton
                  name="Course Summary"
                  link="https://drive.google.com/drive/folders/1gKzNGiL6S9DJ-TrdMzRXMNeqWkiusFfC?usp=drive_link"
                />
              }
              animate="fade-up"
              duration="1000"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
