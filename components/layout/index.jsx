import { Box } from "@mui/material"
import Header from "./header"

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Header />
      <Box sx={{ px: "70px", width: "100%", height: "100%" }}>{children}</Box>
    </Box>
  )
}

export default MainLayout
