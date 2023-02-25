import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import { getDataUser } from "../../Data/Firestore";
import { IPropsRootReducer, IPropsToggleTheme } from "../../interface";
import * as Styled from "./style";



export default function ConfigUser() {
  const { toggleTheme }: IPropsToggleTheme = useSelector(
    (rootReducer: IPropsRootReducer) => rootReducer.userToggleReducer
  );
  

  return (
    <Styled.Container bg={toggleTheme}>
      <Header />
      <Profile />
    </Styled.Container>
  );
}
