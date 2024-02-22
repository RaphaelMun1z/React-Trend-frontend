import styles from './NewPost.module.scss'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from "../context/AuthContext"
import { useInsertDocument } from '../hooks/useInsertDocument';

import { BsSendPlus } from "react-icons/bs";
import { MdOutlineCancel, MdErrorOutline } from "react-icons/md";
import { LuImagePlus, LuImageOff } from "react-icons/lu";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const NewPost = (props) => {
    const [body, setBody] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [formError, setFormError] = useState("")
    const [addImage, setAddImage] = useState(false)

    const { user } = useAuthValue()
    const { insertDocument, response } = useInsertDocument("posts")

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

        insertDocument({
            body,
            imageUrl,
            uid: user.uid,
            createdBy: user.displayName,
        })

        props.setCreatePost(false)
        navigate("/")
    }

    return (
        <div className={styles.newPost}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea name="body" placeholder='Clique para deixar um recado para seus amigos, para postar uma foto, vídeo e mais.' required onChange={(e) => setBody(e.target.value)} >{body}</textarea>
                {addImage && imageUrl && (
                    <div className={styles.previewImage}>
                        <img src={imageUrl} alt="Preview imagem da publicação" />
                    </div>
                )}
                {addImage && (
                    <div className={styles.inputUrl}>
                        <input type="text" placeholder='URL da imagem' name='imageUrl' onChange={(e) => setImageUrl(e.target.value)} required />
                    </div>
                )}
                <div className={`${styles.actions} ${styles.imageActions}`}>
                    {!addImage && (
                        <button className={styles.addImage} onClick={() => setAddImage(true)}>Adicionar Imagem<LuImagePlus /></button>
                    )}
                    {addImage && (
                        <button className={styles.removeImage} onClick={() => setAddImage(false)}>Remover Imagem<LuImageOff /></button>
                    )}
                </div>
                <div className={styles.actions}>
                    {!response.loading && (
                        <button className={styles.post} type="submit">Publicar<BsSendPlus /></button>
                    )}

                    {response.loading && (
                        <button className={styles.post} type="submit" disabled>Aguarde...<AiOutlineLoading3Quarters className={styles.load} /></button>
                    )}

                    <button className={styles.cancel} onClick={() => props.setCreatePost(false)}>Cancelar<MdOutlineCancel /></button>
                </div>
                {response.error && (
                    <p className={styles.error}><MdErrorOutline />{response.error}</p>
                )}
                {formError && (
                    <p className={styles.error}><MdErrorOutline />{formError}</p>
                )}
            </form>
        </div>
    )
}

export default NewPost