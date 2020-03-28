import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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

const Sidebar = () => {
  const data: Data = useStaticQuery(query);

  return data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
      <h2>{node.frontmatter.title}</h2>
      {node.frontmatter.bullets && (
        <ul>
          {node.frontmatter.bullets.map(bullet => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  ));
};

export default Sidebar;
