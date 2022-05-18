import Link from "next/link"
import { useRouter } from "next/router"
import { Box, Drawer, useTheme } from "@mui/material"
import MenuItem from "./menuItem"
import menuData from "./menuData"

const Menu = ({ openDrawer, setOpenDrawer }) => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          {menuData.map((item) => (
            <MenuItem {...item} key={item.key} item={item} />
          ))}
        </Box>
      </Box>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="left"
        dir="ltr"
      >
        <Box
          sx={{
            width: "200px",
            height: "100%",
            backgroundColor: "#f3f3f4",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {menuData.map((item) => (
            <MenuItem {...item} key={item.key} variant="drawer" item={item} />
          ))}
        </Box>
      </Drawer>
    </>
  )
}

export default Menu
