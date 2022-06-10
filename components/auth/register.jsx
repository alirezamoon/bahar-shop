import { useFormik } from "formik"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { setUser, setUsers } from "redux/appSlice/profile"
import { Box, Button, TextField } from "@mui/material"
import { useRouter } from "next/router"
import nextId from "react-id-generator"

const Register = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { users } = useSelector((state) => state.profile)

  const validationSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  })

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const id = nextId()
      if (users.some((user) => values.username == user.username)) {
        // repetetive user
      } else {
        dispatch(setUser({ ...values, role: "user", id: id }))
        dispatch(setUsers({ ...values, role: "user", id: id }))
        router.push("/")
      }
    },
  })

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        bgcolor: "#fff",
        borderRadius: "15px",
        my: "20px",
        p: "32px",
        minHeight: "500px",
      }}
    >
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
        {/* <TextField
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          placeholder="شماره موبایل خود را وارد کنید"
          size="small"
          error={Boolean(formik.errors.phone) && formik.touched.phone}
          helperText={formik.touched.phone && formik.errors.phone}
        /> */}
        <Button type="submit" variant="contained" sx={{ width: "100%" }}>
          ورود
        </Button>
      </Box>
    </Box>
  )
}

export default Register
