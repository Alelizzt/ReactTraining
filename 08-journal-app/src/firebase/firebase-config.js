import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyClw1siuI-wKma4ow0W1FMni4kxHeQeveQ",
    authDomain: "react-app-curso-918a3.firebaseapp.com",
    projectId: "react-app-curso-918a3",
    storageBucket: "react-app-curso-918a3.appspot.com",
    messagingSenderId: "142514065730",
    appId: "1:142514065730:web:2ac0fb790d30cc509f38db",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
