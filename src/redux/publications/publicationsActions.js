import { urlApi } from '../../api/API'
import { getAllPublications, getImportantPublications, getPublicationById } from './publicationSlice'

export const getPublications = () => {
  return async function (dispatch) {
    try {
      const response = await urlApi.get('publications')
      return dispatch(getAllPublications(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getPublicationsId = (id) => {
  return async function (dispatch) {
    try {
      const response = await urlApi.get(`/publications/${id}`)
      return dispatch(getPublicationById(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getImportantPubs = () => {
  return async function (dispatch) {
    try {
      const response = await urlApi.get('publications/important')
      return dispatch(getImportantPublications(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}
