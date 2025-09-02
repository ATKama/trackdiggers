import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import Layout from "../components/layout";
import SlideMenu from "../components/SlideMenu";
import * as Components from "components";

export default function ProposePage() {
  return (
    <Layout pageUrl="propose">
      <Theme theme={theme}>
        <GlobalQuarklyPageStyles pageUrl={"propose"} />
       <Helmet>
  {/* Titre SEO */}
  <title>Propose ton son – TrackDiggers</title>

  {/* Meta description */}
  <meta
    name="description"
    content="Soumets ton morceau à TrackDiggers et fais découvrir ta musique à une communauté passionnée de découvertes musicales urbaines. Intègre la playlist officielle !"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://trackdiggers.com/propose" />

  {/* Meta robots */}
  <meta name="robots" content="index, follow" />

  {/* Open Graph pour réseaux sociaux */}
  <meta property="og:title" content="Propose ton son – TrackDiggers" />
  <meta
    property="og:description"
    content="Soumets ton morceau à TrackDiggers et fais découvrir ta musique à une communauté passionnée."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://trackdiggers.com/propose" />
  <meta
    property="og:image"
    content="https://trackdiggers.com/og/og-propose.jpg"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Propose ton son – TrackDiggers" />
  <meta
    name="twitter:description"
    content="Fais découvrir ta musique à une nouvelle audience sur TrackDiggers."
  />
  <meta
    name="twitter:image"
    content="https://trackdiggers.com/og/og-propose.jpg"
  />
</Helmet>

        {/* Header */}
        <Section
          padding="0px 0 16px 0"
          align-items="center"
          justify-content="center"
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
          <Override
            slot="SectionContent"
            display="flex"
            justify-content="center"
            align-items="center"
            width="100%"
            max-width="1200px"
            margin="0 auto"
            padding="0 20px"
          />

          <Box style={{ position: "fixed", top: "20px", right: "12px", zIndex: 1100 }}>
            <Link
              href="https://open.spotify.com/playlist/1nyWcB493Lb26W9rpKyh7Y"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src="https://pub-88284dcd109849ecb2081e535622d2f5.r2.dev/Primary_Logo_Black_RGB.svg"
                width="35px"
                height="35px"
                alt="Spotify"
              />
            </Link>
          </Box>

          <Link href="/" text-decoration="none">
            <Image
              src="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/TrackDigger.svg?v=2025-06-12T13:46:43.953Z"
              width="200px"
              max-width="100%"
              height="auto"
              alt="Logo Trackdigger"
              margin="20px 0px 0px 0px"
            />
          </Link>
          <SlideMenu />
        </Section>

        {/* Contenu principal */}
        <Section background="#ffffff" padding="120px 0 40px 0">
       <Override
  slot="SectionContent"
  max-width="1200px"
  margin="0 auto"
  padding="0 20px"
  display="block"
/>

          <Text
  as="h1"
  margin="0 0 16px 0"
  style={{
    fontFamily: "'Black Ops One', sans-serif",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "1.2",
    color: "#000"
  }}
>
  Propose ton son
</Text>
          <Text font="--base" color="#555555" margin="0 0 40px 0">
            Soumets ton morceau à la communauté TrackDiggers pour tenter d'intégrer la playlist officielle.
          </Text>

         <Components.Proposeform />
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
          <Text font="--base" margin="0 0 10px 0" color="--dark">
            © 2025 Trackdiggers — ATK Music
          </Text>
          <Text font="--base" color="--dark">
            <Link href="/informations-legales" margin="0 10px">
              Mentions légales
            </Link>
            {" | "}
            <Link href="/informations-legales" margin="0 10px">
              Politique de confidentialité
            </Link>
            {" | "}
            <Link href="/informations-legales" margin="0 10px">
              CGU
            </Link>
          </Text>

          <Box
            margin="24px 0 0 0"
            display="flex"
            gap="40px"
            justify-content="center"
            align-items="center"
          >
            <Link href="https://instagram.com/trackdiggers" target="_blank">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                width="32px"
                alt="Instagram"
                margin="0 20px"
              />
            </Link>
            <Link href="https://tiktok.com/@trackdiggers" target="_blank">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                width="32px"
                alt="TikTok"
                margin="0 20px"
              />
            </Link>
            <Link href="https://x.com/track_diggers" target="_blank">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png"
                width="32px"
                alt="X (Twitter)"
                margin="0 20px"
              />
            </Link>
          </Box>
        </Section>
      </Theme>
    </Layout>
  );
}