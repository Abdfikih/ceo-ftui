import { memo } from "react"
import { twMerge } from "tailwind-merge"

const Bars = memo(({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={twMerge("w-6 h-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
))

Bars.displayName = "Bars"
export { Bars }
