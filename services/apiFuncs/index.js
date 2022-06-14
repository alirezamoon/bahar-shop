import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query"
import { addProduct, productList, productSingle, searchProduct } from "./api"

export const useProductList = () => useQuery(["productList"], productList)
export const useProductSingle = (body) =>
  useQuery(["productSingle", body.id], productSingle)
export const useSearchProduct = (body) =>
  useQuery(["productSearch", body?.cat], searchProduct)
export const useAddProduct = () => useMutation(addProduct)
