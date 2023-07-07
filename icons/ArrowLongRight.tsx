import { memo } from "react"
import { twMerge } from "tailwind-merge"

const ArrowLongRight = memo(({ className }: { className?: string }) => (
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
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
))

ArrowLongRight.displayName = "ArrowLongRight"
export { ArrowLongRight }
