import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjrVO0U_AFGzt-GT7Ny7heRxMjmxFSatY",
  authDomain: "autenticacao-7bb08.firebaseapp.com",
  projectId: "autenticacao-7bb08",
  storageBucket: "autenticacao-7bb08.appspot.com",
  messagingSenderId: "34753050456",
  appId: "1:34753050456:web:3e064f173ef19fac15572d",
  measurementId: "G-50DPWB3GE9",
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);
