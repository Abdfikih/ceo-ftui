import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const app = initializeApp({
  apiKey: "AIzaSyDhyVhzZwHoIIPox2UrAuFscSsdk8au5Uk",
  authDomain: "ceo-ftui.firebaseapp.com",
  projectId: "ceo-ftui",
  storageBucket: "ceo-ftui.appspot.com",
  messagingSenderId: "1052757523376",
  appId: "1:1052757523376:web:6e07a7da10e27c1f81b475",
})

export const auth = getAuth(app)
export const db = getFirestore(app)
