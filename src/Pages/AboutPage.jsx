// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "../Components/ParticleBackground";
import AboutCard from "../Components/AboutCard";
import LaptopImg from "../Assets/about.png";
import Techstack from "../Components/Techstack";
import Github from "../Components/Github";
import Toolstack from "../Components/Toolstack";
import React, { useEffect, useState } from "react";
import PreLoader from "../Components/PreLoader";

import DefaultLayout from "../Layouts/DefaultLayout";
function AboutPage() {
  const [Loading, UpdateLoad] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = LaptopImg;
    img.onload = () => {
      UpdateLoad(false);
    };
  }, []);
  return (
    <>
      {Loading ? (
        <PreLoader />
      ) : (
        <Container fluid className="about-section">
          <ParticleBackground />
          <Container>
            <Row
              style={{
                justifyContent: "center",
                padding: "10px",
                paddingBottom: "10px",
              }}
            >
              <Col
                md={5}
                style={{ paddingTop: "70px", paddingBottom: "100px" }}
                className="about-img"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                <h1
                  className="About-Head-Small"
                  style={{ fontSize: "2.1em", paddingBottom: "30px" }}
                >
                  Know Who <strong className="purple">I'M</strong>
                </h1>
                <img src={LaptopImg} alt="about" className="img-fluid" />
              </Col>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
                data-aos="fade-left"
                data-aos-duration="400"
              >
                <h1
                  className="About-Head-Big"
                  style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                >
                  Know Who <strong className="purple">I'M</strong>
                </h1>
                <AboutCard />
              </Col>
            </Row>
            <h1
              className="project-heading"
              data-aos="zoom-out"
              data-aos-duration="500"
            >
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <Techstack />
            <h1
              className="project-heading"
              data-aos="zoom-out"
              data-aos-duration="500"
            >
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />

            <Github />
          </Container>
        </Container>
      )}
    </>
  );
}

export default DefaultLayout(AboutPage);
