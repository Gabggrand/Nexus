import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import controle from "../img/Nexus_Apex_Pro.png";
import headset from "../img/Nexus_Echo_7.1.png";
import base from "../img/Nexus_Volt_Duo.png";

export default function Acessorios() {
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

  const accessories = [
    {
      id: 1,
      name: "Nexus Apex Pro",
      category: "Controle Profissional",
      price: "R$ 300",
      image: controle,
      features: [
        "Gatilhos adaptativos de alta precisão",
        "Feedback tátil háptico avançado",
        "Bateria de 20 horas",
        "Conexão USB-C e Bluetooth 5.3",
        "Peso balanceado para competitivo",
      ],
      description:
        "O controle definitivo para gamers profissionais. Com tecnologia de ponta e design ergonômico.",
    },
    {
      id: 2,
      name: "Nexus Echo 7.1",
      category: "Headset Gaming",
      price: "R$ 150",
      image: headset,
      features: [
        "Áudio surround 7.1 imersivo",
        "Cancelamento de ruído ativo",
        "Microfone destacável com IA",
        "Almofadas em couro sintético premium",
        "Compatível com todos os dispositivos",
      ],
      description:
        "Ouça cada detalhe com clareza cristalina. Áudio profissional para a vitória.",
    },
    {
      id: 3,
      name: "Nexus Volt Duo",
      category: "Base de Carregamento",
      price: "R$ 120",
      image: base,
      features: [
        "Carrega 2 controles simultaneamente",
        "Carga rápida em 90 minutos",
        "Indicadores LED de status",
        "Design compacto e elegante",
        "Proteção contra sobrecarga",
      ],
      description:
        "Mantenha seus controles sempre prontos para ação com carregamento inteligente.",
    },
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
    accessoriesSection: {
      padding: isMobile ? "40px 20px" : isTablet ? "60px 30px" : "80px 50px",
      backgroundColor: "#0a0a0a",
    },
    accessoriesGrid: {
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "30px" : "50px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    accessoryCard: {
      display: "flex",
      flexDirection: isMobile || isTablet ? "column" : "row",
      gap: isMobile ? "20px" : "40px",
      backgroundColor: "#1a1a1a",
      border: "2px solid #FFD700",
      borderRadius: "10px",
      overflow: "hidden",
      padding: isMobile ? "20px" : "30px",
    },
    imageContainer: {
      flex: isMobile || isTablet ? "none" : "0 0 400px",
      width: isMobile || isTablet ? "100%" : "400px",
      height: isMobile ? "300px" : isTablet ? "350px" : "400px",
      backgroundColor: "#000",
      borderRadius: "10px",
      border: "2px solid #FFD700",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    accessoryImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: isMobile ? "15px" : "20px",
    },
    imagePlaceholder: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    placeholderIcon: {
      fontSize: isMobile ? "80px" : "120px",
    },
    accessoryContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    category: {
      fontSize: isMobile ? "12px" : "14px",
      color: "#FFD700",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "10px",
    },
    accessoryName: {
      fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
      color: "#FFD700",
      marginBottom: "15px",
      fontWeight: "bold",
    },
    description: {
      fontSize: isMobile ? "16px" : "18px",
      color: "#ccc",
      lineHeight: "1.6",
      marginBottom: "25px",
    },
    featuresContainer: {
      marginBottom: "30px",
    },
    featuresTitle: {
      fontSize: isMobile ? "16px" : "18px",
      color: "#FFD700",
      marginBottom: "15px",
      fontWeight: "bold",
    },
    featuresList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    featureItem: {
      fontSize: isMobile ? "14px" : "16px",
      color: "#ccc",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    featureBullet: {
      color: "#FFD700",
      fontSize: isMobile ? "16px" : "18px",
    },
    priceContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto",
      paddingTop: "20px",
      borderTop: "1px solid #333",
      flexWrap: isMobile ? "wrap" : "nowrap",
      gap: isMobile ? "15px" : "0",
    },
    price: {
      fontSize: isMobile ? "28px" : "32px",
      color: "#FFD700",
      fontWeight: "bold",
    },
    buyButton: {
      padding: isMobile ? "12px 30px" : "15px 40px",
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "bold",
      backgroundColor: "#FFD700",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.3s",
      width: isMobile ? "100%" : "auto",
    },
    infoBanner: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(4, 1fr)",
      gap: isMobile ? "20px" : "30px",
      padding: isMobile ? "40px 20px" : "60px 50px",
      backgroundColor: "#000",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    infoCard: {
      textAlign: "center",
      padding: isMobile ? "15px" : "20px",
    },
    infoIcon: {
      fontSize: isMobile ? "40px" : "48px",
      marginBottom: "15px",
      display: "block",
    },
    infoTitle: {
      fontSize: isMobile ? "18px" : "20px",
      color: "#FFD700",
      marginBottom: "8px",
      fontWeight: "bold",
    },
    infoText: {
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

      <section style={styles.heroSection}>
        <h1 style={styles.pageTitle}>ACESSÓRIOS NEXUS</h1>
        <p style={styles.pageSubtitle}>
          Eleve sua experiência de jogo ao próximo nível
        </p>
      </section>

      <section style={styles.accessoriesSection}>
        <div style={styles.accessoriesGrid}>
          {accessories.map((accessory) => (
            <div key={accessory.id} style={styles.accessoryCard}>
              <div style={styles.imageContainer}>
                {accessory.image ? (
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    style={styles.accessoryImage}
                  />
                ) : (
                  <div style={styles.imagePlaceholder}>
                    <span style={styles.placeholderIcon}>
                      {accessory.id === 1
                        ? "🎮"
                        : accessory.id === 2
                        ? "🎧"
                        : "🔋"}
                    </span>
                  </div>
                )}
              </div>

              <div style={styles.accessoryContent}>
                <span style={styles.category}>{accessory.category}</span>
                <h2 style={styles.accessoryName}>{accessory.name}</h2>
                <p style={styles.description}>{accessory.description}</p>

                <div style={styles.featuresContainer}>
                  <h3 style={styles.featuresTitle}>Características:</h3>
                  <ul style={styles.featuresList}>
                    {accessory.features.map((feature, index) => (
                      <li key={index} style={styles.featureItem}>
                        <span style={styles.featureBullet}>▸</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={styles.priceContainer}>
                  <span style={styles.price}>{accessory.price}</span>
                  <button style={styles.buyButton}>
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.infoBanner}>
        <div style={styles.infoCard}>
          <span style={styles.infoIcon}>📦</span>
          <h3 style={styles.infoTitle}>Frete Grátis</h3>
          <p style={styles.infoText}>Para todo o Brasil</p>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.infoIcon}>🔒</span>
          <h3 style={styles.infoTitle}>Compra Segura</h3>
          <p style={styles.infoText}>Proteção total</p>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.infoIcon}>↩️</span>
          <h3 style={styles.infoTitle}>Troca Fácil</h3>
          <p style={styles.infoText}>30 dias para trocar</p>
        </div>
        <div style={styles.infoCard}>
          <span style={styles.infoIcon}>⭐</span>
          <h3 style={styles.infoTitle}>Garantia</h3>
          <p style={styles.infoText}>1 ano de fábrica</p>
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