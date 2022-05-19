import { Button, Grid } from "@mui/material"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Best from "./features/best"

const Home = () => {
  const router = useRouter()

  return (
    <Grid container>
      <Grid xs={12} item>
        <Best />
      </Grid>
      <Grid xs={12} item sx={{ my: "30px" }}>
        <Button
          onClick={() => router.push("/seller/info")}
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
