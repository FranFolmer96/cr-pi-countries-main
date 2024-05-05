import { ORDER, FILTER } from "./actions/actionTypes.js";

const initialState = {
    filterCountries:[], 
    allCountries:[]
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case FILTER:
            {
                const filtered = state.allCountries.filter(char => char.continents === payload )
                return{
                    ...state,
                    myFavorites: payload === 'All' ? state.allCountries : filtered
                }
            }
      case ORDER: {
        const orderChar = state.filterCountries.sort((a, b) => {
          if (payload === 'ascendente') {
            return a.id.localeCompare(b.id); // Comparación alfabética ascendente
          }
          return b.id.localeCompare(a.id); // Comparación alfabética descendente
        });
        return {
          ...state,
          filterCountries: [...orderChar]
        };
      }
      default:
        return { ...state };
    }
  }

export default reducer;