import { Button, MenuItem, Select, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import { useState } from "react"
import { useQueryClient } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import { addNewProduct } from "redux/appSlice/products"
import { addProduct } from "redux/appSlice/profile"
import { useAddProduct } from "services/apiFuncs"

const AddProduct = () => {
  const { user } = useSelector((state) => state.profile)

  const [product, setProduct] = useState({
    title: "",
    price: null,
    quantity: null,
    img: null,
    cat: null,
    userId: user.id,
  })

  const dispatch = useDispatch()
  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutate } = useAddProduct()

  const addProductHandler = () => {
    mutate(product)
    router.replace("/seller/products")
    queryClient.refetchQueries(["productList"])
  }

  return (
    <Box
      sx={{ bgcolor: "#fff", borderRadius: "15px", height: "100%", py: "64px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Typography
            sx={{
              color: "gray.100",
              fontSize: "14px",
              marginLeft: "32px",
              minWidth: "150px",
              textAlign: "right",
            }}
          >
            نام محصول :
          </Typography>
          <TextField
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            value={product.title}
            placeholder="نام محصول را وارد کنید"
            size="small"
            variant="standard"
            inputProps={{ style: { fontSize: "14px" } }}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Typography
            sx={{
              color: "gray.100",
              fontSize: "14px",
              marginLeft: "32px",
              minWidth: "150px",
              textAlign: "right",
            }}
          >
            قیمت محصول :
          </Typography>
          <TextField
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            value={product.price}
            placeholder="قیمت محصول را وارد کنید"
            size="small"
            variant="standard"
            inputProps={{ style: { fontSize: "14px" } }}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Typography
            sx={{
              color: "gray.100",
              fontSize: "14px",
              marginLeft: "32px",
              minWidth: "150px",
              textAlign: "right",
            }}
          >
            تعداد محصول :
          </Typography>
          <TextField
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
            value={product.quantity}
            placeholder="تعداد محصول را وارد کنید"
            size="small"
            variant="standard"
            inputProps={{ style: { fontSize: "14px" } }}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Typography
            sx={{
              color: "gray.100",
              fontSize: "14px",
              marginLeft: "32px",
              minWidth: "150px",
              textAlign: "right",
            }}
          >
            دسته بندی :
          </Typography>
          {/* <TextField
            onChange={(e) => setProduct({ ...product, cat: e.target.value })}
            value={product.quantity}
            size="small"
            inputProps={{ style: { fontSize: "14px" } }}
          /> */}
          <Select
            value={product.cat}
            size="small"
            variant="standard"
            sx={{ minWidth: "185px" }}
            onChange={(e) => setProduct({ ...product, cat: e.target.value })}
            placeholder="دسته بندی محصول را وارد کنید"
          >
            <MenuItem value="digital">دیجیتال</MenuItem>
            <MenuItem value="clothes">پوشاک</MenuItem>
            <MenuItem value="game">اسباب بازی</MenuItem>
            <MenuItem value="tools">ابزار</MenuItem>
            <MenuItem value="food">خوراکی</MenuItem>
            <MenuItem value="beauty">زیبایی و سلامت</MenuItem>
            <MenuItem value="kitcher">آشپزخانه</MenuItem>
            <MenuItem value="book">لوازم تحریر</MenuItem>
            <MenuItem value="sport">ورزشی</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Typography
            sx={{
              color: "gray.100",
              fontSize: "14px",
              marginLeft: "32px",
              minWidth: "150px",
              textAlign: "right",
            }}
          >
            تصویر محصول :
          </Typography>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              setProduct({
                ...product,
                img: URL.createObjectURL(e.target.files[0]),
              })
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="blue"
          sx={{ borderRadius: "16px", width: "200px", marginTop: "32px" }}
          onClick={addProductHandler}
        >
          افزودن
        </Button>
      </Box>
    </Box>
  )
}

export default AddProduct
