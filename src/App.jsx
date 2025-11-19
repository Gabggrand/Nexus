import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Trailer from "./pages/trailer.jsx";
import Suporte from "./pages/suporte.jsx";
import Jogos from "./pages/jogos.jsx";
import Acessorios from "./pages/acessorios.jsx";

import quantumImg from "./img_jogos/Quantum_Reckoning.png";
import shadowboundImg from "./img_jogos/Shadowbound_Saga.png";
import luminasImg from "./img_jogos/Luminas_Echo.png";
import astrolabeImg from "./img_jogos/Astrolabe_Odyssey.png";
import zeroPointImg from "./img_jogos/Zero_Point_Protocol.png";
import wastelandImg from "./img_jogos/Wasteland_Raiders.png";

function Home() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const games = [
    { title: "Quantum Reckoning", genre: "Ação", image: quantumImg },
    { title: "Shadowbound Saga", genre: "Ação", image: shadowboundImg },
    { title: "Luminas Echo", genre: "Aventura", image: luminasImg },
    { title: "Astrolabe Odyssey", genre: "Aventura", image: astrolabeImg },
    { title: "Zero Point Protocol", genre: "FPS", image: zeroPointImg },
    { title: "Wasteland Raiders", genre: "FPS", image: wastelandImg },
  ];

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "15px 20px" : "20px 50px",
      backgroundColor: "#000",
      borderBottom: "2px solid #FFD700",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      flexWrap: isMobile ? "wrap" : "nowrap",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    logoIcon: {
      fontSize: isMobile ? "24px" : "32px",
      color: "#FFD700",
    },
    logoText: {
      fontSize: isMobile ? "20px" : "28px",
      fontWeight: "bold",
      color: "#FFD700",
      letterSpacing: "2px",
    },
    menuButton: {
      display: isMobile ? "block" : "none",
      fontSize: "28px",
      color: "#FFD700",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    nav: {
      display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "15px" : "30px",
      width: isMobile ? "100%" : "auto",
      marginTop: isMobile ? "15px" : "0",
    },
    navLink: {
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      transition: "color 0.3s",
      cursor: "pointer",
      textAlign: isMobile ? "center" : "left",
    },
    hero: {
      display: "flex",
      flexDirection: isMobile || isTablet ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "40px 20px" : isTablet ? "60px 30px" : "80px 50px",
      background: "linear-gradient(135deg, #000 0%, #1a1a00 100%)",
      minHeight: isMobile ? "auto" : "600px",
      gap: "40px",
    },
    heroContent: {
      flex: 1,
      textAlign: isMobile || isTablet ? "center" : "left",
    },
    heroTitle: {
      fontSize: isMobile ? "42px" : isTablet ? "56px" : "72px",
      fontWeight: "bold",
      color: "#FFD700",
      marginBottom: "10px",
      textShadow: "0 0 20px #FFD700",
    },
    heroSubtitle: {
      fontSize: isMobile ? "16px" : isTablet ? "20px" : "24px",
      color: "#fff",
      marginBottom: "30px",
      letterSpacing: "3px",
    },
    heroFeatures: {
      display: "flex",
      gap: isMobile ? "10px" : "20px",
      marginBottom: "40px",
      flexWrap: "wrap",
      justifyContent: isMobile || isTablet ? "center" : "flex-start",
    },
    feature: {
      padding: isMobile ? "8px 15px" : "10px 20px",
      backgroundColor: "#FFD700",
      color: "#000",
      fontWeight: "bold",
      borderRadius: "5px",
      fontSize: isMobile ? "12px" : "14px",
    },
    ctaButton: {
      padding: isMobile ? "12px 30px" : "15px 40px",
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "bold",
      backgroundColor: "#ffffffff",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.3s",
    },
    consoleDisplay: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    consoleImage: {
      maxWidth: isMobile ? "100%" : isTablet ? "400px" : "500px",
      width: "100%",
      height: "auto",
      filter: "drop-shadow(0 0 30px #FFD700)",
    },
    section: {
      padding: isMobile ? "40px 20px" : isTablet ? "60px 30px" : "80px 50px",
      backgroundColor: "#0a0a0a",
    },
    sectionTitle: {
      fontSize: isMobile ? "28px" : isTablet ? "36px" : "42px",
      color: "#FFD700",
      textAlign: "center",
      marginBottom: isMobile ? "30px" : "50px",
      letterSpacing: "2px",
    },
    gamesGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
          ? "repeat(2, 1fr)"
          : "repeat(3, 1fr)",
      gap: isMobile ? "20px" : "30px",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    gameCard: {
      backgroundColor: "#1a1a1a",
      borderRadius: "10px",
      border: "2px solid #FFD700",
      overflow: "hidden",
      transition: "transform 0.3s",
      cursor: "pointer",
    },
    gameImageContainer: {
      width: "100%",
      height: isMobile ? "250px" : "300px",
      backgroundColor: "#000",
      borderBottom: "2px solid #FFD700",
    },
    gameImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: "10px",
    },
    gameInfo: {
      padding: isMobile ? "15px" : "20px",
    },
    gameTitle: {
      fontSize: isMobile ? "18px" : "22px",
      color: "#FFD700",
      marginBottom: "8px",
      fontWeight: "bold",
    },
    gameGenre: {
      fontSize: isMobile ? "14px" : "16px",
      color: "#ccc",
    },
    footer: {
      padding: isMobile ? "20px" : "30px",
      backgroundColor: "#000",
      borderTop: "2px solid #FFD700",
      textAlign: "center",
    },
    footerText: {
      color: "#ccc",
      fontSize: isMobile ? "12px" : "14px",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>⬢</span>
          <span style={styles.logoText}>NEXUS</span>
        </div>

        {isMobile && (
          <button
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        )}

        <nav style={styles.nav}>
          <Link
            to="/"
            style={{
              ...styles.navLink,
              color: hoveredLink === "home" ? "#FFD700" : "#fff",
            }}
            onMouseEnter={() => setHoveredLink("home")}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/jogos"
            style={{
              ...styles.navLink,
              color: hoveredLink === "jogos" ? "#FFD700" : "#fff",
            }}
            onMouseEnter={() => setHoveredLink("jogos")}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => setMenuOpen(false)}
          >
            Games
          </Link>
          <Link
            to="/acessorios"
            style={{
              ...styles.navLink,
              color: hoveredLink === "acessorios" ? "#FFD700" : "#fff",
            }}
            onMouseEnter={() => setHoveredLink("acessorios")}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => setMenuOpen(false)}
          >
            Acessórios
          </Link>
          <Link
            to="/trailer"
            style={{
              ...styles.navLink,
              color: hoveredLink === "trailer" ? "#FFD700" : "#fff",
            }}
            onMouseEnter={() => setHoveredLink("trailer")}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => setMenuOpen(false)}
          >
            Trailer
          </Link>
          <Link
            to="/suporte"
            style={{
              ...styles.navLink,
              color: hoveredLink === "suporte" ? "#FFD700" : "#fff",
            }}
            onMouseEnter={() => setHoveredLink("suporte")}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => setMenuOpen(false)}
          >
            Suporte
          </Link>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>NEXUS NEO</h1>
          <p style={styles.heroSubtitle}>A NOVA GERAÇÃO DO GAMING</p>
          <div style={styles.heroFeatures}>
            <span style={styles.feature}>4K Ultra HD</span>
            <span style={styles.feature}>120 FPS</span>
            <span style={styles.feature}>Ray Tracing</span>
          </div>
          <button style={styles.ctaButton}>COMPRE AGORA</button>
        </div>
        <div style={styles.consoleDisplay}>
          <img
            src="/src/img/Console_e_Controle.png"
            alt="Nexus Neo Console"
            style={styles.consoleImage}
          />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>JOGOS EXCLUSIVOS</h2>
        <div style={styles.gamesGrid}>
          {games.map((game, i) => (
            <div key={i} style={styles.gameCard}>
              <div style={styles.gameImageContainer}>
                <img
                  src={game.image}
                  alt={game.title}
                  style={styles.gameImage}
                />
              </div>
              <div style={styles.gameInfo}>
                <h3 style={styles.gameTitle}>{game.title}</h3>
                <p style={styles.gameGenre}>{game.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 Nexus Gaming. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jogos" element={<Jogos />} />
      <Route path="/acessorios" element={<Acessorios />} />
      <Route path="/trailer" element={<Trailer />} />
      <Route path="/suporte" element={<Suporte />} />
    </Routes>
  );
}