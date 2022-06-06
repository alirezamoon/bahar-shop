import { Button, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { setUser, setUsers } from "redux/appSlice/profile"
import { setSellers } from "redux/appSlice/sellers"
import Best from "./features/best"
import Main from "./features/main"
import Slider from "./slider"

const Home = () => {
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
    <Grid container>
      <Grid xs={12} item>
        <Main />
      </Grid>
      {/* <Grid xs={12} item>
        <Slider />
      </Grid> */}
      <Grid xs={12} item>
        <Best />
      </Grid>
      <Grid xs={12} item sx={{ my: "30px" }}>
        <Button
          onClick={sellerHandler}
          variant="contained"
          sx={{ width: "100%" }}
        >
          فروشنده شو
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home
