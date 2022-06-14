import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query"
import { addProduct, productList, searchProduct } from "./api"

export const useProductList = () => useQuery(["productList"], productList)
export const useSearchProduct = (body) =>
  useQuery(["productSearch", body?.title], searchProduct)
export const useAddProduct = () => useMutation(addProduct)
