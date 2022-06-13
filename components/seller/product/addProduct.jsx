import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewProduct } from "redux/appSlice/products"
import { addProduct } from "redux/appSlice/profile"
import { useAddProduct } from "services/apiFuncs"

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    img: "",
    price: null,
    quantity: null,
    img: null,
  })

  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const router = useRouter()

  const { mutate } = useAddProduct()

  const addProductHandler = () => {
    dispatch(addProduct({ ...product, username: user.username }))
    dispatch(addNewProduct(product))
    mutate(product)
    router.replace("/seller/products")
  }
  console.log(user)
  return (
    <Box sx={{ bgcolor: "#fff", borderRadius: "15px", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <TextField
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          value={product.title}
          placeholder="نام محصول را وارد کنید"
          size="small"
        />
        <TextField
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          value={product.price}
          placeholder="قیمت محصول را وارد کنید"
          size="small"
        />
        <TextField
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          value={product.quantity}
          placeholder="تعداد محصول را وارد کنید"
          size="small"
        />
        <input
          type="file"
          onChange={(e) => {
            setProduct({
              ...product,
              img: URL.createObjectURL(e.target.files[0]),
            })
          }}
        />
        <Button onClick={addProductHandler}>ارسال</Button>
      </Box>
    </Box>
  )
}

export default AddProduct
