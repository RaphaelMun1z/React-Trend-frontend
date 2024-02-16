import styles from './Post.module.scss'

import { useState } from 'react';

import PostComment from './PostComment'
import AddComment from './AddComment'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Post = (props) => {
    const [showComments, setShowComments] = useState(false)

    return (
        <div className={styles.post}>

            <div className={styles.profileImage}>
                <div className={styles.image}>
                    <img src={props.image} alt="Imagem do usuário" />
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.insideContent}>

                    <div className={styles.header}>
                        <div className={styles.userName}>{props.name}</div>
                        <div className={styles.time}>{props.time}</div>
                    </div>

                    <div className={styles.postContent}>
                        <p>{props.msg}</p>
                    </div>

                    {showComments && (
                        <p className={styles.commentsStatus} onClick={() => setShowComments(false)}>Ocultar comentários<IoMdArrowDropup /></p>
                    )}

                    {!showComments && (
                        <p className={styles.commentsStatus} onClick={() => setShowComments(true)}>Mostrar comentários<IoMdArrowDropdown /></p>
                    )}

                    <div className={styles.comments}>
                        {showComments && (
                            <>
                                <PostComment
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicgyhSZXFKahYc4GA_ymergFfBbyl80ripiv2OirCQJ3bjaWL-9dyn-sGseh1VBW6so4&usqp=CAU"
                                    name="Garen Demácia"
                                    time="há 50 minutos"
                                    msg="⚔️ Teemo, cuidado com esses cogumelos! Eles podem ser mais perigosos do que parecem. A justiça de Demacia está de olho em você, pequeno explorador. #Demacia"
                                />

                                <PostComment
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgor3Ih6JhFftZ9mUTBMDaXAslKdG0ykjeMA&usqp=CAU"
                                    name="Jinx Zaun"
                                    time="há 10 minutos"
                                    msg="💣 Cogumelos, huh? Isso soa entediante! Vamos apimentar as coisas com um pouco de caos e explosões! 🤪 #JinxNaÁrea #FogosDeArtifício"
                                />
                            </>
                        )}
                    </div>

                    <AddComment />

                </div>
            </div>
        </div>
    )
}

export default Post