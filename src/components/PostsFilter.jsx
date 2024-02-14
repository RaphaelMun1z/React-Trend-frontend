import styles from './PostsFilter.module.scss'

const PostsFilter = () => {
    return (
        <div className={styles.postsFilter}>
            <div className={styles.filter}>
                <h1>Atualizações de:</h1>
                <select name="" id="">
                    <option value="" selected>Todos</option>
                </select>
            </div>
        </div>
    )
}

export default PostsFilter