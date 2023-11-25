import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const button = tv({
  base: 'rounded-lg leading-6 text-white hover:duration-100 hover:transition-colors',
  variants: {
    variant: {
      filled: 'bg-orange-600 hover:bg-orange-500 focus-visible:ring-orange-500',
      outline: 'border-2 border-blue-900 hover:bg-blue-900 hover:text-white',
      noBorder:
        'border-0 hover:text-blue-900/90 focus-visible:ring-blue-900/90',
    },
    size: {
      lg: 'px-2 py-4 text-xl font-medium',
      xl: 'px-12 py-5 text-2xl font-bold',
    },
  },

  defaultVariants: {
    variant: 'filled',
    size: 'xl',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(button({ size, variant }), className)}
    />
  )
}
