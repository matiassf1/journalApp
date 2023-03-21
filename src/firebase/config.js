import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
   apiKey: 'AIzaSyBFkE7lqw4vCrWXgseea29LWA_oAHky5-8',
   authDomain: 'first-time-firebase-fd134.firebaseapp.com',
   projectId: 'first-time-firebase-fd134',
   storageBucket: 'first-time-firebase-fd134.appspot.com',
   messagingSenderId: '204009792497',
   appId: '1:204009792497:web:52b813aee8cd121c161a50'
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );