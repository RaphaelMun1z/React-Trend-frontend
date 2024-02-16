import styles from './NewPost.module.scss'

import { BsSendPlus } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const NewPost = (props) => {
    return (
        <div className={styles.newPost}>
            <div className={styles.form}>
                <textarea name="post" placeholder='Clique para deixar um recado para seus amigos, para postar uma foto, vídeo e mais.' ></textarea>
                <div className={styles.actions}>
                    <button className={styles.post}>Publicar<BsSendPlus /></button>
                    <button className={styles.cancel} onClick={() => props.setCreatePost(false)}>Cancelar<MdOutlineCancel /></button>
                </div>
            </div>
        </div>
    )
}

export default NewPost