import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDvjmp0cnfAUG83CJCN0RkpbWCYQsyXly0",
    authDomain: "react-ecom-db-8acab.firebaseapp.com",
    databaseURL: "https://react-ecom-db-8acab.firebaseio.com",
    projectId: "react-ecom-db-8acab",
    storageBucket: "react-ecom-db-8acab.appspot.com",
    messagingSenderId: "707832939546",
    appId: "1:707832939546:web:2e2688b3d5607430b13da3",
    measurementId: "G-J4S993HCRT"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;