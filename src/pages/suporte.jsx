import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Suporte() {
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
    supportSection: {
      padding: isMobile ? "40px 20px" : isTablet ? "60px 30px" : "80px 50px",
      backgroundColor: "#0a0a0a",
    },
    supportGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(auto-fit, minmax(320px, 1fr))",
      gap: isMobile ? "20px" : "30px",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    supportCard: {
      backgroundColor: "#1a1a1a",
      padding: isMobile ? "30px" : "40px",
      borderRadius: "10px",
      border: "2px solid #FFD700",
      textAlign: "center",
      transition: "transform 0.3s",
      maxWidth: isMobile ? "100%" : "400px",
      width: "100%",
      justifySelf: "center",
    },
    supportIcon: {
      fontSize: isMobile ? "50px" : "60px",
      marginBottom: "20px",
    },
    supportTitle: {
      fontSize: isMobile ? "20px" : "24px",
      color: "#FFD700",
      marginBottom: "15px",
      fontWeight: "bold",
    },
    supportText: {
      fontSize: isMobile ? "14px" : "16px",
      color: "#ccc",
      marginBottom: "25px",
      lineHeight: "1.6",
    },
    supportButton: {
      padding: isMobile ? "10px 25px" : "12px 30px",
      fontSize: "16px",
      fontWeight: "bold",
      backgroundColor: "#FFD700",
      color: "#000",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "transform 0.3s",
      width: isMobile ? "100%" : "auto",
    },
    faqSection: {
      padding: isMobile ? "40px 20px" : isTablet ? "60px 30px" : "80px 50px",
      backgroundColor: "#000",
    },
    sectionTitle: {
      fontSize: isMobile ? "28px" : isTablet ? "36px" : "42px",
      color: "#FFD700",
      textAlign: "center",
      marginBottom: isMobile ? "30px" : "50px",
      letterSpacing: "2px",
    },
    faqContainer: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    faqItem: {
      backgroundColor: "#1a1a1a",
      padding: isMobile ? "20px" : "30px",
      marginBottom: isMobile ? "15px" : "20px",
      borderRadius: "10px",
      border: "2px solid #FFD700",
    },
    faqQuestion: {
      fontSize: isMobile ? "18px" : "20px",
      color: "#FFD700",
      marginBottom: "15px",
      fontWeight: "bold",
    },
    faqAnswer: {
      fontSize: isMobile ? "14px" : "16px",
      color: "#ccc",
      lineHeight: "1.6",
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
        <h1 style={styles.pageTitle}>CENTRAL DE SUPORTE</h1>
        <p style={styles.pageSubtitle}>Estamos aqui para ajudar você</p>
      </section>

      <section style={styles.supportSection}>
        <div style={styles.supportGrid}>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}>📚</div>
            <h3 style={styles.supportTitle}>FAQ</h3>
            <p style={styles.supportText}>
              Respostas para as perguntas mais frequentes sobre o Nexus Neo
            </p>
            <button style={styles.supportButton}>Acessar FAQ</button>
          </div>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}>💬</div>
            <h3 style={styles.supportTitle}>Chat ao Vivo</h3>
            <p style={styles.supportText}>
              Fale com nossos especialistas em tempo real, 24 horas por dia
            </p>
            <button style={styles.supportButton}>Iniciar Chat</button>
          </div>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}>📧</div>
            <h3 style={styles.supportTitle}>E-mail</h3>
            <p style={styles.supportText}>
              Envie sua dúvida para suporte@nexusgaming.com
            </p>
            <button style={styles.supportButton}>Enviar E-mail</button>
          </div>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}>📞</div>
            <h3 style={styles.supportTitle}>Telefone</h3>
            <p style={styles.supportText}>
              Ligue para 0800-NEXUS-NEO (0800-639-8736)
            </p>
            <button style={styles.supportButton}>Ver Horários</button>
          </div>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}>🔧</div>
            <h3 style={styles.supportTitle}>Assistência Técnica</h3>
            <p style={styles.supportText}>
              Encontre a assistência técnica autorizada mais próxima
            </p>
            <button style={styles.supportButton}>Localizar</button>
          </div>
          <div style={styles.supportCard}>
            <div style={styles.supportIcon}>📖</div>
            <h3 style={styles.supportTitle}>Manuais</h3>
            <p style={styles.supportText}>
              Baixe manuais e guias de uso do Nexus Neo e acessórios
            </p>
            <button style={styles.supportButton}>Downloads</button>
          </div>
        </div>
      </section>

      <section style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>PERGUNTAS FREQUENTES</h2>
        <div style={styles.faqContainer}>
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>
              Como faço para configurar meu Nexus Neo?
            </h3>
            <p style={styles.faqAnswer}>
              Conecte o console à TV via HDMI, ligue na tomada, pressione o
              botão power e siga as instruções na tela para configuração
              inicial.
            </p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>
              O Nexus Neo é compatível com jogos de gerações anteriores?
            </h3>
            <p style={styles.faqAnswer}>
              Sim! O Nexus Neo é retrocompatível com todos os jogos das
              gerações anteriores com melhorias gráficas automáticas.
            </p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>Qual a garantia do console?</h3>
            <p style={styles.faqAnswer}>
              O Nexus Neo possui garantia de 2 anos contra defeitos de
              fabricação, extensível para até 5 anos com o Nexus Care Plus.
            </p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>
              Posso expandir o armazenamento?
            </h3>
            <p style={styles.faqAnswer}>
              Sim! O Nexus Neo suporta SSDs NVMe Gen5 de até 8TB através do
              slot de expansão interno.
            </p>
          </div>
          <div style={styles.faqItem}>
            <h3 style={styles.faqQuestion}>
              Como funciona o Nexus Plus (assinatura)?
            </h3>
            <p style={styles.faqAnswer}>
              Nexus Plus oferece jogos gratuitos mensais, descontos exclusivos,
              multiplayer online e armazenamento em nuvem por R$ 39,90/mês.
            </p>
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