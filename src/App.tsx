import Layout from "./components/layout"
import { ThemeProvider } from "./contexts/theme-context"
import Home from "./pages/home"

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default App
