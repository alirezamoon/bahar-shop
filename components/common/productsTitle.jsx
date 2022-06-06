import { Box, Button, useTheme, Typography } from "@mui/material"
import Link from "next/link"

const ProductsTitle = ({ text, leftElement, sx }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        m: "32px 0 32px 0",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          flexWrap: "wrap",
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          color: "gray.dark",
          fontSize: "20px",
          fontWeight: 800,
          [theme.breakpoints.down("md")]: { fontSize: "16px" },
        }}
      >
        {text}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          borderBottom: "1px solid #D0D2D4",
          margin: "15px 15px 15px 5px",
        }}
      />
      {leftElement ? (
        leftElement
      ) : (
        <Link href={`/`}>
          <Button
            LinkComponent="a"
            href={`/`}
            color="blue"
            variant="contained"
            sx={{
              width: "155px",
              height: "40px",
              [theme.breakpoints.down("md")]: {
                width: "auto",
                height: "32px",
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ color: "#fff" }}>
              مشاهده همه
            </Typography>
          </Button>
        </Link>
      )}
    </Box>
  )
}

export default ProductsTitle
