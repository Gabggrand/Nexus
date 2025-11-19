import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import quantumImg from "../img_jogos/Quantum_Reckoning.png";
import shadowboundImg from "../img_jogos/Shadowbound_Saga.png";
import luminasImg from "../img_jogos/Luminas_Echo.png";
import astrolabeImg from "../img_jogos/Astrolabe_Odyssey.png";
import zeroPointImg from "../img_jogos/Zero_Point_Protocol.png";
import wastelandImg from "../img_jogos/Wasteland_Raiders.png";
import IroncladFury from "../img_jogos/Ironclad_Fury.png";
import EldoriasVeil from "../img_jogos/Eldorias_Veil.png";
import VelocityAscent from "../img_jogos/Velocity_Ascent.png";

export default function Jogos() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("todos");
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
    {
      title: "Quantum Reckoning",
      genre: "Ação",
      category: "acao",
      price: "R$ 120",
      release: "Disponível",
      image: quantumImg,
    },
    {
      title: "Shadowbound Saga",
      genre: "Ação",
      category: "acao",
      price: "R$ 165",
      release: "Disponível",
      image: shadowboundImg,
    },
    {
      title: "Luminas Echo",
      genre: "Aventura",
      category: "aventura",
      price: "R$ 128",
      release: "Disponível",
      image: luminasImg,
    },
    {
      title: "Astrolabe Odyssey",
      genre: "Aventura",
      category: "aventura",
      price: "R$ 160",
      release: "Disponível",
      image: astrolabeImg,
    },
    {
      title: "Zero Point Protocol",
      genre: "FPS",
      category: "fps",
      price: "R$ 160",
      release: "Disponível",
      image: zeroPointImg,
    },
    {
      title: "Wasteland Raiders",
      genre: "FPS",
      category: "fps",
      price: "R$ 190",
      release: "Disponível",
      image: wastelandImg,
    },
    {
      title: "Ironclad Fury",
      genre: "Ação",
      category: "acao",
      price: "R$ 150",
      release: "Em breve",
      image: IroncladFury,
    },
    {
      title: "Eldoria's Veil",
      genre: "RPG",
      category: "rpg",
      price: "R$ 130",
      release: "Disponível",
      image: EldoriasVeil,
    },
    {
      title: "Velocity Ascent",
      genre: "Corrida",
      category: "corrida",
      price: "R$ 145",
      release: "Em breve",
      image: VelocityAscent,
    },
  ];

  const categories = [
    { id: "todos", name: "Todos os Jogos" },
    { id: "acao", name: "Ação" },
    { id: "aventura", name: "Aventura" },
    { id: "fps", name: "FPS" },
    { id: "rpg", name: "RPG" },
    { id: "corrida", name: "Corrida" },
  ];

  const filteredGames =
    selectedCategory === "todos"
      ? games
      : games.filter((game) => game.category === selectedCategory);

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
    heroSection: {
      padding: isMobile ? "40px 20px" : isTablet ? "60px 30px" : "80px 50px",
      textAlign: "center",
      background: "linear-gradient(135deg, #000 0%, #1a1a00 100%)",
    },
    pageTitle: {
      fontSize: isMobile ? "32px" : isTablet ? "42px" : "52px",
      color: "#FFD700",
      marginBottom: "20px",
      letterSpacing: "3px",
    },
    pageSubtitle: {
      fontSize: isMobile ? "16px" : "20px",
      color: "#ccc",
    },
    filterSection: {
      padding: isMobile ? "30px 20px" : "40px 50px",
      backgroundColor: "#0a0a0a",
    },
    filterContainer: {
      display: "flex",
      justifyContent: "center",
      gap: isMobile ? "10px" : "15px",
      flexWrap: "wrap",
    },
    filterButton: {
      padding: isMobile ? "10px 18px" : "12px 25px",
      fontSize: isMobile ? "14px" : "16px",
      fontWeight: "bold",
      border: "2px solid #FFD700",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s",
      minWidth: isMobile ? "100px" : "120px",
    },
    gamesSection: {
      padding: isMobile ? "40px 20px" : isTablet ? "60px 30px" : "80px 50px",
      backgroundColor: "#000",
    },
    gamesGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(auto-fit, minmax(300px, 1fr))",
      gap: isMobile ? "20px" : "30px",
      maxWidth: "1400px",
      margin: "0 auto",
      justifyContent: "start"
    },
    gameCard: {
      backgroundColor: "#1a1a1a",
      borderRadius: "10px",
      width: "100%",
      maxWidth: "380px",  
      border: "2px solid #FFD700",
      overflow: "hidden",
      transition: "transform 0.3s",
      cursor: "pointer",
      maxWidth: isMobile ? "100%" : "400px",
      justifySelf: "center",
    },
    gameImageContainer: {
      width: "100%",
      height: isMobile ? "250px" : "300px",
      backgroundColor: "#000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: "2px solid #FFD700",
      position: "relative",
    },
    gameImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: "10px",
      backgroundColor: "#000",
    },
    gameImagePlaceholder: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0a0a0a",
    },
    placeholderText: {
      fontSize: isMobile ? "60px" : "80px",
    },
    releaseTag: {
      position: "absolute",
      top: "15px",
      right: "15px",
      backgroundColor: "#FFD700",
      color: "#000",
      padding: isMobile ? "6px 12px" : "8px 15px",
      borderRadius: "5px",
      fontSize: isMobile ? "12px" : "14px",
      fontWeight: "bold",
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
      marginBottom: "15px",
    },
    gameFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: isMobile ? "wrap" : "nowrap",
      gap: isMobile ? "10px" : "0",
    },
    gamePrice: {
      fontSize: isMobile ? "20px" : "24px",
      color: "#FFD700",
      fontWeight: "bold",
    },
    buyButton: {
      padding: isMobile ? "8px 20px" : "10px 25px",
      fontSize: isMobile ? "14px" : "16px",
      fontWeight: "bold",
      backgroundColor: "#FFD700",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.3s",
      width: isMobile ? "100%" : "auto",
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

      <section style={styles.heroSection}>
        <h1 style={styles.pageTitle}>BIBLIOTECA DE GAMES</h1>
        <p style={styles.pageSubtitle}>
          Descubra os jogos exclusivos do Nexus Neo
        </p>
      </section>

      <section style={styles.filterSection}>
        <div style={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                ...styles.filterButton,
                backgroundColor:
                  selectedCategory === category.id ? "#FFD700" : "#1a1a1a",
                color: selectedCategory === category.id ? "#000" : "#fff",
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <section style={styles.gamesSection}>
        <div style={styles.gamesGrid}>
          {filteredGames.map((game, index) => (
            <div key={index} style={styles.gameCard}>
              <div style={styles.gameImageContainer}>
                {game.image ? (
                  <img
                    src={game.image}
                    alt={game.title}
                    style={styles.gameImage}
                  />
                ) : (
                  <div style={styles.gameImagePlaceholder}>
                    <span style={styles.placeholderText}>🎮</span>
                  </div>
                )}
                <div style={styles.releaseTag}>{game.release}</div>
              </div>
              <div style={styles.gameInfo}>
                <h3 style={styles.gameTitle}>{game.title}</h3>
                <p style={styles.gameGenre}>{game.genre}</p>
                <div style={styles.gameFooter}>
                  <span style={styles.gamePrice}>{game.price}</span>
                  <button style={styles.buyButton}>
                    {game.release === "Disponível" ? "Comprar" : "Pré-venda"}
                  </button>
                </div>
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