import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <iframe
        width="502"
        height="283"
        src="https://www.youtube.com/embed/45BeP-XJDFA"
        title="Conheça a Jornada do Aluno DNC"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div>
        <h2>
          Aprenda com especialistas e<br />
          comece seu primeiro projeto
        </h2>

        <p>
          Conheça o processo de desenvolvimento e entenda como
          <br />
          utilizar os principais métodos e ferramentas da área para
          <br /> resolver problemas complexos. <br />
          <br />
          Conquiste seu certificado e desenvolva um projeto
          <br />
          prático para aplicar seus conhecimentos.
        </p>
      </div>
    </main>
  );
}

export default Main;
