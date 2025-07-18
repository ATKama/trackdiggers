import React, { useEffect, useState } from "react";
import atomize from "@quarkly/atomize";

const MusicVoterTest = () => {
	const [cookiesAccepted, setCookiesAccepted] = useState(false);
	const [propositions, setPropositions] = useState([]);
	const [filtreMood, setFiltreMood] = useState("");
	const [filtreStyle, setFiltreStyle] = useState("");
	const [recherche, setRecherche] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [votedIds, setVotedIds] = useState([]);

useEffect(() => {
	const checkConsent = () => {
		if (window.tarteaucitron?.state?.youtube === true) {
			setCookiesAccepted(true);
		}
	};

	checkConsent();

	// Ajoute les listeners
	document.addEventListener("tac.cookie.add", checkConsent);
	document.addEventListener("tac.cookie.update", checkConsent);
	document.addEventListener("tac.user_interface", checkConsent);

	// ✅ Déplace l’interval ici
	let attempts = 0;
	const interval = setInterval(() => {
		if (window.tarteaucitron?.state?.youtube === true) {
			setCookiesAccepted(true);
			clearInterval(interval);
		}
		if (attempts > 5) clearInterval(interval);
		attempts++;
	}, 2000);

	// Nettoyage
	return () => {
		document.removeEventListener("tac.cookie.add", checkConsent);
		document.removeEventListener("tac.cookie.update", checkConsent);
		document.removeEventListener("tac.user_interface", checkConsent);
		clearInterval(interval);
	};
}, []);



	useEffect(() => {
		fetch("https://n8n.atkmusic.fr/webhook/8b290d8b-12b4-435c-ab94-58c157b7ba7d").then(res => res.json()).then(data => {
			if (Array.isArray(data)) {
				setPropositions(data);
			} else if (Array.isArray(data.data)) {
				setPropositions(data.data);
			} else {
				console.error("Format inattendu :", data);
				setPropositions([]);
			}

			setIsLoading(false);
		}).catch(err => {
			console.error("Erreur de chargement :", err);
			setError("Erreur lors du chargement des données");
			setIsLoading(false);
		});

		try {
			const storedVotes = JSON.parse(localStorage.getItem("votedForever")) || [];
			setVotedIds(storedVotes);
		} catch (e) {
			setVotedIds([]);
		}

		const styleSheet = document.createElement("style");
		styleSheet.innerText = `
      @keyframes rotation {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
		document.head.appendChild(styleSheet);
	}, []);
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const soundID = params.get("soundID");

		if (soundID) {
			const interval = setInterval(() => {
				const el = document.getElementById(`sound-${soundID}`);

				if (el) {
					el.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
					el.style.boxShadow = "0 0 0 3px #4caf50, 0 0 10px #4caf50aa";
					clearInterval(interval);
				}
			}, 500);
			setTimeout(() => clearInterval(interval), 5000);
		}
	}, []);

	const vote = async customID => {
		let storedVotes = [];

		try {
			storedVotes = JSON.parse(localStorage.getItem("votedForever")) || [];
		} catch (e) {
			storedVotes = [];
		}

		if (storedVotes.includes(customID)) {
			alert("Vous avez déjà voté pour ce son !");
			return;
		}

		setVotedIds(prev => [...prev, customID]);

		try {
			const res = await fetch("https://n8n.atkmusic.fr/webhook/02c420f4-9f2c-4d80-ac57-5687d787410e", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					id: customID
				})
			});

			if (res.ok) {
				const data = await res.json();
				setPropositions(prev =>
  prev.map(p =>
    p["CUSTOM ID"] === customID
      ? { ...p, votes: Number(data.votes || 0) }
      : p
  )
);
				const updatedVotes = [...storedVotes, customID];
				localStorage.setItem("votedForever", JSON.stringify(updatedVotes));
			} else {
				alert("Le vote a échoué côté serveur.");
			}
		} catch (err) {
			alert("Erreur de réseau : le vote n’a pas pu être envoyé.");
		}
	};

	const filtrer = p => {
  const moodMatch = !filtreMood || (p.mood || "").trim().toLowerCase() === filtreMood.toLowerCase();
  const styleMatch = !filtreStyle || (p.style || "").trim().toLowerCase() === filtreStyle.toLowerCase();
  const searchMatch = (p.artist + " " + p.title).toLowerCase().includes(recherche.toLowerCase());
  return moodMatch && styleMatch && searchMatch;
};


	const extraireIDYoutube = url => {
		const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
		return match ? match[1] : "";
	};

	const sorted = [...propositions.filter(filtrer)].sort((a, b) => (b.votes || 0) - (a.votes || 0));
		if (!cookiesAccepted) {
		return (
			<div style={{
				padding: "2rem",
				textAlign: "center",
				color: "#000",
				backgroundColor: "#fff",
				minHeight: "100vh"
			}}>
				<h2>🍪 Consentement requis</h2>
				<p>Pour accéder au module de vote, vous devez accepter les cookies (YouTube et localStorage).</p>
				<button
					onClick={() =>
						window.tarteaucitron?.userInterface?.openPanel()
					}
					style={{
						padding: "12px 24px",
						marginTop: "16px",
						backgroundColor: "#000",
						color: "#fff",
						border: "none",
						borderRadius: "8px",
						cursor: "pointer",
						fontSize: "1rem"
					}}
				>
					Gérer mes préférences
				</button>
			</div>
		);
	}


	if (isLoading) {
		return <div style={{
			padding: "2rem",
			textAlign: "center",
			color: "#fff",
			backgroundColor: "#fff",
			height: "100vh"
		}}>
			        
			<p style={{
				fontSize: "1.2rem",
				color: "#000"
			}}>
				Chargement des sons...
			</p>
			        
			<div style={{
				width: "40px",
				height: "40px",
				margin: "1rem auto",
				border: "4px solid #ccc",
				borderTop: "4px solid #fff",
				borderRadius: "50%",
				animation: "rotation 1s linear infinite"
			}} />
			      
		</div>;
	}

	if (error) {
		return <div style={{
			padding: "2rem",
			textAlign: "center",
			color: "#ff6b6b",
			backgroundColor: "#000",
			height: "100vh"
		}}>
			        
			<p>
				{error}
			</p>
			      
		</div>;
	}

return <div style={{
	padding: "1rem",
	color: "#fff",
	backgroundColor: "#fff"
}}>
	
	<div
	style={{
		display: "flex",
		flexWrap: "wrap",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		marginBottom: "1rem",
		gap: "0.5rem",
		width: "100%"
	}}
>
	<div style={{ display: "flex", flexDirection: "column", minWidth: "120px" }}>
		<label style={{ fontSize: "0.85rem" }}>Mood</label>
		<select onChange={e => setFiltreMood(e.target.value)} style={{ padding: "4px", width: "100%" }}>
			<option value="">Mood (Tous)</option>
			<option value="Dansant">Dansant</option>
			<option value="Chill">Chill</option>
			<option value="Réflexion">Réflexion</option>
			<option value="Mélancolie">Mélancolie</option>
			<option value="Planant">Planant</option>
			<option value="Détermination">Détermination</option>
			<option value="Love">Love</option>
		</select>
	</div>

	<div style={{ display: "flex", flexDirection: "column", minWidth: "180px" }}>
		<label style={{ fontSize: "0.85rem" }}>Style</label>
		<select onChange={e => setFiltreStyle(e.target.value)} style={{ padding: "4px", width: "100%" }}>
			<option value="">Style (Tous)</option>
			<option value="Rap / Trap / Drill">Rap / Trap / Drill</option>
			<option value="Afro / World / Reggaeton">Afro / World / Reggaeton</option>
			<option value="Pop urbaine / R&B">Pop urbaine / R&B</option>
			<option value="Électro / Club">Électro / Club</option>
			<option value="Techno / House / Hard">Techno / House / Hard</option>
			<option value="Lofi / Chill / Ambiant">Lofi / Chill / Ambiant</option>
			<option value="Rock / Metal / Punk">Rock / Metal / Punk</option>
			<option value="Alternatif / Expérimental">Alternatif / Expérimental</option>
			<option value="Chanson / Variété">Chanson / Variété</option>
			<option value="Jazz / Soul / Funk">Jazz / Soul / Funk</option>
			<option value="Musique de film / BO">Musique de film / BO</option>
			<option value="Autre">Autre</option>
		</select>
	</div>

	<div style={{ flex: "1", minWidth: "200px", display: "flex", flexDirection: "column" }}>
		<label style={{ fontSize: "0.85rem" }}>Recherche</label>
		<input
			type="text"
			placeholder="Rechercher artiste/titre"
			onChange={e => setRecherche(e.target.value)}
			style={{ padding: "4px 8px", width: "100%" }}
		/>
	</div>
</div>


		      
		<div style={{
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
			columnGap: "1.5rem",
			rowGap: "2rem"
		}}>
			        
{sorted.map(p => (
	
  <div
    key={p["CUSTOM ID"]}
    id={`sound-${p["CUSTOM ID"]}`}
    style={{
      display: "flex",
      flexDirection: "column",
      border: "1px solid #222",
      backgroundColor: "#161616",
      boxShadow: "0 0 0 1px #2a2a2a inset, 0 2px 6px rgba(0,0,0,0.8)",
      padding: "1rem",
      borderRadius: "8px",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer",
      willChange: "transform, box-shadow",
      backfaceVisibility: "hidden",
      transform: "translateZ(0)"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.03)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(255,255,255,0.2)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.5)";
    }}
  >
    <h3
      style={{
        color: "#fff",
        fontSize: "1rem",
        fontWeight: "bold",
        lineHeight: "1.3",
        minHeight: "2.6em",
        maxHeight: "2.6em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical"
      }}
    >
      {p.artist} – {p.title}
    </h3>

    {p.youtube?.includes("soundcloud.com") ? (
      <iframe
        width="100%"
        height="100%"
        style={{
          aspectRatio: "1 / 1",
          width: "100%",
          borderRadius: "8px"
        }}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          p.youtube
        )}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
        title={p.title}
      />
    ) : (
      <iframe
        width="100%"
        style={{
          aspectRatio: "1 / 1",
          borderRadius: "8px"
        }}
        src={`https://www.youtube.com/embed/${extraireIDYoutube(p.youtube)}`}
        frameBorder="0"
        allowFullScreen
        title={p.title}
      />
    )}

    	<div style={{
					marginTop: "0.5rem"
				}}>
					              
<p style={{ margin: 0 }}>
  <strong>Mood :</strong> {p.mood || "Non précisé"}
</p>
					<p style={{ margin: "0.25rem 0 0 0" }}>
  <strong>Style :</strong> {p.style || p.Style || "Non précisé"}
</p>

					              
<p style={{ margin: "0.25rem 0 0 0" }}>
  <strong>Votes :</strong> {p.votes || 0}
</p>
					            
				</div>
				            
				<div style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: "0.5rem",
					marginTop: "1rem"
				}}>
					              
					<button onClick={() => vote(p["CUSTOM ID"])} disabled={votedIds.includes(p["CUSTOM ID"])} style={{
						flex: 1,
						padding: "12px",
						backgroundColor: votedIds.includes(p["CUSTOM ID"]) ? "#4CAF50" : "#fff",
						color: votedIds.includes(p["CUSTOM ID"]) ? "#fff" : "#000",
						borderRadius: "6px",
						border: "none",
						fontWeight: "bold",
						cursor: "pointer"
					}}>
						                
						{votedIds.includes(p["CUSTOM ID"]) ? "✔" : "Vote"}
						              
					</button>
					              
					<button onClick={() => {
						const shareUrl = `https://trackdiggers.com/votes?soundID=${p["CUSTOM ID"]}`;
						const shareData = {
							title: `${p.artist} – ${p.title}`,
							text: "Vote pour ce son sur TrackDigger 🎧",
							url: shareUrl
						};
						if (navigator.share) navigator.share(shareData).catch(err => console.error("Partage annulé:", err));else navigator.clipboard.writeText(shareUrl).then(() => alert("Lien copié !"));
					}} style={{
						flex: 1,
						padding: "12px",
						backgroundColor: "#333",
						color: "#fff",
						border: "1px solid #555",
						borderRadius: "6px",
						fontWeight: "bold",
						cursor: "pointer"
					}}>
						                Partage
              
					</button>

      {false && (
        <button
          onClick={() => {
            localStorage.removeItem("votedForever");
            setVotedIds([]);
            alert("Votes réinitialisés (uniquement côté local).");
          }}
          style={{
            marginTop: "2rem",
            padding: "10px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          🔁 Réinitialiser mes votes
        </button>
      )}
    </div>
  </div>
))}
		</div>  
	</div>     
};

export default atomize(MusicVoterTest)({
	name: "MusicVoterTest",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "MusicVoterTest — affiche les sons proposés et permet de voter"
	},
	propInfo: {}
});