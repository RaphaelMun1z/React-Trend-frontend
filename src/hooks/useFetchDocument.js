import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        async function loadDocument() {
            if (cancelled) return

            setLoading(true)

            try {
                const docRef = doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    setDocument(docSnap.data());
                    console.log(docSnap.data());
                } else {
                    console.log("Documento não encontrado");
                }

                setLoading(false)
            } catch (error) {
                setError(error.message)
                console.log(error.message);

                setLoading(false)
            }
        }

        loadDocument()
    }, [docCollection, id, cancelled])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { document, loading, error }
}