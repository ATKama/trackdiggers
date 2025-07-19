const React = require("react");
const QAPI = require("./qapi").default;

const ENABLE_TARTEAUCITRON = false;

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
        <script
      key="gtag-lib"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-GGZH8XN7JV"
    />,
    <script
      key="gtag-init"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GGZH8XN7JV', {
  debug_mode: true
});
        `,
      }}
    />,
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
      <script key="tarteaucitron-js" src="/tarteaucitron/tarteaucitron.min.js" defer />,
      <script key="tarteaucitron-services" src="/tarteaucitron/tarteaucitron.services.js" defer />,
      <script key="tarteaucitron-lang" src="/tarteaucitron/lang/tarteaucitron.fr.js" defer />,
      <script
        key="tarteaucitron-config"
        dangerouslySetInnerHTML={{
          __html: `/* tout ton script init ici */`
        }}
      />
    );
  }

  setPostBodyComponents(postBodyComponents);
};
