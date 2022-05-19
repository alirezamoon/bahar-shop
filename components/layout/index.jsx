import { Box } from "@mui/material"
import Header from "./header"

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          px: "70px",
          py: "20px",
          width: "100%",
          flexGrow: 1,
          bgcolor: "blue.light",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default MainLayout
