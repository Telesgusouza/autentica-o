import { useEffect, useState } from "react";
import * as Styled from "./style";

import { doc, getDoc } from "firebase/firestore";

import noPhotoUser from "../../assets/noPhotoUser.jpg";
import SubHeader from "../SubHeader";
import imgBack from "../../assets/arrowBack.png";
import cameraImg from "../../assets/camera.svg";
import { IPropsRootReducer, IPropsToggleTheme } from "../../interface";
import { useDispatch, useSelector } from "react-redux";
import { DataUser } from "../../Data/Firestore";
import store from "../../redux/store";
import { db } from "../../Data/firebase";

interface IDataUser {
  name: string;
  bio: string;
  phoneNumber: string;
  filePhoto?: string;
}

export default function Profile() {
  const [filePhoto, setFilePhoto] = useState<File | undefined>(undefined);

  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userData, setUserData] = useState<IDataUser | null>(null);

  const [emalUser, setEmalUser] = useState<string | null>("");

  const { toggleTheme }: IPropsToggleTheme = useSelector(
    (rootReducer: IPropsRootReducer) => rootReducer.userToggleReducer
  );

  const { toggle } = useSelector(
    (rootReducer: any) => rootReducer.toggleInfoUser
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getEmailUser = store.getState();
    setEmalUser(getEmailUser.userEmailUser.email);

  }, [store.getState().userEmailUser.email]);

  useEffect(() => {
    setTimeout(async () => {
      await fetchData();

      return () => {};
    }, 1500);
  }, [toggle]);

  async function fetchData() {
    const { uid } = store.getState().userUid;

    const docSnap = await getDoc(doc(db, `userData/${uid}`));
    const getData = docSnap.data() as IDataUser;

    setUserData({
      name: getData.name,
      bio: getData.bio,
      phoneNumber: getData.phoneNumber,
      filePhoto: getData.filePhoto,
    });
  }

  function handleToggleInfo() {
    dispatch({
      type: "ToggleInfoUser",
      payload: !toggle,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name && bio && phoneNumber) {
      DataUser(name, bio, phoneNumber, filePhoto);
      handleToggleInfo();

      setName("");
      setBio("");
      setPhoneNumber("");
    } else {
      alert("Preencha todos os campos");
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files !== null) {
      const files = e.target.files[0];

      if (files instanceof File) {
        setFilePhoto(files);
      }
    }
  }

  function handlePhoneNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const valueNumber = e.target.value;
    const phoneNumberRegex = /^(\+55|55)?(\d{2})?(\d{5})(\d{5})$/;
    const NumberRegex = /^\d$/;

    if (phoneNumberRegex.test(valueNumber)) {
      return false;
    }

    if (!isNaN(Number(valueNumber))) {
      setPhoneNumber(valueNumber);
    }
  }

  return (
    <Styled.Main colorFont={toggleTheme}>
      {toggle ? (
        <>
          <Styled.ContainerEditUser>
            <Styled.ButtonBack onClick={handleToggleInfo}>
              <img src={imgBack} alt="seta de voltar" /> Voltar
            </Styled.ButtonBack>

            <Styled.ContainerEdit onSubmit={handleSubmit}>
              <Styled.ContentHeader>
                <h3>Perfil</h3>
                <p>
                  Algumas informações podem ser visíveis para outras pessoas
                </p>
              </Styled.ContentHeader>

              <Styled.ImgOption>
                <label htmlFor="imagem do usuario">
                  <img
                    src={
                      filePhoto ? URL.createObjectURL(filePhoto) : noPhotoUser
                    }
                    alt="imagem do usuario"
                  />
                  <img src={cameraImg} alt="Imagem de camera" />
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => handleFile(e)}
                  />
                </label>
              </Styled.ImgOption>

              <Styled.OptionInput colorFont={toggleTheme}>
                Nome
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                />
              </Styled.OptionInput>

              <Styled.OptionInput colorFont={toggleTheme}>
                Bio
                <textarea
                  name="textarea"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Digite sua biografia"
                />
              </Styled.OptionInput>

              <Styled.OptionInput colorFont={toggleTheme}>
                Telefone
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumber(e)}
                  placeholder="Digite seu telefone"
                />
              </Styled.OptionInput>

              <Styled.ButtonSubmit type="submit">Salvar</Styled.ButtonSubmit>
            </Styled.ContainerEdit>
          </Styled.ContainerEditUser>
        </>
      ) : (
        <>
          <SubHeader />

          <Styled.Container>
            <Styled.HeaderEdit>
              <div>
                <h3>Perfil</h3>
                <p>
                  Algumas informações podem ser visíveis para outras pessoas
                </p>
              </div>
              <button onClick={handleToggleInfo}>Edit</button>
            </Styled.HeaderEdit>

            <Styled.FieldOption>
              <div>
                <span>FOTO</span>
              </div>
              <div>
                <img
                  src={
                    userData !== null && userData.filePhoto !== undefined
                      ? userData.filePhoto
                      : noPhotoUser
                  }
                  alt="foto de perfil"
                />
              </div>
            </Styled.FieldOption>

            <Styled.FieldOption>
              <div>
                <span>NAME</span>
              </div>
              <div>
                <p>{userData !== null ? userData.name : "user"}</p>
              </div>
            </Styled.FieldOption>

            <Styled.FieldOption>
              <div>
                <span>BIO</span>
              </div>
              <div>
                <p>{userData !== null ? userData.bio : ""}</p>
              </div>
            </Styled.FieldOption>

            <Styled.FieldOption>
              <div>
                <span>TEL</span>
              </div>
              <div>
                <p>{userData !== null ? userData.phoneNumber : ""}</p>
              </div>
            </Styled.FieldOption>

            <Styled.FieldOption>
              <div>
                <span>EMAIL</span>
              </div>
              <div>
                <p>{emalUser}</p>
              </div>
            </Styled.FieldOption>
          </Styled.Container>
        </>
      )}
    </Styled.Main>
  );
}
