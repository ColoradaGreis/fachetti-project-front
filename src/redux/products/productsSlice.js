import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    productDetail: {}
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.allProducts = action.payload
    },
    getProductById: (state, action) => {
      state.productDetail = action.payload
    }
  }
})

export const { getAllProducts, getProductById } = productsSlice.actions

export default productsSlice.reducer
