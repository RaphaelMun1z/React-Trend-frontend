import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    // Register
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })


            setLoading(false)

            return user

        } catch (error) {
            console.log(error.messsage)
            console.log(typeof error.messsage)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    // Logout
    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)
    }

    // Login
    const login = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            let systemErrorMessage

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Credenciais inválidas."
            } else if (error.message.includes("invalid-credential")) {
                systemErrorMessage = "Credenciais inválidas."
            } else if (error.message.includes("invalid-email")) {
                systemErrorMessage = "Credenciais inválidas."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}