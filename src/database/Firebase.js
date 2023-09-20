import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "  AIzaSyCEwFyY3LnORLGOQwMHDVN2SJDnl1vlB28",
  authDomain: "react-store-app-68b6d.firebaseapp.com  ",
  projectId: " react-store-app-68b6d",
  storageBucket: "react-store-app-68b6d.appspot.com ",
  messagingSenderId: "968601218051  ",
  appId: "1:968601218051:web:d494a565c55a233e7a7236 ",
  measurementId: " G-149GFB53Y8 ",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword};
