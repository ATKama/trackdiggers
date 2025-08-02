/* global gtag, YT, tarteaucitron */
import React from "react";
import theme from "theme";
import { Theme, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import SlideMenu from "../components/SlideMenu"; // 🔁 Comme sur index.js
import { Link, Image } from "@quarkly/widgets"; // 🔁 Utilisé dans header/footer
import { useEffect } from "react";
import { useLocation } from "@reach/router";



const initYTTracking = () => {
  const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"]');

  iframes.forEach((iframe) => {
    let src = iframe.getAttribute('src');
    if (!src.includes('enablejsapi=1')) {
      const sep = src.includes('?') ? '&' : '?';
      iframe.setAttribute('src', src + sep + 'enablejsapi=1');
    }

    const videoId = src.split('/embed/')[1]?.split('?')[0];

    const waitForYT = setInterval(() => {
      if (window.YT && typeof window.YT.Player === "function") {
        clearInterval(waitForYT);

        const player = new YT.Player(iframe, {
          events: {
            onStateChange: (event) => {
              if (event.data === YT.PlayerState.PLAYING) {
                const playTimer = setTimeout(() => {
                  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
                    if (typeof gtag !== "undefined") {
                      gtag('event', 'video_play_3s', {
                        video_id: videoId,
                        event_category: 'Article',
                        event_label: videoId,
                        value: 1,
                        send_to: 'G-GGZH8XN7JV'
                      });
                      console.log(`[GA4] Événement video_play_3s envoyé pour ${videoId}`);
                    }
                  }
                }, 3000);

                const onStateChange = (e) => {
                  if (e.data !== YT.PlayerState.PLAYING) {
                    clearTimeout(playTimer);
                    player.removeEventListener("onStateChange", onStateChange);
                  }
                };

                player.addEventListener("onStateChange", onStateChange);
              }
            }
          }
        });
      }
    }, 300);
  });
};


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "fr")
        description
        image
        youtube
      }
      html
      fields {
        slug
      }
    }
  }
`;

const ArticleTemplate = ({ data }) => {
    const location = useLocation();
  const { frontmatter, html, fields } = data.markdownRemark;

useEffect(() => {
  if (typeof window === "undefined") return;

  const patchTarteaucitronYoutube = () => {
   if (!window.tarteaucitron) return;

    window.tarteaucitron.makeYoutube = function (div) {
        console.log("[YT DEBUG] Redéfinition makeYoutube appliquée");
      const videoID = div.getAttribute("data-videoid");
      if (!videoID) return;

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoID}?enablejsapi=1&rel=0&controls=1`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.setAttribute("allowfullscreen", "true");
      iframe.setAttribute("title", "YouTube video player");
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      div.innerHTML = "";
      div.style.width = "100%";
div.style.height = "200px"; // ou toute autre hauteur souhaitée
      div.appendChild(iframe);
      const wrapper = div.closest(".video");
