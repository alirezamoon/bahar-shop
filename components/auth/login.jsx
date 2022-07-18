import { useFormik } from "formik"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "redux/appSlice/profile"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useRouter } from "next/router"
import Link from "next/link"
import { useState } from "react"
import Snackbar from "components/ui/snackbar"
import { useLogin, useUsersList } from "services/apiFuncs"
import { useQueryClient } from "react-query"

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { users } = useSelector((state) => state.profile)
  const { data: userss } = useUsersList()
  const { mutate: loginMutate } = useLogin()
  const queryClient = useQueryClient()

  const [snackbarVars, setSnackbarVars] = useState({
    message: "",
    open: false,
    variant: "",
  })

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
      // if (users.some((user) => values.username == user.username)) {
      //   dispatch(setUser(values))
      //   router.push("/")
      // }

      userss.map((user) => {
        if (user.username == values.username) {
          if (user.password == values.password) {
            dispatch(setUser(user))
            loginMutate(
              { ...values, role: "user" },
              {
                onSuccess: () => {
                  queryClient.refetchQueries("userInfo")
                  router.reload(window.location.pathname)
                },
              }
            )
            router.push("/")
          }
          setSnackbarVars({
            message: "رمزعبور اشتباه وارد شده است",
            variant: "error",
            open: true,
          })
        } else
          setSnackbarVars({
            message: "کاربری با این مشخصات وجود ندارد",
            variant: "error",
            open: true,
          })
      })
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
          type="password"
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "14px" }}>
            حساب کاربری ندارید ؟
          </Typography>
          <Link href="/register">
            <Button variant="text">ثبت نام</Button>
          </Link>
        </Box>
      </Box>
      <Snackbar
        message={snackbarVars.message}
        open={snackbarVars.open}
        handleClose={() =>
          setSnackbarVars((prev) => {
            return { ...prev, open: false }
          })
        }
        variant={snackbarVars.variant}
      />
    </Box>
  )
}

export default Login
