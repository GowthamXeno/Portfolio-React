import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ProjectPage from "./Pages/ProjectPage";
import PreLoader from "./Components/PreLoader";
import ScrollToTop from "./Components/ScrollToTop";

import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  const [Load, UpdateLoad] = useState(true);
  useEffect(() => {
    Aos.init({
      // once: true,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      UpdateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="App" id={Load ? "no-scroll" : "scroll"}>
        <Router>
          {Load ? (
            <PreLoader />
          ) : (
            <>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/About" element={<AboutPage />}></Route>
                <Route path="/Projects" element={<ProjectPage />}></Route>
                <Route path="/Resume" element={<ResumePage />}></Route>
              </Routes>
            </>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
