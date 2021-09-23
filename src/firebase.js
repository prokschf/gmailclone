import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'; //v9
import 'firebase/compat/auth'; //v9

const firebaseConfig = {
    apiKey: "AIzaSyAYOE-kSyoGhljBXfBIY2Uzt0Vmbv-Ojk4",
    authDomain: "clone-eedf8.firebaseapp.com",
    projectId: "clone-eedf8",
    storageBucket: "clone-eedf8.appspot.com",
    messagingSenderId: "385401655874",
    appId: "1:385401655874:web:dd396db7ddadd777f1d3db",
    measurementId: "G-DTZY2GTB6D"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };