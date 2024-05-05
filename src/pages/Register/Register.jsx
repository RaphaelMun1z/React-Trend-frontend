import styles from './Register.module.scss'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {

    const [displayName, setDisplayName] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication()

    const handlesubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            contact,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        }

        const res = await createUser(user)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.container}>
            <div className={styles.landingScreen}>
                <div className={styles.insideLandingScreen}>
                    <h1>Trend</h1>
                    <p><span>Conecte-se</span> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
                    <p><span>Conheça</span> novas pessoas através de amigos de seus amigos e comunidades</p>
                    <p><span>Compartilhe</span> seus vídeos, fotos e peixões em um só lugar</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.insideContent}>
                    <h1>Crie uma conta o <span>trend.com</span></h1>

                    <form className={styles.form} onSubmit={handlesubmit}>
                        <label>
                            <p>Nome:</p>
                            <input type="text" name='name' required value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                        </label>
                        <label>
                            <p>Contato:</p>
                            <input type="text" name='contact' required value={contact} onChange={(e) => setContact(e.target.value)} />
                        </label>
                        <label>
                            <p>E-mail:</p>
                            <input type="email" name='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <p>Senha:</p>
                            <input type="password" name='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <label>
                            <p>Confirme sua Senha:</p>
                            <input type="password" name='confirmPassword' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </label>
                        {!loading && (
                            <button type='submit'>Cadastrar</button>
                        )}

                        {loading && (
                            <button type='submit' disabled>Aguarde...</button>
                        )}

                    </form>

                    <p className={styles.error}>{error}</p>

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