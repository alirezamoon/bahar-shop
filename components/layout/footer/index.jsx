import { Box } from "@mui/system"
import Info from "./info"
import Right from "./right"

const Footer = () => {
  return (
    <Box
      sx={{
        px: "70px",
        py: "20px",
        width: "100%",
        bgcolor: "blue.light",
      }}
    >
      <Info />
      <Right />
    </Box>
  )
}

export default Footer
