import { combineReducers } from 'redux';

import userToggleReducer from './toggleTheme/reducer';
import userPermanenceReducer from './userPermanence/reducer';
import userUid from './uid';
import userDataUserReducer from './dataUser/reducer';
import toggleInfoUser from './toggleInfo/reducer';
import userEmailUser from './emailUser/reducer';

const rootReducer = combineReducers({userToggleReducer, userPermanenceReducer, userUid, userDataUserReducer, toggleInfoUser, userEmailUser});

export default rootReducer;