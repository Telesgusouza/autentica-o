import {
  doc,
  DocumentData,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import store from "../../redux/store";
import {} from "../Authentication";
import { db, storage } from "../firebase";

interface IDataUser {
  name: string;
  bio: string;
  phoneNumber: string;
  filePhoto?: string;
}

export async function DataUser(
  name: string,
  bio: string,
  phoneNumber: string,
  filePhoto: File | undefined
) {
  const { uid } = store.getState().userUid;

  if (filePhoto === undefined) {
    getDoc(doc(db, `userData/${uid}`)).then((DataUser: DocumentData) => {
      setDoc(doc(db, `userData/${uid}`), {
        name,
        bio,
        phoneNumber,
        filePhoto: DataUser.data().filePhoto,
      }).then(() => {
        alert("dados salvos com sucesso");
      });
    });
  } else {
    const storageRef = ref(storage, `photoUser/${uid}`);

    uploadBytes(storageRef, filePhoto).then((snapshot) => {
      getDownloadURL(ref(storage, `photoUser/${uid}`))
        .then((resp) => {
          setDoc(doc(db, `userData/${uid}`), {
            name,
            bio,
            phoneNumber,
            filePhoto: resp,
          });

          alert("dados salvos com sucesso");
        })
        .catch((err) => {
          console.error("erro > " + err);
          alert("Envie apenas fotos com no máximo 3mb");
        });
    });
  }
}

/*

eu chamo ele no components/profile.ts, dentro de um useEffect
porém no array de dependencias se eu passar nd já que preciso dos dados somente uma vez
ele retorna undefined, e eu não passar o array ou passar o redux (aonde está armazenado)
ele entra em um looping infinito.

*/

export async function getDataUser() {
  const { uid } = store.getState().userUid;

  const docRef = doc(db, `userData/${uid}`);
  const docSnap = await getDoc(doc(db, `userData/${uid}`));

  if (!docSnap.exists()) {
    console.log("Documento não encontrado!");
    return null;
  }

  const getData = docSnap.data() as IDataUser;
  const data: IDataUser = {
    name: getData.name,
    bio: getData.bio,
    phoneNumber: getData.phoneNumber,
    filePhoto: getData.filePhoto,
  };

  store.dispatch({
    type: "GetDataUser",
    payload: data,
  });

  return data;
}
