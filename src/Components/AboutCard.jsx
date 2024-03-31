import React from "react";
import { Container } from "react-bootstrap";

const AboutCard = () => {
  return (
    <>
      <div className="quote-card-view">
        <blockquote>
          <p>
            Hi Everyone, I am <span className="purple">Gowtham M</span> from{" "}
            <span className="purple"> Chennai, India.</span>
            <br />I am currently pursuing my Bachelor of Engineering at{" "}
            <span className="purple">Panimalar Engineering College</span>
            <br />
            <br />
            I'm passionate about web development, constantly exploring new
            languages, frameworks, and tools to craft innovative web
            applications
            <br />
            <br />
            While in my free time, I also enjoy playing games and creative
            editings
          </p>
          <p style={{ color: "rgb(126, 126, 172)" }}>
            "Embrace challenges, fuel your ambition, and keep moving forward."{" "}
          </p>
          <footer className="blockquote-footer">Gowtham</footer>
        </blockquote>
      </div>
    </>
  );
};

export default AboutCard;
