export const getJwt = () => {
  return localStorage.getItem('access_token')
}

export const getUser = () => {
  return localStorage.getItem('user_id')
}