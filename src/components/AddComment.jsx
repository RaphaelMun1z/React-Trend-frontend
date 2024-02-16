import styles from './AddComment.module.scss'

import { BsSendArrowUp } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const AddComment = () => {
    return (
        <div className={styles.addComment}>
            <textarea name="" placeholder='Digite seu comentário aqui'></textarea>
            <div className={styles.actions}>
                <button type='submit' className={styles.post}>Responder<BsSendArrowUp /></button>
                <button type='submit' className={styles.cancel}>Cancelar<MdOutlineCancel /></button>
            </div>
        </div>
    )
}

export default AddComment