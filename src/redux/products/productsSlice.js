import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    productDetail: {},
    categories: []
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.allProducts = action.payload
    },
    getProductById: (state, action) => {
      state.productDetail = action.payload
    },
    getAllCategories: (state, action) => {
      state.categories = action.payload
    }
  }
})

export const { getAllProducts, getProductById, getAllCategories } = productsSlice.actions

export default productsSlice.reducer
