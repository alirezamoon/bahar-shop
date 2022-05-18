import { useRouter } from "next/router"
import { useState } from "react"
import { Box, Button, Icon, IconButton, useTheme } from "@mui/material"
import { User, HambergerMenu, ShoppingCart } from "iconsax-react"
import Menu from "../menu"
import Divider from "components/ui/divider"

const Toolbar = () => {
  const router = useRouter()
  const theme = useTheme()

  const [openDrawer, setOpenDrawer] = useState(false)

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
          <IconButton color="white" onClick={() => setOpenDrawer(true)}>
            <Icon component={HambergerMenu} size="32" />
          </IconButton>
          <Divider mx="8px" h="20px" />

          <IconButton
            color="white"
            onClick={() => router.push("/auth/login-register")}
          >
            <Icon component={User} color="#FFF" />
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
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              ورود
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
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              }}
            >
              سبد خرید
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
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Toolbar
