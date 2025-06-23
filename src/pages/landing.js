// ✅ Page de Landing stylée Trackdiggers pour recruter des bêta-testeurs
import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";

export default (() => {
  return (
    <Theme theme={theme}>
      <GlobalQuarklyPageStyles pageUrl="landing" />
      <Helmet>
        <title>Rejoins les TrackDiggers !</title>
        <meta name="description" content="Participe à la version bêta privée de Trackdiggers et deviens acteur de la découverte musicale indépendante. Teste, vote, propose !" />
        <meta property="og:title" content="Trackdiggers — bêta testeurs" />
        <meta property="og:description" content="Rejoins notre communauté d’explorateurs musicaux et accède aux fonctionnalités exclusives avant tout le monde." />
        <meta property="og:image" content="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/TrackDigger_BetaCover.png" />
      </Helmet>

      <Section padding="64px 0" background="#ffffff">
        <Override slot="SectionContent" max-width="900px" margin="0 auto" text-align="center" />
        <Image
          src="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/TrackDigger.svg"
          width="220px"
          margin="0 auto 24px auto"
        />
        <Text font="--headline2" margin="0 0 16px 0">
          Rejoins la bêta fermée de Trackdiggers
        </Text>
        <Text font="--lead" max-width="700px" margin="0 auto">
          Découvre en avant-première une nouvelle façon d'explorer la musique.
          Teste notre moteur de recommandation basé sur le mood, participe au vote des meilleurs sons et collectionne des cartes digitales exclusives.
        </Text>
   <Box
	margin="40px auto 0 auto"
	width="100%"
	max-width="700px"
	height="auto"
	position="relative"
	padding-bottom="56.25%"
	overflow="hidden"
	border-radius="16px"
	box-shadow="0px 4px 16px rgba(0,0,0,0.2)"
>
	<iframe
		src="https://www.youtube.com/embed/ID_DE_LA_VIDEO"
		title="Présentation Trackdiggers"
		style={{
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			border: "0",
		}}
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
	/>
</Box>
      </Section>

      <Section padding="48px 0" background="#f0f0f0">
        <Override slot="SectionContent" max-width="800px" margin="0 auto" text-align="center" />
        <Text font="--headline3" margin="0 0 24px 0">
          🔥 Pourquoi devenir bêta testeur ?
        </Text>
        <Text font="--base" margin="0 0 16px 0">
          - Tu accèdes à toutes les fonctionnalités avant le grand public
        </Text>
        <Text font="--base" margin="0 0 16px 0">
          - Tu peux influencer les choix de développement de la plateforme
        </Text>
        <Text font="--base" margin="0 0 16px 0">
          - Tu gagnes des cartes Trackdiggers en avant-première
        </Text>
        <Text font="--base" margin="0 0 16px 0">
          - Tu participes à une communauté de passionnés de son indé 🔊
        </Text>
      </Section>

      <Section padding="64px 0" background="#ffffff">
        <Override slot="SectionContent" max-width="600px" margin="0 auto" text-align="center" />
        <Text font="--headline3" margin="0 0 24px 0">
          💌 Reçois ton accès privé maintenant
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html: `<form style="display:grid; gap:16px;" onsubmit="event.preventDefault(); const email = this.email.value; fetch('https://n8n.atkmusic.fr/webhook/landing-beta-inscription', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ email }) }).then(r => r.ok ? alert('🎉 Tu es inscrit !') : alert('❌ Erreur lors de l\'inscription')).catch(() => alert('❌ Problème réseau'))">
              <label style="text-align:left">
                Ton adresse e-mail :
                <input type="email" name="email" required style="width:100%; padding:10px; margin-top:8px; border-radius:8px;"/>
              </label>
              <button type="submit" style="padding:12px; background:#000; color:#fff; border-radius:8px; font-weight:bold;">Je veux rejoindre la bêta 🚀</button>
            </form>`
          }}
        />
      </Section>

      <Section padding="32px 0" background="#ffffff">
        <Override slot="SectionContent" text-align="center" />
        <Text font="--base" color="--dark">
          © 2025 Trackdiggers — ATK Music | <Link href="/informations-legales">Mentions légales</Link>
        </Text>
      </Section>
    </Theme>
  );
});