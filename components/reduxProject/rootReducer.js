import { combineReducers } from 'redux';

import cardReducer from './cardReducer';
const rootReducer = combineReducers({
    cart:cardReducer,

})
export default rootReducer;