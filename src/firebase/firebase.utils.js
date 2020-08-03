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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error crating user', error.message);
      }
    }
    
    return userRef;
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;