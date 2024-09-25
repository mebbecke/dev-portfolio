import { useState } from "react"
import Footer from "./footer"
import Header from "./header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function scrollToSection(event: React.SyntheticEvent) {
    event.preventDefault()
    const target = event.target as HTMLAnchorElement
    const id = target.getAttribute("href")?.replace("#", "")
    const section = document.getElementById(String(id))
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsSidebarOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        scrollToSection={scrollToSection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="mx-8 my-6 flex-grow">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
