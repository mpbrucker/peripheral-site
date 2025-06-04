import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby';
import logo from "../images/peripheral-study.svg";
import separator from "../images/main-page-separator.png";
import star from "../images/peripheral-star.svg";
import { Form } from "radix-ui";
import SubscribeDialog from '../components/subscribe-dialog';
import SubscribeForm from '../components/subscribe-form';

import "../components/dialog.css"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      
      <SubscribeDialog></SubscribeDialog>
      <div className="main-page-header">
        <img src = {logo} alt="SVG text reading Notes on Peripheral Study."/>
        <div className = "page-subtitle-wrapper">
          writings and rehearsals for more critical living
        </div>
        <img className="main-page-separator" src={separator} alt="an abstract image of several dark blobs" />
      </div>
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
      <div className="content-divider">
      </div>

      <SubscribeForm></SubscribeForm>

      <div className="content-divider"></div>

      <footer className="global-footer">
        <div className="footer-attribution">
          Design and words by Maddie Brucker
        </div>
        <img className="footer-logo" src = {star} alt="SVG black star logo."/>
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
