import styles from "./Carrossel.module.css";
import cardBru from "../image/cardBru.svg";
import cardLeo from "../image/cardLeo.svg";
import cardSama from "../image/cardSama.svg";
import setaDire from '../image/setaDire.svg';
import setaEsq from '../image/setaEsq.svg'


function Carrossel() {
    
    var setaEsque = document.getElementById("setaE");
    var cardBrun= document.getElementById('cardBru');
    var cardLeon = document.getElementById('cardLeo');
    var cardSaman = document.getElementById('cardSama');
    var setaDiret = document.getElementById('setaD')

    function clickEsquerda(){
        setaEsque.style = "display:none"
        cardBrun.style = "display:none"
        cardSaman.style = "display:flex"         
    }

    function clickDireita(){
        setaEsque.style = "display:flex"
        cardBrun.style = "display:flex"
        cardSaman.style = "display:none"       
    }
    
    

  return (
    <div className={styles.carrossel}>
      <h2>Mais de 500 alunos já iniciaram seus estudos</h2>
      <section>
        <img  id="setaE" onClick={clickEsquerda} src={setaEsq} />
        <img id="cardBru" src={cardBru} />
        <img id="cardLeo" src={cardLeo}/>
        <img id="cardSama" src={cardSama}/>
        <img id="setaDire" onClick={clickDireita} src={setaDire} />
      </section>
    </div>
    
  );
}

export default Carrossel;
