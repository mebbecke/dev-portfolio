interface SectionTitleProps {
  children: string
  className?: string
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={`text-3xl font-bold text-darkGray dark:text-white ${className}`}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
