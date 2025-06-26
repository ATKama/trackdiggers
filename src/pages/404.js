import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Découvre de nouveaux morceaux selon ton mood, vote pour les meilleurs sons et reçois des cartes musicales collector, uniques."} />
			<meta property={"og:title"} content={"Trackdiggers – Cartes collector et sons émergents"} />
			<meta property={"og:description"} content={"Choisis ton mood et découvre les morceaux qui matchent. Vote pour tes coups de cœur et collectionne des cartes numériques uniques."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/682f25cf9335410018cc8538/images/Copie%20de%20TrackDigger.svg?v=2025-06-21T15:50:41.804Z"} />
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
		<Section lg-padding="25px 0 25px 0" quarkly-title="Hero" padding="25px 0 75px 0">
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
						md-height="360px"
						flex-direction="column"
					/>
					{"        "}
					<Text
						text-align="center"
						padding="0px 16px 0px 16px"
						color="--light"
						font="--headline1"
						margin="16px 0px 0px 0px"
						sm-text-align="center"
						sm-width="80%"
					>
						404
					</Text>
					<Text
						margin="10px 0px 35px 0px"
						sm-text-align="center"
						sm-width="80%"
						opacity="0.7"
						text-align="center"
						padding="0px 16px 0px 16px"
						font="--lead"
						color="--light"
					>
						<Strong>
							Rien ici… mais la pépite est peut-être sur la page d’à côté.
						</Strong>
					</Text>
					<Link
						href="/"
						text-decoration-line="initial"
						color="--darkL2"
						background="--color-light"
						padding="12px 24px 12px 24px"
						letter-spacing="0.5px"
						hover-transform="translateY(-4px)"
						font="--base"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						link-href="/index"
					>
						Home
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
	</Theme>;
});