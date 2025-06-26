const React = require("react");
const QAPI = require("./qapi").default;

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
          html, body, #___gatsby, #___gatsby > div {
            font-family: 'Black Ops One', sans-serif !important;
          }
        `,
      }}
    />,
  ]);

  setPostBodyComponents([
    <div
      key="cookie-blocker"
      id="cookie-blocker"
      style={{
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

    <script
      key="tarteaucitron-js"
      src="/tarteaucitron/tarteaucitron.min.js"
      defer
    />,
    <script
      key="tarteaucitron-services"
      src="/tarteaucitron/tarteaucitron.services.js"
      defer
    />,
    <script
      key="tarteaucitron-lang"
      src="/tarteaucitron/lang/tarteaucitron.fr.js"
      defer
    />,

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
              googleConsentMode: true
            });

            tarteaucitron.user.gtagUa = "G-GGZH8XN7JV";
            tarteaucitron.job = tarteaucitron.job || [];
            tarteaucitron.job.push("gtag");

            const interval = setInterval(() => {
              const cookie = document.cookie
                .split('; ')
                .find(row => row.startsWith('trackdiggersConsent='));

              if (cookie && cookie.includes("gtag=true")) {
                const blocker = document.getElementById("cookie-blocker");
                if (blocker) blocker.remove();
                clearInterval(interval);
              }
            }, 300);
          });
        `,
      }}
    />,
  ]);
};