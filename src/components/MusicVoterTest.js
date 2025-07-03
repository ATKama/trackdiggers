import React, { useEffect, useState } from "react";
import atomize from "@quarkly/atomize";

const MusicVoterTest = () => {
	const [propositions, setPropositions] = useState([]);
	const [filtreMood, setFiltreMood] = useState("");
	const [recherche, setRecherche] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [votedIds, setVotedIds] = useState([]);
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
		const searchMatch = (p.artist + " " + p.title).toLowerCase().includes(recherche.toLowerCase());
		return moodMatch && searchMatch;
	};

	const extraireIDYoutube = url => {
		const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
		return match ? match[1] : "";
	};

	const sorted = [...propositions.filter(filtrer)].sort((a, b) => (b.votes || 0) - (a.votes || 0));

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
		      
		<div style={{
			marginBottom: "1rem"
		}}>
			        
			<label style={{
				marginRight: "0.5rem"
			}}>
				Mood :
			</label>
			        
			<select onChange={e => setFiltreMood(e.target.value)}>
				          
				<option value="">
					Tous
				</option>
				          
				<option value="Dansant">
					Dansant
				</option>
				          
				<option value="Chill">
					Chill
				</option>
				          
				<option value="Réflexion">
					Réflexion
				</option>
				          
				<option value="Mélancolie">
					Mélancolie
				</option>
				          
				<option value="Planant">
					Planant
				</option>
				          
				<option value="Détermination">
					Détermination
				</option>
				          
				<option value="Love">
					Love
				</option>
				        
			</select>
			        
			<input type="text" placeholder="Rechercher artiste/titre" onChange={e => setRecherche(e.target.value)} style={{
				marginLeft: "1rem",
				padding: "4px 8px"
			}} />
			      
		</div>
		      
		<div style={{
			display: "grid",
			gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
			columnGap: "1.5rem",
			rowGap: "2rem"
		}}>
			        
			{sorted.map(p => <div
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
				            
				<h3 style={{
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
				}}>
					{p.artist}
					 – 
					{p.title}
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
		src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(p.youtube)}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
		title={p.title}
	/>
) : (
	<iframe
		width="100%"
		style={{
			aspectRatio: "1 / 1",
			width: "100%",
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
					              
					<p style={{
						margin: 0
					}}>
						<strong>
							Mood :
						</strong>
						 
						{p.mood || "Non précisé"}
					</p>
					              
					<p style={{
						margin: "0.25rem 0 0 0"
					}}>
						<strong>
							Votes :
						</strong>
						 
						{p.votes || 0}
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
				          
			</div>)}
			      
		</div>
		    
	</div>;
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