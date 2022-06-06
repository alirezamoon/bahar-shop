import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import Card from "./card"

const Cart = () => {
  const { user } = useSelector((state) => state.profile)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box>
          {user?.cart?.map((product) => (
            <Card product={product} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "#fff", borderRadius: "16px", p: "16px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>قیمت کل :</Typography>
            <Typography>
              {user?.cart?.reduce((prev, current) => prev + +current.price, 0)}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="blue"
            sx={{ width: "100%", height: "32px", marginTop: "100px" }}
          >
            پرداخت
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Cart
