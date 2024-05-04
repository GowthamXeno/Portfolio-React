import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiExpress, SiNpm, SiTailwindcss, SiBootstrap, SiPython } from "react-icons/si";
const Techstack = () => {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <DiReact />
          <p>React</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <DiNodejs />
          <p>NodeJs</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <DiMongodb />
          <p>MongoDB</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <DiJavascript1 />
          <p>JavaScript</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <SiExpress />
          <p>ExpressJs</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <DiJava />
          <p>Java</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <DiGit />
          <p>Git</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <DiHtml5 />
          <p>Html</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <DiCss3 />
          <p>CSS</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <SiTailwindcss />
          <p>TailwindCSS</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <SiNpm />
          <p>Npm</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <SiPython />
          <p>Python</p>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          data-aos="flip-up"
          data-aos-offset="80"
          data-aos-duration="600"
        >
          <SiBootstrap />
          <p>Bootstrap</p>
        </Col>
      </Row>
    </>
  );
};

export default Techstack;
