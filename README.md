# Interview Coding Challenge

This is a basic [Gatsby](https://www.gatsbyjs.com/) project. You have free reign to setup the project in any way you would like. Install as many packages or fonts as you wish. There are no limitations in that regard. The purpose of this exercise is to allow us to get some insight into your coding style, code quality, and organizational skills.

Please note, before starting this assessment, message Nadina Gray or Michael Marina to say you are starting, and please message either Nadina Gray or Michael Marina on Upwork to say when you are finishing the assessment. 
## Getting Started

```bash
npm i
npm run start
# or
yarn
yarn start
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

You can start editing the project by modifying `pages/index.js` and `pages/profile.js`. The page auto-updates as you edit the file.

## Objective

The goal of this assessment is to determine how well you're able to ingest API data and turn it into a working web app.

To begin, you'll want to get familiar with the [Github Users API](https://docs.github.com/en/rest/users/users#get-a-user). It is a free and publicly available API which allows users to request publicly available Github user data. It does require authentication to use, please generate a personal access token before getting started.

Your objective in this challenge is to create a navigable, fully-responsive list of Github users in the browser with the visual treatment represented below:

### Homepage

![Homepage](src/images/homepage.png)

### Profile Page

![Profile Page](src/images/profile.png)

# Notes

Since this project is bootstrapped with [Gatsby](https://www.gatsbyjs.com/), you should use Gatsby's `Image` and `Link` components in this challenge. Link is built in, and see [Gatsby Plugin Image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image). Do not use Gatsby's gatsby-node API's to query the API via graphql, please query the REST API within your components themselves.

We do not assume you know Gatsby but we do assume you understand how routing works. You will want to get familiar with the way Gatsby handles routes.

Good luck and happy coding!

## Timeline

How long should this take? Roughly 1 to 2 hours depending on how involved you choose to make it.

## Submission 

Please make a PR to this repository with your work. Please include a small write-up in markdown, either as a separate file or addendum to this README walking through any necessary steps to set up your code, or explaining your work.

## More About Gatsby

To learn more about Gatsby, take a look at the following resources:

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Gatsby API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## Bonus Points
Use SASS and CSS modules. Add tests.
