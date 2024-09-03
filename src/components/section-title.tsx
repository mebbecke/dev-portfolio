import { ChevronUp } from "lucide-react"

// TODO:
// [] Refatorar scrollTop para aparecer apenas no hover

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
      {scrollTop && (
        <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
          <ChevronUp size={25} className="text-darkGray dark:text-white" />
        </button>
      )}
      <h2
        className={`text-3xl font-bold text-darkGray dark:text-white ${className}`}
      >
        {children}
      </h2>
    </div>
  )
}

export default SectionTitle
