import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Recherche par mood
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
			<Box
				background="#f0f0f0"
				padding="16px"
				border-radius="12px"
				max-width="700px"
				margin="0px auto 0px auto"
				text-align="center"
				sm-margin="0px auto 20px auto"
			>
				<Text font="--lead" color="--dark" margin="0" display="inline">
					<Text
						as="span"
						color="--light"
						background="rgba(0, 0, 0, 0.81)"
						padding="4px 8px"
						border-radius="6px"
						margin="0 6px 0 0"
						display="inline-block"
					>
						TrackDiggers
					</Text>
					c’est ton outil pour dénicher des morceaux d’artistes en pleine ascension. Décris ton mood, on te balance les trois morceaux qui match le mieux !
				</Text>
			</Box>
			<Components.Html2 sm-padding="0px" sm-margin="-50px 0px 0px 0px" margin="0px 0px 0px 0px" />
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" sm-background="#ffffff">
				{"  "}
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					{"    "}
					<Box>
						{"      "}
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
							text-shadow="1px 1px 2px rgba(0, 0, 0, 0.8)"
						>
							🎴 BOOSTER collector
						</Text>
						<Text font="normal 900 30px/1.2 --fontFamily-sans" max-width="500px" margin="10px 0 0 0" text-shadow="1px 1px 2px rgba(0, 0, 0, 0.8)">
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
		const email = form.email.value;
		const track1 = form.track1.value;
		const track2 = form.track2.value;
		const track3 = form.track3.value;
		const consentCartes = form.consentCartes.checked;
		const consentNews = form.consentNews.checked;

		const output = document.getElementById("pack-result");
		output.innerHTML = "⏳ Traitement en cours...";

		if (!consentCartes) {
			output.innerHTML = "❌ Tu dois accepter de recevoir les cartes par e-mail.";
			return;
		}

		try {
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
				}),
			});

			const text = await response.text();

			if (response.status === 409) {
				output.innerHTML = `⛔️ Tu as déjà réclamé un pack aujourd’hui.<br><br>👉 <a href="https://trackdiggers.pages.dev/cartes" target="_blank" rel="noopener noreferrer">Voir mes cartes</a>`;
			} else if (response.status >= 200 && response.status < 300) {
				output.innerHTML = `🎉 Ton pack a bien été envoyé !<br><br>👉 <a href="https://trackdiggers.pages.dev/cartes" target="_blank" rel="noopener noreferrer">Voir mes cartes</a>`;
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
		__html: `👉 <a href="https://trackdiggers.pages.dev/cartes" target="_blank" rel="noopener noreferrer">Voir mes cartes</a>`
	}}
></div>
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
			<Components.SlideMenu
				bottom="-80px"
				height="auto"
				left="0"
				right="0"
				top="0"
				width="100%"
			/>
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
		</Section>
	</Theme>;
});