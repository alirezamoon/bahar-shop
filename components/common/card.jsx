import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addToCard } from "redux/appSlice/profile"

const Card = ({ product }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.profile)

  const addToCartHandler = () => {
    dispatch(
      user?.cart
        ? addToCard({ username: user.username, cart: [...user?.cart, product] })
        : addToCard({ username: user.username, cart: [product] })
    )
  }

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
        src={product?.img}
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "300px",
          objectFit: "cover",
        }}
      />
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
      <Button
        color="blue"
        sx={{ width: "100%", borderRadius: 0, marginTop: "12px" }}
        variant="contained"
        onClick={addToCartHandler}
      >
        افزودن به سبد خرید
      </Button>
    </Box>
  )
}

export default Card
