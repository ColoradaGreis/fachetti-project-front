import urlApi from '../../api/API'

export function getPublications () {
  return async function (dispatch) {
    try {
      const api = await urlApi.get(`${urlApi}/publications`)
      return dispatch({
        type: 'GET_PUBLICATIONS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
