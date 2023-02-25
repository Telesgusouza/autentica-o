import { IPropsAction, IPropsUserPermanence } from "../../interface";

const initialState: IPropsUserPermanence = {
    logged: false,
}

export default function userPermanenceReducer(state: IPropsUserPermanence = initialState, action: IPropsAction) {
    if(action.type === "CheckLoggedIn") {
        return {...state, logged: action.payload};
    }

    return state
}