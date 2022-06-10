import { Icon, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { BoxTime, Headphone, ShieldTick, Speedometer } from "iconsax-react"

const Item = ({ icon, title }) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Icon
      component={icon}
      variant="Bulk"
      sx={{ fontSize: "72px", color: "#007BFF", marginBottom: "8px" }}
    />
    <Typography>{title}</Typography>
  </Box>
)

const Info = () => {
  const items = [
    { icon: Speedometer, title: "ارسال سریع کالا" },
    { icon: BoxTime, title: "مهلت 7 روز بازگشت کالا" },
    { icon: Headphone, title: "پشتیبانی تلفنی" },
    { icon: ShieldTick, title: "تضمین اصالت کالا" },
  ]

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#fff",
        borderRadius: "16px",
        p: "16px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ "& p": { marginBottom: "16px" } }}>
        <Typography sx={{ fontWeight: 700, color: "gray.100" }}>
          پشتیبانی
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "gray.100" }}>موبایل : </Typography>
          <Typography>09123456789</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "gray.100" }}>ایمیل :</Typography>
          <Typography>bahar@gmail.com</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }} gap={4}>
        {items.map((item, i) => (
          <Item {...item} key={i} />
        ))}
      </Box>
    </Box>
  )
}

export default Info
