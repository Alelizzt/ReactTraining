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

const firebaseConfigTesting = {
    apiKey: "AIzaSyD1IIhXYqROnXadIRvb15WLUQu_l9OC2KQ",
    authDomain: "react-test-3d236.firebaseapp.com",
    projectId: "react-test-3d236",
    storageBucket: "react-test-3d236.appspot.com",
    messagingSenderId: "375618610861",
    appId: "1:375618610861:web:2b3e8b96717fcbed1d4824",
};

if (process.env.NODE_ENV === "test") {
    //testing
    firebase.initializeApp(firebaseConfigTesting);
} else {
    //dev-prod
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
