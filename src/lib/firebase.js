import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// These are your NEW central credentials
const firebaseConfig = {
  apiKey: "AIzaSyDiKFHbw1Ws6PLKlkilRTjbUHyK2jbDWWU",
  authDomain: "comboni-inventory-86639.firebaseapp.com",
  projectId: "comboni-inventory-86639",
  storageBucket: "comboni-inventory-86639.firebasestorage.app",
  messagingSenderId: "982493337995",
  appId: "1:982493337995:web:82fdca260708fcdf3f378e",
  measurementId: "G-BJ6T1Q7D4L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Keep your persistence logic so the school staff can work even with weak Wi-Fi
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