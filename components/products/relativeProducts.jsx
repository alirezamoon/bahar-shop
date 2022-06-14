import { Box, Typography } from "@mui/material"
import { useSearchProduct } from "services/apiFuncs"
import { Swiper, SwiperSlide } from "swiper/react"
import Card from "./relCard"
import "swiper/css"

const RelativeProducts = ({ cat }) => {
  const { data } = useSearchProduct({ cat: cat })

  return (
    <Box>
      <Typography
        sx={{
          bgcolor: "gray.main",
          py: "10px",
          textAlign: "center",
          fontWeight: 700,
          borderRadius: "8px",
        }}
      >
        محصولات مرتبط
      </Typography>
      <Swiper
        dir="rtl"
        spaceBetween={20}
        freeMode={true}
        slidesPerView="auto"
        //direction="horizontal"
        freemodemomentum="true"
        //slidesPerView={mobile ? 1 : tablet ? 4 : 5}
        style={{
          maxWidth: "100%",
          boxShadow: "0 0 72px #ABB4BC ",
          borderRadius: "8px",
          marginTop: "16px",
        }}
      >
        {data?.map((product, i) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              marginLeft: 0,
              marginRight: 0,
            }}
          >
            <Card product={product} variant="single" key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default RelativeProducts
