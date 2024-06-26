import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "../Components/ParticleBackground";
import ProjectCard from "../Components/ProjectCard";
import Bookrecord from "../Assets/ProjectImages/BookrecordManagement.png";
import Bookmyshow from "../Assets/ProjectImages/Bookmyshow.png";
import MernAuthApp from "../Assets/ProjectImages/MERN_AUTH_APP.png"
import portfolio from "../Assets/ProjectImages/Portfolio.png";
import DefaultLayout from "../Layouts/DefaultLayout";
import PreLoader from "../Components/PreLoader";
function ProjectPage() {
  const [Loading, UpdateLoad] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all([
        loadImg(Bookmyshow),
        loadImg(Bookrecord),
        loadImg(portfolio),
        loadImg(MernAuthApp),
      ]);
      UpdateLoad(false);
    };

    loadImages();
  }, []);
  const loadImg = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };
  return (
    <>
      {Loading ? (
        <PreLoader />
      ) : (
        <Container fluid className="project-section">
          <ParticleBackground />
          <Container>
            <h1
              className="project-heading"
              data-aos="fade-down"
              data-aos-duration="400"
            >
              My Recent <strong className="purple">Works </strong>
            </h1>
            <p
              style={{ color: "white" }}
              data-aos="fade-down"
              data-aos-duration="400"
            >
              Here are a few projects I've worked on recently.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col
                md={4}
                className="project-card"
                data-aos="zoom-in"
                data-aos-duration="400"
              >
                <ProjectCard
                  imgPath={MernAuthApp}
                  title="MERN Authentication App"
                  description="The MERN Authentication App offers hassle-free authentication with both traditional email/password login and Google OAuth. It's built on the MERN stack - MongoDB, Express.js, React.js, and Node.js - ensuring strong and reliable security measures."
                  ghLink="https://github.com/GowthamXeno/MERN_Auth_App"
                  demoLink="https://mern-authentication-app-ewyj.onrender.com/"
                />
              </Col>
              <Col
                md={4}
                className="project-card"
                data-aos="zoom-in"
                data-aos-duration="400"
              >
                <ProjectCard
                  imgPath={Bookmyshow}
                  title="BookMyShow Clone"
                  description="Immerse yourself in the magic of movies with my React.js and Tailwind CSS-powered BookMyShow clone. Seamlessly integrated with Razorpay for secure transactions and the MovieDB API for an extensive collection of films.Experience the ultimate movie booking experience right at your fingertips"
                  ghLink="https://github.com/GowthamXeno/book-my-show-clone"
                  demoLink="https://book-my-show-clone-two-alpha.vercel.app/"
                />
              </Col>

              <Col
                md={4}
                className="project-card"
                data-aos="zoom-in"
                data-aos-duration="400"
              >
                <ProjectCard
                  imgPath={portfolio}
                  title="React Portfolio"
                  description="Discover my React-powered Portfolio , a showcase of my skills and expertise. Explore an interactive platform highlighting my proficiency in web development, design, and more. Crafted with precision and creativity, this portfolio demonstrates my versatility and commitment to excellence."
                  ghLink="https://github.com/GowthamXeno/Portfolio-React"
                  demoLink="https://portfoliogowtham.vercel.app/"
                />
              </Col>
              <Col
                md={4}
                className="project-card"
                data-aos="zoom-in"
                data-aos-duration="400"
              >
                <ProjectCard
                  imgPath={Bookrecord}
                  title="Book Record Management"
                  description="Introducing my backend Book Management System with Node.js, Express, and MongoDB. Seamlessly manage book records through CRUD operations via APIs, enabling efficient data handling and storage in MongoDB. Simplify your book management tasks with this robust backend solution."
                  ghLink="https://github.com/GowthamXeno/Book-Record-Management-Project"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
}

export default DefaultLayout(ProjectPage);
