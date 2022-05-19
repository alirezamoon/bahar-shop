import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Stepper = () => {
  const router = useRouter()

  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    router.pathname.includes("info") ? setActiveStep(1) : setActiveStep(2)
  }, [router])

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: "#fff",
        px: "20%",
        py: "20px",
        borderRadius: "15px",
        "& p": { color: "gray.center" },
        "& button": { p: "8px", borderRadius: "15px" },
      }}
    >
      <Link href="/seller/info">
        <Button
          color={activeStep == 1 ? "blue" : "black"}
          sx={{ color: activeStep == 1 ? "" : "#aaa" }}
          variant={activeStep == 1 ? "contained" : "text"}
        >
          1. مشخصات
        </Button>
      </Link>
      <Box sx={{ borderBottom: "1px dashed #2e48ad", flexGrow: 1 }} />
      <Link href="/seller/products">
        <Button
          color={activeStep == 2 ? "blue" : "black"}
          sx={{ color: activeStep == 2 ? "" : "#aaa" }}
          variant={activeStep == 2 ? "contained" : "text"}
        >
          2. محصولات
        </Button>
      </Link>
    </Box>
  )
}

export default Stepper
