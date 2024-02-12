import styles from './Register.module.scss'

import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.landingScreen}>
                <div className={styles.insideLandingScreen}>
                    <h1>Orkut</h1>
                    <p><span>Conecte-se</span> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                    <p><span>Conheça</span> novas pessoas através de amigos de seus amigos e comunidades</p>
                    <p><span>Compartilhe</span> seus vídeos, fotos e peixões em um só lugar</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.insideContent}>
                    <h1>Crie uma conta o <span>orkut.com</span></h1>

                    <form className={styles.form}>
                        <label>
                            <p>Nome:</p>
                            <input type="text" />
                        </label>
                        <label>
                            <p>Contato:</p>
                            <input type="text" />
                        </label>
                        <label>
                            <p>E-mail:</p>
                            <input type="email" />
                        </label>
                        <label>
                            <p>Senha:</p>
                            <input type="password" />
                        </label>
                        <label>
                            <p>Confirme sua Senha:</p>
                            <input type="password" />
                        </label>
                        <button>Cadastrar</button>
                    </form>

                    <div className={styles.actions}>
                        <Link to="/login">Já possui uma conta?</Link>
                    </div>
                </div>
                <div className={styles.newUser}>
                    <p>Já é membro?</p>
                    <Link to="/login">Entrar já</Link>
                </div>
            </div>
        </div>
    )
}

export default Register