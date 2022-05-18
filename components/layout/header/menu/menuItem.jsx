import { useRouter } from "next/router"
import { Box, Button } from "@mui/material"
import Link from "next/link"

const MenuItem = ({ item, variant, disable }) => {
  const router = useRouter()
  const isActive = router.pathname.includes(item.route)

  return (
    <>
      {variant === "drawer" ? (
        <Box
          sx={{
            backgroundColor: "#1565C0",
            height: "50px",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            margin: "10px",
          }}
        >
          <Button
            sx={{
              width: "100%",
              cursor: "pointer",
              userSelect: "none",
              color: isActive ? "gray.main" : "",
              fontWeight: isActive ? 700 : 400,
              "& a": {
                color: isActive ? "gray.main" : "",
              },
            }}
          >
            <Link href={item.route}>
              <a>{item.text}</a>
            </Link>
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            borderTop: isActive ? "3px solid #FFF" : "0",
            "&:last-child": {
              borderLeft: "none",
            },
          }}
        >
          <Link href={item.route}>
            <a>
              <Box
                sx={{
                  cursor: "pointer",
                  userSelect: "none",
                  padding: "0 24px",
                  color: isActive ? "" : "",
                  fontWeight: isActive ? 700 : 400,
                }}
              >
                {item.text}
              </Box>
            </a>
          </Link>
        </Box>
      )}
    </>
  )
}

export default MenuItem
