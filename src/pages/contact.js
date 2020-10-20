import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../common/layouts';
import Seo from '../common/seo';
import 'tachyons';


export default () => (
  <Layout>
    <Seo
      title="Contact Us"
      description="Contact Us" />
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="bg-washed-grey pv5 flex flex-column items-center">
      <h1 className="db f1 display fw1">Contact Us</h1>
      
    </div>
    <div className="lh-copy f4 serif mw8 center">
      <p>No shade is focused on being allies and providing a safe space to engage, educate and challenge you to think outside of learned beliefs, ideas and sterotypes.</p>
      <p> </p>
      <p>Please be patient when reaching out, we are responding to as many of you as we can.</p>
      <h2 className="sans-serif">For General Inquiries:</h2>
      
      <ul>
        <li>Email address: noshade@thenoshadeorg.org</li>
      </ul>
    </div>
  </Layout>
)
