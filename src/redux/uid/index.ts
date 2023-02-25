import { IPropsActionUid, IUid } from "../../interface";

const initialState:IUid = {
    uid: null
}

export default function userUid(state = initialState, action: IPropsActionUid) {
    if(action.type === "uidUser") {
        return {...state, uid: action.payload};
    }

    return state
}