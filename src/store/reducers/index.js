import { combineReducers } from 'redux';
import { forum } from './forumReducers';
import front from './frontReducers';

const appReducer = combineReducers({
  forum,
  front
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer