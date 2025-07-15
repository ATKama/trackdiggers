/* global gtag */
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import atomize from "@quarkly/atomize";

const EmbedHTML = ({ children, ...props }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [hasContent, setHasContent] = useState(false);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = `
      <style>
.auralink-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.auralink-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 700px;
  border: 2px solid #000;
  border-radius: 24px;
  padding: 12px;
  background: #fff;
  margin: 0 auto;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.auralink-form input[type="text"],
.auralink-form select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f9f9f9;
  color: #000;
  outline: none;
  box-sizing: border-box;
  -webkit-appearance: none;
}

.auralink-form button {
  background: #000;
  color: #fff;
  border: none;
  padding: 0.9rem;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  width: 100%;
  box-sizing: border-box;
}

.auralink-form button:hover {
  background: #222;
}

@media (max-width: 600px) {
  .auralink-form {
    padding: 10px;
    border-radius: 18px;
  }

  .auralink-form input[type="text"],
  .auralink-form select {
    font-size: 16px;
    padding: 0.65rem 0.8rem;
  }

  .auralink-form button {
    font-size: 16px;
    padding: 0.7rem;
  }
}



        .track {
          background:rgb(255, 255, 255);
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 30px;
          box-shadow: 0 0 12px rgb(32, 32, 32);
          transition: transform 0.2s ease;
        }

        .track:hover {
          transform: scale(1.02);
        }

        .title {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #1e1e1e;
        }

        .artist {
          font-size: 16px;
          color:rgb(32, 32, 32);
          margin-bottom: 15px;
        }

        .links a {
          display: inline-block;
          margin-right: 12px;
          padding: 8px 14px;
          background: #000000;
          color: #ffffff;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s ease;
        }

        .links a:hover {
          background: #000000;
        }
		  @media (max-width: 600px) {
  .links a:last-child {
    margin-top: 8px;
  }
}

  .video {
  margin-bottom: 15px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 12px rgba(0, 255, 200, 0.1);
  width: 100%;
  height: 200px;
  display: block;
  position: relative;
}

.video iframe,
.video .youtube_player {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
  display: block;
}

      </style>

      <div class="auralink-wrapper">
  <form id="mood-form" class="auralink-form">
  <input 
    type="text" 
    id="mood" 
    name="mood" 
    placeholder="Ex : J’veux danser, je suis triste, besoin d’un boost..." 
    required 
    maxlength="60"
  />

  <select id="style-select" name="style">
    <option value="">Style (facultatif)</option>
    <option value="Rap / Trap / Drill">🎤 Rap / Trap / Drill</option>
    <option value="Afro / World / Reggaeton">🌍 Afro / World / Reggaeton</option>
    <option value="Pop urbaine / R&B">🎶 Pop urbaine / R&B</option>
    <option value="Électro / Club">🪩 Électro / Club</option>
    <option value="Techno / House / Hard">🔊 Techno / House / Hard</option>
    <option value="Lofi / Chill / Ambiant">🌙 Lofi / Chill / Ambiant</option>
    <option value="Rock / Metal / Punk">🎸 Rock / Metal / Punk</option>
    <option value="Alternatif / Expérimental">🎧 Alternatif / Expérimental</option>
    <option value="Chanson / Variété">🎙 Chanson / Variété</option>
    <option value="Jazz / Soul / Funk">🎷 Jazz / Soul / Funk</option>
    <option value="Musique de film / BO">🎬 Musique de film / BO</option>
    <option value="Autre">❓ Autre</option>
  </select>

  <button type="submit">🔍</button>
</form>


      </div>
<h2 id="auralink-heading" style="text-align: left; font-size: 15px; marginTop: 0px; margin-bottom: 24px;"> 
  Ajouts récents
</h2>
      <div id="auralink-results">
        <div class="track track-card">
          <div class="title track-title">BROLY #1</div>
          <div class="artist track-artist">Gama</div>
          <div class="video">
<div class="youtube_player"
  data-videoID="XS0pEBm1acs"
  data-width="100%"
  data-height="200"
  data-theme="dark"
  data-rel="0"
  data-controls="1"
  data-showinfo="0"
  data-autoplay="0"
  data-mute="0"
  data-loop="0"
  data-loading="1"
  
></div>
</div>
          <div class="links">
            <a href="https://www.youtube.com/watch?v=XS0pEBm1acs" target="_blank">YouTube</a>
            <a href="https://open.spotify.com/intl-fr/track/6nqrV2U9qblqeU73JJAoOy?si=4017d78a28c74003" target="_blank">Streaming</a>
            <a href="https://www.instagram.com/gama_jdl/?hl=fr" target="_blank">Follow</a>
          </div>
        </div>

        <div class="track track-card">
          <div class="title track-title">Magalie</div>
          <div class="artist track-artist">KURTYS</div>
     <div class="video">
  <div class="youtube_player"
    data-videoID="YhwQogl8-3c"
    data-width="100%"
    data-height="200"
    data-theme="dark"
    data-rel="0"
    data-controls="1"
    data-showinfo="0"
    data-autoplay="0"
    data-mute="0"
    data-loop="0"
    data-loading="1"
  ></div>
</div>

          <div class="links">
            <a href="https://www.youtube.com/watch?v=YhwQogl8-3c" target="_blank">YouTube</a>
            <a href="https://open.spotify.com/intl-fr/track/6uFq4YnbGzaDn8Ro1LCC7t?si=4b2f6ffdce3147ee" target="_blank">Streaming</a>
            <a href="https://www.instagram.com/kurtysmusic/?hl=fr" target="_blank">Follow</a>
          </div>
        </div>

        <div class="track track-card">
          <div class="title track-title">Aquarelle</div>
          <div class="artist track-artist">PINTO</div>
         <div class="video">
  <div class="youtube_player"
    data-videoID="C9oOy1vBKRA"
    data-width="100%"
    data-height="200"
    data-theme="dark"
    data-rel="0"
    data-controls="1"
    data-showinfo="0"
    data-autoplay="0"
    data-mute="0"
    data-loop="0"
    data-loading="1"
  ></div>
</div>

          <div class="links">
            <a href="https://www.youtube.com/C9oOy1vBKRA" target="_blank">YouTube</a>
            <a href="https://open.spotify.com/intl-fr/track/72bBIkl4EsLc3yXVt4wGk2?si=6f145fea753843f6" target="_blank">Streaming</a>
            <a href="https://hyperfollow.com/bleupetrole?fbclid=PAZXh0bgNhZW0CMTEAAafWWXU9S-h9EMKgFNv7nc_5Lx0numUPkHrM77gk8tdain42b-tNQmKSGejXEw_aem_a5EpbtRfn6RL5vdBycwaMA" target="_blank">Follow</a>
          </div>
        </div>
      </div>
    `;
    
      if (window.tarteaucitron && window.tarteaucitron.job) {
    window.tarteaucitron.job.push("youtube");
}

    const form = ref.current.querySelector("#mood-form");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
	  const heading = document.getElementById("auralink-heading");
if (heading) heading.style.display = "none";
      const mood = form.querySelector("#mood").value;
const style = form.querySelector("#style-select").value;


      if (typeof gtag !== "undefined") {
        gtag('event', 'mood_search', {
          mood_text: mood
        });
      }
document.getElementById("auralink-results").innerHTML = "";
      window.startAuralinkLoading && window.startAuralinkLoading();

      const res = await fetch("https://n8n.atkmusic.fr/webhook/v3test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("admin:LOrenzOmOOd!")
        },
        body: JSON.stringify({ chatInput: mood, style: style || null })

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
        containerRef.current.innerHTML = html;
          if (window.tarteaucitron && typeof window.tarteaucitron.makeYoutube === "function") {
      const ytDivs = containerRef.current.querySelectorAll(".youtube_player");
      ytDivs.forEach(div => {
        window.tarteaucitron.makeYoutube(div);
      });
    }
            if (window.tarteaucitron && window.tarteaucitron.job) {
      window.tarteaucitron.job.push("youtube");
    }

		    const heading = document.getElementById("auralink-heading");
    if (heading) {
      heading.textContent = "Ta sélection";
      heading.style.display = "block";
    }

        setHasContent(true);
      }
    };
  }, []);

return <div {...props}>
  <div ref={ref} />
  {loading && (
    <div
      style={{
        margin: "20px auto",
        padding: "16px 24px",
        border: "2px solid #0000000",
        borderRadius: "12px",
        maxWidth: "260px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "transparent"
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          border: "4px solid #000000",
          borderTop: "4px solid transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}
      />
      <p
        style={{
          marginTop: "10px",
          color: "#000000",
          fontSize: "20px",
          textAlign: "center" // ← ajout ici
        }}
      >
        Vote toi aussi pour les sons qui appraissent dans les sélections
      </p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )}
  <div ref={containerRef} />
</div>;
};

export default atomize(EmbedHTML)({
  name: "EmbedHTMLUnified",
  normalize: true,
  mixins: true
});