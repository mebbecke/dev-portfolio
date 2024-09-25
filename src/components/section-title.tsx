interface SectionTitleProps {
  children: string
  className?: string
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2
        className={`text-3xl font-bold text-darkGray dark:text-white ${className}`}
      >
        <div className="flex items-center gap-2">{children}</div>
      </h2>
    </div>
  )
}

export default SectionTitle
