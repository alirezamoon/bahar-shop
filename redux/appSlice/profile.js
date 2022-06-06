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
      let arr = [...state.users]
      let index = arr.findIndex(
        (obj) => obj.username === action.payload.username
      )
      state.user = { ...arr[index], ...action.payload }
    },
    setUsers(state, action) {
      let arr = [...state.users]

      let index = arr.findIndex(
        (obj) => obj.username === action.payload.username
      )
      arr[index] = { ...arr[index], ...action.payload }

      state.users = index == -1 ? [...state.users, action.payload] : arr
    },
    addProduct(state, action) {
      let arr = [...state.users]

      let index = arr.findIndex(
        (obj) => obj.username === action.payload.username
      )
      arr[index] = {
        ...arr[index],
        products: [...arr[index].products, action.payload],
      }

      state.user = { ...arr[index] }

      state.users = index == -1 ? [...state.users, action.payload] : arr
    },
    addToCard(state, action) {
      let arr = [...state.users]
      let index = arr.findIndex(
        (obj) => obj.username === action.payload.username
      )
      state.user = {
        ...arr[index],
        cart: action.payload.cart,
      }
    },
  },
})

export const { setUser, setSeller, setUsers, addProduct, addToCard } =
  profileSlice.actions
export default profileSlice.reducer

// setUsers(state, action) {
//   state.users = [...state.users, action.payload]
// },
// state.users = [
//   ...state.users,
//   { ...action.payload, username: action.payload.username },
// ]

// let newArr = arr.reduce((prev, current) => {})
