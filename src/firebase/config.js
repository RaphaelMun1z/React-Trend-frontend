import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxE6AjKO098tjpwOVYAOtm9ITdbmTKiLc",
    authDomain: "trend-baa3d.firebaseapp.com",
    projectId: "trend-baa3d",
    storageBucket: "trend-baa3d.appspot.com",
    messagingSenderId: "482071703007",
    appId: "1:482071703007:web:aab0a2677095fcb431686a"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }