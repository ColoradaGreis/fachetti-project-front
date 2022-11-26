import { createSlice } from '@reduxjs/toolkit'

export const publicationsSlice = createSlice({
  name: 'publications',
  initialState: {
    allPublications: [],
    publicationDetail: {},
    importantPublications: []
  },
  reducers: {
    getAllPublications: (state, action) => {
      state.allPublications = action.payload
    },
    getPublicationById: (state, action) => {
      state.publicationDetail = action.payload
    },
    getImportantPublications: (state, action) => {
      state.importantPublications = action.payload.slice(0, 11)
    }
  }
})

export const { getAllPublications, getPublicationById, getImportantPublications } = publicationsSlice.actions

export default publicationsSlice.reducer
