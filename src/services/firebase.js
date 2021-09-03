import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAeWFGWRtZYILiU4X1z8cEQBFbwDUSKnx4",
    authDomain: "learn-words-fcd29.firebaseapp.com",
    projectId: "learn-words-fcd29",
    storageBucket: "learn-words-fcd29.appspot.com",
    messagingSenderId: "1035785885693",
    appId: "1:1035785885693:web:62e70223017d7f7000ab94"
};


export const fire = firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);