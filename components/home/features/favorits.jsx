import { useSelector } from "react-redux"
import { Box } from "@mui/material"
import ProductsTitle from "common/productsTitle"
import Card from "common/card"

const Favorites = () => {
  const { products } = useSelector((state) => state.products)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "8px",
        width: "100%",
      }}
    >
      <ProductsTitle text="محبوب ترین ها" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {products?.map((product, i) => {
          const b =
            i > 5 ? (
              <></>
            ) : (
              <Box sx={{ width: "200px" }} key={i}>
                <Card product={product} />
              </Box>
            )
          return b
        })}
      </Box>
    </Box>
  )
}

export default Favorites
