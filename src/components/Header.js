import styles from "./Header.module.css";
import logo_dnc from "../image/logo_dnc.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo_dnc} />

      <section >
        <h1>
          Dê os primeiros passos da
          <br />
          sua carreira em Tecnologia
        </h1>

        <p>
          Inscreva-se no curso gratuito de Introdução à <br />
          Tecnologia da DNC School e aprenda os principais <br />
          fundamentos para construir experiências efetivas.
        </p>
      </section>
    </header>
  );
}

export default Header;
