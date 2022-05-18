import { configureStore } from "@reduxjs/toolkit"
import ProfileReducer from "./appSlice/profile"
import ProductsReducer from "./appSlice/products"

export const store = configureStore({
  reducer: { profile: ProfileReducer, products: ProductsReducer },
  devTools: true,
})
