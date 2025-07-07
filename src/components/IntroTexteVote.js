import React, { useState } from "react";

const IntroTexteVote = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);

  return (
    <div
      style={{
        background: "#f0f0f0",
        padding: "16px",
        borderRadius: "12px",
        maxWidth: "1000px",
        margin: "0 auto 40px auto",
        textAlign: "center",
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "1.4",
        color: "#000",
      }}
    >
      <h1 style={{ margin: 0 }}>
        C'est toi qui sélectionne les morceaux TrackDiggers
        <br />
        <br />
        Découvre les morceaux proposés par la communauté et vote pour ceux que tu veux entendre dans la prochaine playlist.
        T’es artiste ? Propose ton son et fais-le valider par le public.
        <br />
        {!expanded && <>...<br /></>}
        {expanded && (
          <>
            <br />
            Chaque vote compte : les morceaux les plus appréciés reçoivent leur propre carte collector et intègrent la sélection officielle.
            <br />
            Participe à faire émerger les talents de demain — un clic peut tout changer.
            <br />
            <br />
            Tu peux aussi partager le lien de ton son dans ta story ou à tes proches pour booster tes chances de récolter plus de votes !
          </>
        )}
      </h1>
      <br />
      <button
        onClick={handleToggle}
        style={{
          background: "none",
          border: "none",
          padding: "0",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#007bff",
          cursor: "pointer",
        }}
      >
        {expanded ? "Voir moins ▲" : "Voir plus ▼"}
      </button>
    </div>
  );
};

export default IntroTexteVote;