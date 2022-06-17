import { Box, Button, Typography } from "@mui/material"
import LoginModal from "components/ui/loginModal"
import Snackbar from "components/ui/snackbar"
import { useRouter } from "next/router"
import { useState } from "react"
import { useQueryClient } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { addToCard } from "redux/appSlice/profile"
import { useAddToCart, useProductSingle } from "services/apiFuncs"
import { splitNumber } from "utils/splitNum"
import RelativeProducts from "./relativeProducts"

const Product = () => {
  const router = useRouter()

  const { data: product } = useProductSingle({ id: router.query.id })

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.profile)
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const [snackbarVars, setSnackbarVars] = useState({
    message: "",
    open: false,
    variant: "",
  })
  const { mutate: addToCartMutate } = useAddToCart()
  const queryClient = useQueryClient()

  const addToCartHandler = () => {
    if (user?.username) {
      dispatch(
        user?.cart
          ? addToCard({
              username: user.username,
              cart: [...user?.cart, product],
            })
          : addToCard({ username: user.username, cart: [product] })
      )
      addToCartMutate(
        { ...product },
        {
          onSuccess: () => {
            queryClient.refetchQueries("cartProducts")
          },
        }
      )
      setSnackbarVars({
        message: "محصول به سبد خرید اضافه شد",
        variant: "success",
        open: true,
      })
    } else setOpenLoginModal(true)
  }

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "15px",
        p: "32px",
      }}
    >
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
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={product?.img}
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
          <Button
            variant="contained"
            color="blue"
            sx={{ borderRadius: "8px" }}
            onClick={addToCartHandler}
          >
            افزودن به سبد خرید
          </Button>
        </Box>
      </Box>
      <RelativeProducts cat={product?.cat} />
      <LoginModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
      />
      <Snackbar
        message={snackbarVars.message}
        open={snackbarVars.open}
        handleClose={() =>
          setSnackbarVars((prev) => {
            return { ...prev, open: false }
          })
        }
        variant={snackbarVars.variant}
      />
    </Box>
  )
}

export default Product
