import { MenuIcon } from "lucide-react"
import { Button } from "./button"
import ThemeToggleButton from "./theme-toggle"

// TODO:
// [] Versão desktop
// [] Sheet lateral da versão mobile

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between px-8 py-6">
      <h1 className="light:text-black text-2xl font-bold dark:text-white">
        Marina
      </h1>
      <div className="flex flex-row items-center gap-3">
        <ThemeToggleButton />
        <Button variant="ghost">
          <MenuIcon />
        </Button>
      </div>
    </div>
  )
}

export default Header
