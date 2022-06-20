import { useSelector } from "react-redux"
import { Box } from "@mui/material"
import ProductsTitle from "common/productsTitle"
// import Card from "common/card"
import {
  useAllFavProducts,
  useFavProductsList,
  useProductList,
  useSearchProduct,
} from "services/apiFuncs"
import { useEffect } from "react"
import { useQueryClient } from "react-query"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Card from "./../../products/relCard"
import "swiper/css"

const Recommended = () => {
  // const { products } = useSelector((state) => state.products)
  const queryClient = useQueryClient()
  const { data: favs, isLoading } = useFavProductsList()

  const [fav, setFav] = useState([])

  useEffect(() => {
    favs ? setFav([...favs].slice().sort((a, b) => b.count - a.count)) : null
  }, [favs])

  // const { data: firstProducts } = useSearchProduct({ cat: fav[0] })
  const { data: products } = useAllFavProducts({
    cat1: fav.length > 0 ? fav[0].cat : null,
    cat2: fav.length > 0 ? fav[1].cat : null,
    cat3: fav.length > 0 ? fav[2].cat : null,
    enabled: fav.length > 0,
  })

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "8px",
        width: "100%",
      }}
    >
      <ProductsTitle text="پیشنهاد برای شما" leftElement={<></>} />
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
        {products?.map((product, i) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              marginLeft: 0,
              marginRight: 0,
            }}
            key={i}
          >
            <Card product={product} variant="single" key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Recommended
