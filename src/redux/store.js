import { configureStore } from '@reduxjs/toolkit'
import publications from './publications/publicationSlice'
import products from './products/productsSlice'

export default configureStore({
  reducer: {
    publications,
    products
  }
})
