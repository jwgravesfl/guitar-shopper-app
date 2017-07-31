import axios from 'axios';

// Action
const SET_CURRENT_CART = 'SET_CURRENT_CART';

// Action Creators
export const setCurrentCart = (cart) => {
  return {
    type: SET_CURRENT_CART,
    cart
  }
}

//Reducer
export default (cart = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_CART:
      return action.cart;

    default:
      return cart
  }
}


// Thunk Creator
export const getCurrent = (userId) => dispatch => {
  if (userId) {
    return axios.get(`/api/carts/${userId}`)
      .then(res => res.data)
      .then(cart => dispatch(setCurrentCart(cart)))
  }
  else {
    return dispatch(setCurrentCart(null))
  }
}

export const addToCart = (guitarId, userId, cartId) => dispatch => {
  return axios.post(`/api/carts/${cartId}`, {guitarId})
    .then(res => res.data)
    .then (updatedCart => {
      dispatch(getCurrent(userId))
      console.log("AXIOS UPDATED CART:", updatedCart);
    })
}

export const removeFromCart = (guitarId, cartId, userId) => dispatch => {
  return axios.delete(`/api/carts/${cartId}`, {data:{guitarId}})
    .then(res => res.data)
    .then (updatedCart => {
      dispatch(getCurrent(userId))
      console.log("AXIOS UPDATED CART:", updatedCart);
    })
}



