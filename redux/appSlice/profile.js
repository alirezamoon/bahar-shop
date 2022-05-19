import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
  seller: {},
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    setSeller(state, action) {
      state.seller = action.payload
    },
  },
})
export const { setUser, setSeller } = profileSlice.actions
export default profileSlice.reducer
