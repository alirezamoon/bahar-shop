import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import Best from "./features/best"

const Home = () => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Best />
      </Grid>
    </Grid>
  )
}

export default Home
