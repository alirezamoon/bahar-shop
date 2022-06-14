import { Box } from "@mui/system"
import Card from "./card"
import { useSelector } from "react-redux"
import { IconButton, TextField, Typography } from "@mui/material"
import { useProductList, useSearchProduct } from "services/apiFuncs"
import { useState } from "react"
import { SearchNormal1 } from "iconsax-react"
import { useEffect } from "react"

const Products = () => {
  // const { products } = useSelector((state) => state.products)
  const [searchTxt, setSearchTxt] = useState("")

  const { data } = useProductList()
  // const { searchedProducts } = useSearchProduct({ title: searchTxt })

  const [products, setProducts] = useState(data)

  useEffect(() => {
    setProducts(data)
  }, [data])

  const searchClickedHandler = (e) => {
    // products.filter((product) => product.title.includes(searchTxt))
    setSearchTxt(e)
    e != ""
      ? setProducts(products.filter((product) => product.title.includes(e)))
      : setProducts(data)
  }

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "15px",
        p: "32px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", marginBottom: "100px" }}
        gap={10}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
          محصولات
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex", position: "relative" }}>
          <TextField
            sx={{ flexGrow: 1 }}
            onChange={(e) => {
              searchClickedHandler(e.target.value)
            }}
            value={searchTxt}
            placeholder="جست و جو ..."
          />
          <IconButton
            sx={{ position: "absolute", left: 0, top: "3px" }}
            onClick={() => searchClickedHandler(searchTxt)}
          >
            <SearchNormal1 size="32" color="#1E2022" variant="TwoTone" />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          my: "20px",
          minHeight: "500px",
          flexWrap: "wrap",
        }}
      >
        {products?.map((product, i) => (
          <Card product={product} variant="all" key={i} sx={{ mx: "14px" }} />
        ))}
      </Box>
    </Box>
  )
}

export default Products
