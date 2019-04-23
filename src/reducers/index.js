import { combineReducers } from 'redux';

import PartiesReducer from './reducer-parties';

const allReducers = combineReducers({
    parties: PartiesReducer
});

export default allReducers;