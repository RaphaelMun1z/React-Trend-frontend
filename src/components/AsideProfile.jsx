import styles from './AsideProfile.module.scss'

const AsideProfile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.insideProfile}>
                <div className={styles.imageContainer}>
                    <img src="/user-image.png" alt="Imagem do usuário" />
                </div>
                <div className={styles.profileDetails}>
                    <p>Detalhes do perfil</p>
                </div>
            </div>
        </div>
    )
}

export default AsideProfile