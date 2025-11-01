import * as React from 'react'
import Layout from '../components/layout'
import "../components/home.css";
import star from "../images/peripheral-star.png";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home">
      <div className="home-page-wrapper">
        <div className="home-page-title">peripheral</div>
        <div className="home-page-content"><span><i>Works in art, design, technology, and research by <em>Maddie Brucker.</em></i></span></div>
      </div>
    </Layout>    
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
