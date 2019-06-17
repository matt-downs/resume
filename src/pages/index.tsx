import React from "react";
import { graphql } from "gatsby";
import "../styles/index.scss";

import Experience from "../components/Experience";
import Projects from "../components/Projects";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <div>
        <div className="header py-4">
          <div className="container">
            <div className="row">
              <h1 className="col-12 display-3">// Matt Downs</h1>
              <div className="col-md-8">
                <p className="lead mb-0">
                  A fast learner with extensive personal experience creating
                  snappy modern web applications through modular and well
                  documented code.
                </p>
                <div className="only-print">
                  <p className="small mt-3 mb-0">
                    Printed on <span id="current-date"></span>, view the latest
                    version at{" "}
                    <a href="https://matt-downs.github.io" target="_blank">
                      matt-downs.github.io
                    </a>
                  </p>
                </div>
              </div>
              <ul className="col-md-4 mb-0 list-unstyled">
                <li>
                  <a href="https://github.com/matt-downs" target="_blank">
                    <i className="fab fa-fw fa-github"></i>
                    <span className="no-print">GitHub</span>
                    <span className="only-print">github.com/matt-downs</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/~matt-downs" target="_blank">
                    <i className="fab fa-fw fa-npm"></i>
                    <span className="no-print">NPM</span>
                    <span className="only-print">npmjs.com/~matt-downs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hiremattdowns"
                    target="_blank"
                  >
                    <i className="fab fa-fw fa-linkedin"></i>
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
                I am an aspiring software developer seeking further experience
                in the professional field. I am a fast learner who is not
                affraid to jump straight into a project. I have a keen interest
                in modern web technologies, especially web apps that can deliver
                the features and rich experience of a native-like application. I
                work well in a team, and enjoy connecting with the people I work
                with. I crave a good challenge, and I am always striving to
                expand my knowledge and techniques for the future.
              </p>

              <Experience />

              <h2>Education</h2>
              <h3 className="mb-0">Bachelor of Information Technology</h3>
              <span className="text-muted">
                Queensland University of Technology, Brisbane City - Graduated
                mid 2017
              </span>
              <p>
                Favourite units include “Software Development”, “Cloud
                Computing”, “High Performance and Parallel Computing”,
                “Microprocessors and Digital Systems” and “Mobile Application
                Development”.
              </p>

              <Projects />
            </div>

            <div className="col-md-4 pt-4 left-divider">
              <h2>Info</h2>
              <p>
                Brisbane, QLD 4060
                <br />
                <a href="mailto:mattdowns6@gmail.com">mattdowns6@gmail.com</a>
              </p>

              <h2>Hobbies</h2>
              <ul>
                <li>Coffee</li>
                <li>Running and fitness</li>
                <li>Photography</li>
                <li>Burgers, pizza and beer</li>
                <li>Dogs</li>
              </ul>

              <h2>Skills</h2>
              <ul>
                <li>Critical thinking</li>
                <li>Collaboration</li>
                <li>Design and creativity</li>
                <li>Attention to detail</li>
              </ul>

              <h2>Platform experience</h2>
              <ul>
                <li>
                  AWS (Lambda, API Gateway, DynamoDB, S3, Elastic Beanstalk,
                  EC2)
                </li>
                <li>Neto</li>
              </ul>

              <h2>Tooling experience</h2>
              <ul>
                <li>Git and Git Flow</li>
                <li>Bash</li>
                <li>Atlassian products: JIRA, Confluence</li>
                <li>Various debugging tools</li>
              </ul>

              <h2>Framework experience</h2>
              <ul>
                <li>React, Redux &amp; Apollo</li>
                <li>Angular &amp; Ionic</li>
                <li>Bootstrap 3 &amp; 4</li>
                <li>HAPI</li>
                <li>Jest &amp; Mocha</li>
              </ul>

              <h2>Fluent in</h2>
              <ul>
                <li>TypeScript</li>
                <li>JS (ES5 &amp; ES6) &amp; JSX</li>
                <li>Node</li>
                <li>B@SE (Neto templating)</li>
                <li>CSS, SCSS &amp; SASS</li>
                <li>HTML</li>
              </ul>

              <h2>Convention experience</h2>
              <ul>
                <li>MVC and other modular design patterns</li>
                <li>Object-oriented &amp; Functional programming</li>
                <li>Reactive programming</li>
                <li>Parallel computing</li>
                <li>GraphQL &amp; REST</li>
                <li>Stateless server architecture for scalability</li>
                <li>SQL &amp; NoSQL</li>
                <li>Test-driven development</li>
              </ul>

              <h2>Topics interested in</h2>
              <ul>
                <li>Microservices!</li>
                <li>Universal &amp; progressive single page web apps!</li>
                <li>Basically anything involving the web at scale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
