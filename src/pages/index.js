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
						TrackDigger
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
					<div dangerouslySetInnerHTML={{
						"__html": "<form style=\"display:grid; gap:16px;\" onsubmit=\"event.preventDefault(); const form = this; const email = form.email.value; const track1 = form.track1.value; const track2 = form.track2.value; const track3 = form.track3.value; fetch('https://n8n.atkmusic.fr/webhook/receive-pack-request', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ email, track1, track2, track3 }) }).then(res => { if(res.ok) { alert('🎉 Pack envoyé avec succès !'); } else { alert('❌ Une erreur est survenue.'); } }).catch(() => alert('❌ Problème réseau.'));\">\n    <label style=\"display:flex; flex-direction:column; width:100%;\">\n      <span style=\"margin-bottom:4px; color: #000;\">Ton adresse e-mail :</span>\n      <input type=\"email\" name=\"email\" required style=\"width:100%; padding:8px;\" />\n    </label>\n    <input type=\"hidden\" name=\"track1\" id=\"track1\" value=\"\" />\n    <input type=\"hidden\" name=\"track2\" id=\"track2\" value=\"\" />\n    <input type=\"hidden\" name=\"track3\" id=\"track3\" value=\"\" />\n    <button type=\"submit\" style=\"padding: 10px 20px; background:#000; color:#fff; border-radius:8px; font-weight:bold; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease;\">Réclamer mon pack 🎁</button>\n    <a href=\"/cartes\" style=\"padding: 10px 20px; background:#000; color:#fff; border-radius:8px; font-weight:bold; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); display:inline-block; text-align:center; text-decoration:none; transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease; margin-top: 12px;\" onmouseover=\"this.style.background='#333'; this.style.boxShadow='0px 6px 18px rgba(255,255,255,0.2)'; this.style.transform='scale(1.05)'\" onmouseout=\"this.style.background='#000'; this.style.boxShadow='0px 4px 12px rgba(0,0,0,0.3)'; this.style.transform='scale(1)'\">Voir mes cartes</a>\n  </form>"
					}} />
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
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});