import { combineReducers } from 'redux';
import parties from './partyReducer';
import login from './authLoginReducer';

const allReducers = combineReducers({
    parties,
    login,
});

export default allReducers;