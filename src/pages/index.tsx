import React from "react";
import { Helmet } from "react-helmet";
import moment from "moment";
import "../styles/index.scss";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import Education from "../components/Education";

const Index = () => {
  const currentDate = moment().format("MMMM Do YYYY");

  return (
    <>
      <Helmet>
        <title>Matt Downs // Full stack developer</title>
      </Helmet>
      <div className="header py-4">
        <div className="container">
          <div className="row">
            <h1 className="col-12 display-3">// Matt Downs</h1>
            <div className="col-md-8">
              <p className="lead mb-0">
                A full stack web developer with a passion for using modern
                technologies to yield fantastic end user experiences.
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
              I am a full stack web developer with a focus on creating the best
              solution possible for the end user. I have a keen interest in
              using modern web technologies to create web applications that
              deliver a rich and fluid experience. I am a fast learner who is
              not afraid to jump straight into a project. I work well in a team,
              and enjoy connecting with the people I work with. I crave a good
              challenge, and I am always striving to expand my knowledge and
              techniques for the future.
            </p>

            <Experience />

            <Education />

            <Projects />
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
