import ParticleBackground from "../Components/ParticleBackground";
import { Col, Container, Row } from "react-bootstrap";
import HomePic from "../Assets/home-main.png";
import Tilt from "react-parallax-tilt";
import Gow from "../Assets/Photoroom-20240329_231824.png";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import TypewriteComp from "../Components/TypeWriteComp";
import DefaultLayout from "../Layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import PreLoader from "../Components/PreLoader";

const HomePage = () => {
  const [Loading, UpdateLoad] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = HomePic;
    img.onload = () => {
      UpdateLoad(false);
    };
  }, []);
  return (
    <>
      {Loading ? (
        <PreLoader />
      ) : (
        <section>
          <Container fluid className="home-section" id="home">
            <ParticleBackground />
            <Container className="home-content">
              <Row>
                <Col md={7} className="home-header">
                  <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>
                  <h1 className="heading-name">
                    I'M <strong className="main-name">GOWTHAM M</strong>
                  </h1>
                  <div
                    style={{ padding: 50, textAlign: "left" }}
                    className="d-flex Typewriter__wrapper "
                  >
                    &lt;&nbsp; <TypewriteComp />
                    &nbsp;&gt;
                  </div>
                </Col>
                <Col
                  md={5}
                  style={{ paddingBottom: 20 }}
                  className="home-img-comp"
                >
                  <img
                    src={HomePic}
                    alt="Home Pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  ></img>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container fluid className="home-about-section" id="about">
            <Container>
              <Row>
                <Col md={8} className="home-about-description">
                  <h1 style={{ fontSize: "2.6em" }} className="home-introduce">
                    LET ME <span className="purple"> INTRODUCE </span> MYSELF
                  </h1>
                  <p className="home-about-body">
                    I fell in love with programming and I have at least learnt
                    something, I think… 🤷‍♂️
                    <br />
                    <br />I am fluent in classics like
                    <i>
                      <b className="purple"> Java , Javascript</b>
                    </i>
                    <br />
                    <br />
                    My field of Interest's are building new &nbsp;
                    <i>
                      <b className="purple">Web Technologies and Products </b>
                    </i>
                    <br />
                    <br />
                    Whenever possible, I also apply my passion for developing
                    products with <b className="purple">Node.js</b> and
                    <i>
                      <b className="purple">
                        {" "}
                        Modern Javascript Library and Frameworks
                      </b>
                    </i>
                    &nbsp; like
                    <i>
                      <b className="purple"> React.js</b>
                    </i>
                  </p>
                </Col>
                <Col md={4} className="myAvtar">
                  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <img src={Gow} className="img-fluid" alt="avatar" />
                  </Tilt>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="home-about-social">
                  <h1>FIND ME ON</h1>
                  <p>
                    Feel free to <span className="purple">Connect </span>with me
                  </p>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/GowthamXeno"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.instagram.com/gowthamxeno"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color home-social-icons"
                      >
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/gowtham-m-fullstack-developer/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color home-social-icons"
                      >
                        <AiFillLinkedin />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="mailto:gowthamudpm2004@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color home-social-icons"
                      >
                        <IoMail />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      )}
    </>
  );
};

export default DefaultLayout(HomePage);
