import { Box, Typography } from "@mui/material"
import Link from "next/link"
import { splitNumber } from "utils/splitNum"

const Card = ({ product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#fff",
        alignItems: "center",
        marginBottom: "16px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={product.img}
        sx={{ width: "200px", height: "200px", p: "32px" }}
      />
      <Box>
        <Link href={`/products/${product.id}`}>
          <Typography
            sx={{ marginRight: "8px", fontWeight: 700, cursor: "pointer" }}
          >
            {product?.title}
          </Typography>
        </Link>
        <Typography
          sx={{
            marginRight: "8px",
            "& span": { color: "gray.100", fontSize: "12px" },
          }}
        >
          {splitNumber(product?.price)} <span>تومان</span>
        </Typography>
      </Box>
    </Box>
  )
}

export default Card
