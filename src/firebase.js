import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { userHandle } from 'utilities'

const firebaseConfig = {
    apiKey: "AIzaSyCXyGYqSqTf044B2H1Vf9u2fAdML4mbwAg",
    authDomain: "yilmazev-instagram.firebaseapp.com",
    projectId: "yilmazev-instagram",
    storageBucket: "yilmazev-instagram.appspot.com",
    messagingSenderId: "667573158308",
    appId: "1:667573158308:web:f52b13f63da87cd1178131"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

onAuthStateChanged(auth, user => {
    userHandle(user || false)
})

export const login = async (email, password, message) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response.user)
    }
    
    catch(err) {
            alert(err.message)
    }
}
