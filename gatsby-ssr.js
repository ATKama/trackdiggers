const React = require("react");
const QAPI = require("./qapi").default;

const ENABLE_TARTEAUCITRON = true;

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
          .track .title, .track .artist {
            font-family: 'Black Ops One', sans-serif !important;
          }

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
    <div
      key="cookie-blocker"
      id="cookie-blocker"
      style={{
        display: "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 99999,
        backdropFilter: "blur(3px)",
        pointerEvents: "auto",
        transition: "opacity 0.3s ease"
      }}
    ></div>,

    <script
      key="QAPI"
      dangerouslySetInnerHTML={{
        __html: `window.QAPI = ${JSON.stringify(QAPI || {})};`,
      }}
    />
  ];

  if (ENABLE_TARTEAUCITRON) {
    postBodyComponents.push(
      <script
        key="tarteaucitron-loader"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = '/tarteaucitron/tarteaucitron.min.js';
              script.onload = function () {
                var serviceScript = document.createElement('script');
                serviceScript.src = '/tarteaucitron/tarteaucitron.services.js';
                serviceScript.onload = function () {
                  tarteaucitron.init({
                    privacyUrl: "",
                    bodyPosition: "top",
                    hashtag: "#tarteaucitron",
                    cookieName: "tarteaucitron",
                    orientation: "middle",
                    groupServices: true,
                    showDetailsOnClick: true,
                    serviceDefaultState: "wait",
                    showAlertSmall: false,
                    cookieslist: false,
                    cookieslistEmbed: false,
                    closePopup: true,
                    showIcon: true,
                    iconPosition: "BottomRight",
                    adblocker: false,
                    DenyAllCta: true,
                    AcceptAllCta: true,
                    highPrivacy: true,
                    alwaysNeedConsent: false,
                    handleBrowserDNTRequest: false,
                    removeCredit: false,
                    moreInfoLink: true,
                    useExternalCss: false,
                    useExternalJs: false,
                    mandatory: true,
                    mandatoryCta: false,
                    googleConsentMode: true,
                    bingConsentMode: true,
                    softConsentMode: false,
                    dataLayer: false,
                    serverSide: false,
                    partnersList: true,
                  });

                  tarteaucitron.user.gtagUa = "G-GGZH8XN7JV";
                  tarteaucitron.job = tarteaucitron.job || [];
                  tarteaucitron.job.push("gtag");
                  tarteaucitron.job.push("youtube");
                };
                document.body.appendChild(serviceScript);
              };
              document.body.appendChild(script);
            })();
          `
        }}
      />
    );
  }

  setPostBodyComponents(postBodyComponents);
};