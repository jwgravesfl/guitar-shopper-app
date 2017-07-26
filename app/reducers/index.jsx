import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  guitars: require('./guitars').default
})

export default rootReducer
