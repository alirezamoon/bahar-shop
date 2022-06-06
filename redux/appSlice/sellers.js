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
      // state.sellers = [...state.sellers, action.payload]

      let arr = [...state.sellers]
      let index = arr.findIndex(
        (obj) => obj.username === action.payload.username
      )
      arr[index] = { ...arr[index], ...action.payload }
      state.sellers = index == -1 ? [...state.sellers, action.payload] : arr
    },
  },
})
export const { setSellers } = sellersSlice.actions
export default sellersSlice.reducer
