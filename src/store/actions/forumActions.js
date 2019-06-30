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

export function subforumFetchData(forum) {
  return {
      type: 'POSTS_FETCH_DATA_SUCCESS',
      payload: forum
  }
}
export function postFetchData(forum) {
  return {
      type: 'RESPONSES_FETCH_DATA_SUCCESS',
      payload: forum
  }
}

// Async fetch passing dispatch to 'thunked' function
export function forumActionCreator(url, section, id) {
  let headers = {'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': '*/*' }
  if(section === "forums") {
    fetchForumData(url, headers)
  } else if (section === "subforum") {
    fetchSubforumData(url, headers, id)
  } else if (section === "post") {
    fetchPostData(url, headers, id)
  }
}

export function fetchForumData(url, headers) {
  return (dispatch) => {
      dispatch(forumIsLoading(true));
      axios.get(`${url}/forums`, {}, headers)
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


export function fetchSubforumData(url, headers, id) {
  return (dispatch) => {
      dispatch(forumIsLoading(true));
      axios.get(`${url}/subforum/${id}`, {}, headers)
        .then((data) => {
          console.log(data)
          dispatch(forumIsLoading(false))
          dispatch(subforumFetchData(data))
        })
        .catch((err)=> {
          console.log(err)
          dispatch(forumHasErrored(true))
        })
  }
}

export function fetchPostData(url, headers, id) {
  return (dispatch) => {
      dispatch(forumIsLoading(true));
      axios.get(`${url}/post/${id}`, {}, headers)
        .then((data) => {
          console.log(data)
          dispatch(forumIsLoading(false))
          dispatch(postFetchData(data))
        })
        .catch((err)=> {
          console.log(err)
          dispatch(forumHasErrored(true))
        })
  }
}