const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Later.com ',
    description: '#1 Marketing Platform for Instagram Visually plan, schedule and analyzey',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'hello@later.com',
    },
    menuLinks: [
      {
        name: 'Platform',
        link: '/platform',
      },
      {
        name: 'Pricing',
        link: '/pricing',
      },
      {
        name: 'More',
        link: '/More',
      },
      {
        name: 'Sign In',
        link: '/https://app.later.com/',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
