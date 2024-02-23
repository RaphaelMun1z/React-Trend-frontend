import styles from './EditPost.module.scss'

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

const EditPost = () => {
    const { id } = useParams()
    const { document: post } = useFetchDocument("posts", id)

    const [body, setBody] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [formError, setFormError] = useState("")
    const [addImage, setAddImage] = useState(false)

    useEffect(() => {
        if (post) {
            setBody(post.body)
            setImageUrl(post.imageUrl)
        }
    }, [post])

    const { user } = useAuthValue()
    const { updateDocument, response } = useUpdateDocument("posts")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        try {
            new URL(imageUrl)
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.")
        }

        if (!body || !imageUrl) {
            setFormError("Por favor, preencha todos os campos!")
        }

        if (formError) return

        const data = {
            body,
            imageUrl,
            uid: user.uid,
            createdBy: user.displayName,
        }

        updateDocument(id, data)
        navigate("/profile")
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftEmptyContainer}></div>
            <div className={styles.contentContainer}>
                <div className={styles.insideContent}>
                    {post && (
                        <>
                            <h1>Edição de publicação</h1>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <p>URL da imagem</p>
                                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                                </label>
                                <div className={styles.imagePreview}>
                                    <img src={imageUrl} />
                                </div>
                                <label>
                                    <p>Descrição</p>
                                    <textarea name="body" placeholder='Clique para deixar um recado para seus amigos, para postar uma foto, vídeo e mais.' required onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                                </label>
                                <div className={styles.actions}>
                                    <button type='submit' className={styles.save}>Salvar</button>
                                    <button type='submit' className={styles.back}>Voltar</button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.rightEmptyContainer}></div>
        </div>
    )
}

export default EditPost