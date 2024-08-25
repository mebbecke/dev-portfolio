import { ChevronUp } from "lucide-react"

interface SectionTitleProps {
  children: string
  className?: string
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
        <ChevronUp size={20} className="text-darkGray dark:text-white" />
      </button>
      <h2
        className={`text-3xl font-bold text-darkGray dark:text-white ${className}`}
      >
        {children}
      </h2>
    </div>
  )
}

export default SectionTitle
