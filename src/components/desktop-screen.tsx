import { ComponentProps } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'

type TRootProps = ComponentProps<'div'>

function Root({ className, ...props }: TRootProps) {
  return (
    <div
      className={twMerge(
        'relative z-10 flex aspect-video max-h-[640px] min-h-[226px] w-full flex-col overflow-hidden rounded-2xl shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

interface IHeaderProps extends ComponentProps<'header'> {
  children?: React.ReactNode
}

function Header({ children, className, ...props }: IHeaderProps) {
  return (
    <header
      className={twMerge(
        'flex min-h-[41px] items-center justify-between gap-8 bg-white px-4 py-2',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="size-3 rounded-full bg-red-600" />
        <span className="size-3 rounded-full bg-orange-400" />
        <span className="size-3 rounded-full bg-green-500" />
      </div>

      {children}
    </header>
  )
}

function Navigation({ host }: { host: string }) {
  return (
    <>
      <div className="max-w-[494.903px] flex-1 rounded bg-gray-100 py-0.5 text-center">
        <span className="select-none text-xs text-gray-400">{host}</span>
      </div>

      <div className="flex items-center justify-center gap-1.5">
        <span>
          <FiChevronLeft className="size-6 text-gray-400" />
        </span>

        <span>
          <FiChevronRight className="size-6 text-gray-600" />
        </span>
      </div>
    </>
  )
}

type TContentProps = ComponentProps<'main'>

function Content({ className, ...props }: TContentProps) {
  return <main className={twMerge('flex-1 bg-cover', className)} {...props} />
}

export { Root, Header, Navigation, Content }

// export function DesktopScreen() {
//   return (
//     <div className="">
//       <div className="flex h-full w-full flex-col overflow-hidden rounded-lg shadow-picture">
//         <header className="flex min-h-[41px] items-center justify-between gap-8 bg-white px-4 py-2">
//           <div className="flex items-center gap-2">
//             <span className="h-3 w-3 rounded-full bg-red-600" />
//             <span className="h-3 w-3 rounded-full bg-orange-400" />
//             <span className="h-3 w-3 rounded-full bg-green-500" />
//           </div>

//           <div className="max-w-[494.903px] flex-1 rounded bg-gray-100 py-0.5 text-center">
//             <span className="select-none text-xs text-gray-400">
//               uteach.com
//             </span>
//           </div>

//           <div className="flex items-center justify-center gap-1.5">
//             <span>
//               <FiChevronLeft className="h-6 w-6 text-gray-400" />
//             </span>

//             <span>
//               <FiChevronRight className="h-6 w-6 text-gray-600" />
//             </span>
//           </div>
//         </header>

//         <main className="flex-1 bg-[url('/images/screen-picture.svg')] bg-cover" />
//       </div>
//     </div>
//   )
// }
