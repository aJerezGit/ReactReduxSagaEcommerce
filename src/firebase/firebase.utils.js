import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBB6IcGH8ZUipDo_aaB1RV7MKLPXDKo9BA",
    authDomain: "react-crwn-fb054.firebaseapp.com",
    databaseURL: "https://react-crwn-fb054.firebaseio.com",
    projectId: "react-crwn-fb054",
    storageBucket: "react-crwn-fb054.appspot.com",
    messagingSenderId: "675383429404",
    appId: "1:675383429404:web:121daf56db7d92d29b52d9",
    measurementId: "G-FM7VEDSZVZ"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;