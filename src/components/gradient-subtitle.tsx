interface GradientSubtitleProps {
  children: string
  className?: string
}

const GradientSubtitle = ({ children, className }: GradientSubtitleProps) => {
  return (
    <p
      className={`bg-gradient-to-r from-sky to-darkGray bg-clip-text text-lg font-semibold text-transparent dark:to-white ${className}`}
    >
      {children}
    </p>
  )
}

export default GradientSubtitle
