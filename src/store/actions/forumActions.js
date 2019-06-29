import axios from 'axios';

export function forumHasErrored(bool) {
  return {
      type: 'FORUM_HAS_ERRORED',
      hasErrored: bool
  }
}

export function forumIsLoading(bool) {
  return {
      type: 'FORUM_IS_LOADING',
      isLoading: bool
  }
}

export function forumFetchDataSuccess(forum) {
  return {
      type: 'FORUM_FETCH_DATA_SUCCESS',
      forum
  }
}

// Async fetch passing dispatch to 'thunked' function
// temp url (get from consts later:)
export function fetchForumData(url) {
  return (dispatch) => {
      dispatch(forumIsLoading(true));
      let headers = {'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'json',
                    'Accept': '*/*' }
      axios.get("http://api-forum.trophyleagues.com/api/v1/forums", {}, headers)
          .then((res) => {
            console.log(res)
            dispatch(forumIsLoading(false))
            dispatch(forumFetchDataSuccess(res))
          })
          .catch((err)=> {
            console.log(err)
            dispatch(forumHasErrored(true))
          })
  }
}