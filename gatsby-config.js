module.exports = {
    siteMetadata: {
        title: "Trackdiggers – Recherche par mood",
        description: "Découvre des sons en fonction de ton humeur, vote pour tes morceaux préférés et collectionne des cartes musicales uniques.",
        author: "@trackdiggers",
        siteUrl: "https://trackdiggers.com",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-resolve-src",
        "gatsby-plugin-meta-redirect",

        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                output: "/sitemap.xml",
            }
        },

        // 👉 Charge les fichiers Markdown de ton dépôt externe
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/external/articles/articles`,
            },
        },

        // 👉 Transforme les fichiers Markdown en noeuds Gatsby
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [],
            },
        },
    ],
};