import Http from "../axios/interceptor"
import routes from "./serverRoutes"

// product
export const productList = async () => {
  const { data } = await Http.get(routes.products.list)
  return data
}

export const productSingle = async (body) => {
  const { data } = await Http.get(routes.products.single + body.queryKey[1])
  return data
}

export const searchProduct = async (body) => {
  const { data } = await Http.get(
    routes.products.list + "?cat=" + body.queryKey[1]
  )
  return data
}

export const userProducts = async (body) => {
  const { data } = await Http.get(
    routes.products.list + "?userId=" + body.queryKey[1]
  )
  return data
}

export const addProduct = async (body) => {
  const { data } = await Http.post(routes.products.list, { ...body })
  return data
}

// users

export const addUser = async (body) => {
  const { data } = await Http.post(routes.users.list, { ...body })
  return data
}

export const usersList = async () => {
  const { data } = await Http.get(routes.users.list)
  return data
}

// user

export const login = async (body) => {
  const { data } = await Http.post(routes.user.main, { ...body })
  return data
}

export const logout = async (body) => {
  const { data } = await Http.delete(routes.user.main)
  return data
}

export const userInfo = async () => {
  const { data } = await Http.get(routes.user.main)
  return data
}

// cart

export const cartProducts = async () => {
  const { data } = await Http.get(routes.cart.main)
  return data
}

export const addToCart = async (body) => {
  const { data } = await Http.post(routes.cart.main, { ...body })
  return data
}

export const removeFromCart = async (body) => {
  const { data } = await Http.delete(routes.cart.slash + body.id)
  return data
}

// fav

export const addFavProduct = async (body) => {
  const { data } = await Http.put(routes.fav.slash + body.id, { ...body })
  return data
}

export const favProductsList = async () => {
  const { data } = await Http.get(routes.fav.main)
  return data
}

export const allFavProducts = async (body) => {
  const { data } = await Http.get(
    routes.products.list +
      "?cat=" +
      body.queryKey[1] +
      "&cat=" +
      body.queryKey[2] +
      "&cat=" +
      body.queryKey[3]
  )
  return data
}
