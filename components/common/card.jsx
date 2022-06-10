import { Box, Button, Typography } from "@mui/material"
import LoginModal from "components/ui/loginModal"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCard } from "redux/appSlice/profile"
import { splitNumber } from "utils/splitNum"

const Card = ({ product, sx }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.profile)
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const addToCartHandler = () => {
    user?.username
      ? dispatch(
          user?.cart
            ? addToCard({
                username: user.username,
                cart: [...user?.cart, product],
              })
            : addToCard({ username: user.username, cart: [product] })
        )
      : setOpenLoginModal(true)
  }

  return (
    <Box
      sx={{
        maxWidth: "300px",
        width: "100%",
        bgcolor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...sx,
        height: "100%",
      }}
    >
      <Box
        component="img"
        src={product?.img}
        sx={{
          width: "100%",
          flexGrow: 1,
          maxHeight: "300px",
          objectFit: "cover",
          p: "8px",
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
      <Button
        color="blue"
        sx={{ width: "100%", borderRadius: 0, marginTop: "12px" }}
        variant="contained"
        onClick={addToCartHandler}
      >
        افزودن به سبد خرید
      </Button>
      <LoginModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
      />
    </Box>
  )
}

export default Card
