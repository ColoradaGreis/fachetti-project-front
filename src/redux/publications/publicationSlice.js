import { createSlice } from '@reduxjs/toolkit'

export const publicationsSlice = createSlice({
  name: 'publications',
  initialState: {
    allPublications: [],
    publicationDetail: {}
  },
  reducers: {
    getAllPublications: (state, action) => {
      state.allPublications = action.payload
    },
    getPublicationById: (state, action) => {
      state.publicationDetail = action.payload
    }
  }
})

export const { getAllPublications, getPublicationById } = publicationsSlice.actions

export default publicationsSlice.reducer
