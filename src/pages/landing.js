import React from "react"
import { Helmet } from "react-helmet"

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Trackdiggers – Découvre la Next Gen</title>
      </Helmet>
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h1>Trackdiggers</h1>
        <p>Découvre les pépites musicales de demain, classées par mood.</p>
        <a href="/" style={{ display: "inline-block", marginTop: "2rem" }}>
          Accéder au site
        </a>
      </div>
    </>
  )
}

export default LandingPage