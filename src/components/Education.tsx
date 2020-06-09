import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { type: { eq: "education" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            subtitle
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
            subtitle: string;
          };
        };
      }
    ];
  };
};

export default function Education() {
  const data: Data = useStaticQuery(query);

  return (
    <>
      <h2>Education</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 className="mb-0">{node.frontmatter.title}</h3>
          <span className="text-muted">{node.frontmatter.subtitle}</span>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </>
  );
}
