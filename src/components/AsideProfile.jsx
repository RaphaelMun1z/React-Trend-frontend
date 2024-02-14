import styles from './AsideProfile.module.scss'

const AsideProfile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.insideProfile}>
                <div className={styles.imageContainer}>
                    <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_37.jpg" alt="Imagem do usuário" />
                </div>
                <div className={styles.profileDetails}>
                    <p>Detalhes do perfil</p>
                </div>
            </div>
        </div>
    )
}

export default AsideProfile