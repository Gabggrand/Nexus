import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import trailerVideo from "../video/Nexus_Neo.mp4";

export default function Trailer() {
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

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
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
    trailerSection: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "30px 20px" : "50px 20px",
      backgroundColor: "#0a0a0a",
    },
    pageTitle: {
      fontSize: isMobile ? "28px" : isTablet ? "38px" : "48px",
      color: "#FFD700",
      marginBottom: isMobile ? "30px" : "40px",
      letterSpacing: "3px",
      textAlign: "center",
    },
    videoContainer: {
      width: "100%",
      maxWidth: isMobile ? "100%" : "1000px",
      aspectRatio: "16 / 9",
      backgroundColor: "#1a1a1a",
      border: "3px solid #FFD700",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
    },
    video: {
      width: "100%",
      height: "100%",
      border: "none",
    },
    videoDescription: {
      marginTop: isMobile ? "20px" : "30px",
      fontSize: isMobile ? "14px" : "18px",
      color: "#ccc",
      textAlign: "center",
      maxWidth: "600px",
      padding: isMobile ? "0 10px" : "0",
    },
    specsSection: {
      padding: isMobile ? "40px 20px" : isTablet ? "60px 30px" : "80px 50px",
      backgroundColor: "#000",
    },
    specsTitle: {
      fontSize: isMobile ? "28px" : isTablet ? "36px" : "42px",
      color: "#FFD700",
      textAlign: "center",
      marginBottom: "20px",
      letterSpacing: "2px",
    },
    specsSubtitle: {
      fontSize: isMobile ? "14px" : "18px",
      color: "#ccc",
      textAlign: "center",
      marginBottom: isMobile ? "30px" : "50px",
      padding: isMobile ? "0 10px" : "0",
    },
    specsTable: {
      maxWidth: "1000px",
      margin: "0 auto",
      backgroundColor: "#1a1a1a",
      border: "2px solid #FFD700",
      borderRadius: "10px",
      overflow: isMobile ? "auto" : "hidden",
    },
    specsRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      borderBottom: "1px solid #333",
    },
    specLabel: {
      flex: isMobile ? "none" : "0 0 250px",
      padding: isMobile ? "15px 20px" : "20px 30px",
      backgroundColor: "#0a0a0a",
      color: "#FFD700",
      fontWeight: "bold",
      fontSize: isMobile ? "14px" : "16px",
      borderRight: isMobile ? "none" : "2px solid #FFD700",
      borderBottom: isMobile ? "1px solid #FFD700" : "none",
    },
    specValue: {
      flex: 1,
      padding: isMobile ? "15px 20px" : "20px 30px",
      color: "#fff",
      fontSize: isMobile ? "13px" : "16px",
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

      <section style={styles.trailerSection}>
        <h1 style={styles.pageTitle}>TRAILER OFICIAL</h1>
        <div style={styles.videoContainer}>
          <video style={styles.video} controls>
            <source src={trailerVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <p style={styles.videoDescription}>
          Assista ao trailer oficial do Nexus Neo e descubra o futuro do gaming
        </p>
      </section>

      <section style={styles.specsSection}>
        <h2 style={styles.specsTitle}>ESPECIFICAÇÕES TÉCNICAS</h2>
        <p style={styles.specsSubtitle}>
          Hardware de última geração que redefine os padrões do gaming
        </p>

        <div style={styles.specsTable}>
          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Processador</div>
            <div style={styles.specValue}>
              AMD Ryzen 9 7950X3D - 16 núcleos / 32 threads @ 5.7GHz
            </div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>GPU</div>
            <div style={styles.specValue}>
              AMD Radeon RX 7900 XTX Custom - 24GB GDDR6 - 61 TFLOPS
            </div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Memória RAM</div>
            <div style={styles.specValue}>32GB GDDR6 @ 18 Gbps</div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Armazenamento</div>
            <div style={styles.specValue}>
              2TB NVMe SSD Gen5 - 12,000 MB/s leitura
            </div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Resolução</div>
            <div style={styles.specValue}>
              8K @ 60fps / 4K @ 240fps com Ray Tracing
            </div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Ray Tracing</div>
            <div style={styles.specValue}>
              Hardware Ray Tracing de 3ª Geração + AI Accelerator
            </div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Áudio</div>
            <div style={styles.specValue}>
              Tempest 3D AudioTech Advanced - 1024 canais
            </div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Conectividade</div>
            <div style={styles.specValue}>
              Wi-Fi 7, Ethernet 10Gbps, Bluetooth 5.3, USB4
            </div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Saídas de Vídeo</div>
            <div style={styles.specValue}>
              HDMI 2.2, DisplayPort 2.1, USB-C com DisplayPort Alt Mode
            </div>
          </div>

          <div style={styles.specsRow}>
            <div style={styles.specLabel}>Tecnologias</div>
            <div style={styles.specValue}>
              VRR, HDR10+, Dolby Vision, AMD FidelityFX Super Resolution 3.0
            </div>
          </div>
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