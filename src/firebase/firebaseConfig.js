import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC56EWrSravHJ9AGDs1KzLVuFbi0qoURTg",
    authDomain: "tienda-falsa.firebaseapp.com",
    projectId: "tienda-falsa",
    storageBucket: "tienda-falsa.appspot.com",
    messagingSenderId: "1056601585924",
    appId: "1:1056601585924:web:1e68a9be19ab385c8c7851"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();

export {
    db,
    googleAuthProvider,
    firebase
}