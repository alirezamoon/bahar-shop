import { Box, Typography } from "@mui/material"

const SliderCard = ({ title, img }) => {
  return (
    <Box
      sx={{
        background: `url(${img})`,
        height: "500px",
        backgroundSize: "cover",
        borderRadius: "15px",
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        sx={{ position: "absolute", bottom: "20px", right: "20px" }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default SliderCard
