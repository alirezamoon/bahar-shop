import Http from "../axios/interceptor"
import routes from "./serverRoutes"

export const productList = async () => {
  const { data } = await Http.get(routes.products.list)
  return data
}

export const addProduct = async (body) => {
  const { data } = await Http.post(routes.products.list, { ...body })
  return data
}
