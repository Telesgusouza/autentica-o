import {  IGetDataUser } from "../../interface";

interface IToggleInfoUser {
    toggle: boolean
}

interface IPropsActionToggleInfoUser {
    type: string;
    payload?: boolean;
  }

const initialState: IToggleInfoUser = {toggle: false};

const toggleInfoUser = (
  state: IToggleInfoUser = initialState,
  action: IPropsActionToggleInfoUser
) => {
  switch (action.type) {
    case "ToggleInfoUser": {
      return { ...state, toggle: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default toggleInfoUser;
