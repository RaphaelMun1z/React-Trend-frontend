import styles from './Search.module.scss'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

import { BsPostcard } from "react-icons/bs";

import { Link } from 'react-router-dom';

import Post from '../../components/Post'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftEmptyContainer}></div>
            <div className={styles.contentContainer}>
                <h2 className={styles.searchTitle}>Pesquisando por: <span>{search}</span></h2>
                <div>
                    {/* Posts view */}
                    {posts && posts.length === 0 && (
                        <div className={styles.noposts}>
                            <p><BsPostcard />Ainda não há publicações.</p>
                            <Link to="/">Voltar para página principal</Link>
                        </div>
                    )}
                    {posts && posts.map((post) => (
                        <Post
                            userProfileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIjxE5kUUdT81FoWXp9le9xwVWfRwFg2uWw&usqp=CAU"
                            image={post.imageUrl}
                            name={post.createdBy}
                            time={post.createdAt}
                            msg={post.body}
                            id={post.id}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.rightEmptyContainer}></div>
        </div>
    )
}

export default Search