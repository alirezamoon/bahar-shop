import "../styles/globals.css"
import MainLayout from "components/layout"
import { store } from "redux/store"
import { ThemeProvider } from "@mui/material"
import theme from "core/theme"
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query"

function MyApp({ Component, pageProps }) {
  // const layouts = {
  //   main: MainLayout,
  // }
  // const Layout = Component?.layout ? layouts[Component.layout] : null

  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
