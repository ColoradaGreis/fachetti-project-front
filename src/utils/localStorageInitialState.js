/* eslint-disable no-undef */
export const getLocalInitialState = () => {
  const localInitialState = localStorage.getItem('initialState')
  if (localInitialState) {
    return JSON.parse(localInitialState)
  }
  return {}
}

export const saveLocalInitialState = (initialState) => {
  localStorage.setItem('initialState', JSON.stringify(initialState))
}

export const removeLocalInitialState = () => {
  localStorage.removeItem('initialState')
}
