import React, { Fragment } from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "experience" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const Experience = () => (
  <StaticQuery
    query={query}
    render={(data: any) => {
      console.log(data);
      return (
        <Fragment>
          <h2>Experience</h2>
          <h3 className="mb-0">{data.markdownRemark.frontmatter.title}</h3>
          <span className="text-muted">January 2019 - February 2019</span>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Fragment>
      );
    }}
  />
);

export default Experience;
