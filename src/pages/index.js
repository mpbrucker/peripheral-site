import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        className = "logo-img"
        loading="eager"
        placeholder="none"
        src="../images/ps-logo.png"
      />
      <h2>Peripheral Study</h2>
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <li key={node.id}>
              {node.frontmatter.title}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
    query  {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
        }
      }
    }
`

export const Head = () => <title>Home Page</title>

export default IndexPage
