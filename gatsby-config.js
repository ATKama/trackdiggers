module.exports = {
    siteMetadata: {
        title: "Trackdiggers – Recherche par mood",
        description: "Découvre des sons en fonction de ton humeur, vote pour tes morceaux préférés et collectionne des cartes musicales uniques.",
        author: "@trackdiggers",
        siteUrl: "https://trackdiggers.com", // 👈 Mets bien ton vrai domaine ici
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
                output: "/sitemap.xml", // 👈 Correct path
            }
        },

        // "gatsby-plugin-offline", // optionnel si PWA
    ],
};