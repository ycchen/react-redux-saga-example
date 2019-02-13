
const initialState = {
  fetching: false,
  dog: null,
  news: null,
  error: null
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json[0], loading: false }
    case 'GET_DOG':
      return { ...state, loading: true}
    case 'DOG_RECEIVED':
      return { ...state, dog: action.json, loading: false}
    default:
      return state;
  }
};

export default reducer;
