import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profile}>
        <div className={styles.insideProfile}>
          <div className={styles.imageContainer}>
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_37.jpg" alt="Imagem do usuário" />
          </div>
          <div className={styles.profileDetails}>
            <p>Detalhes do perfil</p>
          </div>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.insidePosts}>

          <div className={styles.alertMessage}>
            <h1>Alerta Importante: Este Site é Destinado Apenas a Fins de Estudo</h1>
            <h3>Caro usuário,
              <br /><br />
              Gostaríamos de informar que este site foi desenvolvido exclusivamente para fins educacionais e de estudo. Trata-se de um projeto de clone do antigo Orkut, criado com o objetivo de praticar habilidades de programação e design.
              <br /><br />
              Atenciosamente,
              <br />
              Raphael Muniz Varela
            </h3>
            <a href='https://www.linkedin.com/in/raphael-muniz-7119911a2/' target='_blank'>Linkedin</a>
          </div>

          <div className={styles.postsContainer}>

            <div className={styles.newPost}>
              <div className={styles.form}>
                <textarea name="post" placeholder='Clique para deixar um recado para seus amigos, para postar uma foto, vídeo e mais.' ></textarea>
                <div className={styles.actions}>
                  <button>Postar</button>
                  <button>Cancelar</button>
                </div>
              </div>
            </div>

            <div className={styles.postsFilter}>
              <div className={styles.filter}>
                <h1>Atualizações de:</h1>
                <select name="" id="">
                  <option value="" selected>Todos</option>
                </select>
              </div>
            </div>

            <div className={styles.post}>
              <div className={styles.profileImage}>
                <div className={styles.image}>
                  <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_37.jpg" alt="Imagem do usuário" />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.insideContent}>

                  <div className={styles.header}>
                    <div className={styles.userName}>Teemo Bandópolis</div>
                    <div className={styles.time}>há 1 hora</div>
                  </div>

                  <div className={styles.postContent}>
                    <p>Disse "🍄 Hey, invocadores! Teemo aqui, pronto para plantar cogumelos e espalhar alegria! 🌼 Quem está pronto para um pouco de fofura? #CapitãoTeemoNaÁrea"</p>
                  </div>

                  <p className={styles.commentsStatus}>Ocultar comentários</p>

                  <div className={styles.comments}>

                    <div className={styles.comment}>
                      <div className={styles.commentProfileImage}>
                        <div className={styles.image}>
                          <img src="https://img.redbull.com/images/c_crop,x_677,y_0,h_717,w_538/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/08/08/27c7aec0-691f-4800-9cc5-1c8aa6b2fe14/garen-league-of-legends" alt="Imagem do usuário" />
                        </div>
                      </div>

                      <div className={styles.commentContent}>
                        <div className={styles.insideCommentContent}>
                          <div className={styles.header}>
                            <div className={styles.userName}>Garen Demácia</div>
                            <div className={styles.time}>há 1 hora</div>
                          </div>
                          <div className={styles.postContent}>
                            <p>Disse "⚔️ Teemo, cuidado com esses cogumelos! Eles podem ser mais perigosos do que parecem. A justiça de Demacia está de olho em você, pequeno explorador. #Demacia"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.comment}>
                      <div className={styles.commentProfileImage}>
                        <div className={styles.image}>
                          <img src="data:image/jpeg;base64,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" alt="Imagem do usuário" />
                        </div>
                      </div>

                      <div className={styles.commentContent}>
                        <div className={styles.insideCommentContent}>
                          <div className={styles.header}>
                            <div className={styles.userName}>Jinx Zaun</div>
                            <div className={styles.time}>há 1 hora</div>
                          </div>
                          <div className={styles.postContent}>
                            <p>Disse "💣 Cogumelos, huh? Isso soa entediante! Vamos apimentar as coisas com um pouco de caos e explosões! 🤪 #JinxNaÁrea #FogosDeArtifício"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className={styles.addComment}>
                    <input type="text" placeholder='Digite seu comentário aqui' />
                    <button type='submit'>Publicar</button>
                  </div>

                </div>
              </div>
            </div>

            <div className={styles.post}>
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

                    <div className={styles.comment}>
                      <div className={styles.commentProfileImage}>
                        <div className={styles.image}>
                          <img src="https://s2.glbimg.com/x2Hg7IGKSh_CB0svv726-W-bhic=/0x0:1210x540/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/6/q/M5UZDRSfuWAbL8a1j9yA/morgana-splash-art.png" alt="Imagem do usuário" />
                        </div>
                      </div>

                      <div className={styles.commentContent}>
                        <div className={styles.insideCommentContent}>
                          <div className={styles.header}>
                            <div className={styles.userName}>Morgana Runeterra</div>
                            <div className={styles.time}>há 1 hora</div>
                          </div>
                          <div className={styles.postContent}>
                            <p>Disse "Blitzcrank, suas 'surpresas' costumam ser mais chocantes do que emocionantes. A escuridão sempre prevalecerá sobre seus truques tecnológicos. #CaçadoraCaída"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.comment}>
                      <div className={styles.commentProfileImage}>
                        <div className={styles.image}>
                          <img src="data:image/jpeg;base64,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" alt="Imagem do usuário" />
                        </div>
                      </div>

                      <div className={styles.commentContent}>
                        <div className={styles.insideCommentContent}>
                          <div className={styles.header}>
                            <div className={styles.userName}>Nautilus Queensland</div>
                            <div className={styles.time}>há 1 hora</div>
                          </div>
                          <div className={styles.postContent}>
                            <p>Disse "Seus brinquedos elétricos não se comparam à força das profundezas. Um dia, os mares engolirão suas invenções! #ProfundezasInexoráveis"</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className={styles.addComment}>
                    <input type="text" placeholder='Digite seu comentário aqui' />
                    <button type='submit'>Publicar</button>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className={styles.comunity}>
        <div className={styles.insideComunity}>
          <div className={styles.visit}>
            <h1>Visitantes recentes</h1>
            <h4>Você desativou esta opção. <a href="#">Ative-o novamente.</a></h4>
          </div>
          <div className={styles.friends}>
            <p>Amigos (0)</p>
          </div>
          <div className={styles.comunitys}>
            <p>Comunidades (0)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home