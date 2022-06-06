import { Box } from "@mui/system"
import Card from "./card"
import { useSelector } from "react-redux"

const Products = () => {
  const { products } = useSelector((state) => state.products)

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#fff",
        borderRadius: "15px",
        my: "20px",
        p: "32px",
        minHeight: "500px",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <Card product={product} variant="all" />
      ))}
    </Box>
  )
}

export default Products
