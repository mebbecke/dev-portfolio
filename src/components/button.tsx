import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: "justify-center rounded-full flex items-center",
  variants: {
    variant: {
      primary:
        "text-white dark:border dark:border-solid dark:border-sky border-none bg-sky dark:bg-transparent p-3",
      secondary:
        "dark:text-gray-300 text-sky border-2 border-solid dark:border-gray-600 border-sky p-3",
      ghost: "dark:text-white border-none",
      social:
        "dark:text-gray-400 text-darkGray border-2 dark:border-gray-600 border-darkGray p-2",
    },

    // TODO: configurar variantes de tamanho
    size: {
      default: "text-base w-40",
      small: "text-sm",
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
