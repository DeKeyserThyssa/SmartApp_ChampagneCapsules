import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNOHLTXD8ewbGwcIdN4CfNJaXWFR7tT1U",
  authDomain: "capsules-d6a86.firebaseapp.com",
  projectId: "capsules-d6a86",
  storageBucket: "capsules-d6a86.appspot.com",
  messagingSenderId: "880588437495",
  appId: "1:880588437495:web:cb751a0c053fc47b4260f2"
};

export const app: FirebaseApp = initializeApp(firebaseConfig)
export const auth: Auth = getAuth()
