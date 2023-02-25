export interface IUid {
  uid: null | string;
}

export interface IPropsToggleTheme {
  toggleTheme: boolean;
}

export interface IPropsUserPermanence {
  logged: boolean;
}

export interface IPropsRootReducer {
  userToggleReducer: IPropsToggleTheme;
}

export interface IPropsAction {
  type: string;
  payload?: boolean;
}

export interface IPropsActionDataUser {
  type: string;
  payload?: {} | IGetDataUser | { dataUser: any };
}

export interface IDataUserRootReducer {
  userDataUserReducer: IPropsActionDataUser;
}

export interface IPropsActionUid {
  type: string;
  payload?: string;
}

export interface IGetDataUser {
  dataUser: {
    name: string;
    bio: string;
    phoneNumber: string;
    filePhoto?: string | undefined;
  };
}
