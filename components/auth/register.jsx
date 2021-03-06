import { useFormik } from "formik"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { setUser, setUsers } from "redux/appSlice/profile"
import { Box, Button, TextField, Typography } from "@mui/material"
import { useRouter } from "next/router"
import nextId from "react-id-generator"
import { useAddUser, useLogin, useUsersList } from "services/apiFuncs"
import Link from "next/link"
import { useQueryClient } from "react-query"

const Register = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  // const { users } = useSelector((state) => state.profile)
  const { mutate: loginMutate } = useLogin()
  const { mutate: addUserMutate } = useAddUser()
  const queryClient = useQueryClient()

  const { data: users } = useUsersList()
  // console.log(users)

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
      // console.log(values.username, user.username)
      if (users.some((user) => values.username == user.username)) {
        // repetetive user
        console.log("ddddddd")
      } else {
        // dispatch(setUser({ ...values, role: "user", id: id }))
        // dispatch(setUsers({ ...values, role: "user", id: id }))
        // dispatch(setUser(user))
        loginMutate(
          { ...values, role: "user" },
          {
            onSuccess: () => {
              queryClient.refetchQueries("userInfo")
              router.reload(window.location.pathname)
            },
          }
        )
        addUserMutate({ ...values, role: "user" })
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
          placeholder="?????? ???????????? ?????? ???? ???????? ????????"
          size="small"
          error={Boolean(formik.errors.username) && formik.touched.username}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="?????????????? ?????? ???? ???????? ????????"
          size="small"
          error={Boolean(formik.errors.password) && formik.touched.password}
          helperText={formik.touched.password && formik.errors.password}
          type="password"
        />
        <Button type="submit" variant="contained" sx={{ width: "100%" }}>
          ?????? ??????
        </Button>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "14px" }}>
            ???????? ?????? ?????? ?????????? ??
          </Typography>
          <Link href="/login">
            <Button variant="text">????????</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Register
