import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import { FaGithub } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import "hamburgers/dist/hamburgers.min.css";

function NavbarComp() {
  const [expanded, UpdateExpanded] = useState(false);
  const [navColor, UpdateNavColor] = useState(false);

  function ScrollHandler() {
    if (window.scrollY >= 20) UpdateNavColor(true);
    else UpdateNavColor(false);
  }
  window.addEventListener("scroll", ScrollHandler);
  return (
    <>
      <Navbar
        expand="md"
        expanded={expanded}
        fixed="top"
        className={`${navColor ? "sticky" : "navbar"}`}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={Logo} className="img-fluid NavLogo" alt="Logo_Gow"></img>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => UpdateExpanded(!expanded)}
          >
            <div
              class={`hamburger hamburger--spin ${expanded ? "is-active" : ""}`}
            >
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => UpdateExpanded(false)}
                >
                  <GoHome
                    style={{ marginRight: "0.2rem", marginBottom: "0.25rem" }}
                  />
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/About"
                  onClick={() => UpdateExpanded(false)}
                >
                  <BiUser
                    style={{ marginRight: "0.2rem", marginBottom: "0.25rem" }}
                  />
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/Projects"
                  onClick={() => UpdateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginRight: "0.2rem", marginBottom: "0.25rem" }}
                  />
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/Resume"
                  onClick={() => UpdateExpanded(false)}
                >
                  <CgFileDocument
                    style={{ marginRight: "0.2rem", marginBottom: "0.25rem" }}
                  />
                  Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button
                  className="fork-btn-inner"
                  href="https://github.com/GowthamXeno/portfolio"
                  target="_blank"
                  onClick={() => UpdateExpanded(false)}
                  
                >
                  <FaGithub />
                  <HiCode />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
