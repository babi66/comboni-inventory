import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn1uWwv8ZV5w7Ru0646VTL8HQpZUagEtk",
  authDomain: "comboni-inventory.firebaseapp.com",
  projectId: "comboni-inventory",
  storageBucket: "comboni-inventory.firebasestorage.app",
  messagingSenderId: "238239305955",
  appId: "1:238239305955:web:81b9e3a679529dbb8cf5d6",
  measurementId: "G-GKLNZG0P97"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

if (typeof window !== "undefined") {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn("Multiple tabs open, persistence failed.");
    } else if (err.code === 'unimplemented') {
      console.warn("Browser does not support persistence.");
    }
  });
}

export { db, auth };