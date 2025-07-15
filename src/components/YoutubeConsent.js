import React, { useEffect, useRef } from "react";

const YoutubeConsent = ({ videoID, width = "100%", height = "315" }) => {
	const containerRef = useRef(null);

	useEffect(() => {
		// Attendre que TarteAuCitron soit chargé
		const interval = setInterval(() => {
			if (window.tarteaucitron && window.tarteaucitron.job) {
				window.tarteaucitron.job.push("youtube");
				clearInterval(interval);
			}
		}, 200);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			ref={containerRef}
			className="youtube_embed"
			data-videoID={videoID}
			style={{ width, height }}
		/>
	);
};

export default YoutubeConsent;
