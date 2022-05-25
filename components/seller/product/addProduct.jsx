import { TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    img: "",
    price: null,
    quantity: null,
    img: null,
  })

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
              quantity: URL.createObjectURL(e.target.files[0]),
            })
          }}
        />
      </Box>
    </Box>
  )
}

export default AddProduct
