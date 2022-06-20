import { Box, IconButton, Typography } from "@mui/material"
import LoginModal from "components/ui/loginModal"
import Snackbar from "components/ui/snackbar"
import { ShoppingBag } from "iconsax-react"
import Link from "next/link"
import { useEffect } from "react"
import { useState } from "react"
import { useQueryClient } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { addToCard } from "redux/appSlice/profile"
import {
  useAddFavProduct,
  useAddToCart,
  useFavProductsList,
} from "services/apiFuncs"
import { splitNumber } from "utils/splitNum"

const Card = ({ product, sx }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.profile)
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const { mutate: addToCartMutate } = useAddToCart()

  const [snackbarVars, setSnackbarVars] = useState({
    message: "",
    open: false,
    variant: "",
  })

  const { data: favs } = useFavProductsList()

  // let fav = []

  // useEffect(() => {
  //   fav = favs?.length > 0 ? [...favs] : []
  // }, [favs])

  const { mutate: addFavMutate } = useAddFavProduct()
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
      const index = favs.findIndex((item) => item.cat === product.cat)
      let fav = [...favs]
      if (index != -1) {
        fav[index].count++

        addFavMutate(
          { ...fav[index] },
          {
            onSuccess: () => {
              queryClient.refetchQueries("favProductsList")
            },
          }
        )
      }
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
        maxWidth: "300px",
        width: "100%",
        bgcolor: "#fff",
        overflow: "hidden",
        boxShadow: "0 0 72px #ABB4BC ",
        position: "relative",
        paddingBottom: "32px",
        marginBottom: "32px",
        borderRadius: "8px",
        "&:hover button": {
          display: "block",
        },
        ...sx,
      }}
    >
      <IconButton
        sx={{ display: "none", position: "absolute", top: "0" }}
        onClick={addToCartHandler}
      >
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
      <Link href={`/products/${product.id}`}>
        <Typography
          sx={{
            marginRight: "8px",
            fontWeight: 700,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {product?.title}
        </Typography>
      </Link>
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

export default Card
