import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypewriteComp() {
  return (
    <div className="TypeWriting">
      <Typewriter
        words={[
          "Web Developer",
          "MERN Stack Developer",
          "Engineer",
          "Full Stack Developer",
        ]}
        loop={true}
        cursor
        cursorStyle=" /"
        typeSpeed={50}
        deleteSpeed={40}
        delaySpeed={1000}
      />
    </div>
  );
}

export default TypewriteComp;
