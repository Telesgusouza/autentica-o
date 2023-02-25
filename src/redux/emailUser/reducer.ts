import { IPropsActionDataUser, IGetDataUser } from "../../interface";

interface IEmailUser  {
    email: string | null
}

interface IPropsActionEmailUser {
    type: string,
    payload: string
}

const initialState: IEmailUser = {email: ""};

const userEmailUser = (
  state: IEmailUser = initialState,
  action: IPropsActionEmailUser
) => {
  switch (action.type) {
    case "SaveEmail": {
      return { ...state, email: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default userEmailUser;
