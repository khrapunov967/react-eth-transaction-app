import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACF7xQ_x15SriDKx6loRPKJynIZcnz36I",
  authDomain: "react-eth-trans-app.firebaseapp.com",
  projectId: "react-eth-trans-app",
  storageBucket: "react-eth-trans-app.appspot.com",
  messagingSenderId: "951165847688",
  appId: "1:951165847688:web:fd02a71e2ef038b7f1f73d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);