import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";

const SlideMenu = () => {
	const [open, setOpen] = useState(false);

	const goTo = (url) => {
		setOpen(false);
		setTimeout(() => navigate(url), 200);
	};

	// Rendu du bouton burger (toujours affiché)
	const renderBurger = (
		!open && (
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
		)
	);

	// Menu latéral (rendu uniquement côté client)
	const renderMenu =
		typeof window !== "undefined" && (
			<div
				style={{
					position: "fixed",
					top: "0",
					left: open ? "0" : "-300px",
					width: "250px",
					height: "100vh",
					background: "#fff",
					boxShadow: "4px 0 15px rgba(0,0,0,0.1)",
					zIndex: "1002",
					transition: "left 0.3s ease",
					willChange: "left",
					display: "flex",
					flexDirection: "column",
					padding: "40px 20px"
				}}
			>
				{open && (
					<div
						onClick={() => setOpen(false)}
						style={{
							position: "absolute",
							top: "20px",
							right: "20px",
							fontSize: "24px",
							cursor: "pointer",
							opacity: 0.6,
							zIndex: "1004"
						}}
					>
						✕
					</div>
				)}

				<div style={{ marginTop: "60px", display: "flex", flexDirection: "column" }}>
					<div style={{ fontSize: "20px", marginBottom: "20px", fontWeight: "bold" }}>Menu</div>
					<a onClick={() => goTo("/")} style={linkStyle}>Search by mood</a>
					<a onClick={() => goTo("/votes")} style={linkStyle}>Page de votes</a>
					<a onClick={() => goTo("/cartes")} style={linkStyle}>Mes cartes</a>
					<a onClick={() => goTo("/about")} style={linkStyle}>À propos</a>
					<a onClick={() => goTo("/actus")} style={linkStyle}>Actualités & News</a>
				</div>
			</div>
		);

	return (
		<>
			{renderBurger}
			{renderMenu}
		</>
	);
};

const linkStyle = {
	margin: "10px 0",
	color: "#000",
	textDecoration: "none",
	cursor: "pointer"
};

export default SlideMenu;