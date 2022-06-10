import { Box } from "@mui/system"
import { useRouter } from "next/router"
import SellerInfo from "./info"
import Products from "./product"
import Stepper from "./stepper"

const Seller = () => {
  const router = useRouter()

  return (
    <Box>
      <Stepper />
    </Box>
  )
}
export default Seller
