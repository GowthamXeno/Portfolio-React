import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypewriteComp() {
  return (
    <div className="TypeWriting">
      <Typewriter
        words={[
          "Engineer",
          "Web Developer",
          "Programming Enthusiast",
          "Full Stack Developer",
        ]}
        loop={true}
        cursor
        cursorStyle=" /"
        typeSpeed={50}
        deleteSpeed={40}
        delaySpeed={2000}
      />
    </div>
  );
}

export default TypewriteComp;
