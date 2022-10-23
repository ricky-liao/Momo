import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC9mnUVjYdvtN6k7me4gnlhg9yW4mva9yk",
    authDomain: "dh-22-f41e0.firebaseapp.com",
    projectId: "dh-22-f41e0",
    storageBucket: "dh-22-f41e0.appspot.com",
    messagingSenderId: "5273204111",
    appId: "1:5273204111:web:68a4f90bad638099c4c7fa",
    measurementId: "G-7KB70W92GN"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};