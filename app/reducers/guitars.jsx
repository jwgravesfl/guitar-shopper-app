import axios from 'axios';

// Action
const GET_ALL_GUITARS = 'GET_ALL_GUITARS';

// Action Creators
export const getAllGuitars = (guitars) => {
  return {
    type: GET_ALL_GUITARS,
    guitars
  }
}

//Reducer
export default (guitars = [], action) => {
  switch (action.type) {
    case FILTER_GUITARS:
      return action.guitars; // will need to work some filtering magic here
  }
}


// Thunk Creator
export const fetchAllGuitars = () => {
  return axios.get('/api/guitars')
  .then(res => res.data)
  .then(guitars => getAllGuitars(guitars));
}
