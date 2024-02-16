import styles from './Login.module.scss'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAuthentication'

import { IoMdLogIn, IoIosArrowForward } from "react-icons/io";
import { MdInfo, MdErrorOutline } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login, error: authError, loading } = useAuthentication()

    const handlesubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            email,
            password
        }

        const res = await login(user)

        console.log(res)
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
                    <p>
                        Bem-vindo à <span>Trend!</span> 🚀 Faça login e explore um mundo de tendências e conexões. Juntos, vamos criar momentos incríveis! #SejaTrend
                    </p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.insideContent}>
                    <h1>Acesse sua conta</h1>

                    <form className={styles.form} onSubmit={handlesubmit}>
                        <label>
                            <p>E-mail:</p>
                            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <label>
                            <p>Senha:</p>
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                        </label>

                        {!loading && (
                            <button type='submit'>Login<IoMdLogIn /></button>
                        )}

                        {loading && (
                            <button type='submit' disabled>Aguarde...<AiOutlineLoading3Quarters className={styles.load} /></button>
                        )}
                    </form>

                    {error && (
                        <p className={styles.error}><MdErrorOutline />{error}</p>
                    )}

                    <div className={styles.actions}>
                        <Link to="/"><MdInfo />Esqueci minha senha</Link>
                    </div>
                </div>
                <div className={styles.newUser}>
                    <p>Ainda não é membro?</p>
                    <Link to="/register">Criar conta já<IoIosArrowForward /></Link>
                </div>
            </div>
        </div>
    )
}

export default Login