import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

import * as Styled from "./style";

import Logo from "../../components/Logo";
import EmailImg from "../../assets/email.svg";
import PasswordImg from "../../assets/password.svg";

import googleImg from "../../assets/Google.svg";
import facebookImg from "../../assets/Facebook.svg";
import twitterImg from "../../assets/Twitter.svg";
import githubImg from "../../assets/Github.svg";

import { IPropsToggleTheme, IPropsRootReducer } from "../../interface";
import { createUser, loginUser } from "../../Data/Authentication";

export default function AccountEnter() {
  const [toggleAccount, setToggleAccount] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { toggleTheme }: IPropsToggleTheme = useSelector(
    (rootReducer: IPropsRootReducer) => rootReducer.userToggleReducer
  );

  function handleForm(e: any) {
    e.preventDefault();

    if (
      email.split("@")[0] &&
      email.split("@")[1] &&
      email.split(".")[0] &&
      email.split(".")[1]
    ) {
      if (password.split("").length > 7) {

        if (toggleAccount) {
          loginUser(email, password);
        } else {
          createUser(email, password);
        }
        
      } else {
        alert("A senha deve ter no minimo 8 caracteres");
      }
    } else {
      alert("preencha o campo de email com um email valido");
    }
  }

  function toggleAccountEnter() {
    setToggleAccount((p) => !p);
  }

  return (
    <Styled.Container bg={toggleTheme}>
      <Styled.ContainerForm>
        <Logo />

        <Styled.ContentTitle themeh1={toggleTheme ? "#333333" : "#E0E0E0"}>
          {toggleAccount ? (
            <>
              <h1>Login</h1>
            </>
          ) : (
            <>
              <h1>Junte-se a milhares de alunos de todo o mundo</h1>
              <span>
                Domine o desenvolvimento web fazendo projetos da vida real.
                Existem vários caminhos para você escolher
              </span>
            </>
          )}
        </Styled.ContentTitle>

        <Styled.Form onSubmit={handleForm} clFont={toggleTheme}>
          <label htmlFor="email">
            <img src={EmailImg} alt="logo email" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
            />{" "}
          </label>

          <label htmlFor="password">
            <img src={PasswordImg} alt="logo password" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
            />
          </label>

          <button>Comece a codificar agora</button>
        </Styled.Form>

        <Styled.ToggleSocialProfile>ou</Styled.ToggleSocialProfile>

        <Styled.ContainerSocialProfile>
          <div>
            <img src={googleImg} alt="google" />
          </div>
          <div>
            <img src={facebookImg} alt="facebook" />
          </div>
          <div>
            <img src={twitterImg} alt="twitter" />
          </div>
          <div>
            <img src={githubImg} alt="github" />
          </div>
        </Styled.ContainerSocialProfile>

        <Styled.OptionToggle>
          {toggleAccount ? (
            <>
              Já é membro?
              <span onClick={toggleAccountEnter}> Conecte-se </span>
            </>
          ) : (
            <>
              ainda não tem conta?
              <span onClick={toggleAccountEnter}> Cadastre-se </span>
            </>
          )}
        </Styled.OptionToggle>
      </Styled.ContainerForm>

      <Styled.InfoDev>
        <p>criado pelo Gustavo Teles de Souza</p>
        <p>devChallenges.io</p>
      </Styled.InfoDev>
    </Styled.Container>
  );
}
