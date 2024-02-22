import styles from './PostPage.module.scss'

import { useParams } from 'react-router-dom'

import Post from '../../components/Post'

import { useFetchDocument } from '../../hooks/useFetchDocument'

const PostPage = () => {
    const { uid } = useParams()
    const { document: post, loading } = useFetchDocument("posts", uid)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftEmptyContainer}></div>
            <div className={styles.contentContainer}>
                <div>
                    {post && post.length === 0 && (
                        <div className={styles.noposts}>
                            <p><BsPostcard />Ainda não há publicações.</p>
                        </div>
                    )}

                    {loading && (
                        <p>Carregando...</p>
                    )}
                    {post && (
                        <Post
                            userProfileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIjxE5kUUdT81FoWXp9le9xwVWfRwFg2uWw&usqp=CAU"
                            image={post.imageUrl}
                            name={post.createdBy}
                            time={post.createdAt}
                            msg={post.body}
                            id={post.id}
                        />
                    )}
                </div>
            </div>
            <div className={styles.rightEmptyContainer}></div>
        </div>
    )
}

export default PostPage