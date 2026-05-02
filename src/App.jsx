import { useState } from "react";

import styles from "./App.module.css";

import fotoDePerfil from "./assets/fotoDePerfil.png";
import instagram from "./assets/icones/Instagram.png";
import seta from "./assets/icones/seta.png";

import cybertech from "./assets/cards/cybertech.png";
import sarahlima from "./assets/cards/sarahlima.png";
import maxima from "./assets/cards/maxima.png";

function App() {
  const [cardAberto, setCardAberto] = useState(null);

  const toggleCard = (id) => {
    setCardAberto(cardAberto === id ? null : id);
  };

  return (
    <>
      <nav className={styles.nav}>
        <img
          src={fotoDePerfil}
          alt="Foto de perfil"
          className={styles.fotoDePerfil}
        />
        <h2>Vinícius Gabriel</h2>
        <div>
          <a href="https://www.instagram.com/vinigabrieloli/" target="_blank">
            <img src={instagram} alt="Icone Instagram" />
          </a>
        </div>
      </nav>
      <section>
        <h1 className={styles.title}>Link dos Projetos</h1>
        <article className={styles.cardsArticle}>
          {/* PRIMEIRO CARD */}
          <div className={styles.card}>
            <a
              href="https://cybertech31168.netlify.app/"
              target="_blank"
              className={styles.cardLink}
            >
              <img src={cybertech} className={styles.cardImg} />
            </a>
            <button
              onClick={() => toggleCard(1)}
              className={`${styles.infoExtra} ${
                cardAberto === 1 ? styles.open : ""
              }`}
            >
              <h3>Equipe CyberTech</h3>
              <p className={styles.descricao}>
                Site criado para uma equipe de Robótica do SESI Moreno
              </p>
              <div className={styles.saberMais}>
                <img src={seta} alt="" />
                <p>Saber Mais</p>
              </div>
            </button>
          </div>

          {/* SEGUNDO CARD */}

          <div className={styles.card}>
            <a
              href="https://sarahlimavieira.netlify.app/"
              target="_blank"
              className={styles.cardLink}
            >
              <img src={sarahlima} className={styles.cardImg} />
            </a>
            <button
              onClick={() => toggleCard(2)}
              className={`${styles.infoExtra} ${
                cardAberto === 2 ? styles.open : ""
              }`}
            >
              <h3>Fisioterapeuta Sarah</h3>
              <p className={styles.descricao}>
                Landing page criada para portfólio da Fisioterapeuta Sarah Lima
              </p>
              <div className={styles.saberMais}>
                <img src={seta} alt="" />
                <p>Saber Mais</p>
              </div>
            </button>
          </div>

          {/* TERCEIRO CARD */}

          <div className={styles.card}>
            <a
              href="https://clinicamaxima.netlify.app/"
              target="_blank"
              className={styles.cardLink}
            >
              <img src={maxima} className={styles.cardImg} />
            </a>
            <button
              onClick={() => toggleCard(3)}
              className={`${styles.infoExtra} ${
                cardAberto === 3 ? styles.open : ""
              }`}
            >
              <h3>Clínica Máxima</h3>
              <p className={styles.descricao}>
                Landing page criada para clínica de medicina do trabalho
              </p>
              <div className={styles.saberMais}>
                <img src={seta} alt="" />
                <p>Saber Mais</p>
              </div>
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
