import { useRouter } from "next/router"
import { useState } from "react"
import { Box, Button, Icon, IconButton, useTheme } from "@mui/material"
import { User, HambergerMenu, ShoppingCart } from "iconsax-react"
import Menu from "../menu"
import Divider from "components/ui/divider"
import { useSelector } from "react-redux"
import LoginModal from "components/ui/loginModal"

const Toolbar = () => {
  const router = useRouter()
  const theme = useTheme()
  const [openLoginModal, setOpenLoginModal] = useState(false)

  const [openDrawer, setOpenDrawer] = useState(false)
  const { user } = useSelector((state) => state.profile)

  const cartClickedHandler = () => {
    user?.username ? router.push("/cart") : setOpenLoginModal(true)
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
            onClick={() => router.push("/login")}
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
            {user?.cart && (
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
                {user?.cart.length}
              </Box>
            )}
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
