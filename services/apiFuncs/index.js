import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query"
import {
  addProduct,
  login,
  productList,
  productSingle,
  searchProduct,
  userInfo,
  userProducts,
  usersList,
  addUser,
  addToCart,
  removeFromCart,
  logout,
  cartProducts,
  addFavProduct,
  favProductsList,
  allFavProducts,
} from "./api"

export const useProductList = () => useQuery(["productList"], productList)
export const useProductSingle = (body) =>
  useQuery(["productSingle", body.id], productSingle)
export const useSearchProduct = (body) =>
  useQuery(["productSearch", body?.cat], searchProduct)
export const useAddProduct = () => useMutation(addProduct)

// users
export const useUserProducts = (body) =>
  useQuery(["userProducts", body?.userId], userProducts)
export const useUsersList = () => useQuery(["usersList"], usersList)
export const useAddUser = () => useMutation(addUser)

// user

export const useLogin = () => useMutation(login)
export const useLogout = () => useMutation(logout)
export const useUserInfo = () => useQuery(["userInfo"], userInfo)

// cart
export const useCartProducts = () => useQuery(["cartProducts"], cartProducts)
export const useAddToCart = () => useMutation(addToCart)
export const useRemoveFromCart = () => useMutation(removeFromCart)

// fav
export const useAddFavProduct = () => useMutation(addFavProduct)
export const useFavProductsList = () =>
  useQuery(["favProductsList"], favProductsList)
export const useAllFavProducts = (body) =>
  useQuery(
    ["allFavProducts", body?.cat1, body?.cat2, body?.cat3],
    allFavProducts,
    { enabled: body.enabled }
  )
