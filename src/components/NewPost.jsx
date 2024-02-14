import styles from './NewPost.module.scss'

const NewPost = () => {
    return (
        <div className={styles.newPost}>
            <div className={styles.form}>
                <textarea name="post" placeholder='Clique para deixar um recado para seus amigos, para postar uma foto, vídeo e mais.' ></textarea>
                <div className={styles.actions}>
                    <button className={styles.post}>Postar</button>
                    <button className={styles.cancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost