import { FC, memo } from "react"

import Image from "next/image"
import { twMerge } from "tailwind-merge"

type GoogleButtonProps = {
  className?: string

  login?: boolean
  onClick: () => void
}

const GoogleButton: FC<GoogleButtonProps> = memo(({ className, login = false, onClick }) => (
  <button
    className={twMerge(
      "btn btn-link flex justify-center items-center gap-6 normal-case hover:no-underline rounded-lg shadow",
      className
    )}
    onClick={onClick}
  >
    <Image alt="" src="/images/google.png" layout="fixed" width={18} height={18} />
    <p className="b2">{login ? "Sign In" : "Register"} With Google</p>
  </button>
))

GoogleButton.displayName = "GoogleButton"
export { GoogleButton }
