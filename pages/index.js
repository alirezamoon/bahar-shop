import { Box } from "@mui/material"
import Home from "components/home"
import { productsData } from "data/products"
import { sellers } from "data/sellers"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setProducts } from "redux/appSlice/products"
import { setSellers } from "redux/appSlice/sellers"

const HomePage = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(setProducts(productsData))
  //   // dispatch(setSellers(sellers))
  // }, [])

  return (
    <Box>
      <Home />
    </Box>
  )
}

HomePage.layout = "main"

export default HomePage
