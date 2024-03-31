import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "../Components/ParticleBackground";
import ProjectCard from "../Components/ProjectCard";
import Bookrecord from "../Assets/ProjectImages/BookrecordManagement.png";
import Bookmyshow from "../Assets/ProjectImages/Bookmyshow.png";
import portfolio from "../Assets/ProjectImages/Portfolio.png";
import DefaultLayout from "../Layouts/DefaultLayout";

function ProjectPage() {
  return (
    <>
      <Container fluid className="project-section">
        <ParticleBackground />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Bookmyshow}
                title="BookMyShow Clone"
                description="Immerse yourself in the magic of movies with my React.js and Tailwind CSS-powered BookMyShow clone. Seamlessly integrated with Razorpay for secure transactions and the MovieDB API for an extensive collection of films.Experience the ultimate movie booking experience right at your fingertips"
                ghLink="https://github.com/GowthamXeno/book-my-show-clone"
                demoLink="https://book-my-show-clone-two-alpha.vercel.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Bookrecord}
                title="Book Record Management"
                description="Introducing my backend Book Management System with Node.js, Express, and MongoDB. Seamlessly manage book records through CRUD operations via APIs, enabling efficient data handling and storage in MongoDB. Simplify your book management tasks with this robust backend solution."
                ghLink="https://github.com/GowthamXeno/Book-Record-Management-Project"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                title="React Portfolio"
                description="Discover my React-powered Portfolio , a showcase of my skills and expertise. Explore an interactive platform highlighting my proficiency in web development, design, and more. Crafted with precision and creativity, this portfolio demonstrates my versatility and commitment to excellence."
                ghLink="https://github.com/GowthamXeno/My-Portfolio"
                demoLink="https://chatify-49.web.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default DefaultLayout(ProjectPage);
