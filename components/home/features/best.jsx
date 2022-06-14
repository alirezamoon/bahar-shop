import { useSelector } from "react-redux"
import { Box, useMediaQuery, useTheme } from "@mui/material"
import ProductsTitle from "common/productsTitle"
import Card from "common/card"
import { useProductList } from "services/apiFuncs"

const Best = () => {
  // const { products } = useSelector((state) => state.products)
  const { data: products } = useProductList()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "8px",
        width: "100%",
      }}
    >
      <ProductsTitle text="برترین ها" />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {products?.map((product, i) => {
          const b =
            i > 5 ? (
              <></>
            ) : (
              <Box sx={{ width: "200px" }} key={i}>
                <Card product={product} />
              </Box>
            )
          return b
        })}
      </Box>
    </Box>
  )
}

export default Best

// <Swiper
// dir="rtl"
// spaceBetween={20}
// freeMode={true}
// slidesPerView="auto"
// //direction="horizontal"
// freemodemomentum="true"
// //slidesPerView={mobile ? 1 : tablet ? 4 : 5}
// style={{
//   maxWidth: "100%",
// }}
// >
// {products?.map((blog, i) => (
//   <SwiperSlide
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       width: "auto",
//     }}
//   >
//     <Box
//       sx={{
//         marginLeft: "10px",
//         "&:first-child": {
//           marginLeft: "0",
//         },
//       }}
//     >
//       <Card {...blog} key={i} />
//     </Box>
//   </SwiperSlide>
// ))}
// </Swiper>

// const leftTitle = (
//     <div>
//       <Box
//         sx={{
//           display: "flex",
//           [theme.breakpoints.down("md")]: { display: "none" },
//         }}
//       >
//         <Icon
//           component={ArrowCircleRight}
//           size="32"
//           color="#FF8A65"
//           className="swiperPrev"
//           sx={{
//             fontSize: "40px",
//             cursor: "pointer",
//             "&:last-child  path:last-child": {
//               //stroke: "#151D26",
//             },
//             "&.swiper-button-disabled path": {
//               fill: "#D0D2D4",
//             },
//           }}
//         />
//         <Icon
//           component={ArrowCircleLeft}
//           size="32"
//           color="#FF8A65"
//           className="swiperNext"
//           sx={{
//             fontSize: "40px",
//             cursor: "pointer",
//             "&:last-child  path:last-child": {
//               //stroke: "#151D26",
//             },
//             "&.swiper-button-disabled path": {
//               fill: "#D0D2D4",
//             },
//           }}
//         />
//       </Box>
//       <Box
//         sx={{
//           display: "none",
//           "& button": {
//             padding: "8px 0",
//             color: "#FFF",
//             width: "100%",
//             fontSize: "13px",
//           },
//           width: "100px",
//           [theme.breakpoints.down("md")]: { display: "block" },
//         }}
//       >
//         <Button variant="contained" color="blue">
//           مشاهده همه
//         </Button>
//       </Box>
//     </div>
//   )
