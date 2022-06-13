import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query"
import { addProduct, productList } from "./api"

export const useProductList = () => useQuery(["productList"], productList)
export const useAddProduct = () => useMutation(addProduct)
