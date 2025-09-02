import React, { useState } from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import Layout from "../components/layout";
import SlideMenu from "../components/SlideMenu"; 


const IntroTextePlaylist = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);

  return (
    <Box
      background="#f0f0f0"
      padding="16px"
      border-radius="12px"
      max-width="1000px"
      margin="0px auto 40px auto"
      text-align="center"
      sm-margin="0px auto 40px auto"
    >
      <Text as="h1" font="--lead" color="--dark" margin="0" display="inline">
        {`Découvre les morceaux sélectionnés pour la playlist TrackDiggers !\n\nExplore la sélection du moment, like tes coups de cœur et contribue à faire vivre la vibe.`}
        {!expanded && "... "}
        {expanded &&
          " Tu peux soutenir tes sons favoris en les likant. Chaque like est un signal fort pour faire rayonner un morceau dans notre playlist officielle !"}
      </Text>
      <button
        onClick={handleToggle}
        style={{
          background: "none",
          border: "none",
          padding: "0",
          fontSize: "16px",
          color: "#999999",
          cursor: "pointer",
          marginTop: "12px",
        }}
      >
        {expanded ? "Voir moins ▲" : "Afficher la suite"}
      </button>
    </Box>
  );
};

export default function PlaylistPage() {
  return (
    <Layout pageUrl="playlist">
      <Theme theme={theme}>
        <GlobalQuarklyPageStyles pageUrl={"playlist"} />
        <Helmet>
          <title>Playlist TrackDiggers – Les sons sélectionnés</title>
          <meta name="description" content="Découvre les morceaux choisis pour la playlist TrackDiggers. Like tes préférés et aide-les à rester dans la sélection !" />
          <meta property="og:title" content="Playlist officielle TrackDiggers" />
          <meta property="og:description" content="Explore la sélection musicale TrackDiggers et like les sons que tu adores !" />
          <meta property="og:image" content="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z" />
        </Helmet>
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
			<SlideMenu />
		</Section>
        <Section
          background="#ffffff"
          border-style="solid"
          box-shadow="0 0 0 0 #000000"
          sm-background="#ffffff"
          color="#000000"
          border-width="0px"
        >
          <Override
            slot="SectionContent"
            display="flex"
            flex-direction="column"
            align-items="center"
            justify-content="center"
            padding="80px 20px 0px 20px"
            max-width="1200px"
            margin="0 auto"
          />

       <Text as="h1" font="--lead" color="--dark" margin="0" display="inline" marginbottom="10px">
          <Text
  as="h1"
  style={{
    fontFamily: "'Black Ops One', sans-serif",
    fontSize: "2rem",
    color: "#111",
    marginBottom: "10px",
    textAlign: "center"
  }}
>
  Playlist officielle TrackDiggers
</Text>
          </Text>

          <Text
            font="--base"
            color="#555555"
            margin="0 0 20px 0"
            text-align="center"
          >
            Chaque like renforce la présence du son dans notre playlist. Tu participes à la mise en avant des artistes !
          </Text>
        </Section>

        <Section background="#ffffff" margin="-40px 0 0 0" sm-margin="-60px 0 0 0" quarkly-title="CORPS">
          <Override slot="SectionContent" border-color="#ffffff" />
          <Components.Playlist />
        </Section>

        <IntroTextePlaylist />
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
    </Layout>
  );
}