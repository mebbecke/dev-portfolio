interface GradientBoxProps {
  children: React.ReactNode
  className?: string
}

const GradientBox = ({ children, className }: GradientBoxProps) => {
  return (
    <div
      className={`w-[289px] rounded-xl bg-gradient-to-br p-6 shadow-shape dark:from-[#4B4B4B] dark:to-[#2A2A2A] ${className}`}
    >
      {children}
    </div>
  )
}

export default GradientBox
