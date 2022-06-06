import { Box, Typography } from "@mui/material"

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
        sx={{ width: "200px", height: "200px" }}
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
          {product?.price} <span>تومان</span>
        </Typography>
      </Box>
    </Box>
  )
}

export default Card
