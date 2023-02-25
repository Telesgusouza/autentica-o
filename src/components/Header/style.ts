import styled from "styled-components";

interface Props {
  theme: string;
  menuToggle: string;
  borderMenu: string;
  hoverOption: string;
}

interface PropsBtnLogout {
  borderMenu: string;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ListDropDown = styled.nav<Props>`
  position: relative;

  button {
    display: flex;
    align-items: center;

    background-color: transparent;
    border: none;

    cursor: pointer;

    &:focus {
      outline: 0;

      img:nth-child(3) {
        rotate: 0deg;
      }
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  li {
    width: 100%;

    padding: 5px 10px;
    border-radius: 8px;

    text-align: left;
    font-weight: 500;
    font-size: 12px;

    display: flex;
    align-items: center;

    transition: background-color 0.15s ease;

    &:hover {
      background-color: #f2f2f2;
      background-color: ${(props) => props.hoverOption};
    }
  }

  a {
    text-decoration: none;

    color: ${(props) => props.theme};
  }

  img:nth-child(1) {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 8px;
  }

  strong {
    padding: 0 10px;

    font-weight: 700;
    font-size: 0.75rem;

    min-width: 100px;
    max-width: 150px;

    /* color: #333333; */
    color: ${(props) => props.theme};
  }

  img:nth-child(3) {
    rotate: 180deg;
    width: 12px;

    transition: rotate 0.2s ease-out;
  }

  div {
    position: absolute;
    top: 55px;
    right: 0;

    height: 0px;
    width: 100%;
    min-width: 180px;

    padding: 10px 14px;

    background-color: white;
    background-color: ${(props) => props.menuToggle};

    color: ${(props) => props.theme};

    border: 2px solid ${(props) => props.borderMenu};
    border-radius: 12px;

    overflow: hidden;
    display: none;
    transition: height 0.7s ease;
  }

  button:focus {
    div {
      height: fit-content;
      display: block;
    }
  }

  @media (max-width: 425px) {
    strong {
      display: none;
    }

    img:nth-child(3) {
      display: none;
    }

    div {
      top: 45px;
    }
  }

  @media (max-width: 260px) {
    div {
      width: 90%;
      margin-left: 20px;
    }
  }
`;

export const Logout = styled.p<PropsBtnLogout>`
  width: 100%;
  padding: 5px 10px;
  padding-top: 15px;
  border-top: 1px solid ${(props) => props.borderMenu};
  margin-top: 10px;

  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #eb5757;

  height: fit-content;
  display: flex;
  align-items: center;
`;

export const logo = styled.img`
  border-radius: 0 !important;
  width: 14px !important;
  object-fit: contain !important ;
  margin-right: 10px;
`;
