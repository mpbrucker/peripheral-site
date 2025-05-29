import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import logo from "../images/peripheral-study.svg";
import { Form, TextField } from "radix-ui";

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
                <li key={node.id} className="post-list-item">
                  <div className = "post-list-item-header">
                    <h3>{node.frontmatter.title}</h3>
                    <h5>{node.frontmatter.date}</h5>
                  </div>
                  <div className = "post-list-item-content">
                    <p>{node.frontmatter.description}</p>
                  </div>
                </li>
            ))
          }
        </ol>
      </div>
      <h2>
        *****
      </h2>

      <div className = "subscribe-container">
        <Form.Root className="subscribe-form-root">
          <Form.Field name="email">
              <Form.Message className="subscribe-form-message" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="subscribe-form-message" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            <Form.Control asChild>
              <input className="subscribe-form-input" type="email" placeholder="youremail@example.com" required />
            </Form.Control>
          </Form.Field>

          <Form.Submit asChild>
            <button className="subscribe-submit-button" >
              Subscribe
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
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
          }
          id
        }
      }
    }
`

export const Head = () => <title>Home Page</title>

export default IndexPage
