import styled from "styled-components";

interface IProps {
  bg?: boolean;
  themeh1?: string;
  clFont?: boolean
}

export const Container = styled.div<IProps>`
  min-width: 100%;
  min-height: 100vh;

  background-color: ${(props) => (props.bg ? "#FFFFFF" : "#252329")};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 60px 15px;

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const ContainerForm = styled.main`
  height: fit-content;
  width: 100%;
  max-width: 470px;
  padding: 40px 50px;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  margin-top: 80px;

  margin: 0 auto;

  @media (max-width: 450px) {
    border: none;
    padding: 18px 20px;
  }
`;

export const ContentTitle = styled.div<IProps>`
  margin: 25px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 14px;

  h1 {
    font-size: 1.13rem;
    font-weight: 600;

    color: ${(props) => props.themeh1};
  }

  span {
    font-weight: 400;
    font-size: 16px;
    font-size: 0.95rem;
    color: ${(props) => props.themeh1};
  }
`;

export const Form = styled.form<IProps>`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  label {
    position: relative;
    margin-bottom: 14px;
  }

  input {
    width: 100%;
    padding: 10px 12px 10px 36px;

    border: 1px solid #bdbdbd;
    border-radius: 8px;

    background: transparent;

    transition: border-color .1s ease-in-out;

    color: ${props=>props.clFont? "black" : "white" };

    &:focus {
      outline: 0;
      border-color: #2f80ed;
    }
  }

  img {
    height: 15px;

    position: absolute;
    top: 13px;
    left: 13px;
  }

  button {
    margin-top: 5px;
    padding: 7px;
    border: none;
    border-radius: 8px;

    background-color: #2f80ed;
    color: white;

    font-weight: 600;
    font-size: 0.95rem;

    transition: opacity .2s ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ToggleSocialProfile = styled.p`
  margin: 30px auto 16px auto;
  text-align: center;

  width: fit-content;

  font-weight: 400;
  font-size: 0.9rem;
  color: #828282;
`;

export const ContainerSocialProfile = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  width: 100%;
  max-width: 250px;

  cursor: pointer;
`;

export const OptionToggle = styled.p`
  margin-top: 25px;
  text-align: center;
  color: #828282;

  font-size: 14px;
  font-weight: 400;

  span {
    color: #2d9cdb;
    cursor: pointer;
  }
`;

export const InfoDev = styled.div`
  width: 100%;
  max-width: 470px;
  margin: 0 auto;
  margin-top: 10px;

  display: flex;
  justify-content: space-between;

  p {
    font-size: 14px;
    color: #828282;

    &:nth-child(1) {
      margin-right: 10px;
    }
  }

  @media (max-width: 450px) {
    margin-top: 40px;
    padding: 15px;
  }
`;
