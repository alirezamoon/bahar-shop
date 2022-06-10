import { Box, Typography } from "@mui/material"
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
        <Typography sx={{ marginRight: "8px", fontWeight: 700 }}>
          {product?.title}
        </Typography>
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
