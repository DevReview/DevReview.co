module.exports = {
	siteMetadata: {
		siteUrl: `https://devreview.co`,
		title: 'DevReview',
		description: 'Artigos sobre Frontend, Desenvolvimento Web, UX e carreira em TI',
		author: 'Israel Júnior'
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-embed-gist`,
						options: {
							username: `israeljunior`,
							includeDefaultCss: true
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							showLineNumbers: true,
							noInlineHighlight: true,
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					}
				]
			}
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-136142366-1",
			},
		},
		{
      resolve: `gatsby-plugin-categories`,
      options: {
				templatePath: `${__dirname}/src/templates/Category.js`,
				prefix: '/topicos/'
      }
    },
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `#2AC294`,
				trickle: false,
				minimum: 0.4,
				showSpinner: false,
			},
		},
		{
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Noto Sans:400,700`, `Noto Serif`]
        }
      }
		}
	]
}
