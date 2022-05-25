import { createSlice } from "@reduxjs/toolkit"
import { sellers } from "data/sellers"

const initialState = {
  sellers: sellers,
}

const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    setSellers(state, action) {
      state.sellers = [...state.sellers, action.payload]
    },
  },
})
export const { setSellers } = sellersSlice.actions
export default sellersSlice.reducer
