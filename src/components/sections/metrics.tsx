import { metrics } from '../../constants'

export function Metrics() {
  return (
    <section className="bg-blue-900">
      <ul className="flex max-w-[1440px] flex-col items-center justify-around gap-10 py-12 sm:flex-row sm:gap-5 md:py-20 3xl:mx-auto">
        {metrics.map((metric, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center gap-4 text-yellow-400"
          >
            <img src={metric.icon} alt="" className="size-16" />
            <strong className="text-5xl font-extrabold md:text-7xl">
              {metric.value}
            </strong>
            <p className="text-base font-light tracking-wide md:text-2xl">
              {metric.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
