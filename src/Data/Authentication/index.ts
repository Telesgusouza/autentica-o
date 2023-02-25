import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import store from "../../redux/store";
import { auth } from "../firebase";

export function createUser(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((resp) => {})

    .catch((err) => {
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        alert("usuario já cadastrado");
      } else {
        alert("erro ao cadastrar usuario");
      }
      console.error("[error] > " + err);
    });
}

export function loginUser(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((resp) => {})

    .catch((err) => {
      console.error("[error] > " + err);
    });
}

export function Logout() {
  signOut(auth)
}
