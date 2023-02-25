import { useDispatch, useSelector } from "react-redux";

import Logo from "../Logo";
import * as Styled from "./style";

import testePhotoUser from "../../assets/Facebook.svg";
import arrowDark from "../../assets/arrowDark.png";
import arrowLight from "../../assets/arrowLight.png";

import userLight from "../../assets/userLogoLight.svg";
import userDark from "../../assets/userLogoDark.svg";

import groupLight from "../../assets/groupLogoLight.svg";
import groupDark from "../../assets/groupLogoDark.svg";

import logoutImg from "../../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../../Data/Authentication";

export default function Header() {
  const { toggleTheme } = useSelector(
    (rootReducer: any) => rootReducer.userToggleReducer
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleToggle() {
    dispatch({
      type: "ToggleInfoUser",
      payload: false,
    });

    navigate("/home");
  }

  return (
    <Styled.Container>
      <Logo />

      <Styled.ListDropDown
        theme={toggleTheme ? "#333333" : "#E0E0E0"}
        menuToggle={toggleTheme ? "#ffffff" : "#222222"}
        borderMenu={toggleTheme ? "#E0E0E0" : "#333333"}
        hoverOption={toggleTheme ? "#f2f2f2" : "#333333"}
      >
        <button>
          <img src={testePhotoUser} alt="" />
          <strong>Gustvao teles</strong>
          <img src={toggleTheme ? arrowLight : arrowDark} alt="seta" />

          <div>
            <ul>
              <li onClick={handleToggle}>
                <Styled.logo
                  src={toggleTheme ? userLight : userDark}
                  alt="logo de usuario"
                />{" "}
                Meu Perfil
              </li>

              <li>
                <Styled.logo src={toggleTheme ? groupLight : groupDark} /> conv.
                em grupo
              </li>
            </ul>

            <Styled.Logout borderMenu={toggleTheme ? "#E0E0E0" : "#333333"} onClick={Logout} >
              <Styled.logo src={logoutImg} alt="icone de desconectar" />
              Desconectar
            </Styled.Logout>
          </div>
        </button>
      </Styled.ListDropDown>
    </Styled.Container>
  );
}