if (wrapper) {
  wrapper.style.marginBottom = "12px";
}
      div.parentElement.style.marginBottom = "12px";
    };
  };

 const injectYoutubePlayers = () => {
  const divs = document.querySelectorAll(".youtube_player");
  patchTarteaucitronYoutube();

console.log("[YT DEBUG] youtube_player count :", divs.length);

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    divs.forEach((div) => {
      console.log("[YT DEBUG] div trouvé :", div);
      try {
        window.tarteaucitron.makeYoutube(div);
        console.log("[YT DEBUG] Injection iframe réussie");
      } catch (e) {
        console.error("[YT DEBUG] Erreur lors de l’injection iframe :", e);
      }
    });

    if (typeof tarteaucitron?.launch === "function") {
      console.log("[YT DEBUG] Relancement de tarteaucitron.launch");
      tarteaucitron.launch();
    }
  });
});

    if (window.tarteaucitron?.job && !window.tarteaucitron.job.includes("youtube")) {
      window.tarteaucitron.job.push("youtube");
    }

    if (window.YT && typeof window.YT.Player === "function") {
      initYTTracking();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initYTTracking();
      };
    }
  };

 const waitForYoutubeConsent = (callback, maxTries = 10, delay = 500) => {
  let attempts = 0;
  const check = () => {
    // ✅ CORRECTION : Vérifier state.youtube au lieu de services.youtube.consent
    if (window.tarteaucitron?.state?.youtube === true) {
      console.log("[YT DEBUG] Consentement actif détecté ✅");
      callback();
    } else {
      attempts++;
      if (attempts < maxTries) {
        console.log(`[YT DEBUG] Consentement non encore détecté (tentative ${attempts})`);
        setTimeout(check, delay);
      } else {
        console.warn("[YT DEBUG] Timeout : consentement non détecté après 10 tentatives ❌");
      }
    }
  };
  check();
};

 waitForYoutubeConsent(() => {
  const observer = new MutationObserver((mutations, obs) => {
    const divs = document.querySelectorAll(".youtube_player");
    if (divs.length > 0) {
      console.log("[YT DEBUG] youtube_player détectés après mutation :", divs.length);
      obs.disconnect();
      injectYoutubePlayers();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
  

}, [location.pathname]);
  return (
    <Layout pageUrl={`actus${fields.slug}`}>
      <Theme theme={theme}>
        <GlobalQuarklyPageStyles pageUrl={`actus${fields.slug}`} />
        <Helmet>
          {/* ... tes balises meta */}
        </Helmet>

        {/* 🔼 Header fixé + SlideMenu */}
        <Section
          padding="0px 0 16px 0"
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
          <Override slot="SectionContent" display="flex" justify-content="center" align-items="center" width="100%" max-width="1200px" margin="0 auto" padding="0 20px" />
          <Link href="/" text-decoration="none">
            <Image
              src="https://uploads.quarkly.io/682f25cf9335410018cc8538/images/TrackDigger.svg?v=2025-06-12T13:46:43.953Z"
              width="200px"
              height="auto"
              alt="Logo Trackdiggers"
              margin="20px 0px 0px 0px"
            />
          </Link>
          <SlideMenu />
        </Section>

        {/* 🔽 Ton contenu d'article, avec padding top */}
        <Section padding="100px 20px 60px 20px" background="#ffffff">
          <Override slot="SectionContent" max-width="800px" margin="0 auto"/>
          <Text as="h1" font="--headline2" margin="0 0 24px 0" color="#000">
            {frontmatter.title}
          </Text>
          <Text font="--base" margin="0 0 40px 0" color="#666">
            {frontmatter.date}
          </Text>
         {(!frontmatter.youtube && frontmatter.image) ? (
  <Section padding="0" margin="0">
    <Override slot="SectionContent" padding="0" margin="0" />
    <Image
      src={frontmatter.image}
      width="100%"
      height="auto"
      object-fit="cover"
      max-height="150px"
      alt={frontmatter.title}
    />
  </Section>
) : null}

{frontmatter.youtube && (
  <Section padding="0" margin="0">
    <Override slot="SectionContent" padding="0" margin="0" />
<Box
  className="video"
style={{
    width: "100%",
    height: "200px",
    borderRadius: "12px",
    overflow: "hidden"
  }}
>
      <div
        className="youtube_player"
        data-videoid={frontmatter.youtube.split("v=")[1]}
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
    </Box>
  </Section>
)}
          <Box font="--base" color="#000" dangerouslySetInnerHTML={{ __html: html }} />
        </Section>

        {/* 🔽 Footer comme sur index.js */}
        <Section padding="40px 0" background="#ffffff" border-radius="30px">
          <Override slot="SectionContent" flex-direction="column" align-items="center" justify-content="center" text-align="center" />
          <Text font="--base" margin="0 0 10px 0" color="--dark">
            © 2025 Trackdiggers — ATK Music
          </Text>
          <Text font="--base" color="--dark">
            <Link href="/informations-legales" margin="0 10px">Mentions légales</Link> |
            <Link href="/informations-legales" margin="0 10px">Politique de confidentialité</Link> |
            <Link href="/informations-legales" margin="0 10px">CGU</Link>
          </Text>
          <Box margin="24px 0 0 0" display="flex" gap="40px" justify-content="center" align-items="center">
            <Link href="https://instagram.com/trackdiggers" target="_blank">
              <Image src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="32px" alt="Instagram" />
            </Link>
            <Link href="https://tiktok.com/@trackdiggers" target="_blank">
              <Image src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="32px" alt="TikTok" />
            </Link>
            <Link href="https://x.com/track_diggers" target="_blank">
              <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" width="32px" alt="Twitter" />
            </Link>
          </Box>
        </Section>
      </Theme>
    </Layout>
  );
};

export default ArticleTemplate;