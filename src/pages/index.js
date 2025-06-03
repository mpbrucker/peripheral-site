import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby';
import logo from "../images/peripheral-study.svg";
import { Form } from "radix-ui";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <img src = {logo} alt="SVG text reading Notes on Peripheral Study."/>
      <span className = "page-subtitle-wrapper">
        thinking and practice for more critical living
      </span>
      <h2>
        *****
      </h2>
      <div className="post-list">
        <ol>
          {
            data.allMdx.nodes.map(node => (
              <Link to={`/${node.frontmatter.slug}`} className="post-list-item-link">
                <li key={node.id} className="post-list-item">
                    <div className = "post-list-item-header">
                      <h3>{node.frontmatter.title}</h3>
                      <h5>{node.frontmatter.date}</h5>
                    </div>
                    <div className = "post-list-item-content">
                      <p>{node.frontmatter.description} <i>Read more</i></p>
                    </div>
                </li>
              </Link>

            ))
          }
        </ol>
      </div>
      <h2>
        *****
      </h2>

      <div className = "subscribe-container">
        <p className="subscribe-subtitle">Subscribe to email newsletter</p>
        <Form.Root className="subscribe-form-root" 
          action="https://gmail.us13.list-manage.com/subscribe/post?u=abfd043ab1f43a59c3d6e2b53&amp;id=763f4bc72a&amp;f_id=00c04ce1f0" 
          method="post"
          target="_self">
          <Form.Field name="EMAIL">
              <Form.Message className="subscribe-form-message" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="subscribe-form-message" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            <Form.Control asChild>
              <input className="subscribe-form-input" id="mce-EMAIL" type="email" placeholder="youremail@example.com" required />
            </Form.Control>
          </Form.Field>
          <div aria-hidden="true" className="subscribe-hidden"><input type="text" name="b_abfd043ab1f43a59c3d6e2b53_763f4bc72a" tabindex="-1" value=""/></div>
          <Form.Submit asChild>
            <input type="submit" name="subscribe" value="Subscribe" className="subscribe-submit-button" />
          </Form.Submit>
        </Form.Root>
      </div>
  
      <footer className="global-footer">

      </footer>
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
            description
            slug
          }
          id
        }
      }
    }
`

export const Head = () => <title>Home Page</title>

export default IndexPage
