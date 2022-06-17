import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { useCartProducts } from "services/apiFuncs"
import { splitNumber } from "utils/splitNum"
import Card from "./card"

const Cart = () => {
  const { user } = useSelector((state) => state.profile)

  const { data } = useCartProducts()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box>
          {data?.map((product, i) => (
            <Card product={product} key={i} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box sx={{ bgcolor: "#fff", borderRadius: "16px", p: "16px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              py: "50px",
            }}
          >
            <Typography>قیمت کل :</Typography>
            <Typography
              sx={{
                marginRight: "8px",
                "& span": { color: "gray.100", fontSize: "12px" },
              }}
            >
              {splitNumber(
                data?.reduce((prev, current) => prev + +current.price, 0)
              )}
              <span>تومان</span>
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="blue"
            sx={{ width: "100%", height: "32px" }}
          >
            پرداخت
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Cart
