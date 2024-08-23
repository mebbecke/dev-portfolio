import { MenuIcon } from "lucide-react"
import { Button } from "./button"
import ThemeToggleButton from "./theme-toggle"

// TODO:
// [] Versão desktop
// [] Sheet lateral da versão mobile

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="light:text-black text-2xl font-bold dark:text-white">
        Marina
      </h1>
      <Button variant="ghost">
        <MenuIcon />
      </Button>
      <ThemeToggleButton />
    </div>
  )
}

export default Header
