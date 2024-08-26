interface GradientBoxProps {
  children: React.ReactNode
  className?: string
}

const GradientBox = ({ children, className }: GradientBoxProps) => {
  return (
    <div
      className={`w-[289px] rounded-xl bg-gradient-to-br from-[#4B4B4B] to-[#2A2A2A] p-6 shadow-shape ${className}`}
    >
      {children}
    </div>
  )
}

export default GradientBox
