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
import { SiExpress, SiNpm, SiTailwindcss, SiBootstrap } from "react-icons/si";
const Techstack = () => {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <p>React</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <p>NodeJs</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <p>MongoDB</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <p>JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
          <p>ExpressJs</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
          <p>Java</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
          <p>Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
          <p>Html</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
          <p>CSS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
          <p>TailwindCSS</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNpm />
          <p>Npm</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap />
          <p>Bootstrap</p>
        </Col>
      </Row>
    </>
  );
};

export default Techstack;
