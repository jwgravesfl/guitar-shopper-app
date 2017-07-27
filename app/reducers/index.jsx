import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  brands: require('./brands').default,
  guitars: require('./guitars').default
})

export default rootReducer
