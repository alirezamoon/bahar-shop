import { Box, Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { setUser, setUsers } from "redux/appSlice/profile"
import * as yup from "yup"
import Stepper from "../stepper"
import nextId from "react-id-generator"
import { setSellers } from "redux/appSlice/sellers"

const SellerInfo = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { user } = useSelector((state) => state.profile)

  const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  })

  const formik = useFormik({
    initialValues: {
      username: user?.username ? user.username : "",
      password: user?.password ? user.password : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const id = nextId()
      dispatch(setUser({ ...values, role: "seller", id: id }))
      dispatch(setUsers({ ...values, role: "seller", id: id }))
      dispatch(setSellers({ ...values, role: "seller", id: id }))
      router.push("/seller/products")
    },
  })

  return (
    <Box sx={{ height: "100%" }}>
      <Stepper />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          bgcolor: "#fff",
          borderRadius: "15px",
          my: "20px",
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
            maxWidth: "500px",
            width: "100%",
          }}
          gap={2}
        >
          <TextField
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            placeholder="نام کاربری خود را وارد کنید"
            size="small"
            error={Boolean(formik.errors.username) && formik.touched.username}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="رمزعبور خود را وارد کنید"
            size="small"
            error={Boolean(formik.errors.password) && formik.touched.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button type="submit" variant="contained" sx={{ width: "100%" }}>
            ورود
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SellerInfo
