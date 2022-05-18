import { Box } from "@mui/material"
import Home from "components/home"
import { productsData } from "data/products"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setProducts } from "redux/appSlice/products"

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProducts(productsData))
  }, [])

  return (
    <Box>
      <Home />
    </Box>
  )
}

HomePage.layout = "main"

export default HomePage
