import styles from './Home.module.scss'

import { useState } from 'react'

import AsideProfile from '../../components/AsideProfile'
import AsideComunity from '../../components/AsideComunity'

import AlertMessage from '../../components/AlertMessage'
import NewPost from '../../components/NewPost'
import Post from '../../components/Post'
import PostsFilter from '../../components/PostsFilter'

import { IoMdAdd } from "react-icons/io";

const Home = () => {
  const [createPost, setCreatePost] = useState(false)

  return (
    <div className={styles.mainContainer}>

      <AsideProfile />

      <div className={styles.posts}>
        <div className={styles.insidePosts}>

          <AlertMessage />

          <div className={styles.postsContainer}>

            {!createPost && (
              <div className={styles.createPostButtonContainer}>
                <button onClick={() => setCreatePost(true)}>Criar nova publicação<IoMdAdd /></button>
              </div>
            )}

            {createPost && (
              <NewPost setCreatePost={setCreatePost} />
            )}

            <PostsFilter />

            <Post
              image="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_37.jpg"
              name="Teemo Bandópolis"
              time="há 1 hora"
              msg="🍄 Hey, invocadores! Teemo aqui, pronto para plantar cogumelos e espalhar alegria! 🌼 Quem está pronto para um pouco de fofura? #CapitãoTeemoNaÁrea"
            />

            {/* <div className={styles.post}>
              <div className={styles.profileImage}>
                <div className={styles.image}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqJcMmUZ5ut6dAGw6JtdSZ-WQYyt78G4vCfsirlIEd4DvTW1BEn5FfKcZByL11bnOioo&usqp=CAU" alt="Imagem do usuário" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.insideContent}>

                  <div className={styles.header}>
                    <div className={styles.userName}>Blitzcrank Zaun</div>
                    <div className={styles.time}>há 1 hora</div>
                  </div>

                  <div className={styles.postContent}>
                    <p>Disse "🤖 Olá, invocadores! Blitzcrank está online e pronto para chover surpresas! Quem está pronto para uma dose de eletricidade? #VouFazerChover ⚡️"</p>
                  </div>

                  <p className={styles.commentsStatus}>Ocultar comentários</p>

                  <div className={styles.comments}>

                    <PostComment
                      image="https://s2.glbimg.com/x2Hg7IGKSh_CB0svv726-W-bhic=/0x0:1210x540/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/6/q/M5UZDRSfuWAbL8a1j9yA/morgana-splash-art.png"
                      name="Morgana Runeterra"
                      time="há 2 horas"
                      msg="Blitzcrank, suas 'surpresas' costumam ser mais chocantes do que emocionantes. A escuridão sempre prevalecerá sobre seus truques tecnológicos. #CaçadoraCaída"
                    />

                    <PostComment
                      image="https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltbd1b589d40edceef/62a921d834f22956975fbe71/Nautilus_Skin01_Splash.jpg"
                      name="Nautilus Queensland"
                      time="há 1 hora"
                      msg="Seus brinquedos elétricos não se comparam à força das profundezas. Um dia, os mares engolirão suas invenções! #ProfundezasInexoráveis"
                    />

                  </div>

                  <AddComment />

                </div>
              </div>
            </div> */}

          </div>

        </div>
      </div>

      <AsideComunity />

    </div>
  )
}

export default Home