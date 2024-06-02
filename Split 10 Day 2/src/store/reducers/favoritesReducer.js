import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from '../actions/favoritesActions.js';
const initialState = {
  favorites: [],
  displayFavorites: true,
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };
    case ADD_FAVORITE:
      const fav = state.favorites.find((item) => item.id === action.payload.id);
      if (fav) {
        return state;
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
