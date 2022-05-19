import { Box, Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setSeller } from "redux/appSlice/profile"
import * as yup from "yup"
import Stepper from "../stepper"

const SellerInfo = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
  })

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setSeller(values))
      router.push("/")
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
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder="نام خود را وارد کنید"
            size="small"
            error={Boolean(formik.errors.firstName) && formik.touched.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder="نام خانوادگی خود را وارد کنید"
            size="small"
            error={Boolean(formik.errors.lastName) && formik.touched.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder="شماره موبایل خود را وارد کنید"
            size="small"
            error={Boolean(formik.errors.phone) && formik.touched.phone}
            helperText={formik.touched.phone && formik.errors.phone}
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
