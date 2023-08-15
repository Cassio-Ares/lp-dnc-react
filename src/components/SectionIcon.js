import styles from './SectionIcon.module.css'
import iconeCert from '../image/iconeCert.svg'
import iconeRelog from '../image/iconeRelog.svg'
import iconeCame from '../image/iconeCame.svg'


function SectionIcon(){
    return(
       <div className={styles.icon}>
        <p><img src={iconeCert}/>Certificado de conclusão</p>

        <p><img src={iconeRelog}/>4 horas de conteúdo</p>

        <p><img src={iconeCame}/>Aulas online gravadas</p>

       </div>
    )
}

export default SectionIcon