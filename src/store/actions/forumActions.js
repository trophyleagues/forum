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

export function forumFetchData(forum) {
  return {
      type: 'FORUM_FETCH_DATA_SUCCESS',
      payload: forum
  }
}


// Async fetch passing dispatch to 'thunked' function
// temp url (get from consts later:)
export function fetchForumData(url) {
  console.log(url)
  return (dispatch) => {
      dispatch(forumIsLoading(true));
      let headers = {'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': '*/*' }
      axios.get(url, {}, headers)
          .then((data) => {
            console.log(data)
            let announces = data.filter((subforum) => {
              return subforum.is_announce
            })
            let subforums = data.filter((subforum) => {
              return !subforum.is_announce
            })
            dispatch(forumIsLoading(false))
            dispatch(forumFetchData(subforums, announces))
          })
          .catch((err)=> {
            console.log(err)
            dispatch(forumHasErrored(true))
          })
  }
}