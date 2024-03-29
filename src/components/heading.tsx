import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { VariantProps, tv } from 'tailwind-variants'

const heading = tv({
  base: 'font-black text-blue-900 tracking-wide sm:tracking-tight',

  variants: {
    size: {
      heading1: 'text-4xl sm:text-7xl',
      heading2: 'text-4xl sm:text-6xl',
      heading3: 'text-xl font-medium',
      heading4: 'text-lg font-medium',
    },
  },

  defaultVariants: {
    size: 'heading1',
  },
})

type THeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof heading> & {
    as?: ElementType
  }

export function Heading({
  as: Component = 'h1',
  size,
  className,
  ...props
}: THeadingProps) {
  return (
    <Component {...props} className={twMerge(heading({ size }), className)} />
  )
}
