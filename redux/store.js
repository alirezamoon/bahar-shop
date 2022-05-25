import { configureStore } from "@reduxjs/toolkit"
import ProfileReducer from "./appSlice/profile"
import ProductsReducer from "./appSlice/products"
import SellersReducer from "./appSlice/sellers"

export const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    products: ProductsReducer,
    sellers: SellersReducer,
  },
  devTools: true,
})
