/* global gtag */
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import atomize from "@quarkly/atomize";

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	const containerRef = useRef(null);
	const [hasContent, setHasContent] = useState(false);
	const [loading, setLoading] = useState(false);
	useLayoutEffect(() => {
		if (!ref.current) return;
		ref.current.innerHTML = `
      <style>
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .auralink-form-container {
          max-width: 500px;
          margin: 4rem auto;
          padding: 2rem;
          background: #ffffff;
          border-radius: 60px;
          font-family: system-ui, sans-serif;
          color: #000000;
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
          position: relative;
          animation: pulse 4s ease-in-out infinite;
          transform-origin: center center;
        }

        .auralink-form-container h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          text-align: center;
          color: #000000;
        }

        .auralink-form-container label {
          display: block;
          margin-bottom: 2rem;
          font-weight: bold;
          color: #000000;
        }

        .auralink-form-group {
          background: #f4f4f4;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }

        .auralink-form-container input[type="text"] {
          width: 90%;
          padding: 1rem;
          border: 1px solid #444;
          border-radius: 50px;
          background: #f2f2f2;
          color: #000000;
          margin: 0 auto 1.5rem auto;
          display: block;
          font-size: 16px;
        }

        .auralink-form-container button {
          width: 100%;
          padding: 1rem;
          background: #3E3E3E;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .auralink-form-container button:hover {
          background: #333;
        }
      </style>

      <div class="auralink-form-container">
        <form id="mood-form">
          <div class="auralink-form-group">
            <label for="mood">Décris ton mood :</label>
            <input 
              type="text" 
              id="mood" 
              name="mood" 
              placeholder="Je veux danser, pleurer ..." 
              required 
            />
          </div>
          <button type="submit">Demander</button>
        </form>
      </div>

      <div id="auralink-results" style="margin-top: 40px;"></div>
    `;
		const form = ref.current.querySelector("#mood-form");
		form.addEventListener("submit", async function (e) {
			e.preventDefault();
			const mood = form.querySelector("#mood").value;

	// 🔹 Événement GA - recherche mood
	if (typeof gtag !== "undefined") {
		gtag('event', 'mood_search', {
			mood_text: mood
		});
	}window.startAuralinkLoading && window.startAuralinkLoading();
			const res = await fetch("https://n8n.atkmusic.fr/webhook/74886902-8e06-4662-89d6-6a92561ac9f7", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Basic " + btoa("admin:LOrenzOmOOd!")
				},
				body: JSON.stringify({
					chatInput: mood
				})
			});
			const html = await res.text();
			window.refreshAuralink && window.refreshAuralink(html);
		});
	}, []);
	useEffect(() => {
		if (typeof window === "undefined") return;

		window.startAuralinkLoading = () => {
			setLoading(true);
			setHasContent(false);
			if (containerRef.current) containerRef.current.innerHTML = "";
		};

		window.refreshAuralink = html => {
			setLoading(false);

			if (containerRef.current) {
				containerRef.current.innerHTML = "";
				containerRef.current.insertAdjacentHTML("beforeend", html);
				setHasContent(true);
				const anchors = containerRef.current.querySelectorAll("a");
				anchors.forEach(anchor => {
					anchor.addEventListener("click", e => {
						e.preventDefault();
						window.open(anchor.href, "_blank");
					});
				});
				const cards = containerRef.current.querySelectorAll(".track-card");
				const trackInputs = [document.querySelector('input[name="track1"]'), document.querySelector('input[name="track2"]'), document.querySelector('input[name="track3"]')];

				if (cards.length >= 3 && trackInputs.every(Boolean)) {
					cards.forEach((card, index) => {
						if (index < 3) {
							const title = card.querySelector(".track-title")?.textContent?.trim() || "";
							const artist = card.querySelector(".track-artist")?.textContent?.trim() || "";
							trackInputs[index].value = `${title} – ${artist}`;
						}
					});
				}
			}
		};

		window.handlePackSubmit = function (e) {
			e.preventDefault();
			const form = e.target;
			const email = form.email.value;
			const track1 = form.track1.value;
			const track2 = form.track2.value;
			const track3 = form.track3.value;
			fetch("https://n8n.atkmusic.fr/webhook-test/receive-pack-request", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: new URLSearchParams({
					email,
					track1,
					track2,
					track3
				})
			}).then(res => alert(res.ok ? "🎉 Pack envoyé avec succès !" : "❌ Une erreur est survenue.")).catch(() => alert("❌ Problème réseau."));
		};
	}, []);
	return <div {...props}>
		      
		<div ref={ref} />
		      
		{loading && <div style={{
			margin: "20px auto",
			padding: "16px 24px",
			border: "2px solid #0000000",
			borderRadius: "12px",
			maxWidth: "260px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			backgroundColor: "transparent"
		}}>
			          
			<div style={{
				width: "30px",
				height: "30px",
				border: "4px solid #000000",
				borderTop: "4px solid transparent",
				borderRadius: "50%",
				animation: "spin 1s linear infinite"
			}} />
			          
			<p style={{
				marginTop: "10px",
				color: "#000000",
				fontSize: "20px"
			}}>
				            Vote toi aussi pour les sons qui appraissent dans les sélections
          
			</p>
			          
			<style>
				            
				{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
				          
			</style>
			        
		</div>}
		      
		<div ref={containerRef} />
		    
	</div>;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTMLUnified",
	normalize: true,
	mixins: true
});