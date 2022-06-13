import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:3000",
})

// instance.interceptors.request.use(
//   async (config) => {
//     if (!config?.url?.includes("auth")) {
//       const refresh = await axios.post(mainUrl + "/" + routes.auth.refresh, {
//         refresh: Cookies.get("refresh"),
//       })
//       Cookies.set("access", refresh?.data?.access)
//     }
//     config.headers = !config?.url?.includes("auth")
//       ? {
//           Authorization: `Bearer ${Cookies.get("access")}`,
//           Accept: "application/json",
//           "Content-type": "application/json",
//         }
//       : { Accept: "application/json", "Content-type": "application/json" }
//     return config
//   },
//   (error) => {
//     Promise.reject(error)
//   }
// )

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (
//       error?.response?.status === 401 &&
//       !error?.response?.request?.responseURL?.includes("auth")
//     ) {
//       window.location.replace("/app/auth/singin")
//     }
//     throw error
//   }
// )

const Http = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
}

export default Http
