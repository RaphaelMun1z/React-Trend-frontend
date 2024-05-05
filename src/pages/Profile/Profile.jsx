import styles from './Profile.module.scss'

import { Link } from 'react-router-dom'

import { BsPostcard } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineModeEdit, MdOutlineReport, MdDeleteOutline } from "react-icons/md";

import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Profile = () => {
    const { user } = useAuthValue()
    const uid = user.uid

    const { documents: posts, loading } = useFetchDocuments("posts", null, uid)
    const { deleteDocument } = useDeleteDocument("posts")

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftEmptyContainer}></div>
            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <div className={styles.imageContainer}>
                        <img src="/user-image.png" alt="Foto de perfil" />
                    </div>
                    <div className={styles.infoContainer}>
                        <h1>{user.displayName}</h1>
                        <div className={styles.userGeneralInfo}>
                            <p className={styles.postNumber}><span>{posts && posts.length > 0 ? (<>{posts.length}</>) : (<>0</>)}</span> Publicações</p>
                            <p className={styles.postNumber}><span>0</span> Seguidores</p>
                            <p className={styles.postNumber}><span>0</span> Seguindo</p>
                        </div>
                        <p className={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className={styles.actions}>
                            <button className={styles.accountEdit}><MdOutlineModeEdit />Editar perfil</button>
                            <button className={styles.accountReport}><MdOutlineReport />Denunciar perfil</button>
                        </div>
                    </div>
                </div>
                <h2>Publicações</h2>
                <div className={styles.body}>
                    {posts && posts.length === 0 && (
                        <div className={styles.noposts}>
                            <p><BsPostcard />Ainda não há publicações.</p>
                            <Link to="/">Criar primeira publicação<IoIosAddCircleOutline /></Link>
                        </div>
                    )}

                    {posts && posts.map((post) => (
                        <div className={styles.postCard} key={post.id}>
                            <Link to={`/search/${post.id}`}>
                                <img src={post.imageUrl} alt="Imagem da publicação" />
                                <p>{post.body}</p>
                            </Link>
                            <div className={styles.actions}>
                                <Link className={styles.accountEdit} to={`/posts/edit/${post.id}`}><MdOutlineModeEdit />Editar</Link>
                                <button className={styles.accountReport} onClick={() => deleteDocument(post.id)}><MdDeleteOutline />Deletar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.rightEmptyContainer}></div>
        </div>
    )
}

export default Profile