import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCj-Tf4PQUyCEUzXodNDV8zQ7AdqcN8bxo",
    authDomain: "linkedin-clone-k.firebaseapp.com",
    projectId: "linkedin-clone-k",
    storageBucket: "linkedin-clone-k.appspot.com",
    messagingSenderId: "142715167441",
    appId: "1:142715167441:web:b124e970605e23fd1adbf0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }


