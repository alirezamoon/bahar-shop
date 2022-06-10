import { Box, Grid, Typography } from "@mui/material"
import { Ranking, Slack } from "iconsax-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useSelector } from "react-redux"
import SwiperCore, { EffectFade, Pagination, Autoplay } from "swiper"

SwiperCore.use([EffectFade, Pagination, Autoplay])

const Main = () => {
  const { products } = useSelector((state) => state.products)

  return (
    <Grid container sx={{ height: "370px", "&>div": { borderRadius: "16px" } }}>
      <Grid
        item
        xs={12}
        md={2}
        sx={{ backgroundImage: "radial-gradient(circle,#f4f7fc ,#007BFF )" }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ranking size="160" color="#FFF" variant="Bold" />
          <Typography
            sx={{ color: "#fff", fontWeight: 700, marginTop: "30px" }}
          >
            تضمین کیفیت
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            mx: "8px",
            // bgcolor: "blue.main",
            borderRadius: "16px",
            height: "100%",
          }}
        >
          <Swiper
            slidesPerView={1}
            effect={"fade"}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            style={{ height: "100%" }}
            loopedSlides={true}
          >
            <SwiperSlide style={{ height: "100%" }}>
              <Box
                sx={{
                  backgroundImage: "url('/assets/images/beprovider.jpg')",
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  border: "8px solid #fff",
                  borderRadius: "16px",
                }}
              />
            </SwiperSlide>
            <SwiperSlide style={{ height: "100%" }}>
              <Box
                sx={{
                  backgroundImage: "url('/assets/images/newproducts.jpg')",
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  border: "8px solid #fff",
                  borderRadius: "16px",
                }}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        sx={{ backgroundImage: "radial-gradient(circle,#f4f7fc ,#007BFF )" }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Slack size="160" color="#FFF" variant="Bold" />
          <Typography
            sx={{ color: "#fff", fontWeight: 700, marginTop: "30px" }}
          >
            ارسال سریع
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Main
