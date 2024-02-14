import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDm7bGE94X60loTZBjq-PRWB9rusavfa70",
    authDomain: "miniblog-f4a7c.firebaseapp.com",
    projectId: "miniblog-f4a7c",
    storageBucket: "miniblog-f4a7c.appspot.com",
    messagingSenderId: "925289741684",
    appId: "1:925289741684:web:039310acc68c9aae74c021"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }