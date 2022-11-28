import { urlApi } from '../../api/API'
import { getAllPublications, getImportantPublications, getPublicationById } from './publicationSlice'

export const getPublications = () => {
  console.log('entre al getPublications')
  return async function (dispatch) {
    try {
      const response = await urlApi.get('publications')
      console.log(response.data)
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
  console.log('entre al getPublications')
  return async function (dispatch) {
    try {
      const response = await urlApi.get('publications/important')
      console.log(response.data)
      return dispatch(getImportantPublications(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}
