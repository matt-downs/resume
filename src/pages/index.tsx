import React from "react";
import { Helmet } from "react-helmet";
import moment from "moment";
import "../styles/index.scss";
import Experience from "../components/Experience";
import Sidebar from "../components/Sidebar";
import Education from "../components/Education";

const Index = () => {
  const currentDate = moment().format("MMMM Do YYYY");

  return (
    <>
      <Helmet>
        <title>Matt Downs // Full stack engineer</title>
      </Helmet>
      <div className="header py-4">
        <div className="container">
          <div className="row">
            <h1 className="col-12 display-3">// Matt Downs</h1>
            <div className="col-md-8">
              <p className="lead mb-0">
                A full-stack engineer with a passion for creating great software
                solutions.
              </p>
              <div className="only-print">
                <p className="small mt-3 mb-0">
                  Printed on {currentDate}, view the latest version at{" "}
                  <a href="https://matt-downs.netlify.app" target="_blank">
                    matt-downs.netlify.app
                  </a>
                </p>
              </div>
            </div>
            <ul className="col-md-4 mb-0 list-unstyled">
              <li>
                <a href="https://github.com/matt-downs" target="_blank">
                  <span className="no-print">GitHub</span>
                  <span className="only-print">github.com/matt-downs</span>
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/~matt-downs" target="_blank">
                  <span className="no-print">NPM</span>
                  <span className="only-print">npmjs.com/~matt-downs</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hiremattdowns"
                  target="_blank"
                >
                  <span className="no-print">LinkedIn</span>
                  <span className="only-print">
                    linkedin.com/in/hiremattdowns
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row content">
          <div className="col-md-8 pt-4">
            <h2>About me</h2>
            <p>
              I am a results-oriented full-stack web engineer with a proven
              ability to build high-quality, user-centered web applications. I
              possess a strong work ethic, a fast learning curve, and a passion
              for exploring and implementing the latest web technologies. I'm a
              highly motivated individual who thrives in collaborative
              environments and is always seeking new challenges to grow and
              excel. I can effectively prioritize tasks and make sound decisions
              under pressure.
            </p>

            <Experience />

            <Education />
          </div>

          <div className="col-md-4 pt-4 left-divider">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
