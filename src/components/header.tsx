import { MenuIcon } from "lucide-react"
import { Button } from "./button"

// TODO:
// [] Versão desktop
// [] Sheet lateral da versão mobile

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-bold text-white">Marina</h1>
      <Button variant="ghost">
        <MenuIcon />
      </Button>
    </div>
  )
}

export default Header
