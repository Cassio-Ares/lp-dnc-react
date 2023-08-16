import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Comece agora mesmo e dê o próximo passo da sua carreira</h2>

      
        <form
          action="https://api.sheetmonkey.io/form/5cQ2Nsw4bmHrfRZ7QBycmi"
          method="post"
        >
          <input type="text" placeholder="Nome" name="Name" required />
          <input type="email" placeholder="E-mail" name="Email" required />
          <input type="text" placeholder="(XX) XXXX-XXXX" name="Phone" required />
          <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
          <button type="submit"><strong>Acesse a ementa grátis</strong></button>
        </form>
      
    </div>
  );
}

export default Footer;
