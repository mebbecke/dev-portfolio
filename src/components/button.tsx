import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: "justify-center rounded-xl flex items-center p-2",
  variants: {
    variant: {
      primary: "text-white border border-2 border-solid border-[#4FC3F7]",
      secondary: "text-[#C9C9C9] border border-2 border-solid border-gray-600",
      ghost: "text-white border-none",
    },

    // TODO: configurar variantes de tamanho
    size: {
      default: "py-2",
      full: "w-full h-11",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
})

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}
