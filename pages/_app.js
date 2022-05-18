import "../styles/globals.css"
import MainLayout from "components/layout"
import { store } from "redux/store"
import { ThemeProvider } from "@mui/material"
import theme from "core/theme"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
  const layouts = {
    main: MainLayout,
  }
  const Layout = Component?.layout ? layouts[Component.layout] : null

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
