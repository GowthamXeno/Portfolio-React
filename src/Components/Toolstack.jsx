import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiArc,
  SiVercel,
  SiWindows11,
  SiGithub,
  SiCanva,
  SiMicrosoftedge,
  SiRender
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiWindows11 />
        <p>Window OS</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiMicrosoftedge />
        <p>Microsoft Edge</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiArc />
        <p>Arc</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiVisualstudiocode />
        <p>VS Code</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiGithub />
        <p>Github</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiCanva />
        <p>Canva</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiVercel />
        <p>Vercel</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="flip-up"
        data-aos-offset="80"
        data-aos-duration="600"
      >
        <SiRender />
        <p>Render</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
