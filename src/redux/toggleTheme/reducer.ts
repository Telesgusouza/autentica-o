import { IPropsAction, IPropsToggleTheme } from "../../interface";

const initialState: IPropsToggleTheme = {
  toggleTheme: false,
};

const userToggleReducer = (
  state: IPropsToggleTheme = initialState,
  action: IPropsAction
) => {
  switch (action.type) {
    case "toggle": {
      return { ...state, toggleTheme: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default userToggleReducer;
