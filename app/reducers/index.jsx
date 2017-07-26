import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  brands: require('./brands').default
})

export default rootReducer
