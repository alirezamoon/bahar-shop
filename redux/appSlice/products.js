import { createSlice } from "@reduxjs/toolkit"
import { productsData } from "data/products"

const initialState = {
  products: productsData,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    },
    addNewProduct(state, action) {
      state.products = [...state.products, action.payload]
    },
  },
})
export const { setProducts, addNewProduct } = productsSlice.actions
export default productsSlice.reducer
