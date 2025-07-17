/* global grecaptcha */
import React, { useState, useEffect } from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import SlideMenu from "../components/SlideMenu"; 
import Layout from "../components/layout";

export default function IndexPage() {
  useEffect(() => {
	const interval = setInterval(() => {
		if (window.grecaptcha && document.getElementById("recaptcha-container")) {
			clearInterval(interval);
			window.grecaptcha.render("recaptcha-container", {
				sitekey: "6Ld1p4ArAAAAAPcqUMRFmI9AEJrZ94wfv2Br0BA9"
			});
		}
	}, 300);
	return () => clearInterval(interval);
}, []);

	return (
		<Layout pageUrl="index">

		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home TrackDiggers | Recherche par mood
			</title>
			<meta name={"description"} content={"Trackdiggers te propose des sons d’artistes émergents en fonction de ton humeur. Trouve les morceaux qui matchent ton mood, découvre, vote et collectionne des cartes digitales exclusives."} />
			<meta property={"og:title"} content={"Découvre les morceaux qui matchent ton mood – Trackdiggers"} />
			<meta property={"og:description"} content={"Trouve des sons d’artistes émergents selon ton humeur et collectionne les cartes numériques des meilleurs morceaux."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<meta name={"msapplication-TileColor"} content={"#000000"} />
			<link rel="canonical" href="https://trackdiggers.com" />
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1398071244867525"
     crossorigin="anonymous"></script>
	 <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Trackdiggers",
  "url": "https://trackdiggers.com",
  "logo": "https://uploads.quarkly.io/682f25cf9335410018cc8538/images/TrackDigger.svg?v=2025-06-12T13:46:43.953Z",
  "sameAs": [
    "https://instagram.com/trackdiggers",
    "https://tiktok.com/@trackdiggers",
    "https://x.com/track_diggers",
    "https://soundcloud.com/trackdiggers",
    "https://open.spotify.com/playlist/1nyWcB493Lb26W9rpKyh7Y"
  ]
}
`}
</script>
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
			style={{
    minHeight: "1400px" }}
		>
			<Override
	slot="SectionContent"
	display="block"
	width="100%"
	max-width="100%"
	padding="80px 10px 0px 10px"
/>			
<Box
  max-width="1100px"
  width="100%"
  margin="0 auto"
  padding="0 8px"
  sm-padding="0 0px"
  box-sizing="border-box"
>
  <Box
    background="#f0f0f0"
    padding="16px"
    border-radius="12px"
    text-align="center"
    margin="0 0 24px 0"
    box-sizing="border-box"
  >
    <Text as="h1" font="--lead" color="--dark" margin="0" display="inline" className="force-inter">
      <Text //efface
        as="span"
        color="--light"
        background="#000000"
        padding="4px 8px"
        border-radius="6px"
        margin="0 6px 0 0"
        display="inline-block"
		className="force-inter"
      >
        TrackDiggers
      </Text>
      
c’est ton outil pour dénicher des morceaux d’artistes en pleine ascension. Décris ton mood, on te balance les trois morceaux qui match le mieux !

    </Text>
  </Box>
<Box
    style={{
      backgroundColor: "#ffffff",
      padding: "10px",
      borderRadius: "20px",
      textAlign: "center",
      margin: "32px auto",
      maxWidth: "1100px",
      boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0px"
    }}
  >
	
<Box
  style={{
    backgroundColor: "rgba(31, 31, 31, 0.7)", // semi-transparent
    padding: "12px 20px",
    borderRadius: "12px",
    display: "inline-block",
    marginBottom: "0px",
    backdropFilter: "blur(6px)", // floutage du fond autour
    WebkitBackdropFilter: "blur(6px)", // pour compatibilité Safari
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)" // flou autour pour renforcer l’effet
  }}
>
  <Text
    as="h2"
    fontSize="28px"
    fontWeight="900"
    color="#fff"
    style={{
      fontFamily: "'Black Ops One', sans-serif",
      textTransform: "uppercase",
      letterSpacing: "1px",
      textShadow: "2px 2px 0 #000, 4px 4px 6px rgba(0, 0, 0, 0.6)",
      margin: 0,
    }}
  >
    T’as une vibe en tête ?
  </Text>
</Box>

<Text
  fontSize="16px"
  fontWeight="600"
  color="#000000"
  fontStyle="italic"
  style={{
    textShadow: "0.3px 0.3px 0 #000",
	marginBottom: "10px"
  }}
>
  ⬇︎ TAPE ICI ⬇︎
</Text>

    {/* Barre de recherche intégrée */}
    <Components.Html2
      sm-margin="0px"
      margin="0px"
      width="100%"
      max-width="100%"
      display="block"
    />
</Box> {/* ✅ Fermeture du Box global */}
</Box>

</Section>
<Box
  background="#ffffff"
  padding="12px 16px"
  border-radius="12px"
  text-align="center"
  margin="0 0 24px 0"
  box-sizing="border-box"
  display="flex"
  align-items="center"
  justify-content="center"
  flex-direction="column"
>
  <Text font="--base" color="--dark" margin="0 0 8px 0" className="force-inter">
    Tous les morceaux sélectionnés sont maintenant regroupés dans notre playlist <strong>Spotify TrackDiggers</strong> 
  </Text>
  <Link
    href="https://open.spotify.com/playlist/1nyWcB493Lb26W9rpKyh7Y"
    target="_blank"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "#1DB954",
      color: "#fff",
      padding: "10px 16px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold"
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
      alt="Spotify logo"
      style={{ width: "20px", height: "20px" }}
    />
    Écouter la playlist
  </Link>
</Box>
<Section padding="60px 0px" background="#f9f9f9">
  <Box max-width="900px" margin="0 auto" text-align="center">
    <Text as="h2" font="--headline2" margin="0 0 24px 0" color="#000000">
      La mission de Trackdiggers
    </Text>
    <Text font="--lead" color="#444444" margin="0 0 32px 0">
      Trackdiggers a été créé pour offrir une vraie alternative aux plateformes dominantes : plus humaine, plus audacieuse, plus sincère. Notre mission : dénicher et faire briller les artistes émergents en proposant une découverte musicale guidée par l’émotion.
    </Text>
    <Link
      href="/about"
      background="#000"
      color="#fff"
      padding="12px 24px"
      border-radius="30px"
      font="--base"
      text-decoration="none"
      transition="all 0.3s ease"
      hover-transform="scale(1.05)"
    >
      En savoir plus
    </Link>
  </Box>
</Section>
<Section padding="80px 24px 0px 0px" background="#ffffff" sm-padding="50px 0px 0px 0px" style={{
    minHeight: "850px" }}> 
  <Override slot="SectionContent" max-width="1000px" margin="0 auto" />
  
  <Text
    as="h2"
    font="--headline2"
    margin="0 0 60px 0"
    text-align="center"
    color="#000000"
  >
    Des outils pour les Diggers
  </Text>

<Box
  display="flex"
  flex-wrap="wrap"
  justify-content="center"
  align-items="stretch"
  width="100%"
  max-width="1200px"
  margin="0 auto"
  style={{
    gap: "40px",
    rowGap: "60px",
  }}
>

    {/* Bloc 1 */}
    <Box
      background="#f6f6f6"
      border-radius="20px"
      padding="24px 16px"
      text-align="center"
      width="200px"
      box-shadow="0 0 0 1px rgba(0,0,0,0.05)"
      display="flex"
      flex-direction="column"
    >
      <Text font="36px" margin-bottom="16px">🔍</Text>
      <Text font="--lead" margin="0 0 10px 0" font-weight="700">Recherche par mood</Text>
      <Text font="--base" margin="0 0 20px 0" color="#444">Décris ton mood et découvre instantanément des morceaux qui te correspondent. Une expérience musicale unique, personnalisée et émotionnelle.</Text>
      <Link
        href="#mood"
        background="#000"
        color="#fff"
        padding="10px 16px"
        border-radius="30px"
        font="--base"
        text-decoration="none"
        margin-top="auto"
      >
        Tester
      </Link>
    </Box>

    {/* Bloc 2 */}
    <Box
      background="#f6f6f6"
      border-radius="20px"
      padding="24px 16px"
      text-align="center"
      width="200px"
      box-shadow="0 0 0 1px rgba(0,0,0,0.05)"
      display="flex"
      flex-direction="column"
    >
      <Text font="36px" margin-bottom="16px">🎴</Text>
      <Text font="--lead" margin="0 0 10px 0" font-weight="700">Cartes collector</Text>
      <Text font="--base" margin="0 0 20px 0" color="#444">Gagne des cartes numériques exclusives en découvrant de nouveaux sons. Chaque carte est unique, numérotée et à collectionner.</Text>
      <Link
        href="#booster"
        background="#000"
        color="#fff"
        padding="10px 16px"
        border-radius="30px"
        font="--base"
        text-decoration="none"
        margin-top="auto"
      >
        Découvrir
      </Link>
    </Box>

    {/* Bloc 3 */}
    <Box
      background="#f6f6f6"
      border-radius="20px"
      padding="24px 16px"
      text-align="center"
      width="200px"
      box-shadow="0 0 0 1px rgba(0,0,0,0.05)"
      display="flex"
      flex-direction="column"
    >
      <Text font="36px" margin-bottom="16px">📥</Text>
      <Text font="--lead" margin="0 0 10px 0" font-weight="700">Vote pour les sons</Text>
      <Text font="--base" margin="0 0 20px 0" color="#444">Fais entendre ta voix ! Chaque vote influence la sélection officielle des meilleurs sons émergents.</Text>
      <Link
        href="/votes"
        background="#000"
        color="#fff"
        padding="10px 16px"
        border-radius="30px"
        font="--base"
        text-decoration="none"
        margin-top="auto"
      >
        Voter
      </Link>
    </Box>

    {/* Bloc 4 */}
    <Box
      background="#f6f6f6"
      border-radius="20px"
      padding="24px 16px"
      text-align="center"
      width="200px"
      box-shadow="0 0 0 1px rgba(0,0,0,0.05)"
      display="flex"
      flex-direction="column"
    >
      <Text font="36px" margin-bottom="16px">📤</Text>
      <Text font="--lead" margin="0 0 10px 0" font-weight="700">Proposer un son</Text>
      <Text font="--base" margin="0 0 20px 0" color="#444">Tu es artiste ? Propose ton son et tente d’intégrer la prochaine sélection Trackdiggers. Mets ta musique entre les mains de vrais auditeurs.</Text>
      <Link
        href="https://airtable.com/app6jjhoCkgO9tcDB/pagiKds3fkQEmlWqp/form"
        background="#000"
        color="#fff"
        padding="10px 16px"
        border-radius="30px"
        font="--base"
        text-decoration="none"
        margin-top="auto"
      >
        Proposer
      </Link>
    </Box>

    {/* Bloc 5 */}
    <Box
      background="#f6f6f6"
      border-radius="20px"
      padding="24px 16px"
      text-align="center"
      width="200px"
      box-shadow="0 0 0 1px rgba(0,0,0,0.05)"
      display="flex"
      flex-direction="column"
    >
      <Text font="36px" margin-bottom="16px">🗞️</Text>
      <Text font="--lead" margin="0 0 10px 0" font-weight="700">Actualités & News</Text>
      <Text font="--base" margin="0 0 20px 0" color="#444">Suis les dernières news de la scène, les mises à jour de la plateforme et les pépites musicales sélectionnées par les diggers.</Text>
      <Link
        href="/actus"
        background="#000"
        color="#fff"
        padding="10px 16px"
        border-radius="30px"
        font="--base"
        text-decoration="none"
        margin-top="auto"
      >
        Lire
      </Link>
    </Box>
	    <Box
      background="#f6f6f6"
      border-radius="20px"
      padding="24px 16px"
      text-align="center"
      width="200px"
      box-shadow="0 0 0 1px rgba(0,0,0,0.05)"
      display="flex"
      flex-direction="column"
    >
      <Text font="36px" margin-bottom="16px">⛏️</Text>
      <Text font="--lead" margin="0 0 10px 0" font-weight="700">À propos</Text>
      <Text font="--base" margin="0 0 20px 0" color="#444">Apprends comment est né TrackDiggers et pourquoi ce projet met la lumière sur les talents de demain.</Text>
      <Link
        href="/about"
        background="#000"
        color="#fff"
        padding="10px 16px"
        border-radius="30px"
        font="--base"
        text-decoration="none"
        margin-top="auto"
      >
        Lire
      </Link>
    </Box>
  </Box>
</Section>
		<Section id="booster" background="white" color="--dark" padding="64px 0 50px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" sm-background="#ffffff" justify-content="center" >
				{"  "}
				<Box padding="0px 0px 0px 0px" width="50%" lg-width="100%" margin="0 auto">
					{"    "}
					<Box>
						{"      "}
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
							marginBotton="30px"
							text-align="center"
							text-shadow="1px 1px 2px rgba(0, 0, 0, 0.8)"
						>
							🎴 BOOSTER collector
						</Text>
						<Text font="normal 900 30px/1.2 --fontFamily-sans" max-width="500px" text-align="center" text-shadow="1px 1px 2px rgba(0, 0, 0, 0.8)" margin="0 auto">
							Tu veux collectionner ces morceaux ?{" "}
							<br />
							Reçois tes cartes Trackdiggers uniques !
						</Text>
						<Box
							background="rgba(200, 200, 200, 0.2)"
							border="1px solid rgba(0, 0, 0, 0.1)"
							border-radius="10px"
							padding="12px 16px"
							backdrop-filter="blur(2px)"
							margin="16px 0 0 0"
						>
							<Text font="--base" color="--dark" text-shadow="1px 1px 2px rgba(0, 0, 0, 0.8)" margin="0">
								Tu peux réclamer un seul pack par jour. Chaque carte est numérotée et ne sera jamais réattribuée. Ton adresse reste confidentielle.
							</Text>
						</Box>
						{"    "}
					</Box>
					{"  "}
				</Box>
				{"  "}
				<Box
	width="50%"
	padding="8px 8px 8px 8px"
	lg-width="100%"
	sm-background="#f0f0f0"
	sm-border-radius="12px"
	sm-padding="16px"
	sm-margin="0px auto 40px auto"
	sm-max-width="700px"
	sm-text-align="center"
>
	<form
	style={{ display: "grid", gap: "16px" }}
	onSubmit={async (e) => {
		e.preventDefault();
		const form = e.target;
		const titles = Array.from(document.querySelectorAll(".track")).slice(0, 3).map(track => {
	const title = track.querySelector(".track-title")?.textContent?.trim() || "";
	const artist = track.querySelector(".track-artist")?.textContent?.trim() || "";
	return `${title} - ${artist}`;
});

form.track1.value = titles[0] || "";
form.track2.value = titles[1] || "";
form.track3.value = titles[2] || "";
		const email = form.email.value;
		const track1 = form.track1.value;
		const track2 = form.track2.value;
		const track3 = form.track3.value;
		const consentCartes = form.consentCartes.checked;
		const consentNews = form.consentNews.checked;

		const output = document.getElementById("pack-result");
		if (grecaptcha.getResponse() === "") {
	const output = document.getElementById("pack-result");
	output.innerHTML = "❌ Tu dois valider le captcha avant d'envoyer le formulaire.";
	return;
}
		output.innerHTML = "⏳ Traitement en cours...";

		if (!consentCartes) {
			output.innerHTML = "❌ Tu dois accepter de recevoir les cartes par e-mail.";
			return;
		}

		try {
			const captchaToken = grecaptcha.getResponse(); // ✅ ligne à ajouter ici
			const response = await fetch("https://n8n.atkmusic.fr/webhook/receive-pack-request", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams({
					email,
					track1,
					track2,
					track3,
					consentCartes,
					consentNews,
					'g-recaptcha-response': captchaToken,
				}),
			});

			const text = await response.text();

			if (response.status === 409) {
				output.innerHTML = `⛔️ Tu as déjà réclamé un pack aujourd’hui.<br><br>👉 <a href="https://trackdiggers.com/cartes/" target="_blank" rel="noopener noreferrer">Voir mes cartes</a>`;
			} else if (response.status >= 200 && response.status < 300) {
				output.innerHTML = `🎉 Ton pack a bien été envoyé !<br><br>👉 <a href="https://trackdiggers.com/cartes/" target="_blank" rel="noopener noreferrer">Voir mes cartes</a>`;
			} else {
				output.innerHTML = `❌ Erreur inattendue (${response.status}) : ${text}`;
			}
		} catch (error) {
			output.innerHTML = "❌ Problème réseau. Vérifie ta connexion.";
		}
	}}
>
	<label style={{ display: "flex", flexDirection: "column", width: "100%" }}>
		<span style={{ marginBottom: "4px", color: "#000" }}>Ton adresse e-mail :</span>
		<input type="email" name="email" required style={{ width: "100%", padding: "8px" }} />
	</label>
	<input type="hidden" name="track1" id="track1" value="" />
	<input type="hidden" name="track2" id="track2" value="" />
	<input type="hidden" name="track3" id="track3" value="" />
	<label style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
		<input type="checkbox" name="consentCartes" required /> J'accepte de recevoir mes cartes Trackdiggers par e-mail
	</label>
	<label style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
		<input type="checkbox" name="consentNews" /> Je souhaite recevoir des nouveautés Trackdiggers
	</label>
	<a href="/informations-legales" style={{ fontSize: "12px", color: "#666" }}>Voir la politique de confidentialité</a>
	<button
		type="submit"
		style={{
			padding: "10px 20px",
			background: "#000",
			color: "#fff",
			borderRadius: "8px",
			fontWeight: "bold",
			boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
			transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease"
		}}
	>
		Réclamer mon pack 🎁
	</button>
	<div id="recaptcha-container" style={{ marginTop: "10px" }}></div>
</form>

{/* 🔽 Ce bloc doit être placé juste en dessous du formulaire pour afficher le résultat */}
<div
	id="pack-result"
	style={{
		marginTop: "1rem",
		background: "#fff",
		padding: "1rem",
		borderRadius: "8px",
		border: "1px solid #ccc",
		textAlign: "center",
		color: "#000",
		fontSize: "14px"
	}}
	dangerouslySetInnerHTML={{
		__html: `👉 <a href="https://trackdiggers.com/cartes/" target="_blank" rel="noopener noreferrer">Voir mes cartes</a>`
	}}
></div>
</Box>
			</Box>
		</Section>
		
<Section padding="40px 24px 0px 0px" background="#ffffff" sm-padding="0px 0px 80px 0px"> 
  <Override slot="SectionContent" flex-direction="column" align-items="center" />
  <Text as="h2" font="--headline2" margin="0 0 48px 0" text-align="center" color="#000000">
    Comment ça marche ?
  </Text>
  <Box
   display="flex"
  flex-wrap="wrap"
  justify-content="center"
  align-items="stretch"
  width="100%"
  max-width="1200px"
  margin="0 auto"
  style={{
    gap: "40px",
    rowGap: "60px",
  }}
  >
    {/* Bloc 1 */}
    <Box
      width="200px"
      background="#f9f9f9"
      padding="24px"
      border-radius="16px"
      box-shadow="0 4px 12px rgba(0, 0, 0, 0.05)"
      text-align="center"
    >
      <Text font="40px" margin-bottom="16px">🧠</Text>
      <Text font="--lead" font-weight="700" margin="0 0 8px 0">
        Analyse par IA
      </Text>
      <Text font="--base" color="#444">
        Chaque recherche est traitée par une intelligence artificielle qui comprend ton mood à partir du texte que tu écris.
      </Text>
    </Box>

    {/* Bloc 2 */}
    <Box
      width="200px"
      background="#f9f9f9"
      padding="24px"
      border-radius="16px"
      box-shadow="0 4px 12px rgba(0, 0, 0, 0.05)"
      text-align="center"
    >
      <Text font="40px" margin-bottom="16px">📊</Text>
      <Text font="--lead" font-weight="700" margin="0 0 8px 0">
        Filtrage intelligent
      </Text>
      <Text font="--base" color="#444">
        L'IA compare ton intention avec notre base de sons, en croisant mood, ambiance, énergie et style pour te proposer les meilleurs matchs.
      </Text>
    </Box>

    {/* Bloc 3 */}
    <Box
      width="200px"
      background="#f9f9f9"
      padding="24px"
      border-radius="16px"
      box-shadow="0 4px 12px rgba(0, 0, 0, 0.05)"
      text-align="center"
    >
      <Text font="40px" margin-bottom="16px">🗳️</Text>
      <Text font="--lead" font-weight="700" margin="0 0 8px 0">
        Votes & seuils
      </Text>
      <Text font="--base" color="#444">
        Quand un morceau reçoit 50 votes, il est automatiquement validé et passe dans la sélection officielle.
      </Text>
    </Box>

    {/* Bloc 4 */}
    <Box
      width="200px"
      background="#f9f9f9"
      padding="24px"
      border-radius="16px"
      box-shadow="0 4px 12px rgba(0, 0, 0, 0.05)"
      text-align="center"
    >
      <Text font="40px" margin-bottom="16px">🎴</Text>
      <Text font="--lead" font-weight="700" margin="0 0 8px 0">
        Génération de cartes
      </Text>
      <Text font="--base" color="#444">
        Une carte numérique unique est alors générée pour le morceau validé, avec numéro, visuel, et lien direct.
      </Text>
    </Box>
  </Box>
</Section>
		<Section padding="80px 0" sm-padding="0px 0 0px 0">
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0 auto"
				sm-margin="0 auto"
				sm-padding="0px"
			/>
			<Text
				as="p"
				font="--lead"
				margin="0px 0 0px 0"
				text-align="center"
				sm-color="#000000"
				color="#000000"
				sm-margin="0 0 0px 0"
			>
				<Strong>
					Les TrackDiggers ont sélectionné les morceaux que tu vois ici.
				</Strong>
				<br />
				<br />
				<Strong>
					Si t’es artiste ou juste passionné de son, tu peux toi aussi participer.{" "}
				</Strong>
				<div>
					<Strong>
						Ça se passe juste ici !
					</Strong>
				</div>
			</Text>
			<Link
				href="/votes"
				text-decoration-line="none"
				color="--light"
				font="--lead"
				padding="1rem 2rem"
				border-radius="10px"
				background="#222222"
				transition="transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease"
				box-shadow="0px 4px 12px rgba(0, 0, 0, 0.3)"
				hover-transform="scale(1.05)"
				hover-box-shadow="0px 6px 18px rgba(255, 255, 255, 0.2)"
				hover-background="#444444"
				active-transform="scale(0.97)"
				active-box-shadow="0px 3px 8px rgba(255, 255, 255, 0.1)"
				display="inline-block"
				text-align="center"
				font-weight="700"
				margin-bottom="8px"
				margin="20px 0px 8px 0px"
			>
				Deviens un DIGGER
			</Link>
			<Box margin="24px 0 0 0" display="flex" justify-content="center">
  <Link
    href="https://forms.gle/eBhbSL1Xd9zXch4P6"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding: "12px 24px",
      backgroundColor: "#ff0000",
      color: "#ffff",
      borderRadius: "8px",
      fontWeight: "bold",
      textDecoration: "none",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
	    display: "flex", // ← ajout
      alignItems: "center", // ← ajout
      justifyContent: "center", // ← ajout
      textAlign: "center", // ← optionnel mais utile
      whiteSpace: "normal", // ← permet le retour à la ligne si besoin sur mobile
    }}
    onMouseOver={e => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.3)";
    }}
    onMouseOut={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    }}
  >
    💬 Donne ton avis sur Trackdiggers
  </Link>
</Box>
		</Section>
				<Section padding="20px 0" background="#ffffff" border-radius="30px">
			<Override slot="SectionContent" max-width="720px" margin="0 auto" text-align="center" />
			<Components.contactsection sm-margin="0px" margin="0px" width="100%" max-width="100%" display="block" border-radius="100px" />
		</Section>
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
		</Layout>
	);
}
