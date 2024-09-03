import { ChevronUp } from "lucide-react"

interface SectionTitleProps {
  children: string
  className?: string
  scrollTop?: boolean
}

const SectionTitle = ({
  children,
  className,
  scrollTop = true,
}: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2
        className={`text-3xl font-bold text-darkGray dark:text-white ${className}`}
      >
        <div className="flex items-center gap-2">
          {children}
          {scrollTop && (
            <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
              <ChevronUp
                size={25}
                className="text-gray-400 hover:text-sky dark:text-darkGray dark:hover:text-sky"
              />
            </button>
          )}
        </div>
      </h2>
    </div>
  )
}

export default SectionTitle
