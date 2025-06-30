import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";

const NewsPage = () => {
  return (
    <Theme theme={theme}>
      <GlobalQuarklyPageStyles pageUrl={"actus"} />
      <Helmet>
        <title>Actualités & News | Trackdiggers</title>
        <meta name="description" content="Toutes les dernières infos de Trackdiggers : sorties, mises à jour, artistes à suivre et plus encore." />
        <meta property="og:title" content="Actualités Trackdiggers" />
        <meta property="og:description" content="Découvre nos actus, nos updates, et les artistes qui montent !" />
        <meta property="og:image" content="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20(64%20x%2064%20px).png" />
      <link rel="canonical" href="https://trackdiggers.com/actus/" /></Helmet>

      {/* HEADER */}
      <Section padding="0px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center" background="#ffffff" position="fixed" top="0px" left="0px" right="0px" z-index="1000" width="100%" height="60px" border-style="solid" border-width="1px" border-color="rgba(0, 0, 0, 0.19)" border-radius="8px">
        <Override slot="SectionContent" display="flex" justify-content="center" align-items="center" width="100%" max-width="1200px" margin="0 auto" padding="0 20px" />
        <Link href="/" text-decoration="none">
          <Image
            src="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/TrackDigger.svg?v=2025-06-12T13:46:43.953Z"
            width="200px"
            max-width="100%"
            height="auto"
            alt="Logo Trackdigger"
            margin="30px 0px 0px 0px"
            sm-margin="30px 0px 0px 0px"
            xl-margin="30px 0px 0px 0px"
          />
        </Link>
      </Section>

      {/* CONTENU DES ACTUALITÉS */}
      <Section padding="100px 20px 60px 20px" background="#ffffff">
        <Override slot="SectionContent" max-width="1000px" margin="0 auto" />
        <Text as="h1" font="--headline2" margin="0 0 24px 0" text-align="center" color="#000">
          Actus & News
        </Text>
        <Text font="--lead" margin="0 0 40px 0" text-align="center" color="#444">
          Reste à l'affût des nouveautés, annonces, mises à jour, et coups de cœur Trackdiggers.
        </Text>

        {/* EMPLACEMENTS DES ARTICLES */}
        <Box display="flex" flex-wrap="wrap" justify-content="center" gap="32px">
          {/* Exemple de bloc article (à générer dynamiquement) */}
          <Box width="100%" max-width="400px" background="#f5f5f5" border-radius="16px" padding="24px" box-shadow="0 2px 8px rgba(0,0,0,0.05)">
            <Text font="--lead" font-weight="700" margin="0 0 12px 0">Titre de l'article</Text>
            <Text font="--base" margin="0 0 16px 0" color="#666">Résumé de l’article ou accroche engageante. 2 à 3 lignes max.</Text>
            <Link href="/actus/" color="#000" text-decoration="underline">Lire l'article →</Link>
          </Box>

          {/* D'autres blocs comme celui-ci peuvent être ajoutés dynamiquement */}
        </Box>
      </Section>

      {/* FOOTER */}
      <Components.SlideMenu bottom="-80px" height="auto" left="0" right="0" top="0" width="100%" />
      <Section padding="40px 0" quarkly-title="Pied de page">
        <Override slot="SectionContent" flex-direction="column" align-items="center" justify-content="center" text-align="center" />
        <Text font="--base" margin="0 0 10px 0" color="--dark">
          © 2025 Trackdiggers — ATK Music
        </Text>
        <Text font="--base" color="--dark">
          <Link href="/informations-legales" margin="0 10px">Mentions légales</Link> |
          <Link href="/informations-legales" margin="0 10px">Politique de confidentialité</Link> |
          <Link href="/informations-legales" margin="0 10px">CGU</Link>
        </Text>
      </Section>
      {/* OVERLAY DE MAINTENANCE */}
<Box
  position="fixed"
  top="0"
  left="0"
  width="100vw"
  height="100vh"
  z-index="2000"
  background="rgba(0, 0, 0, 0.6)"
  style={{
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
    boxSizing: "border-box"
  }}
>
  <Box background="#ffffff" padding="32px" borderRadius="16px" maxWidth="500px" boxShadow="0 0 20px rgba(0,0,0,0.2)">
    <Text font="--headline3" margin="0 0 16px 0" color="#000">
      🚧 En construction
    </Text>
    <Text font="--base" margin="0 0 24px 0" color="#444">
      Cette page Actus est en cours de préparation. Reviens très vite pour découvrir toutes les nouveautés !
    </Text>
    <Link
      href="/"
      padding="12px 24px"
      background="#000"
      color="#fff"
      border-radius="8px"
      text-decoration="none"
      font="--lead"
      font-weight="700"
      transition="background 0.3s ease"
      hover-background="#333"
    >
      Découvrir Trackdiggers →
    </Link>
  </Box>
</Box>
    </Theme>
  );
};

export default NewsPage;