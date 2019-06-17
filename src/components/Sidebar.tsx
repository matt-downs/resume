import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___sort] }
      filter: { frontmatter: { type: { eq: "sidebar" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            bullets
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
            bullets: [string];
          };
        };
      }
    ];
  };
};

const Sidebar = () => (
  <StaticQuery
    query={query}
    render={(data: Data) =>
      data.allMarkdownRemark.edges.map(({ node }) => (
        <Fragment key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          {node.frontmatter.bullets && (
            <ul>
              {node.frontmatter.bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </Fragment>
      ))
    }
  />
);

export default Sidebar;
