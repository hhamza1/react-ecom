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


export const createUserProfileDocument = async(userAuth, otherData) => {
    if(!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get();

    if(!snapShot.uid){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        }
        catch(error){
            console.log(error.message);
        }
    }

    return userRef;
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;