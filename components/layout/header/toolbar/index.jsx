import { useRouter } from "next/router"
import { useState } from "react"
import { Box, Button, Icon, IconButton, useTheme } from "@mui/material"
import { User, HambergerMenu, ShoppingCart } from "iconsax-react"
import Menu from "../menu"
import Divider from "components/ui/divider"
import { useDispatch, useSelector } from "react-redux"
import LoginModal from "components/ui/loginModal"
import {
  useCartProducts,
  useLogin,
  useRemoveFromCart,
  useUserInfo,
} from "services/apiFuncs"
import { useEffect } from "react"
import { setUser } from "redux/appSlice/profile"
import Backdrop from "components/ui/backdrop"
import { useQueryClient } from "react-query"

const Toolbar = () => {
  const router = useRouter()
  const theme = useTheme()
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [showLogoutBtn, setShowLogoutBtn] = useState(false)
  const { mutate: loginMutate } = useLogin()

  const dispatch = useDispatch()

  const { data } = useUserInfo()
  const { data: cart } = useCartProducts()
  const { mutate: removeCartMutate } = useRemoveFromCart()
  const queryClient = useQueryClient()

  useEffect(() => {
    dispatch(setUser(data))
  }, [data])

  const [openDrawer, setOpenDrawer] = useState(false)
  const { user } = useSelector((state) => state.profile)

  const cartClickedHandler = () => {
    user?.username ? router.push("/cart") : setOpenLoginModal(true)
  }

  const logoutHandler = () => {
    dispatch(setUser(null))
    loginMutate({})
    setShowLogoutBtn(false)

    cart.map((product) => {
      removeCartMutate(
        { id: product.id },
        { onSuccess: () => queryClient.refetchQueries(["cartProducts"]) }
      )
    })
    router.push("/")
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        width: "100%",
        bgcolor: "white.main",
        [theme.breakpoints.down("md")]: {
          height: "64px",
          padding: "0 8px",
        },
        boxShadow: "0px 0px 16px #0000001a",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: "0 4px",
          maxWidth: "1288px",
          [theme.breakpoints.down("md")]: {
            padding: "0",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          }}
        >
          <IconButton color="blue" onClick={() => setOpenDrawer(true)}>
            <Icon component={HambergerMenu} size="32" />
          </IconButton>
          <Divider mx="8px" h="20px" />

          <IconButton color="blue" onClick={() => router.push("/login")}>
            <Icon component={User} color="#5D6670" />
          </IconButton>
        </Box>
        <Menu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <Box sx={{ display: "flex" }}>
          <Box sx={{ position: "relative" }}>
            <Button
              sx={{
                // bgcolor: "gray.light",
                // color: "gray.main",
                borderRadius: "8px",
                padding: "12px 24px",

                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
              color="gray"
              variant="contained"
              onClick={() => {
                user?.username ? setShowLogoutBtn(true) : router.push("/login")
              }}
            >
              <Box
                component="span"
                sx={{
                  paddingLeft: "12px",
                  fontWeight: 400,
                  color: user?.username ? "gray.100" : "gray.center",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {user?.username ? user.username : "ورود"}
              </Box>
              <Icon
                sx={{
                  // color: "#00664A",
                  [theme.breakpoints.down("md")]: {
                    color: "#FFF",
                  },
                }}
                component={User}
                set="light"
                size="12"
              />
            </Button>
            {showLogoutBtn && (
              <Box>
                <Button
                  onClick={logoutHandler}
                  color="gray"
                  variant="contained"
                  sx={{
                    position: "absolute",
                    width: "170px",
                    top: "105%",
                    left: 0,
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    zIndex: 101,
                    boxShadow: "0 0 50px 5px #fff",
                  }}
                >
                  خروج از حساب کاربری
                </Button>
                <Backdrop
                  show={showLogoutBtn}
                  hide={() => setShowLogoutBtn(false)}
                />
              </Box>
            )}
          </Box>
          <Button
            sx={{
              // bgcolor: "gray.light",
              // color: "gray.main",
              borderRadius: "8px",
              padding: "12px 24px",
              marginRight: "8px",
              position: "relative",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
            color="gray"
            variant="contained"
            onClick={cartClickedHandler}
          >
            <Box
              component="span"
              sx={{
                paddingLeft: "12px",
                fontWeight: 400,

                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              <p>سبد خرید</p>
            </Box>
            <Icon
              sx={{
                // color: "#00664A",
                [theme.breakpoints.down("md")]: {
                  color: "#FFF",
                },
              }}
              component={ShoppingCart}
              set="light"
              size="12"
            />
            {/* {cart?.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "-5px",
                  left: "0",
                  bgcolor: "blue.main",
                  width: "20px",
                  height: "20px",
                  borderRadius: "15px",
                  color: "#fff",
                }}
              >
                {cart?.length}
              </Box>
            )} */}
          </Button>
        </Box>
      </Box>
      <LoginModal
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
      />
    </Box>
  )
}

export default Toolbar
