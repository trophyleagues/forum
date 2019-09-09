const initialState = {
  loading: false
}

export default function frontReducers(state = initialState, action) {
  switch (action.type) {
      case 'LOADING':
          return {...state, loading: action.payload};
      default:
          return state;
  }
}