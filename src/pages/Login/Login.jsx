import styles from './Login.module.scss'

import { Link } from 'react-router-dom'

const Login = () => {
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
                    <h1>Acesse o <span>orkut.com</span> com a sua conta</h1>

                    <form className={styles.form}>
                        <label>
                            <p>E-mail:</p>
                            <input type="text" />
                        </label>
                        <label>
                            <p>Senha:</p>
                            <input type="password" />
                        </label>
                        <button>Login</button>
                    </form>

                    <div className={styles.actions}>
                        <Link to="/">Não consegue acessar a sua conta?</Link>
                    </div>
                </div>
                <div className={styles.newUser}>
                    <p>Ainda não é membro?</p>
                    <Link to="/register">Criar conta já</Link>
                </div>
            </div>
        </div>
    )
}

export default Login