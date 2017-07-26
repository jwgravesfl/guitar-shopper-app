const FILTER_GUITARS = 'FILTER_GUITARS';

export const filterGuitars = (filterTermObj) => {
  return {
    type: FILTER_GUITARS,
    filterTermObj
  }
}

export default (filteredGuitars = [], action) => {
  switch (action.type) {
    case FILTER_GUITARS:
      return filteredGuitars; // will need to work some filtering magic here
  }
}
