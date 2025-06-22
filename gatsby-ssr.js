const React = require("react");
const QAPI = require("./qapi").default;

 const insideHeadRawHtmls = [];
const beforeBodyRawHtmls = [];
 export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {

  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    
    ...insideHeadRawHtmls,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material%20Symbols%20Outlined:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Black%20Ops%20One:ital,wght@0,400&display=swap" />,
  ]);
   setPostBodyComponents([
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
    
    ...beforeBodyRawHtmls,
  ]);
}
