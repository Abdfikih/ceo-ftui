import { memo } from "react"
import { twMerge } from "tailwind-merge"

const Hashtag = memo(({ className }: { className?: string }) => (
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
      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
    />
  </svg>
))

Hashtag.displayName = "Hashtag"
export { Hashtag }
