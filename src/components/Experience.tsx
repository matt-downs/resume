import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___startDate] }
      filter: { frontmatter: { type: { eq: "experience" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            startDate(formatString: "MMMM YYYY")
            endDate(formatString: "MMMM YYYY")
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
            startDate: string;
            endDate: string;
          };
        };
      }
    ];
  };
};

const Experience = () => (
  <StaticQuery
    query={query}
    render={(data: Data) => (
      <Fragment>
        <h2>Experience</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Fragment key={node.id}>
            <h3 className="mb-0">{node.frontmatter.title}</h3>
            <span className="text-muted">
              {node.frontmatter.startDate} - {node.frontmatter.endDate || "Now"}
            </span>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </Fragment>
        ))}
      </Fragment>
    )}
  />
);

export default Experience;
