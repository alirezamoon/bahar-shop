import Stepper from "../stepper"
import { Box, Button, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import Card from "common/card"
import { useRouter } from "next/router"
import { useUserProducts } from "services/apiFuncs"

const Products = () => {
  const router = useRouter()

  const { user } = useSelector((state) => state.profile)
  const { data } = useUserProducts({ userId: user.id })

  return (
    <Box>
      <Stepper />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#fff",
          borderRadius: "15px",
          my: "20px",
          p: "32px",
          minHeight: "500px",
        }}
      >
        <Button
          color="blue"
          variant="contained"
          sx={{
            alignSelf: "end",
            borderRadius: "12px",
            width: "150px",
            marginBottom: "16px",
            "& span": { fontSize: "24px", marginRight: "12px" },
          }}
          onClick={() => router.push("products/add")}
        >
          افزودن <span>+</span>
        </Button>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "space-between",
          }}
        >
          {data ? (
            data?.map((product, i) => (
              <Box
                sx={{
                  marginBottom: "16px",
                  marginLeft: "28px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 5px 4px #ddd",
                }}
                key={i}
              >
                <Card product={product} />
              </Box>
            ))
          ) : (
            <Typography>محصولی وجود ندارد</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}
export default Products
