import { useRouter } from "next/router"
import { Box, Button } from "@mui/material"
import Link from "next/link"

const MenuItem = ({ item, variant, disable }) => {
  const router = useRouter()
  // const isActive = router.pathname.includes(item.route, 1)
  const isActive = router.pathname.split("/")[1] === item.route.split("/")[1]

  return (
    <>
      {variant === "drawer" ? (
        <Box
          sx={{
            backgroundColor: isActive ? "blue.dark" : "blue.main",
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
              color: isActive ? "gray.main" : "blue.light",
              fontWeight: isActive ? 700 : 400,
              "& a": {
                color: isActive ? "gray.main" : "blue.light",
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
