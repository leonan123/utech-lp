import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { Heading } from './heading'

interface ICardRootProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  children: React.ReactNode
}

interface ICardHeaderProps {
  children: React.ReactNode
}

interface ICardBadgeProps extends HTMLAttributes<HTMLDivElement> {
  text: string
}

interface ICardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string
}

interface ICardContentProps {
  children: React.ReactNode
}

interface ICardFooterProps {
  children: React.ReactNode
}

function Header({ children }: ICardHeaderProps) {
  return <header>{children}</header>
}

function Badge({ text, className }: ICardBadgeProps) {
  return (
    <div
      className={twMerge(
        'inline-block rounded bg-purple-100 px-2 py-0.5 text-sm leading-5 text-purple-800 ',
        className,
      )}
    >
      {text}
    </div>
  )
}

function Title({ title, className }: ICardTitleProps) {
  return (
    <Heading
      as="h3"
      size="heading3"
      className={twMerge('mt-2 leading-6', className)}
    >
      {title}
    </Heading>
  )
}

function Content({ children }: ICardContentProps) {
  return <main className="mt-2">{children}</main>
}

function Footer({ children }: ICardFooterProps) {
  return <footer className="mt-4">{children}</footer>
}

function Root({
  as: Component = 'li',
  className,
  children,
  ...props
}: ICardRootProps) {
  return (
    <Component
      {...props}
      className={twMerge(
        'z-20 w-[160px] rounded-xl bg-white p-4 shadow-picture sm:w-[200.33333px]',
        className,
      )}
    >
      {children}
    </Component>
  )
}

export { Root, Header, Badge, Title, Content, Footer }
