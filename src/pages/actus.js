import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import { graphql, Link as GatsbyLink } from "gatsby";
import SlideMenu from "../components/SlideMenu";

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          image
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;

const NewsPage = ({ data }) => {
  const articles = data.allMarkdownRemark.nodes;

  return (
    <Theme theme={theme}>
      <GlobalQuarklyPageStyles pageUrl={"actus"} />
      <Helmet>
        <title>Actualités & News | Trackdiggers</title>
        <meta name="description" content="Toutes les dernières infos de Trackdiggers : sorties, mises à jour, artistes à suivre et plus encore." />
        <meta property="og:title" content="Actualités Trackdiggers" />
        <meta property="og:description" content="Découvre nos actus, nos updates, et les artistes qui montent !" />
        <meta property="og:image" content="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20(64%20x%2064%20px).png" />
        <link rel="canonical" href="https://trackdiggers.com/actus/" />
      </Helmet>

      {/* Header + Spotify */}
      <Section
        padding="0px 0 16px 0"
        background="#ffffff"
        position="fixed"
        top="0px"
        left="0px"
        right="0px"
        z-index="1000"
        width="100%"
        height="60px"
        border-style="solid"
        border-width="1px"
        border-color="rgba(0, 0, 0, 0.19)"
        border-radius="8px"
      >
        <Override slot="SectionContent" display="flex" justify-content="center" align-items="center" width="100%" max-width="1200px" margin="0 auto" padding="0 20px" />
        <Box style={{ position: "fixed", top: "20px", right: "12px", zIndex: 1100 }}>
          <Link href="https://open.spotify.com/playlist/1nyWcB493Lb26W9rpKyh7Y" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
            <Image src="https://pub-88284dcd109849ecb2081e535622d2f5.r2.dev/Primary_Logo_Black_RGB.svg" width="35px" height="35px" alt="Spotify" />
          </Link>
        </Box>
        <Link href="/" text-decoration="none">
          <Image src="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/TrackDigger.svg?v=2025-06-12T13:46:43.953Z" width="200px" height="auto" alt="Logo Trackdiggers" margin="20px 0px 0px 0px" />
        </Link>
        <SlideMenu />
      </Section>

      {/* Contenu principal */}
      <Section padding="100px 20px 60px 0px" background="#ffffff">
        <Override slot="SectionContent" max-width="1000px" margin="0 auto" />
        <Text as="h1" font="--headline2" margin="0 0 24px 0" text-align="center" color="#000">
          Actus & News
        </Text>
        <Text font="--lead" margin="0 0 40px 0" text-align="center" color="#444">
          Reste à l'affût des nouveautés, annonces, mises à jour, et coups de cœur Trackdiggers.
        </Text>

        <Box display="flex" flex-wrap="wrap" justify-content="center" gap="32px">
          {articles
  .filter(node => !node.fields.slug.toLowerCase().includes("readme"))
  .map((node) => (
<Box
  key={node.fields.slug}
  width="100%"
  max-width="600px"
  background="#ffffff"
  border-radius="20px"
  padding="20px"
  box-shadow="0 12px 32px rgba(0, 0, 0, 0.3)"
  display="flex"
  align-items="flex-start"
  transition="transform 0.2s ease"
  _hover={{ transform: "translateY(-4px)" }}
  margin-bottom="32px" // 👈 espace entre les cartes
  border-bottom="2px solid #e0e0e0" // 👈 ligne de séparation
>
     {node.frontmatter.image && (
  <Image
    src={node.frontmatter.image}
    width="150px"
    height="100px"
    border-radius="12px"
    object-fit="cover"
    alt={node.frontmatter.title}
    margin-right="20px"
  />
)}
      <Box>
        <Text font="--lead" font-weight="700" margin="0 0 8px 0">
          {node.frontmatter.title}
        </Text>
        <Text font="--base" margin="0 0 12px 0" color="#666">
          {node.excerpt}
        </Text>
        <GatsbyLink to={`/actus${node.fields.slug}`} style={{ color: "#000", textDecoration: "underline" }}>
          Lire l'article →
        </GatsbyLink>
      </Box>
    </Box>
  ))}
          </Box>

      </Section>

      {/* Pied de page */}
  <Section padding="40px 0" quarkly-title="Pied de page">
      <Override
        slot="SectionContent"
        flex-direction="column"
        align-items="center"
        justify-content="center"
        text-align="center"
      />
      {"    "}
      <Text font="--base" margin="0 0 10px 0" color="--dark">
        © 2025 Trackdiggers — ATK Music
      </Text>
      {"  "}
      <Text font="--base" color="--dark">
        {"    "}
        <Link href="/informations-legales" margin="0 10px">
          Mentions légales
        </Link>
        {" "}|{"\n    "}
        <Link href="/informations-legales" margin="0 10px">
          Politique de confidentialité
        </Link>
        {" "}|{"\n    "}
        <Link href="/informations-legales" margin="0 10px">
          CGU
        </Link>
        {"  "}
      </Text>
      <Box margin="24px 0 0 0" display="flex" gap="40px" justify-content="center" align-items="center">
  <Link href="https://instagram.com/trackdiggers" target="_blank">
    <Image src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="32px" alt="Instagram" margin="0 20px" />
  </Link>
  <Link href="https://tiktok.com/@trackdiggers" target="_blank">
    <Image src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="32px" alt="TikTok" margin="0 20px" />
  </Link>
  <Link href="https://x.com/track_diggers" target="_blank">
    <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" width="32px" alt="X (Twitter)" margin="0 20px" />
  </Link>
</Box>
    </Section>
    </Theme>
  );
};

export default NewsPage;