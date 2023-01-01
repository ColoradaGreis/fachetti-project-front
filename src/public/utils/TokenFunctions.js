import jwtDecode from 'jwt-decode'

export const saveToken = (token) => {
  sessionStorage.setItem('Token', token); // eslint-disable-line
}

export const getToken = () => {
  return sessionStorage.getItem('Token'); // eslint-disable-line
}

export const removeToken = () => {
  sessionStorage.removeItem('Token'); // eslint-disable-line
}

export const tokenExists = () => {
  return !!sessionStorage.getItem('Token'); // eslint-disable-line
}

export const getDecodedToken = () => {
  return jwtDecode(getToken(), { payload: true })
}
