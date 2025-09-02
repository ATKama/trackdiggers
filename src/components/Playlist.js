import React, { useEffect, useState } from "react";
import atomize from "@quarkly/atomize";
import { db } from "../firebase"; // 🔁 chemin adapté à ton projet
import { collection, onSnapshot } from "firebase/firestore";

const COLORS = {
  pageBg: "#fff",
  cardBg: "#161616",
  cardBorder: "#222",
  cardShadowInset: "#2a2a2a",
  cardText: "#fff",
  textDark: "#000",
  textMuted: "#ccc",
  errorText: "#ff6b6b",
  voteGreen: "#4CAF50",
  shareBtnBg: "#333",
  shareBtnBorder: "#555",
  likeCountBg: "#616161",
  likeCountBorder: "#333",
  likeCountText: "#fff",
};


const Playlist = () => {
	const [cookiesAccepted, setCookiesAccepted] = useState(false);
	const [propositions, setPropositions] = useState([]);
	const [filtreMood, setFiltreMood] = useState("");
	const [filtreStyle, setFiltreStyle] = useState("");
	const [recherche, setRecherche] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [likedIds, setlikedIds] = useState([]);
	const [likesMap, setlikesMap] = useState({});
const [visibleIds, setVisibleIds] = useState({});

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
	fetch("https://n8n.atkmusic.fr/webhook/3f7c6c96-2b63-445c-bd74-930b1cd98e2c")
 .then(res => res.json())
  .then(data => {
    let extracted = [];

    if (Array.isArray(data)) {
      if (Array.isArray(data[0]?.response?.body)) {
        extracted = data[0].response.body;
      } else if (Array.isArray(data)) {
        extracted = data;
      }
    } else if (Array.isArray(data.data)) {
      extracted = data.data;
    }

    setPropositions(extracted);
    setIsLoading(false);
  })
  .catch(err => {
    console.error("Erreur de chargement :", err);
    setError("Erreur lors du chargement des données");
    setIsLoading(false);
  
		});

		try {
			const storedlikes = JSON.parse(localStorage.getItem("likedForever")) || [];
			setlikedIds(storedlikes);
		} catch (e) {
			setlikedIds([]);
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
	const unsubscribe = onSnapshot(collection(db, "likes"), (snapshot) => {
		const updated = {};
		snapshot.forEach(doc => {
			updated[doc.id] = doc.data().likes || 0;
		});
		setlikesMap(updated);
	});

	return () => unsubscribe();
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

	const like = async (ID) => {
  let storedlikes = [];

  try {
    storedlikes = JSON.parse(localStorage.getItem("likedForever")) || [];
  } catch (e) {
    storedlikes = [];
  }

  if (storedlikes.includes(ID)) {
    alert("Vous avez aimé ce son !");
    return;
  }

  setlikedIds(prev => [...prev, ID]);

  try {
    const res = await fetch("https://n8n.atkmusic.fr/webhook/like-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: ID })
    });

    if (res.ok) {
      const updatedlikes = [...storedlikes, ID];
      localStorage.setItem("likedForever", JSON.stringify(updatedlikes));
    } else {
      alert("Le like a échoué côté serveur.");
    }
  } catch (err) {
    alert("Erreur de réseau : le like n’a pas pu être envoyé.");
  }
};

	const filtrer = p => {
  const moodMatch = !filtreMood || (p["Mood principal"] || "").trim().toLowerCase() === filtreMood.toLowerCase();
  const styleMatch = !filtreStyle || (p.style || "").trim().toLowerCase() === filtreStyle.toLowerCase();
  const searchMatch = (p.artist + " " + p.title).toLowerCase().includes(recherche.toLowerCase());
  return moodMatch && styleMatch && searchMatch;
};


const extraireIDYoutube = url => {
	if (!url || typeof url !== "string") return "";
	const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
	return match ? match[1] : "";
};

	const sorted = [...propositions.filter(filtrer)].sort(
  (a, b) => (likesMap[b["ID"]] || 0) - (likesMap[a["ID"]] || 0)
);
		if (!cookiesAccepted) {
		return (
			<div style={{
				padding: "2rem",
				textAlign: "center",
				color: "#000",
				backgroundColor: COLORS.pageBg,
				minHeight: "100vh"
			}}>
				<h2>🍪 Consentement requis</h2>
				<p>Pour accéder au module de like, vous devez accepter les cookies (YouTube et localStorage).</p>
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
			color: COLORS.errorText,
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
		<label htmlFor="filtre-mood" style={{ fontSize: "0.85rem" }}>Mood</label>
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
		<label htmlFor="filtre-style" style={{ fontSize: "0.85rem" }}>Style</label>
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
		<label htmlFor="recherche" style={{ fontSize: "0.85rem" }}>Recherche</label>
		<input
			type="text"
			placeholder="Rechercher artiste/titre"
			onChange={e => setRecherche(e.target.value)}
			style={{ padding: "4px 8px", width: "100%" }}
		/>
	</div>
</div>


		      
		<div style={{
	display: "flex",
	flexDirection: "column",
	rowGap: "1rem"
}}>
			        
{sorted.map((p) => (
  <div
    role="presentation"
    key={p["ID"]}
    id={`sound-${p["ID"]}`}
    style={{
      display: "grid",
      gridTemplateColumns: "160px 1fr auto",
      alignItems: "center",
      gap: "8px",
      padding: "6px 10px",
      backgroundColor: COLORS.cardBg,
      borderRadius: "6px",
      border: `1px solid ${COLORS.cardBorder}`,
      color: COLORS.cardText,
      boxShadow: `0 0 0 1px ${COLORS.cardShadowInset} inset, 0 2px 6px rgba(0,0,0,0.8)`,
    }}
  >
    {/* ▶️ Mini player à GAUCHE */}
    <div style={{ width: 160, height: 90, overflow: "hidden", borderRadius: 4 }}>
      {p["Track Link"]?.includes("soundcloud.com") ? (
        <iframe
          width="160"
          height="90"
          style={{ border: 0 }}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            p["Track Link"]
          )}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&buying=false&sharing=false&download=false`}
          title={p.title}
        />
      ) : visibleIds[p["ID"]] ? (
        <iframe
          width="160"
          height="90"
          style={{ border: 0 }}
          src={`https://www.youtube.com/embed/${extraireIDYoutube(p["Track Link"])}?autoplay=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={p.title}
        />
      ) : (
        <button
          aria-label="Lire l'extrait"
          onClick={() =>
            setVisibleIds((prev) => ({ ...prev, [p["ID"]]: true }))
          }
          style={{
            width: "160px",
            height: "90px",
            border: "0",
            borderRadius: "4px",
            cursor: "pointer",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://img.youtube.com/vi/${extraireIDYoutube(
              p["Track Link"]
            )}/hqdefault.jpg)`
          }}
        >
      <img
  src="https://img.icons8.com/color/48/000000/youtube-play.png"
  alt="Play"
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "32px",
    height: "32px",
    opacity: 0.9
  }}
/>
        </button>
      )}
    </div>

    {/* 🎤 Texte au CENTRE : Artiste – Titre (toujours visibles) */}
    <div style={{ minWidth: 0 }}>
      <p
        style={{
          margin: 0,
          fontWeight: 700,
          fontSize: "0.95rem",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
        title={`${p.artist} – ${p.title}`}
      >
        {p.artist} – {p.title}
      </p>
      <p style={{ margin: 0, fontSize: "0.75rem", color: COLORS.textMuted }}>
        {p["Mood principal"] || "Mood ?"} · {p.style || p.Style || "Style ?"}
      </p>
    </div>

   {/* ❤️ + compteur + 🔗 à DROITE */}
<div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: COLORS.likeCountBg,
      border: `1px solid ${COLORS.likeCountBorder}`,
      borderRadius: "999px",
      padding: "2px 6px"
    }}
  >
    <button
      onClick={() => like(p["ID"])}
      disabled={likedIds.includes(p["ID"])}
      title={likedIds.includes(p["ID"]) ? "Déjà liké" : "Liker"}
      style={{
        padding: "2px 4px",
        fontSize: "0.85rem",
        backgroundColor: "transparent",
        color: likedIds.includes(p["ID"]) ? COLORS.voteGreen : COLORS.cardText,
        border: "none",
        fontWeight: 600,
        cursor: likedIds.includes(p["ID"]) ? "default" : "pointer"
      }}
    >
      {likedIds.includes(p["ID"]) ? "❤️" : "🤍"}
    </button>
    <span
      aria-label="Compteur de likes"
      title="Likes"
      style={{
        fontSize: "0.8rem",
        marginLeft: "4px"
      }}
    >
      {likesMap[p["ID"]] || 0}
    </span>
  </div>

  <button
    onClick={() => {
      const shareUrl = `https://trackdiggers.com/likes?soundID=${p["ID"]}`;
      const shareData = {
        title: `${p.artist} – ${p.title}`,
        text: "like pour ce son sur TrackDiggers 🎧",
        url: shareUrl
      };
      if (navigator.share) {
        navigator.share(shareData).catch((err) =>
          console.error("Partage annulé:", err)
        );
      } else {
        navigator.clipboard.writeText(shareUrl).then(() => alert("Lien copié !"));
      }
    }}
    title="Partager"
    style={{
      padding: "6px 10px",
      fontSize: "0.85rem",
      backgroundColor: COLORS.shareBtnBg,
      color: COLORS.cardText,
      border: `1px solid ${COLORS.shareBtnBorder}`,
      borderRadius: "4px",
      fontWeight: 600,
      cursor: "pointer"
    }}
  >
    🔗
  </button>
    </div>
  </div>
))}
		</div>  
	</div>     
};

export default atomize(Playlist)({
	name: "Playlist",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "Playlist — affiche les sons proposés et permet de liker"
	},
	propInfo: {}
});