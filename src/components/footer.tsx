import { Github, Linkedin } from "lucide-react"
import { Button } from "./button"

const Footer = () => {
  return (
    <div className="flex flex-col items-center space-y-6 border-t border-solid border-gray-500 py-8">
      <div className="flex flex-row gap-6">
        <Button variant="social">
          <Linkedin />
        </Button>
        <Button variant="social">
          <Github />
        </Button>
      </div>
      <p className="text-[#484E53] dark:text-gray-400">2024 - Marina Ebbecke</p>
    </div>
  )
}

export default Footer
