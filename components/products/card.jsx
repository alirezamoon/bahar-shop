import { Box, IconButton, Typography } from "@mui/material"
import { ShoppingBag } from "iconsax-react"
import { useDispatch, useSelector } from "react-redux"
import { addToCard } from "redux/appSlice/profile"
import { splitNumber } from "utils/splitNum"

const Card = ({ product, sx }) => {
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
        overflow: "hidden",
        ...sx,
        boxShadow: "0 0 72px #ABB4BC ",
        position: "relative",
        paddingBottom: "32px",
        marginBottom: "32px",
        borderRadius: "8px",
        "&:hover button": {
          display: "block",
        },
      }}
    >
      <IconButton sx={{ display: "none", position: "absolute", top: "0" }}>
        <ShoppingBag size="48" color="#007BFF" variant="Bulk" />
      </IconButton>
      <Box
        component="img"
        src={product?.img}
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          p: "32px",
        }}
      />
      <Typography
        sx={{ marginRight: "8px", fontWeight: 700, textAlign: "center" }}
      >
        {product?.title}
      </Typography>
      <Typography
        sx={{
          marginRight: "8px",
          textAlign: "center",
          color: "blue.main",
          "& span": { color: "blue.main", fontSize: "12px" },
        }}
      >
        {splitNumber(product?.price)} <span>تومان</span>
      </Typography>
      {/* <Button
        color="blue"
        sx={{
          width: "100%",
          borderRadius: 0,
          marginTop: "12px",
          borderTop: "1px solid #007BFF",
        }}
        variant="text"
        onClick={addToCartHandler}
      >
        افزودن به سبد خرید
      </Button> */}
    </Box>
  )
}

export default Card
