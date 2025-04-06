import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout"
import SpotifyHoverCard from "./components/spotify-hover-card"
import { ThemeProvider } from "./contexts/theme-context"
import Home from "./pages/home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <SpotifyHoverCard />
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
