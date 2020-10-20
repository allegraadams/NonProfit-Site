Non-Profit Site (workshops to be added to page) Powered by Gatsby
=====
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-green.svg)](https://shields.io/) [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://shields.io/)

The non-profit site is a clean build with easy nto add workshops (per client request) to be added once they are completed by client.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/madelyneriksen/NonProfitSite)

## Getting Started

The first step is customizing your metadata in `gatsby-config.js`.

```javascript
siteMetadata: {
  navbarLinks: [
     {to: "/forms", name: "Forms of Bullying"},
      {to: "/combat", name: "Combat Bullying"},
      {to: "/sexualid", name: "Sexual Identity"},
      {to: "/workshop", name: "Workshops"},
      {to: "/about", name: "ABOUT"},
  ],
    title: "NO SHADE",
    description: "No Shade - Every child should be offered the opportunity to be educated without fear.",
    siteUrl: "https://thenoshadeorg.org",
    homepageHeader: "Welcome to the No Shade",
    homepageAbout: "No Shade is a non-profit organization designed to equip individuals and their partents on various forms of bullying, solutions to target it and assistance to those effected.",
    mailChimpUrl: "https://mailchimp.com",
    mailChimpToken: "MAILCHIMP TOKEN HERE",
    youtube: "https://www.youtube.com/channel/UCP2kMDQKTzeZ7Cmui-sQe6w/videos", // YOUR YOUTUBE PROFILE HERE
    github: "", // YOUR GITHUB PROFILE HERE 
    pinterest: "", // YOUR PINTEREST PROFILE HERE
    facebook: "", // YOUR FACEBOOK PROFILE HERE
    twitter: "https://twitter.com/TheNoShadeOrg", // YOUR TWITTER PROFILE HERE
}
```

This is used for configuring data across the site, improving SEO, and increasing engagement on social media.

Next up, you can begin customizing the images and copy in `content/`. Finally, you can add your own blog posts! Posts are written in Markup, an easy way to create webpages.

## Installation with `gatsby-cli`
`gatsby new my-sitehttps://github.com/allegraadams/NonProfit-Site`

## To develop
`gatsby develop`

## To build
`gatsby deploy`


## Adding your Content

NonProfit Site uses markdown for writing workshop posts, and follows a simple template for client to add new workshops. All workshops will be available using the link to workshops. within the worksho link are sublinks to specific topics. To add a new workshop, create a file in `content/workshop/` with the following:

```markdown
---

type: "post"
title: "Title"
author: "Author"
category: "Workshops"
date: "Date"
slug: "/path" - this is the path that leads to the specific topics
postImage: "./img/myimage.jpg"
metaDescription: "Description of workshop"

---

Link to images in the `img` folder using this syntax:

![Alt Text](./img/my-image.jpeg)
```

Images used in workshops are stored in `content/posts/img/`. Images  will be used as thumbnails for workshops, as well as in search results.


## Thanks and Mentions

* The [GatsbyJS](https://www.gatsbyjs.org/) Team for creating an amazing platform.
* [Netlify](https://www.netlify.com/) for making static site hosting even easier.

