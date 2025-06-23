import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Span, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"informations-legales"} />
		<Helmet>
			<title>
				Trackdiggers – Découvre, vote, collectionne les sons
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
		<Section padding="80px 0 40px 0" quarkly-title="Mentions légales">
			<Override
				slot="SectionContent"
				flex-direction="column"
				align-items="flex-start"
				max-width="800px"
				margin="0 auto"
				padding="0 20px"
			/>
			{"    "}
			<Text font="--headline2" margin="0 0 20px 0" color="--dark">
				Mentions légales
			</Text>
			{"  "}
			<Text font="--base" color="--dark">
				<Span
					font-weight="700"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Nom du site :
				</Span>
				{" "}Trackdiggers
				<br />
				{"    "}
				<Span
					font-weight="700"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Éditeur :
				</Span>
				{" "}ATK Music
				<br />
				{"    "}
				<Span
					font-weight="700"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Statut juridique :
				</Span>
				{" "}Auto-entrepreneur
				<br />
				{"    "}
				<Span
					font-weight="700"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					SIRET :
				</Span>
				{" "}942 026 824 00014
				<br />
				{"    "}
				<Span
					font-weight="700"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Adresse :
				</Span>
				{" "}493 Avenue Colonel Fabien, 83660 Carnoules
				<br />
				{"    "}
				<Span
					font-weight="700"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Email :
				</Span>
				{" "}contact@atkmusic.fr
				<br />
				{"    "}
				<Span
					font-weight="700"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Hébergeur :
				</Span>
				{" "}Netlify, 44 Montgomery Street, Suite 300, San Francisco, California 94104{"\n  "}
			</Text>
		</Section>
		<Section padding="80px 0 40px 0" quarkly-title="Politique de confidentialité">
			<Override
				slot="SectionContent"
				flex-direction="column"
				align-items="flex-start"
				max-width="800px"
				margin="0 auto"
				padding="0 20px"
			/>
			{"    "}
			<Text font="--headline2" margin="0 0 20px 0" color="--dark">
				Politique de confidentialité
			</Text>
			{"  "}
	<Text font="--base" color="--dark">
	Trackdiggers collecte certaines données personnelles dans le cadre de son fonctionnement, notamment :
	<br />
	<Strong>L’adresse e-mail</Strong>, utilisée :
	<br />
	– Lors de la soumission de morceaux par les artistes,  
	<br />
	– Lors de la demande de cartes collectors par les utilisateurs (une seule par jour),  
	<br />
	– Et, si l’utilisateur y consent explicitement, pour l’envoi occasionnel de nouveautés ou contenus exclusifs liés à Trackdiggers.
	<br />
	<Strong>Les morceaux sélectionnés</Strong> lors d’une commande de cartes, à des fins d’archivage, de personnalisation et de traçabilité.
	<br />
<Strong>L’utilisation éventuelle d’outils de mesure d’audience</Strong> (type Umami, Matomo ou Google Analytics), afin d’améliorer l’expérience utilisateur.
<br /><br />
Les données collectées servent uniquement à assurer :
<br />
– Le bon fonctionnement du site (modération, validation, personnalisation des cartes, envoi automatique),  
<br />
– L’amélioration continue des services proposés,  
<br />
– Et, uniquement en cas de consentement explicite, l’envoi de communications liées à Trackdiggers (nouveaux contenus, fonctionnalités, etc.).
<br />
Il est également possible d’envoyer des emails informatifs aux utilisateurs ayant réclamé un pack, lorsque ces messages concernent des services similaires. Chaque email inclut un lien de désinscription permettant de s’opposer à tout moment à ces envois.
<br /><br />
Aucune donnée personnelle n’est revendue ni partagée avec des tiers extérieurs à Trackdiggers.
<br />
Les informations sont stockées sur des bases de données sécurisées (type Google Sheets, Airtable) et traitées automatiquement via des outils comme <Strong>n8n</Strong> hébergé sur <Strong>Hetzner</Strong>, dans l’Union européenne.
<br />
	Les <Strong>plateformes externes intégrées</Strong> comme YouTube, Spotify ou SoundCloud peuvent quant à elles collecter des données selon leurs propres politiques, indépendamment de Trackdiggers.
	<br /><br />
	Les cartes collectors générées via le site sont <Strong>gratuites, non transférables</Strong> et n’impliquent <Strong>aucune transaction commerciale</Strong>. Elles sont uniquement destinées à l’usage personnel des utilisateurs.
	<br /><br />
	Conformément au <Strong>RGPD</Strong>, chaque utilisateur peut demander à consulter, rectifier ou supprimer ses données à tout moment en écrivant à : <Strong>contact@atkmusic.fr</Strong>
</Text>
		</Section>
		<Section padding="80px 0 40px 0" quarkly-title="Conditions d'utilisation">
			<Override
				slot="SectionContent"
				flex-direction="column"
				align-items="flex-start"
				max-width="800px"
				margin="0 auto"
				padding="0 20px"
			/>
			{"    "}
			<Text font="--headline2" margin="0 0 20px 0" color="--dark">
				Conditions Générales d’Utilisation (CGU)
			</Text>
			{"  "}
			<Text font="--base" color="--dark">
				<Strong>
					Trackdiggers
				</Strong>
				{" "}est un service gratuit permettant de : découvrir des morceaux en fonction de son mood, proposer des sons via un formulaire, voter pour les morceaux proposés par d’autres utilisateurs, partager des morceaux, et recevoir des{" "}
				<Strong>
					cartes collectors numériques
				</Strong>
				{" "}associées à certains morceaux validés.
				<br />
				<Strong>
					Utilisation du service
				</Strong>
				{" "}: l’utilisateur s’engage à ne pas publier de contenu illicite, offensant, discriminatoire ou portant atteinte aux droits d’auteur. Trackdiggers se réserve le droit de supprimer tout contenu sans justification préalable en cas de non-respect.
				<br />
				<Strong>
					Cartes collectors numériques
				</Strong>
				{" "}: les cartes sont gratuites, numérotées de manière unique pour chaque morceau, non transférables, et n’ont{" "}
				<Strong>
					aucune valeur commerciale ou monétaire
				</Strong>
				. Elles sont là pour valoriser la découverte musicale, et ne constituent ni un produit marchand ni un actif échangeable.
				<br />
				<Strong>
					Services tiers
				</Strong>
				{" "}: le site intègre des outils comme YouTube, Spotify, SoundCloud, ou des services de mesure d’audience (ex. Umami, Matomo). Ces plateformes peuvent collecter des données indépendamment de Trackdiggers. Le site ne peut être tenu responsable de leur usage.
				<br />
				<Strong>
					Limites de responsabilité
				</Strong>
				{" "}: Trackdiggers est proposé “tel quel”, sans garantie de disponibilité continue. L’algorithme repose sur une interprétation subjective des émotions musicales. Le service peut être modifié, suspendu ou interrompu à tout moment.
				<Strong>
					Emails informatifs
				</Strong> 
				{" "}: En réclamant un pack sur Trackdiggers, l’utilisateur accepte de recevoir occasionnellement des emails informatifs en lien avec le service (nouveaux packs, fonctionnalités, rappels). Ces emails incluent toujours un lien de désinscription. L’utilisateur peut s’opposer à tout moment à leur réception via ce lien ou en contactant contact@atkmusic.fr.
				<br />
				<br />
				<br />
				<br />
				<br />
				<Strong>
					Dernière mise à jour
				</Strong>
				{" "}: 20 juin 2025
			</Text>
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
		<Components.SlideMenu />
	</Theme>;
});