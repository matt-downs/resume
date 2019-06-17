import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___startDate] }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            technologies
            projectUrl
            sourceUrl
          }
        }
      }
    }
  }
`;

type Data = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: string;
          html: string;
          frontmatter: {
            title: string;
            technologies: [string];
            projectUrl: string;
            sourceUrl: string;
          };
        };
      }
    ];
  };
};

const Projects = () => (
  <StaticQuery
    query={query}
    render={(data: Data) => (
      <Fragment>
        <h2>Personal projects</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Fragment key={node.id}>
            <div className="row">
              <div className="col-md-8">
                <h3 className="mb-0">{node.frontmatter.title}</h3>
                <span className="text-muted">
                  {node.frontmatter.technologies.map(tech => (
                    <span>#{tech} </span>
                  ))}
                </span>
              </div>
              <ul className="list-unstyled col-md-4">
                {node.frontmatter.projectUrl && (
                  <li>
                    <a href={node.frontmatter.projectUrl} target="_blank">
                      <span className="no-print">Check out the project</span>
                      <span className="only-print">
                        {/* TODO */}
                        npmjs.com/package/neto-api
                      </span>
                    </a>
                  </li>
                )}
                {node.frontmatter.sourceUrl && (
                  <li>
                    <a href={node.frontmatter.sourceUrl} target="_blank">
                      <span className="no-print">Check out the source</span>
                      <span className="only-print">
                        {/* TODO */}
                        github.com/matt-downs/neto-api-node
                      </span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </Fragment>
        ))}
      </Fragment>
    )}
  />
);

export default Projects;
