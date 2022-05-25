import { createSlice } from "@reduxjs/toolkit"
import { users } from "data/users"

const initialState = {
  user: {},
  users: users,
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    setUsers(state, action) {
      state.users = [...state.users, action.payload]
    },
  },
})

export const { setUser, setSeller, setUsers } = profileSlice.actions
export default profileSlice.reducer
