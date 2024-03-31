import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { DiReact } from "react-icons/di";

function FooterComp() {
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col md={4} className="footer-contact">
            <h3>Developed By Gowtham M</h3>
          </Col>
          <Col md={4} className="footer-mid">
            <h3>Portfolio</h3>
            <div
              className="footer-react"
              style={{ color: "white", fontSize: "20px" }}
            >
              <DiReact />
            </div>
          </Col>
          <Col md={4} className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/GowthamXeno"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gowthamxeno"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gowtham-m-fullstack-developer/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:gowthamudpm2004@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FooterComp;
