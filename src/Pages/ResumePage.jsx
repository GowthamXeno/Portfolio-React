import ParticleBackground from "../Components/ParticleBackground";
import { TbFileDownload } from "react-icons/tb";
import resume from "../Assets/Resume/Gowtham_Resume.pdf";
import resumeImg from "../Assets/Resume/Gowtham_Resume_page-0001.jpg";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DefaultLayout from "../Layouts/DefaultLayout";
function ResumeNew() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = resumeImg;
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error("Failed to load resume image");
      setImageLoaded(false);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <ParticleBackground />

        <Row>
          <h1
            className="resume-head"
            data-aos="fade-down"
            data-aos-duration="400"
          >
            My <span className="purple">Résumé</span>
          </h1>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-down"
          data-aos-duration="400"
        >
          <Button
            variant="primary"
            href={resume}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <TbFileDownload />
            &nbsp;Download Résumé
          </Button>
        </Row>

        {imageLoaded ? (
          <Row className="resume">
            <img src={resumeImg} alt="Resume" />
          </Row>
        ) : (
          <Row className="resume-load">
            <p>Loading Résumé...</p>
          </Row>
        )}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resume}
            target="_blank"
            style={{ maxWidth: "250px" }}
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <TbFileDownload />
            &nbsp;Download Résumé
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default DefaultLayout(ResumeNew);
