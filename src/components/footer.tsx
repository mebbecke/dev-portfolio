import { Github, Linkedin } from "lucide-react"
import { Button } from "./button"

const Footer = () => {
  return (
    <div className="flex flex-col items-center space-y-6 border-t border-solid border-gray-500 py-8">
      <div className="flex flex-row gap-6">
        <Button variant="social" size="small">
          <a href="https://www.linkedin.com/in/marina-ebbecke/">
            <Linkedin size={20} />
          </a>
        </Button>
        <Button variant="social" size="small">
          <a href="https://github.com/mebbecke">
            <Github size={20} />
          </a>
        </Button>
      </div>
      <p className="text-sm text-darkGray dark:text-gray-400">
        2024 - Marina Ebbecke
      </p>
    </div>
  )
}

export default Footer
