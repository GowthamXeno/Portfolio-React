import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const ThemeInput = {
    dark: ["#ebebebca", "#41487b", "#54569d", "#6b68c0", "#847be4"],
  };
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "10px" }}
      data-aos="fade-up"
      data-aos-duration="400"
    >
      <h1
        className="project-heading"
        style={{ paddingBottom: "20px" }}
        data-aos="zoom-out"
        data-aos-duration="300"
      >
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="GowthamXeno"
        blockSize={15}
        blockMargin={5}
        color="#8d84f5"
        fontSize={16}
        theme={ThemeInput}
        showWeekdayLabels="true"
      />
    </Row>
  );
}

export default Github;
