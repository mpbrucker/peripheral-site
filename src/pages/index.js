import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '@mui/material/Button';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      {/* <StaticImage
        className = "logo-img"
        loading="eager"
        placeholder="none"
        src="../images/ps-logo.png"
      /> */}
      <h2 className = "page-title">Notes on Peripheral Study</h2>
      <div className = "page-subtitle-wrapper">
        Writing for more critical living
      </div>
      <div className = "subscribe-container">
      {/* <div id="mc_embed_shell">
  
        <div id="mc_embed_signup">
            <form action="https://gmail.us13.list-manage.com/subscribe/post?u=abfd043ab1f43a59c3d6e2b53&amp;id=763f4bc72a&amp;f_id=00c04ce1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
                <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                    <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
                <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display: none;"></div>
                    <div class="response" id="mce-success-response" style="display: none;"></div>
                </div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_abfd043ab1f43a59c3d6e2b53_763f4bc72a" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"></div>
            </div>
        </form>
        </div>
        </div> */}
  
        <Button variant="contained">Subscribe</Button>
      </div>
      <div className="post-list">
        <ol>
          {
            data.allMdx.nodes.map(node => (
                <li key={node.id} className="post-list-item">
                  <div className = "post-list-item-header">
                    <h3>{node.frontmatter.title}</h3>
                  </div>
                  <div className = "post-list-item-content">
                    <p>{node.frontmatter.description}</p>
                  </div>
                </li>
            ))
          }
        </ol>
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
