import { Box, Button, Typography } from "@mui/material"

const Card = ({ title, price, img }) => {
  return (
    <Box sx={{ maxWidth: "300px", width: "100%" }}>
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
      <Typography>{title}</Typography>
      <Typography>{price}</Typography>
      <Button color="pink" sx={{ width: "100%" }}>
        افزودن به سبد خرید
      </Button>
    </Box>
  )
}

export default Card
