import { Button, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { setUser, setUsers } from "redux/appSlice/profile"
import { setSellers } from "redux/appSlice/sellers"
import Best from "./features/best"
import Main from "./features/main"
import Seller from "./seller"
import Slider from "./slider"

const Home = () => {
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
        <Seller />
      </Grid>
    </Grid>
  )
}

export default Home
