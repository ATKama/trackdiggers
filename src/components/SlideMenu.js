import React, { useState, useEffect } from "react";
import atomize from "@quarkly/atomize";
import { navigate } from "gatsby";

const SlideMenu = ({ ...props }) => {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true); // Marque le composant comme monté côté client
	}, []);

	const goTo = (url) => {
		setOpen(false);
		setTimeout(() => {
			navigate(url);
		}, 200);
	};

	return (
		<>
			{/* Icône burger — toujours visible, même sans mounted */}
			{!open && (
				<div
					onClick={() => setOpen(true)}
					style={{
						position: "fixed",
						top: "20px",
						left: "20px",
						zIndex: "1003",
						cursor: "pointer",
						background: "none",
						padding: "10px"
					}}
				>
					<div style={{ width: "30px", height: "4px", background: "#000", margin: "6px 0" }} />
					<div style={{ width: "30px", height: "4px", background: "#000", margin: "6px 0" }} />
					<div style={{ width: "30px", height: "4px", background: "#000", margin: "6px 0" }} />
				</div>
			)}

			{/* Menu latéral — monté uniquement après hydratation */}
			{mounted && (
  <div
    key={mounted ? 'ready' : 'loading'}
    {...props}
    style={{
						position: "fixed",
						top: "0",
						left: open ? "0" : "-300px",
						width: "250px",
						height: "100vh",
						background: "#ffffff",
						boxShadow: "4px 0 15px rgba(0,0,0,0.1)",
						zIndex: "1002",
						transition: "left 0.3s ease",
						display: "flex",
						flexDirection: "column",
						padding: "40px 20px",
						pointerEvents: "auto"
					}}
				>
					{/* Bouton ✕ */}
					{open && (
						<div
							onClick={() => setOpen(false)}
							style={{
								position: "absolute",
								top: "20px",
								right: "20px",
								fontFamily: "'AvenirNextCyrRegular', sans-serif",
								fontSize: "24px",
								cursor: "pointer",
								opacity: 0.6,
								zIndex: "1004"
							}}
						>
							✕
						</div>
					)}

					{/* Contenu du menu */}
					<div style={{ marginTop: "60px", display: "flex", flexDirection: "column" }}>
						<div style={{ fontSize: "20px", marginBottom: "20px", fontWeight: "bold" }}>Menu</div>

						<a onClick={() => goTo("/")} style={linkStyle}>Search by mood</a>
						<a onClick={() => goTo("/votes")} style={linkStyle}>Page de votes</a>
						<a onClick={() => goTo("/cartes")} style={linkStyle}>Mes cartes</a>
						<a onClick={() => goTo("/about")} style={linkStyle}>À propos</a>
						<a onClick={() => goTo("/actus")} style={linkStyle}>Actualités & News</a>
					</div>
				</div>
			)}
		</>
	);
};

const linkStyle = {
	margin: "10px 0",
	color: "#000",
	textDecoration: "none",
	cursor: "pointer"
};

export default atomize(SlideMenu)({
	name: "SlideMenu",
	description: {
		en: "SlideMenu — menu latéral gauche avec bouton burger intégré"
	},
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	propInfo: {}
});