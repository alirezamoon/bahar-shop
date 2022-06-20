import { Grid } from "@mui/material"
import { useAllFavProducts } from "services/apiFuncs"
import Best from "./features/best"
import Choosen from "./features/choosen"
import Favorites from "./features/favorits"
import Main from "./features/main"
import Recommended from "./features/recommend"
import Seller from "./seller"

const Home = () => {
  const { data } = useAllFavProducts({
    cat1: "beauty",
    cat2: "game",
    cat3: "clothes",
  })
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
      <Grid xs={12} item>
        <Choosen />
      </Grid>
      <Grid xs={12} item>
        <Recommended products={data} />
      </Grid>
    </Grid>
  )
}

export default Home
