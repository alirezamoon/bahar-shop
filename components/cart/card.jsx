import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import { useQueryClient } from "react-query"
import { useRemoveFromCart } from "services/apiFuncs"
import { splitNumber } from "utils/splitNum"

const Card = ({ product }) => {
  const { mutate: removeMutate } = useRemoveFromCart()
  const queryClient = useQueryClient()

  const removeFromCartHandler = () => {
    removeMutate(
      { id: product.id },
      {
        onSuccess: () => {
          queryClient.refetchQueries("cartProducts")
        },
      }
    )
  }

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        px: "16px",
        marginBottom: "16px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src={product.img}
          sx={{ width: "200px", height: "200px", p: "32px" }}
        />
        <Box>
          <Link href={`/products/${product.id}`}>
            <Typography
              sx={{ marginRight: "8px", fontWeight: 700, cursor: "pointer" }}
            >
              {product?.title}
            </Typography>
          </Link>
          <Typography
            sx={{
              marginRight: "8px",
              "& span": { color: "gray.100", fontSize: "12px" },
            }}
          >
            {splitNumber(product?.price)} <span>تومان</span>
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" color="error" onClick={removeFromCartHandler}>
        حذف از سبد خرید
      </Button>
    </Box>
  )
}

export default Card
