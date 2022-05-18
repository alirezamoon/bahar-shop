import { Box, Skeleton, useTheme } from "@mui/material"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import SwiperCore, { EffectFade, Pagination, Autoplay } from "swiper"
import { sliderData } from "data/slider"
import SliderCard from "./sliderCard"

SwiperCore.use([EffectFade, Pagination, Autoplay])

const Slider = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        px: "25px",
        paddingTop: "25px",
        [theme.breakpoints.up("md")]: {
          px: "50px",
          paddingTop: "50px",
          height: "500px",
          marginBottom: 0,
        },
        "& .swiper": {
          height: "100%",
        },
        "& .swiper-pagination": {
          bottom: 25,
        },
        "& .swiper-pagination-bullet": {
          width: "8px",
          height: "2px",
          background: "#D0D2D4",
          borderRadius: "10px",
        },
        "& .swiper-pagination-bullet-active": {
          width: "16px",
          height: "2px",
          background: "#130F26",
          borderRadius: "10px",
        },
      }}
    >
      <Swiper
        dir="rtl"
        // spaceBetween={20}
        slidesPerView={1}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
      >
        {sliderData.map((data) => (
          <SwiperSlide>
            <SliderCard {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Slider
