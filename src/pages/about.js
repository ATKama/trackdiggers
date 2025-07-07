import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { Image } from "@quarkly/widgets";

const AboutPage = () => {
  return (
    <Theme theme={theme}>
      <GlobalQuarklyPageStyles pageUrl={"about"} />
      <Helmet>
        <title>À propos | Trackdiggers</title>
        <meta
          name="description"
          content="Trackdiggers, c’est la plateforme qui te connecte aux sons les plus chauds des artistes émergents. Découvre notre histoire."
        />
        <meta property="og:title" content="À propos de Trackdiggers" />
        <meta
          property="og:description"
          content="Derrière Trackdiggers, une mission : faire découvrir les talents cachés grâce à des outils de recherche, de vote et de collection musicale."
        />
        <meta
          property="og:image"
          content="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20(64%20x%2064%20px).png"
        />
        <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://trackdiggers.com/about/" /></Helmet>
      <Section
                padding="0px 0 16px 0"
                quarkly-title="Header"
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
                <Box
                  style={{
                    position: "fixed",
                    top: "20px",
                    right: "12px",
                    zIndex: 1100
                  }}
                >
                  <Link
                    href="https://open.spotify.com/playlist/1nyWcB493Lb26W9rpKyh7Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Image
                      src="https://pub-88284dcd109849ecb2081e535622d2f5.r2.dev/Primary_Logo_Black_RGB.svg"
                      width="35x"
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
					sm-margin="20px 0px 0px 0px"
					xl-margin="20px 0px 0px 0px"
                    />
                </Link>
            </Section>
      <Section padding="100px 0px 40px 0px" background="#ffffff">
        <Override slot="SectionContent" max-width="900px" margin="0 auto" />
        <Text as="h1" font="--headline2" margin="0 0 24px 0" color="#000000" text-align="center">
          À propos de Trackdiggers
        </Text>
        <Text font="--lead" color="#000000" margin="0 0 24px 0" text-align="center">
          Trackdiggers, c’est bien plus qu’un site. C’est un terrain de jeu pour les amoureux de musique, un tremplin pour les artistes en devenir et un terrain neutre où seul le son parle.
        </Text>
        <Text font="--base" color="#333333" margin="0 0 16px 0">
          Notre mission ? Te faire kiffer des morceaux que t’aurais jamais croisé sur les plateformes classiques. Ici, c’est ton mood qui choisit, pas les algorithmes poussés par les majors. On valorise l’humain, la vibe et le potentiel brut.
        </Text>
        <Text font="--base" color="#333333" margin="0 0 16px 0">
          Tous les jours, tu peux découvrir de nouveaux artistes, voter pour faire monter ceux que tu kiffes, et même collectionner des cartes numériques uniques en lien avec tes coups de cœur.
        </Text>
        <Text font="--base" color="#333333" margin="0 0 32px 0">
          Trackdiggers a été conçu pour toi, que tu sois digger dans l’âme, artiste qui débute ou juste curieux de sortir de ta bulle musicale. On garde un ton cool, mais on bosse dur pour rendre chaque interaction fluide, utile et stylée.
        </Text>

        <Box
          background="#f0f0f0"
          border-radius="12px"
          padding="24px"
          text-align="center"
          margin="40px 0"
        >
          <Text font="--lead" margin="0 0 16px 0">
            🔥 Un grand merci à la communauté qui fait vivre ce projet. Tu votes, tu proposes, tu découvres… t’es la base de tout ça.
          </Text>
          <Text font="--base" color="#444">
            Rejoins-nous et continue de creuser le futur de la musique indépendante.
          </Text>
        </Box>

        <Box display="flex" justify-content="center">
          <Link
            href="/"
            background="#000"
            color="#fff"
            padding="12px 24px"
            border-radius="8px"
            text-decoration="none"
            font="--base"
          >
            Retour à l’accueil
          </Link>
        </Box>
      </Section>

      <Components.SlideMenu bottom="-80px" height="auto" left="0" right="0" top="0" width="100%" />
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
                <Link href="/informations-legales/" margin="0 10px">
                    Mentions légales
                </Link>
                {" "}|{"\n    "}
                <Link href="/informations-legales/" margin="0 10px">
                    Politique de confidentialité
                </Link>
                {" "}|{"\n    "}
                <Link href="/informations-legales/" margin="0 10px">
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

export default AboutPage;