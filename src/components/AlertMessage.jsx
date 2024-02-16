import styles from './AlertMessage.module.scss'

import { IoIosArrowForward } from "react-icons/io";

const AlertMessage = () => {
    return (
        <div className={styles.alertMessage}>
            <h1>Alerta Importante: Este Site é Destinado Apenas a Fins de Estudo</h1>
            <h3>Caro usuário,
                <br /><br />
                Gostaríamos de informar que este site foi desenvolvido exclusivamente para fins educacionais e de estudo. Trata-se de um projeto de clone do antigo Orkut, criado com o objetivo de praticar habilidades de programação e design.
                <br /><br />
                Atenciosamente,
                <br />
                Raphael Muniz Varela
            </h3>
            <a href='https://www.linkedin.com/in/raphael-muniz-7119911a2/' target='_blank'>Acessar meu Linkedin<IoIosArrowForward /></a>
        </div>
    )
}

export default AlertMessage