import * as React from 'react'
import PostLayout from '../components/post-layout'
import { graphql } from 'gatsby';
import star from "../images/peripheral-star.svg";


const PostPage = ({ data, children }) => {
    return (
    <PostLayout pageTitle={data.mdx.frontmatter.title} pageSubtitle={data.mdx.frontmatter.description} date={data.mdx.frontmatter.date}>
        {children}
        <div className="content-divider full-width"></div>
        <footer className="global-footer">
          <div className="footer-attribution">
            Design and words by Maddie Brucker
          </div>
          <img className="footer-logo" src = {star} alt="SVG black star logo."/>
        </footer>
    </PostLayout>)
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <title>Post Page</title>

export default PostPage;