import { IPropsActionDataUser, IGetDataUser } from "../../interface";



const initialState: IGetDataUser | {dataUser: {}} = {dataUser: {}};

const userDataUserReducer = (
  state: IGetDataUser | {dataUser: {}} = initialState,
  action: IPropsActionDataUser
) => {
  switch (action.type) {
    case "GetDataUser": {
      return { ...state, dataUser: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default userDataUserReducer;
