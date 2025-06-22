import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"votes"} />
		<Helmet>
			<title>
				Vote pour les meilleurs sons – Trackdiggers
			</title>
			<meta name={"description"} content={"Découvre les morceaux proposés par la communauté Trackdiggers et vote pour ceux qui méritent leur carte collector. Chaque vote influence les prochaines sélections musicales."} />
			<meta property={"og:title"} content={"Vote pour les futurs morceaux collector – Trackdiggers"} />
			<meta property={"og:description"} content={"Exprime ton avis musical en votant pour les sons proposés par la communauté. Les morceaux les plus votés reçoivent une carte unique."} />
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
				margin="0px auto 40px auto"
				text-align="center"
				sm-margin="0px auto 40px auto"
			>
				<Text font="--lead" color="--dark" margin="0" display="inline">
					Tu veux faire bouger les sélections TrackDigger ?
					<br />
					<br />
					Découvre les morceaux proposés par la communauté et vote pour ceux que tu veux entendre dans la prochaine playlist.
			T’es artiste ? Propose ton son et fais-le valider par le public.
				</Text>
			</Box>
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
					Découvrir le moteur TrackDigger
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
		</Section>
		<Section background="#ffffff" margin="-40px 0 0 0" sm-margin="-60px 0 0 0" quarkly-title="CORPS">
			<Override slot="SectionContent" border-color="#ffffff" />
			<Components.MusicVoterTest />
		</Section>
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