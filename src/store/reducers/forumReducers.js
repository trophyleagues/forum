export function forumHasErrored(state = false, action) {
  switch (action.type) {
      case 'PLAYERS_HAS_ERRORED':
          return action.hasErrored;
      default:
          return state;
  }
}
export function forumIsLoading(state = false, action) {
  switch (action.type) {
      case 'PLAYERS_IS_LOADING':
          return action.isLoading;
      default:
          return state;
  }
}
export function forum(state = {announces: [], subforums: []}, action) {
  switch (action.type) {
      case 'FORUM_FETCH_DATA_SUCCESS':
          return {
            announces: [action.payload.announces],
            subforums: [action.payload.subforums]
          };
      case 'POSTS_FETCH_DATA_SUCCESS':
          return {
            currentSubforum: action.payload
          }
      case 'RESPONSES_FETCH_DATA_SUCCES':
          return {
            responses: action.payload
          }
      default:
          return state;
  }
}

export function searchPlayers(state = {name: "", position: "", age: ""}, action) {
  switch (action.type) {
    case "SEARCH_PLAYER":
      return {
        ...state,
        name: action.payload.name,
        position: action.payload.position,
        age: action.payload.age
      }
    default:
      return state;
  }
}