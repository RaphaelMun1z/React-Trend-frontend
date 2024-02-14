import styles from './AddComment.module.scss'

const AddComment = () => {
    return (
        <div className={styles.addComment}>
            <textarea name="" placeholder='Digite seu comentário aqui'></textarea>
            <div className={styles.actions}>
                <button type='submit' className={styles.post}>Publicar</button>
                <button type='submit' className={styles.cancel}>Cancelar</button>
            </div>
        </div>
    )
}

export default AddComment