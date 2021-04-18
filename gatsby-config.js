// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.

// import dotenv from 'dotenv';

// dotenv.config({ path: '.env' });

// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

// console.log(process.env.SANITY_TOKEN);

// module.exports = {
//   siteMetadata: {
//     title: `Slicks Slices`,
//     siteUrl: `https://gaysby.pizza`,
//     description: `The best pizza place in Hamilton!`,
//   },
//   plugins: [
//     // 'gatsby-plugin-react-helmet',
//     'gatsby-plugin-styled-components',
//     // {
//     //   // this is the name of the plugin you are adding
//     //   resolve: 'gatsby-source-sanity',
//     //   options: {
//     //     projectId: 'z9hm4co4',
//     //     dataset: 'production',
//     //     watchMode: true,
//     //     token: process.env.SANITY_TOKEN,
//     //   },
//     // },
//   ],
// };

require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gaysby.pizza`,
    description: `The best pizza place in Hamilton!`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJ_ID,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
  ],
};
