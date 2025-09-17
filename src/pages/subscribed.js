import * as React from 'react';
import Layout from '../components/layout';
import star from "../images/peripheral-star.png";




const SubscribedPage = ({ data }) => {
  return (
  <Layout pageTitle="Subscription confirmation">
    <div className="subscription-wrapper">
        <h2>You have successfully been subscribed to Peripheral Study.</h2>
        <a href="/">Return</a>
    </div>
    <footer className="global-footer">
        <div className="footer-attribution">
          Design and words by Maddie Brucker
        </div>
        <img className="footer-logo" src = {star} alt="SVG black star logo."/>
      </footer>
  </Layout>

  )
}

export const Head = () => <title>Subscription Confirmation</title>


export default SubscribedPage;
