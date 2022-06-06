import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { setUser, setUsers } from "redux/appSlice/profile"
import { setSellers } from "redux/appSlice/sellers"
import Benefit from "./benefit"
import Questions from "./questions"

const Seller = () => {
  const router = useRouter()

  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const sellerHandler = () => {
    if (user?.id) {
      dispatch(setUser({ ...user, role: "seller" }))
      dispatch(setUsers({ ...user, role: "seller" }))
      dispatch(setSellers({ ...user, role: "seller" }))
      router.push("/seller/products")
    } else {
      router.push("/seller/info")
    }
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="/assets/images/sellerbg.png"
          sx={{ width: "500px", marginLeft: "16px" }}
        />
        <Box>
          <Typography
            sx={{ color: "#9369eb", fontSize: "72px", fontWeight: 700 }}
          >
            فروشنده تر شو
          </Typography>
          <Typography
            sx={{
              color: "blue.dark",
              fontSize: "32px",
              fontWeight: 700,
              my: "16px",
            }}
          >
            ما محدودیت ارسال کالا به سراسر کشور را برطرف کرده‌ایم. می توانید
            محصولات خود را از طریق سایت بهار به هزاران مشتری در سراسر کشور تحویل
            دهید و از مزایای فروش در بهار نیز بهره مند شوید
          </Typography>
          <Button
            color="blue"
            onClick={sellerHandler}
            variant="contained"
            sx={{ borderRadius: "16px", marginTop: "16px" }}
          >
            همین حالا ثبت نام کن
          </Button>
        </Box>
      </Box>
      <Benefit />
      <Questions />
    </Box>
  )
}

export default Seller
