import { useSelector, useDispatch } from "react-redux";

import { IPropsRootReducer, IPropsToggleTheme } from "../../interface";


import * as Styled from "./style";
import logoLight from "../../assets/devchallenges.svg";
import logoDark from '../../assets/devchallenges-light.svg';


export default function Logo() {
  const { toggleTheme }: IPropsToggleTheme = useSelector(
    (rootReducer: IPropsRootReducer) => rootReducer.userToggleReducer
  );
  const dispatch = useDispatch();

  function handleToggleTheme() {
    dispatch({
      type: "toggle",
      payload: !toggleTheme,
    });
  }

  return (
    <Styled.Container onClick={handleToggleTheme}>
      <img src={toggleTheme?logoLight:logoDark} alt="logo" />
    </Styled.Container>
  );
}
