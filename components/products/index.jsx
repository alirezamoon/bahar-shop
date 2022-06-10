import { Box } from "@mui/system"
import Card from "./card"
import { useSelector } from "react-redux"
import { Typography } from "@mui/material"

const Products = () => {
  const { products } = useSelector((state) => state.products)

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "15px",
        p: "32px",
      }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: 700, marginBottom: "100px" }}
      >
        محصولات
      </Typography>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          my: "20px",
          minHeight: "500px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, i) => (
          <Card product={product} variant="all" key={i} sx={{ mx: "14px" }} />
        ))}
      </Box>
    </Box>
  )
}

export default Products
