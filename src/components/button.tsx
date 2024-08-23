import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: "justify-center rounded-xl flex items-center p-2",
  variants: {
    variant: {
      primary:
        "text-white border-2 border-solid dark:border-[#4FC3F7] border-none bg-[#4FC3F7] dark:bg-transparent",
      secondary:
        "dark:text-gray-300 text-[#4FC3F7] border-2 border-solid dark:border-gray-600 border-[#4FC3F7]",
      ghost: "dark:text-white border-none",
      social:
        "dark:text-gray-400 text-[#484E53] rounded-full border-2 dark:border-gray-600 border-[#484E53]",
    },

    // TODO: configurar variantes de tamanho
    size: {
      default: "text-base",
      small: "text-xs",
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
