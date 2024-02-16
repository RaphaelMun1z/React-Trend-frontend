import styles from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftEmptyContainer}></div>
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <div className={styles.imageContainer}>
                        <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_37.jpg" alt="Foto de perfil" />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>Nome do usuário</h1>
                        <p className={styles.postNumber}><span>0</span> Publicações</p>
                        <p className={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className={styles.actions}>
                            <button className={styles.accountEdit}>Editar perfil</button>
                            <button className={styles.accountReport}>Denunciar perfil</button>
                        </div>
                    </div>
                </div>
                <h2>Publicações</h2>
                <div className={styles.body}>
                    <div className={styles.postCard}></div>
                    <div className={styles.postCard}></div>
                    <div className={styles.postCard}></div>
                    <div className={styles.postCard}></div>
                    <div className={styles.postCard}></div>
                    <div className={styles.postCard}></div>
                </div>
            </div>
            <div className={styles.rightEmptyContainer}></div>
        </div>
    )
}

export default Profile