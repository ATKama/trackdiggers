const React = require("react");
const QAPI = require("./qapi").default;

const ENABLE_TARTEAUCITRON = false;

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      key="material-symbols"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
    />,
    <link
      key="black-ops-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap"
    />,
    <link
      key="tarteaucitron-css"
      rel="stylesheet"
      href="/tarteaucitron/tarteaucitron.css"
    />,
<style
  key="global-font-style"
  dangerouslySetInnerHTML={{
    __html: `
      /* Appliquer Black Ops One seulement sur les cartes */
      .track .title, .track .artist {
        font-family: 'Black Ops One', sans-serif !important;
      }

      /* Verrouiller Inter sur tous les blocs sensibles */
      .force-inter, .force-inter * {
        font-family: 'Inter', sans-serif !important;
      }

      html, body {
        overflow-x: hidden;
      }
    `,
  }}
/>
  ]);

  const postBodyComponents = [
    // Bloc désactivé pour le moment — à réactiver en changeant display: none → block
    <div
      key="cookie-blocker"
      id="cookie-blocker"
      style={{
        display: "none", // ⬅️ Désactivation ici
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 99999,
        backdropFilter: "blur(3px)",
        pointerEvents: "auto",
      }}
    ></div>,

    <script
      key="QAPI"
      dangerouslySetInnerHTML={{
        __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`,
      }}
    />,
  ];

  if (ENABLE_TARTEAUCITRON) {
    postBodyComponents.push(
      <script key="tarteaucitron-js" src="/tarteaucitron/tarteaucitron.min.js" defer />,
      <script key="tarteaucitron-services" src="/tarteaucitron/tarteaucitron.services.js" defer />,
      <script key="tarteaucitron-lang" src="/tarteaucitron/lang/tarteaucitron.fr.js" defer />,
      <script
        key="tarteaucitron-config"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("load", function () {
              tarteaucitron.init({
                privacyUrl: "/informations-legales",
                bodyPosition: "top",
                hashtag: "#tarteaucitron",
                cookieName: "trackdiggersConsent",
                orientation: "bottom",
                groupServices: true,
                showDetailsOnClick: true,
                serviceDefaultState: "wait",
                showAlertSmall: false,
                cookieslist: true,
                mandatory: true,
                mandatoryCta: true,
                AcceptAllCta: true,
                DenyAllCta: true,
                adblocker: false,
                highPrivacy: false,
                handleBrowserDNTRequest: false,
                removeCredit: true,
                moreInfoLink: true,
                useExternalCss: false,
                useExternalJs: false,
                googleConsentMode: true,
              });

              tarteaucitron.user.adsensecapub = "ca-pub-1398071244867525";
              tarteaucitron.job = tarteaucitron.job || [];
              tarteaucitron.job.push("adsenseauto");

              tarteaucitron.user.gtagUa = "G-GGZH8XN7JV";
              tarteaucitron.job.push("gtag");
            });
          `,
        }}
      />
    );
  }

  setPostBodyComponents(postBodyComponents);
};