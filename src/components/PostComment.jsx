import styles from './PostComment.module.scss'

const PostComment = (props) => {
    return (
        <div className={styles.comment}>
            <div className={styles.commentProfileImage}>
                <div className={styles.image}>
                    <img src={props.image} alt="Imagem do usuário" />
                </div>
            </div>

            <div className={styles.commentContent}>
                <div className={styles.insideCommentContent}>
                    <div className={styles.header}>
                        <div className={styles.userName}>{props.name}</div>
                        <div className={styles.time}>{props.time}</div>
                    </div>
                    <div className={styles.postContent}>
                        <p>{props.msg}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComment