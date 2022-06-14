import Http from "../axios/interceptor"
import routes from "./serverRoutes"

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

export const addProduct = async (body) => {
  const { data } = await Http.post(routes.products.list, { ...body })
  return data
}
