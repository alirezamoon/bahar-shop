import { Box, Button, Typography } from "@mui/material"

const Card = ({ title, price, img }) => {
  return (
    <Box
      sx={{
        maxWidth: "300px",
        width: "100%",
        bgcolor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "300px",
          objectFit: "cover",
        }}
      />
      <Typography sx={{ marginRight: "8px", fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography
        sx={{
          marginRight: "8px",
          "& span": { color: "gray.100", fontSize: "12px" },
        }}
      >
        {price} <span>تومان</span>
      </Typography>
      <Button
        color="blue"
        sx={{ width: "100%", borderRadius: 0, marginTop: "12px" }}
        variant="contained"
      >
        افزودن به سبد خرید
      </Button>
    </Box>
  )
}

export default Card
