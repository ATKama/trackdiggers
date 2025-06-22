import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize";

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		if (!ref.current) return;
		ref.current.innerHTML = `
      <style>
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }

        .auralink-form-container {
          max-width: 500px;
          margin: 4rem auto;
          padding: 2rem;
          background: #ffffff;
          border-radius: 50px;
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
          font-family: system-ui, sans-serif;
          color: #000000;
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
          margin-bottom: 1rem;
          font-weight: bold;
          color: #000000;
        }

        .auralink-form-group {
          background: #f4f4f4;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 12px;
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
          background: #222;
        }

        .auralink-cards {
          margin: 40px auto;
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .auralink-card {
          width: 30%;
          background: #0a0a0a;
          padding: 1rem;
          border-radius: 20px;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
          color: #fff;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .auralink-card:hover {
          transform: translateY(-5px);
        }

        .auralink-card img {
          width: 100%;
          border-radius: 16px;
          margin-bottom: 0.5rem;
        }

        .auralink-card div {
          font-weight: bold;
          font-size: 1rem;
        }

        .auralink-card small {
          color: #888;
        }

        @media (max-width: 768px) {
          .auralink-card {
            width: 100%;
          }
        }
      </style>

      <div class="auralink-form-container">
        <form id="card-form">
          <div class="auralink-form-group">
            <label for="email">Tape ton email ici :</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              placeholder="ex: moi@email.com" 
              required 
            />
          </div>
          <button type="submit">Voir mes cartes</button>
        </form>
      </div>

      <div id="auralink-results" class="auralink-cards"></div>
    `;

		window.refreshAuralink = function (cards) {
			const container = ref.current.querySelector("#auralink-results");
			if (!container) return;

			if (!Array.isArray(cards) || cards.length === 0) {
				container.innerHTML = "<p style='color:#fff;text-align:center'>Aucune carte trouvée.</p>";
				return;
			}

			container.innerHTML = cards.map(card => `
        <div class="auralink-card">
          <img src="${card.url}" alt="${card.filename}" />
          <div>${card.filename}</div>
          <small>${card.date}</small>
        </div>
      `).join("");
		};

		const form = ref.current.querySelector("#card-form");
		form.addEventListener("submit", async function (e) {
			e.preventDefault();
			const email = form.querySelector("#email").value;
			const res = await fetch("https://n8n.atkmusic.fr/webhook/a4d61ec4-6adb-4427-8a74-7c0058d29045", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": "Basic " + btoa("admin:LOrenzOmOOd!")
				},
				body: JSON.stringify({
					email
				})
			});
			const data = await res.json();
			window.refreshAuralink(data);
		});
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTMLCollector",
	normalize: true,
	mixins: true
});