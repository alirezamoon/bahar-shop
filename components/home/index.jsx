import { Grid } from "@mui/material"
import Best from "./features/best"
import Favorites from "./features/favorits"
import Main from "./features/main"
import Seller from "./seller"

const Home = () => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Main />
      </Grid>
      <Grid xs={12} item>
        <Best />
      </Grid>
      <Grid xs={12} item>
        <Favorites />
      </Grid>
      <Grid xs={12} item sx={{ my: "30px" }}>
        <Seller />
      </Grid>
    </Grid>
  )
}

export default Home
