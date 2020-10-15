import { combineReducers } from 'redux';
import appReducer from './appReducer';

export default combineReducers({ appReducer});
export * from './appReducer';