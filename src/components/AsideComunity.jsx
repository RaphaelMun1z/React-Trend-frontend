import styles from './AsideComunity.module.scss'

const AsideComunity = () => {
    return (
        <div className={styles.comunity}>
            <div className={styles.insideComunity}>
                <div className={styles.visit}>
                    <h1>Visitantes recentes</h1>
                    <h4>Você desativou esta opção. <a href="#">Ative-o novamente.</a></h4>
                </div>
                <div className={styles.friends}>
                    <p>Amigos (0)</p>
                </div>
                <div className={styles.comunitys}>
                    <p>Comunidades (0)</p>
                </div>
            </div>
        </div>
    )
}

export default AsideComunity