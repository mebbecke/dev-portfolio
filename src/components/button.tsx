import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: "justify-center rounded-full flex items-center",
  variants: {
    variant: {
      primary:
        "text-white dark:border dark:border-solid dark:border-sky border-none bg-sky dark:bg-transparent dark:hover:bg-sky hover:bg-darkGray",
      secondary:
        "dark:text-gray-300 dark:text-sky text-darkGray border-darkGray border border-solid dark:border-gray-600 dark:hover:bg-darkGray hover:bg-gray-300",
      ghost:
        "dark:text-white border-none hover:text-darkGray dark:hover:text-gray-300",
      social:
        "dark:text-gray-400 text-darkGray border dark:border-gray-600 border-darkGray p-2 dark:hover:text-lightGray dark:hover:border-lightGray hover:text-darkPurple hover:border-darkPurple",
    },

    // TODO: configurar variantes de tamanho
    size: {
      default: "text-base min-w-40 px-6 py-3",
      small: "text-sm p-2",
      full: "w-full px-6 py-3",
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
