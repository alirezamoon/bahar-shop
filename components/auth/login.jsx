import { useFormik } from "formik"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import { setUser } from "redux/appSlice/profile"
import { Box, Button, TextField } from "@mui/material"
import { useRouter } from "next/router"

const Login = () => {
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
      // history.push('');
      dispatch(setUser(values))
      router.push("/")
    },
  })

  return (
    <Box sx={{ height: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
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
  )
}

export default Login
