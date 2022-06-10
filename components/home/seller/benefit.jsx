import { Icon, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Chart1, Global, I24Support, TagUser } from "iconsax-react"

// const benefitItem = (item) => (
//   <Box sx={{ position: "relative" }}>
//     <Box
//       sx={{
//         width: "154px",
//         height: "154px",
//         bgcolor: "#fff",
//         borderRadius: "16px",
//       }}
//     />
//     <Icon
//       component={item.icon}
//       sx={{
//         color: "#007BFF",
//         fontSize: "112px",
//         position: "absolute",
//         top: "-20px",
//       }}
//     />
//     <Typography
//       sx={{
//         position: "absolute",
//         bottom: "20px",
//         right: "50%",
//         whiteSpace: "nowrap",
//         fontWeight: 700,
//       }}
//     >
//       {item.title}
//     </Typography>
//   </Box>
// )

const Benefit = () => {
  const items = [
    { title: "فروش در 24 ساعت شبانه روز", icon: I24Support },
    { title: "کمک به کم کردن هزینه های شما", icon: Chart1 },
    { title: "ثبت نام رایگان", icon: TagUser },
    { title: "فروش کالا به سراسر ایران", icon: Global },
  ]
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: "64px",
      }}
    >
      <Typography
        sx={{ fontSize: "32px", fontWeight: 700, marginBottom: "32px" }}
      >
        مزایای فروش در فروشگاه بهار
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          my: "32px",
          width: "100%",
        }}
      >
        {/* {items.map((item) => benefitItem(item))} */}
        {items.map((item) => (
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                width: "154px",
                height: "154px",
                bgcolor: "#fff",
                borderRadius: "16px",
              }}
            />
            <Icon
              component={item.icon}
              sx={{
                color: "#007BFF",
                fontSize: "112px",
                position: "absolute",
                top: "-20px",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                bottom: "20px",
                right: "50%",
                whiteSpace: "nowrap",
                fontWeight: 700,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Benefit
