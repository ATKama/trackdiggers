import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
const fontFamily = "'Black Ops One', cursive";

const SlideMenu = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Force la visibilité après le montage du composant
  useEffect(() => {
    // Petit délai pour s'assurer que tout le DOM est chargé
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const goTo = (url) => {
    setOpen(false);
    setTimeout(() => navigate(url), 200);
  };

  return (
    <>
      {/* Burger toujours visible avec forçage de visibilité */}
      {!open && (
        <button
        aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            top: "8px",
            left: "20px",
            zIndex: "9999",
            cursor: "pointer",
            background: "rgba(255, 255, 255, 0.95)", // Fond pour éviter les problèmes de contraste
            padding: "10px",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // Ombre pour plus de visibilité
            opacity: isVisible ? 1 : 0, // Animation d'apparition
            visibility: isVisible ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            // Force l'affichage même en cas de conflit
            display: "block !important"
          }}
        >
          <div style={{ 
            width: "30px", 
            height: "4px", 
            background: "#000", 
            margin: "6px 0",
            borderRadius: "2px"
          }} />
          <div style={{ 
            width: "30px", 
            height: "4px", 
            background: "#000", 
            margin: "6px 0",
            borderRadius: "2px"
          }} />
          <div style={{ 
            width: "30px", 
            height: "4px", 
            background: "#000", 
            margin: "6px 0",
            borderRadius: "2px"
          }} />
        </button>
      )}

      {/* Menu latéral */}
      <div
        style={{
          position: "fixed",
          top: "0",
          left: open ? "0" : "-300px",
          width: "250px",
          height: "100vh",
          background: "#fff",
          boxShadow: "4px 0 15px rgba(0,0,0,0.2)",
          zIndex: "9998",
          transition: "left 0.3s ease",
          display: "flex",
          flexDirection: "column",
          padding: "40px 20px"
        }}
      >
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "24px",
            cursor: "pointer",
            opacity: 0.6,
            zIndex: "9999",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            transition: "background-color 0.2s ease, opacity 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f0f0f0";
            e.target.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.opacity = "0.6";
          }}
        >
          ✕
        </button>
        
        <div style={{ marginTop: "60px", display: "flex", flexDirection: "column", fontFamily }}>
          <div style={{ fontSize: "20px", marginBottom: "20px", fontWeight: "bold" }}>Menu</div>
          <button onClick={() => goTo("/")} style={linkStyle}>Search by mood</button>
          <button onClick={() => goTo("/votes")} style={linkStyle}>Page de votes</button>
          <button onClick={() => goTo("/playlist")} style={linkStyle}>Playlist</button>
          <button onClick={() => goTo("/cartes")} style={linkStyle}>Mes cartes</button>
          <button onClick={() => goTo("/actus")} style={linkStyle}>Actualités & News</button>
          <button onClick={() => goTo("/about")} style={linkStyle}>À propos</button>
  <button
    onClick={() => goTo("/propose")}
    style={{
      ...linkStyle,
      fontSize: "20px",
      fontWeight: "bold",
      backgroundColor: "#000",
      color: "#fff",
      marginTop: "30px"
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#222";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#000";
    }}
  >
    Propose ton son
  </button>
        </div>
      </div>

      {/* Overlay quand le menu est ouvert */}
      {open && (
        <div
        role="presentation"
aria-hidden="true"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.4)",
            zIndex: "9997",
            transition: "opacity 0.3s ease"
          }}
        />
      )}
    </>
  );
};

const linkStyle = {
  margin: "10px 0",
  color: "#000",
  textDecoration: "none",
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: "6px",
  transition: "background-color 0.2s ease",
  display: "block",
  fontFamily
};

export default SlideMenu;