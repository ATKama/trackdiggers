import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"cartes"} />
		<Helmet>
			<title>
				Cartes musicales Trackdiggers – Collectionne tes sons préférés
			</title>
			<meta name={"description"} content={"Découvre ta collection de cartes musicales uniques sur Trackdiggers. Chaque carte est liée à un morceau sélectionné par la communauté et numérotée pour être exclusive."} />
			<meta property={"og:title"} content={"Collectionne des cartes musicales exclusives – Trackdiggers"} />
			<meta property={"og:description"} content={"Trackdiggers transforme les sons en cartes uniques. Garde, partage ou admire ta collection de morceaux sélectionnés par la communauté."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger%20%2864%20x%2064%20px%29.png?v=2025-06-21T16:50:26.362Z"} />
			<meta name={"msapplication-TileColor"} content={"#000000"} />
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1398071244867525"
     crossorigin="anonymous"></script></Helmet>
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
				margin="0px auto -30px auto"
				text-align="center"
				sm-margin="0px auto 0px auto"
			>
				<Text font="--lead" color="--dark" margin="0" display="inline">
					Ici, tu peux collectionner les cartes des sons disponibles dans
				</Text>
				<br />
				<Text
					font="--lead"
					color="--dark"
					background="#e0e0e0"
					padding="4px 8px"
					border-radius="6px"
					margin="12px auto 0 auto"
					text-align="center"
					display="inline-block"
				>
					<Link href="/" text-decoration-line="none" color="--dark">
						le moteur de recherche émotionnel TrackDigger
					</Link>
				</Text>
			</Box>
			<Components.Playlist margin="0px 0px 0px 0px" />
			<Box
				background="#f0f0f0"
				padding="24px"
				border-radius="12px"
				max-width="700px"
				margin="40px auto"
				text-align="center"
				box-shadow="0 0 10px rgba(0, 0, 0, 0.05)"
			>
				<Text font="--lead" color="--dark" margin="0 0 12px 0" text-shadow="1px 1px 1px rgba(255, 255, 255, 0.6)">
					🚀 Une nouvelle façon de collectionner la musique
				</Text>
				<Text font="--base" color="--dark">
					Les cartes collectors TrackDiggers sont des visuels numériques uniques et numérotés.
		Elles représentent des morceaux sélectionnés par la communauté dans la rubrique{" "}
					<Link href="/votes" color="--dark" text-decoration-line="underline" margin="0 4px">
						Votes
					</Link>
					.
					<br />
					<br />
					Chaque carte est liée à un artiste et à un titre, et ne peut être attribuée qu'une seule fois.
		Un vrai objet digital exclusif à collectionner ou partager.
				</Text>
			</Box>
		</Section>
		<Section>
			<Box display="flex" flex-direction="column" gap="16px" align-items="center">
				<Link
					href="/"
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
				>
					Découvrir le moteur TrackDiggers
				</Link>
				<Link
					href="https://airtable.com/app6jjhoCkgO9tcDB/paghHyRTIs9FHxMBq/form"
					target="_blank"
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
					hover-background="#333333"
					active-transform="scale(0.97)"
					active-box-shadow="0px 3px 8px rgba(255, 255, 255, 0.1)"
					display="inline-block"
					text-align="center"
					font-weight="700"
					sm-margin-bottom="20px"
				>
					Proposer ton morceau ici
				</Link>
			</Box>
			<Components.SlideMenu
				sm-bottom="-80px"
				sm-left="-285px"
				sm-right="auto"
				sm-top="0px"
				sm-width="600px"
				width="px"
				bottom="-80px"
				left="-293px"
				right="auto"
				top="0px"
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